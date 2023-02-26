/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Container1Component } from './container1.component';

describe('Container1Component', () => {
  let component: Container1Component;
  let fixture: ComponentFixture<Container1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Container1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Container1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
