/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { H2CouponManagementActionComponent } from './h2-coupon-management-action.component';

describe('H2CouponManagementActionComponent', () => {
  let component: H2CouponManagementActionComponent;
  let fixture: ComponentFixture<H2CouponManagementActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H2CouponManagementActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H2CouponManagementActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
