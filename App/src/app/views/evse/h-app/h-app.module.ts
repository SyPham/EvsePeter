
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
// Components Routing
import { HAppRoutingModule } from './h-app-routing.module';

import { NgbModule, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { SharedModule } from 'src/app/_core/commons/shared.module';
import { PigfarmCoreModule } from '@pigfarm-core';
import { environment } from 'src/environments/environment';
import { H3HelpCenterQuestionsComponent } from './h3-help-center-questions/h3-help-center-questions.component';
import { H4PrivacyPolicyComponent } from './h4-privacy-policy/h4-privacy-policy.component';
import { H8MessagePushManagementComponent } from './h8-message-push-management/h8-message-push-management.component';
import { H1ElectricityPriceComponent } from './h1-electricity-price/h1-electricity-price.component';
import { H2CouponManagementComponent } from './h2-coupon-management/h2-coupon-management.component';
import { H5ContractManagementComponent } from './h5-contract-management/h5-contract-management.component';
import { H6CarModelComponent } from './h6-car-model/h6-car-model.component';
import { H7MessageManagementComponent } from './h7-message-management/h7-message-management.component';
import { H2CouponManagementActionComponent } from './h2-coupon-management/h2-coupon-management-action/h2-coupon-management-action.component';
import { H3HelpCenterQuestionsActionComponent } from './h3-help-center-questions/h3-help-center-questions-action/h3-help-center-questions-action.component';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { H7MessageManagementActionComponent } from './h7-message-management/h7-message-management-action/h7-message-management-action.component';

interface Environment {
  production: boolean;
  apiUrl: string;
  versionCheckURL: string;
  domain: string;
}

@NgModule({
  providers: [
    DatePipe,
    NgbTooltipConfig
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    HAppRoutingModule,
    NgbModule,
    DatePickerAllModule,
    RichTextEditorModule,
    SharedModule.forRoot(),
    PigfarmCoreModule.forRoot(environment.apiUrl)
  ],
  exports: [

  ],
  declarations: [							
    H1ElectricityPriceComponent,
    H2CouponManagementComponent,
    H2CouponManagementActionComponent,
    H3HelpCenterQuestionsComponent,
    H3HelpCenterQuestionsActionComponent,
    H4PrivacyPolicyComponent,
    H5ContractManagementComponent,
    H6CarModelComponent,
    H7MessageManagementComponent,
    H7MessageManagementActionComponent,
    H5ContractManagementComponent,
    H8MessagePushManagementComponent
   ]
})
export class HAppModule {
}
