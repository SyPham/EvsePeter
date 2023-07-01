
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { H3HelpCenterQuestionsComponent } from './h3-help-center-questions/h3-help-center-questions.component';
import { H4PrivacyPolicyComponent } from './h4-privacy-policy/h4-privacy-policy.component';
import { H8MessagePushManagementComponent } from './h8-message-push-management/h8-message-push-management.component';
import { H1ElectricityPriceComponent } from './h1-electricity-price/h1-electricity-price.component';
import { H2CouponManagementComponent } from './h2-coupon-management/h2-coupon-management.component';
import { H2CouponManagementActionComponent } from './h2-coupon-management/h2-coupon-management-action/h2-coupon-management-action.component';
import { H7MessageManagementComponent } from './h7-message-management/h7-message-management.component';
import { H6CarModelComponent } from './h6-car-model/h6-car-model.component';
import { H5ContractManagementComponent } from './h5-contract-management/h5-contract-management.component';
import { H3HelpCenterQuestionsActionComponent } from './h3-help-center-questions/h3-help-center-questions-action/h3-help-center-questions-action.component';
import { H7MessageManagementActionComponent } from './h7-message-management/h7-message-management-action/h7-message-management-action.component';
const routes: Routes = [
  {
    path: 'h1',
    component: H1ElectricityPriceComponent,
    data: {
      title: 'H1 Electricity Price',
      breadcrumb: 'H1 Electricity Price',
      functionCode: 'H1'
    },
  // canActivate: [AuthGuard]
  },
  
  {
    path: 'h2',
    component: H2CouponManagementComponent,
    data: {
      title: 'H2 Coupon Management',
      breadcrumb: 'H2 Coupon Management',
      functionCode: 'H2'
    },
  // canActivate: [AuthGuard]
  },
  {
    path: 'h2/action/:id',
    component: H2CouponManagementActionComponent,
    data: {
      title: 'H2 Coupon Management Action',
      breadcrumb: 'H2 Coupon Management Action',
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
    path: 'h3/action/:id',
    component: H3HelpCenterQuestionsActionComponent,
    data: {
      title: 'H3 Help Center Questions Action',
      breadcrumb: 'H3 Help Center Questions Action',
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
    component: H5ContractManagementComponent,
    data: {
      title: 'H5 Contract Management',
      breadcrumb: 'H5 Contract Management',
      functionCode: 'H5'
    },
  // canActivate: [AuthGuard]
  },
  {
    path: 'h6',
    component: H6CarModelComponent,
    data: {
      title: 'H6 Car Model',
      breadcrumb: 'H6 Car Model',
      functionCode: 'H6'
    },
  // canActivate: [AuthGuard]
  },
  {
    path: 'h7',
    component: H7MessageManagementComponent,
    data: {
      title: 'H7 Message Management',
      breadcrumb: 'H7 Message Management',
      functionCode: 'H7'
    },
  // canActivate: [AuthGuard]
  },
  {
    path: 'h7/action/:id',
    component: H7MessageManagementActionComponent,
    data: {
      title: 'H7 Message Management Action',
      breadcrumb: 'H7 Message Management Action',
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
