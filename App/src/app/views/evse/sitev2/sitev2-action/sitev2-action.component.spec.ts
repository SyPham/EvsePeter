/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Sitev2ActionComponent } from './sitev2-action.component';

describe('Sitev2ActionComponent', () => {
  let component: Sitev2ActionComponent;
  let fixture: ComponentFixture<Sitev2ActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sitev2ActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sitev2ActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
