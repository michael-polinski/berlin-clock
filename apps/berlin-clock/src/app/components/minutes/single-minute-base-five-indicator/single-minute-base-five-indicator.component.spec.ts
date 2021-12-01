import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMinuteBaseFiveIndicatorComponent } from './single-minute-base-five-indicator.component';

describe('SingleMinuteBaseFiveIndicatorComponent', () => {
  let component: SingleMinuteBaseFiveIndicatorComponent;
  let fixture: ComponentFixture<SingleMinuteBaseFiveIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMinuteBaseFiveIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMinuteBaseFiveIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
