/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { H7MessageManagementActionComponent } from './h7-message-management-action.component';

describe('H7MessageManagementActionComponent', () => {
  let component: H7MessageManagementActionComponent;
  let fixture: ComponentFixture<H7MessageManagementActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H7MessageManagementActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H7MessageManagementActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
