/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { H6ElectricityPriceManagementComponent } from './h6-electricity-price-management.component';

describe('H6ElectricityPriceManagementComponent', () => {
  let component: H6ElectricityPriceManagementComponent;
  let fixture: ComponentFixture<H6ElectricityPriceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H6ElectricityPriceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H6ElectricityPriceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
