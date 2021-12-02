import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursBarComponent } from './hours-bar.component';
import { IndicatorComponent } from '../indicator/indicator.component';
import { IsMinPipe } from '../../pipes/is-min.pipe';
import { IsModuloMinPipe } from '../../pipes/is-modulo-min.pipe';

describe('HoursBaseFiveIndicatorComponent', () => {
  let component: HoursBarComponent;
  let fixture: ComponentFixture<HoursBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HoursBarComponent,
        IndicatorComponent,
        IsMinPipe,
        IsModuloMinPipe
      ]
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
