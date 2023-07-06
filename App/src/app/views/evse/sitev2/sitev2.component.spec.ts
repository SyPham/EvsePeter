/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sitev2Component } from './sitev2.component';

describe('Sitev2Component', () => {
  let component: Sitev2Component;
  let fixture: ComponentFixture<Sitev2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sitev2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sitev2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
