
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_core/_guards/auth.guard';
import { H1SoftwareUpdateComponent } from './h1-software-update/h1-software-update.component';
import { H2DiscountCodeManagementComponent } from './h2-discount-code-management/h2-discount-code-management.component';
import { H3HelpCenterQuestionsComponent } from './h3-help-center-questions/h3-help-center-questions.component';
import { H4PrivacyPolicyComponent } from './h4-privacy-policy/h4-privacy-policy.component';
import { H5ContractConntentManagementComponent } from './h5-contract-conntent-management/h5-contract-conntent-management.component';
import { H6ElectricityPriceManagementComponent } from './h6-electricity-price-management/h6-electricity-price-management.component';
import { H7CardModelManagementComponent } from './h7-card-model-management/h7-card-model-management.component';
import { H8MessagePushManagementComponent } from './h8-message-push-management/h8-message-push-management.component';
import { H2DiscountCodeManagementActionComponent } from './h2-discount-code-management/h2-discount-code-management-action/h2-discount-code-management-action.component';

const routes: Routes = [
  {
    path: 'h1',
    component: H1SoftwareUpdateComponent,
    data: {
      title: 'H1 Software Update',
      breadcrumb: 'H1 Software Update',
      functionCode: 'H1'
    },
  // canActivate: [AuthGuard]
  },
  
  {
    path: 'h2',
    component: H2DiscountCodeManagementComponent,
    data: {
      title: 'H2 Discount Code Management',
      breadcrumb: 'H2 Discount Code Management',
      functionCode: 'H2'
    },
  // canActivate: [AuthGuard]
  },
  {
    path: 'h2/action/:id',
    component: H2DiscountCodeManagementActionComponent,
    data: {
      title: 'H2 Discount Code Management Action',
      breadcrumb: 'H2 Discount Code Management Action',
      functionCode: 'H2'
    },
  // canActivate: [AuthGuard]
  },

  {
    path: 'h3',
    component: H3HelpCenterQuestionsComponent,
    data: {
      title: 'H3 Help Center Questions',
      breadcrumb: 'H3 Help Center Questions',
      functionCode: 'H3'
    },
  // canActivate: [AuthGuard]
  },
  {
    path: 'h4',
    component: H4PrivacyPolicyComponent,
    data: {
      title: 'H4 Privacy Policy',
      breadcrumb:  'H4 Privacy Policy',
      functionCode: 'H4'
    },
  // canActivate: [AuthGuard]
  },
  {
    path: 'h5',
    component: H5ContractConntentManagementComponent,
    data: {
      title: 'H5 Contract Conntent Management',
      breadcrumb: 'H5 Contract Conntent Management',
      functionCode: 'H5'
    },
  // canActivate: [AuthGuard]
  },
  {
    path: 'h6',
    component: H6ElectricityPriceManagementComponent,
    data: {
      title: 'H6 Electricity Price Management',
      breadcrumb: 'H6 Electricity Price Management',
      functionCode: 'H6'
    },
  // canActivate: [AuthGuard]
  },
  {
    path: 'h7',
    component: H7CardModelManagementComponent,
    data: {
      title: 'H7 Card Model Management',
      breadcrumb: 'H7 Card Model Management',
      functionCode: 'H7'
    },
  // canActivate: [AuthGuard]
  },
  {
    path: 'h8',
    component: H8MessagePushManagementComponent,
    data: {
      title: 'H8 Message Push Management',
      breadcrumb: 'H8 Message Push Management',
      functionCode: 'H8'
    },
  // canActivate: [AuthGuard]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HAppRoutingModule { }
