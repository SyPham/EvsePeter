/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { H2DiscountCodeManagementActionComponent } from './h2-discount-code-management-action.component';

describe('H2DiscountCodeManagementActionComponent', () => {
  let component: H2DiscountCodeManagementActionComponent;
  let fixture: ComponentFixture<H2DiscountCodeManagementActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H2DiscountCodeManagementActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H2DiscountCodeManagementActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
