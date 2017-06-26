/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MontecarlopricingComponent } from './montecarlopricing.component';

describe('MontecarlopricingComponent', () => {
  let component: MontecarlopricingComponent;
  let fixture: ComponentFixture<MontecarlopricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontecarlopricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontecarlopricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
