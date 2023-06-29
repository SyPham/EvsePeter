
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
import { H1SoftwareUpdateComponent } from './h1-software-update/h1-software-update.component';
import { H2DiscountCodeManagementComponent } from './h2-discount-code-management/h2-discount-code-management.component';
import { H3HelpCenterQuestionsComponent } from './h3-help-center-questions/h3-help-center-questions.component';
import { H4PrivacyPolicyComponent } from './h4-privacy-policy/h4-privacy-policy.component';
import { H5ContractConntentManagementComponent } from './h5-contract-conntent-management/h5-contract-conntent-management.component';
import { H6ElectricityPriceManagementComponent } from './h6-electricity-price-management/h6-electricity-price-management.component';
import { H7CardModelManagementComponent } from './h7-card-model-management/h7-card-model-management.component';
import { H8MessagePushManagementComponent } from './h8-message-push-management/h8-message-push-management.component';
import { H2DiscountCodeManagementActionComponent } from './h2-discount-code-management/h2-discount-code-management-action/h2-discount-code-management-action.component';

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
    SharedModule.forRoot(),
    PigfarmCoreModule.forRoot(environment.apiUrl)
  ],
  exports: [

  ],
  declarations: [
    H1SoftwareUpdateComponent,
    H2DiscountCodeManagementComponent,
    H3HelpCenterQuestionsComponent,
    H4PrivacyPolicyComponent,
    H5ContractConntentManagementComponent,
    H6ElectricityPriceManagementComponent,
    H7CardModelManagementComponent,
    H8MessagePushManagementComponent,
    H2DiscountCodeManagementActionComponent

  ]
})
export class HAppModule {
}
