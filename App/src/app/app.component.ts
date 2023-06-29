import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { AlertifyService } from '@pigfarm-core';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AutoLogoutService } from './_core/_service/apply-orders/auto-log-off.service';
import { VersionCheckService } from './_core/_service/version-check.service';
import { XAccountService } from './_core/_service/xaccount.service';

import {
  DataManager,
  Query,
  UrlAdaptor,
  Predicate,
} from "@syncfusion/ej2-data";
import { AuthService } from './_core/_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titleKey = 'EVSE 後台管理系統';
  titleName: any;
  constructor(
    private versionCheckService: VersionCheckService,
    private title:Title,
    private translate:TranslateService,
    private authService: AuthService,
    private alertify: AlertifyService
    ) {
  }
  ngOnInit(): void {
  
    // this.translate.get(this.titleKey).subscribe(name=>{
    //   this.title.setTitle(name);
    // });
   

   this.loadPermissions();
   this.loadTitleData();
    this.versionCheckService.initVersionCheck(environment.versionCheckURL);

  }
  loadPermissions() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.authService.getPermissions(user.guid,localStorage.getItem('lang')).subscribe(functions => {
        localStorage.setItem("functions", JSON.stringify(functions));
      });
    }
  }
  loadTitleData() {
    let query = new Query();
    query.where("type", "equal", "EVSE_Title");
    query.where("no", "equal", "title");

    const accessToken = localStorage.getItem("token");
    new DataManager({
      url: `${environment.apiUrl}SystemConfig/GetDataDropdownlist`,
      adaptor: new UrlAdaptor(),
      headers: [{ authorization: `Bearer ${accessToken}` }],
    })
      .executeQuery(query)
      .then((x: any) => {
        const configData = x.result;
        const item = configData[0];
        this.titleName = configData.length > 0 ? item.value : this.translate.instant(this.titleKey);
        this.title.setTitle(this.titleName);
       
      });
  }
  

}

