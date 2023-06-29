/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { H2CouponManagementComponent } from './h2-coupon-management.component';

describe('H2CouponManagementComponent', () => {
  let component: H2CouponManagementComponent;
  let fixture: ComponentFixture<H2CouponManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H2CouponManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H2CouponManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
