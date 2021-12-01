import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHourIndicatorComponent } from './single-hour-indicator.component';

describe('SingleHourIndicatorComponent', () => {
  let component: SingleHourIndicatorComponent;
  let fixture: ComponentFixture<SingleHourIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHourIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHourIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
