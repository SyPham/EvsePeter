/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { H3HelpCenterQuestionsComponent } from './h3-help-center-questions.component';

describe('H3HelpCenterQuestionsComponent', () => {
  let component: H3HelpCenterQuestionsComponent;
  let fixture: ComponentFixture<H3HelpCenterQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H3HelpCenterQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H3HelpCenterQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
