/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { H5ContractManagementComponent } from './h5-contract-management.component';

describe('H5ContractManagementComponent', () => {
  let component: H5ContractManagementComponent;
  let fixture: ComponentFixture<H5ContractManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H5ContractManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H5ContractManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
