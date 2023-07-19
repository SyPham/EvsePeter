import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ReportConfigService } from 'src/app/_core/_service/report-config.service';
import { ReportService } from 'src/app/_core/_service/report.service';
import { DataManager, Query, UrlAdaptor } from "@syncfusion/ej2-data";
import { environment } from 'src/environments/environment';
import { Subscription } from 'rxjs';
import { filter, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-report-html',
  templateUrl: './report-html.component.html',
  styleUrls: ['./report-html.component.scss']
})
export class ReportHtmlComponent implements OnInit {
  warningAlert = false;
  roomGuid1: string = "";
  roomGuid2: string = "";
  makeOrderGuid1: string = "";
  makeOrderGuid2: string = "";
  roomGuid1Visibled: boolean;
  roomGuid2Visibled: boolean;
  makeOrderGuid1Visibled: boolean;
  makeOrderGuid2Visibled: boolean;
  areaGuidVisibled: boolean;
  barnGuidVisibled: boolean;
  baseUrl = environment.apiUrl;

  areaGuid: string = "";
  barnGuid: string = "";
  isStartYearMonth = false;
  isEndYearMonth = false;

  isStartDate = false;
  isEndDate = false;
  startDate: any = new Date();
  endDate: any = new Date();
  keyWord: string;
  orderBy: string;
  thenBy: string;
  kind: string;
  subscription: Subscription = new Subscription();
  htmlString = '';
  constructor(
    public modalService: NgbModal,
    private service: ReportService,
    private route: ActivatedRoute,
    private router: Router,
    private spinner: NgxSpinnerService,
    private serviceReportConfig: ReportConfigService,
    private datePipe: DatePipe,
    public translate: TranslateService
  ) { }

  ngOnInit() {

    this.kind = this.route.snapshot.paramMap.get("kind");
    let lang = localStorage.getItem("lang");
    let languages = JSON.parse(localStorage.getItem("languages"));
    // setCulture(lang);
    let load = {
      [lang]: {
        grid: languages["grid"],
        pager: languages["pager"],
      },
    };
    this.subscription.add(
      this.router.events
        .pipe(
          filter((event) => event instanceof NavigationEnd),
          distinctUntilChanged()
        )
        .pipe(map(() => this.route))
        .subscribe((e) => {
          this.kind = e.snapshot.paramMap.get("kind");
          this.loadConfig();
        })
    );
    if (this.kind) {
      this.loadConfig();
    }
  }
reset() {
    this.startDate = null;
    this.endDate = null;
    const d1 = this.datePipe.transform(new Date(1970, 1, 1), "yyyy/MM/dd");
    const d2 = this.datePipe.transform(new Date(1970, 1, 1), "yyyy/MM/dd");
    const keyWord = "";
    const sort = "";
    const sort2 = "";
    const roomGuid1 = "";
    const roomGuid2 = "";
    const makeOrderGuid1 = "";
    const makeOrderGuid2 = "";
    this.keyWord = keyWord;
    this.orderBy = sort;
    this.thenBy = sort2;
    this.makeOrderGuid1 = makeOrderGuid1;
    this.makeOrderGuid2 = makeOrderGuid2;
    this.roomGuid1 = roomGuid1;
    this.roomGuid2 = roomGuid2;
    const menuLink = `/report/${this.kind}`;
    const farmGuid = localStorage.getItem("farmGuid");
    this.spinner.show("default");
    const areaGuid = this.areaGuid || "";
    const barnGuid = this.barnGuid || "";
    this.service
      .getReportsHtml(
        d1,
        d2,
        keyWord,
        sort,
        sort2,
        menuLink,
        farmGuid,
        makeOrderGuid1,
        makeOrderGuid2,
        roomGuid1,
        roomGuid2,
        areaGuid,
        barnGuid
      )
      .subscribe(
        (data) => {
            this.htmlString = data['htmlString'];
          this.spinner.hide("default");
        },
        () => this.spinner.hide("default")
      );
  }
  filter() {
    this.loadData();
  }
  loadConfig() {
    const menuLink = `/report/${this.kind}`;
    let query = new Query();
    query.where("type", "equal", menuLink);
    query.where("status", "equal", 1);
    const accessToken = localStorage.getItem("token");
    new DataManager({
      url: `${this.baseUrl}SystemConfig/GetDataDropdownlist`,
      adaptor: new UrlAdaptor(),
      headers: [{ authorization: `Bearer ${accessToken}` }],
    })
      .executeQuery(query)
      .then((x: any) => {
        const configData = x.result || [];
        this.makeOrderGuid1Visibled = false;
        this.makeOrderGuid2Visibled = false;
        this.areaGuidVisibled = false;
        this.barnGuidVisibled = false;

        this.roomGuid1Visibled = false;
        this.roomGuid2Visibled = false;
        
        this.isStartYearMonth  = false;
        this.isEndYearMonth  = false;
        this.isStartDate  = false;
        this.isEndDate  = false;

        this.startDate  = null;
        this.endDate  = null;
        for (const x of configData) {
          switch (x.no) {
            case "MakeOrderGuid1":
              setTimeout(
                () =>
                  (this.makeOrderGuid1Visibled = x.value === "1" ? true : false)
              );
              break;
            case "MakeOrderGuid2":
              setTimeout(
                () =>
                  (this.makeOrderGuid2Visibled = x.value === "1" ? true : false)
              );
              break;
            case "RoomGuid1":
              setTimeout(
                () => (this.roomGuid1Visibled = x.value === "1" ? true : false)
              );
              break;
            case "RoomGuid2":
              setTimeout(
                () => (this.roomGuid2Visibled = x.value === "1" ? true : false)
              );
              break;
              case "StartYearMonth":
                setTimeout(
                  () => {
                    this.isStartYearMonth = true
                      this.startDate = x.value == "" || x.value == null ? new Date() : x.value
                  }
                );
                break;
                case "EndYearMonth":
                  setTimeout(
                    () =>  {
                      this.isEndYearMonth = true
                      this.endDate = x.value == "" || x.value == null ? new Date() : x.value
                    }
                  );
                  break;
                  case "StartDate":
                    setTimeout(
                      () =>  {
                      this.isStartDate = true
                      this.startDate =x.value == "" || x.value == null ? new Date() : x.value
                      }
                    );
                    break;
                    case "EndDate":
                      setTimeout(
                        () => {
                        this.isEndDate = true
                        this.endDate = x.value == "" || x.value == null? new Date() : x.value
                        }
                      );
                      break;
                      case "AreaGuid":
                        setTimeout(
                          () =>
                            (this.areaGuidVisibled = x.value === "1" ? true : false)
                        );
                        break;
                        case "BarnGuid":
                        setTimeout(
                          () =>
                            (this.barnGuidVisibled = x.value === "1" ? true : false)
                        );
                        break;
            default:
              this.makeOrderGuid1Visibled = false;
              this.makeOrderGuid2Visibled = false;
              this.roomGuid1Visibled = false;
              this.roomGuid2Visibled = false;
              this.areaGuidVisibled = false;
              this.barnGuidVisibled = false;
   
              break;
          }
        }
      });
  }
  loadData() {
    const d1 = this.datePipe.transform(
      this.startDate || new Date(1970, 1, 1),
      "yyyy/MM/dd"
    );
    const d2 = this.datePipe.transform(
      this.endDate || new Date(1970, 1, 1),
      "yyyy/MM/dd"
    );
    const keyWord = this.keyWord || "";
    const sort = this.orderBy || "";
    const sort2 = this.thenBy || "";

    const roomGuid1 = this.roomGuid1 || "";
    const roomGuid2 = this.roomGuid2 || "";
    const makeOrderGuid1 = this.makeOrderGuid1 || "";
    const makeOrderGuid2 = this.makeOrderGuid2 || "";
    const areaGuid = this.areaGuid || "";
    const barnGuid = this.barnGuid || "";
    const farmGuid = localStorage.getItem("farmGuid");
    const menuLink = `/report/${this.kind}`;
    this.spinner.show("default");
    this.service
      .getReportsHtml(
        d1,
        d2,
        keyWord,
        sort,
        sort2,
        menuLink,
        farmGuid,
        makeOrderGuid1,
        makeOrderGuid2,
        roomGuid1,
        roomGuid2,
        areaGuid,
        barnGuid
      )
      .subscribe(
        (data) => {
          this.htmlString = data['htmlString'];
          this.spinner.hide("default");
        },
        () => this.spinner.hide("default")
      );
  }
  exportHtmlToExcel() {
    const d1 = this.datePipe.transform(
      this.startDate || new Date(1970, 1, 1),
      "yyyy/MM/dd"
    );
    const d2 = this.datePipe.transform(
      this.endDate || new Date(1970, 1, 1),
      "yyyy/MM/dd"
    );
    const keyWord = this.keyWord || "";
    const sort = this.orderBy || "";
    const sort2 = this.thenBy || "";

    const roomGuid1 = this.roomGuid1 || "";
    const roomGuid2 = this.roomGuid2 || "";
    const makeOrderGuid1 = this.makeOrderGuid1 || "";
    const makeOrderGuid2 = this.makeOrderGuid2 || "";
    const areaGuid = this.areaGuid || "";
    const barnGuid = this.barnGuid || "";
    const farmGuid = localStorage.getItem("farmGuid");
    const menuLink = `/report/${this.kind}`;
    this.spinner.show("default");
    let functionName = JSON.parse(localStorage.getItem("menuItem")).name
    const fileName = `${
      functionName.trim() || "Report"
    } ${this.datePipe.transform(new Date(), "yyyyMMdd")}.xlsx`;
    this.service
      .exportHtmlToExcel(
        d1,
        d2,
        keyWord,
        sort,
        sort2,
        menuLink,
        farmGuid,
        makeOrderGuid1,
        makeOrderGuid2,
        roomGuid1,
        roomGuid2,
        areaGuid,
        barnGuid,
        functionName
      )
      .subscribe(
        (res) => {
          this.spinner.hide("default");

          this.service.downloadBlob(
            res.body,
            fileName,
            {encoding:"UTF-8",type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}
          );
        },
        () => this.spinner.hide("default")
      );
  }

  excelExportToPdf() {
    const d1 = this.datePipe.transform(
      this.startDate || new Date(1970, 1, 1),
      "yyyy/MM/dd"
    );
    const d2 = this.datePipe.transform(
      this.endDate || new Date(1970, 1, 1),
      "yyyy/MM/dd"
    );
    const keyWord = this.keyWord || "";
    const sort = this.orderBy || "";
    const sort2 = this.thenBy || "";

    const roomGuid1 = this.roomGuid1 || "";
    const roomGuid2 = this.roomGuid2 || "";
    const makeOrderGuid1 = this.makeOrderGuid1 || "";
    const makeOrderGuid2 = this.makeOrderGuid2 || "";
    const areaGuid = this.areaGuid || "";
    const barnGuid = this.barnGuid || "";
    const farmGuid = localStorage.getItem("farmGuid");
    const menuLink = `/report/${this.kind}`;
    this.spinner.show("default");
    let functionName = JSON.parse(localStorage.getItem("menuItem")).name
    const fileName = `${
      functionName.trim() || "Report"
    } ${this.datePipe.transform(new Date(), "yyyyMMdd")}.pdf`;
    this.service
      .excelExportToPdf(
        d1,
        d2,
        keyWord,
        sort,
        sort2,
        menuLink,
        farmGuid,
        makeOrderGuid1,
        makeOrderGuid2,
        roomGuid1,
        roomGuid2,
        areaGuid,
        barnGuid,
        functionName
      )
      .subscribe(
        (res) => {
          this.spinner.hide("default");

          this.service.downloadBlob(
            res.body,
            fileName,
            {encoding:"UTF-8",type:"application/pdf"}
          );
        },
        () => this.spinner.hide("default")
      );
  }
}
