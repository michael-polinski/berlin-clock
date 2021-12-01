import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMinuteBaseTwoIndicatorComponent } from './single-minute-base-two-indicator.component';

describe('SingleMinuteBaseTwoIndicatorComponent', () => {
  let component: SingleMinuteBaseTwoIndicatorComponent;
  let fixture: ComponentFixture<SingleMinuteBaseTwoIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleMinuteBaseTwoIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMinuteBaseTwoIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
