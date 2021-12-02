import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursBarComponent } from './hours-bar.component';

describe('HoursBaseFiveIndicatorComponent', () => {
  let component: HoursBarComponent;
  let fixture: ComponentFixture<HoursBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoursBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
