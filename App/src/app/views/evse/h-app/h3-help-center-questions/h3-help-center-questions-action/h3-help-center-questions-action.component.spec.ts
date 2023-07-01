/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { H3HelpCenterQuestionsActionComponent } from './h3-help-center-questions-action.component';

describe('H3HelpCenterQuestionsActionComponent', () => {
  let component: H3HelpCenterQuestionsActionComponent;
  let fixture: ComponentFixture<H3HelpCenterQuestionsActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H3HelpCenterQuestionsActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H3HelpCenterQuestionsActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
