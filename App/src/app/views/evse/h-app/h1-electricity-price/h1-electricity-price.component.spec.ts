/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { H1ElectricityPriceComponent } from './h1-electricity-price.component';

describe('H1ElectricityPriceComponent', () => {
  let component: H1ElectricityPriceComponent;
  let fixture: ComponentFixture<H1ElectricityPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H1ElectricityPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H1ElectricityPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
