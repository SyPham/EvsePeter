/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { H6CarModelComponent } from './h6-car-model.component';

describe('H6CarModelComponent', () => {
  let component: H6CarModelComponent;
  let fixture: ComponentFixture<H6CarModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H6CarModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H6CarModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
