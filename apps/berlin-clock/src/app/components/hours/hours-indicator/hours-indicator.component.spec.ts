import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursIndicatorComponent } from './hours-indicator.component';

describe('HoursBaseFiveIndicatorComponent', () => {
  let component: HoursIndicatorComponent;
  let fixture: ComponentFixture<HoursIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoursIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
