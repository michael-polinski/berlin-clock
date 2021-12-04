import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursBarComponent } from './hours-bar.component';
import { IndicatorComponent } from '../indicator/indicator.component';
import { IsMinPipe } from '../../pipes/is-min.pipe';
import { IsModuloMinPipe } from '../../pipes/is-modulo-min.pipe';
import { DateProviderService } from '../../services/date-provider.service';
import { of } from 'rxjs';

describe('HoursBaseFiveIndicatorComponent', () => {
  const date = new Date();

  let component: HoursBarComponent;
  let fixture: ComponentFixture<HoursBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HoursBarComponent,
        IndicatorComponent,
        IsMinPipe,
        IsModuloMinPipe
      ],
      providers: [
        {
          provide: DateProviderService,
          useValue: {
            date$: of(date)
          }
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`test that the component should create without an error.`, () => {
    expect(component).toBeTruthy();
  });

  it.each`
    providedAmountOfHours | expectedResult
    ${0}                    | ${0}           |
    ${12}                   | ${12}          |
    ${23}                   | ${23}          |
    ${24}                   | ${0}           |
    ${36}                   | ${12}          |
  `(`test that 'transformToHours()' returns the expected result for a provided date.`,
    async ({ providedAmountOfHours, expectedResult }) => {
      const dateToTransform = new Date(2000, 1, 1, providedAmountOfHours);
      const receivedResult = HoursBarComponent.transformToHours(dateToTransform);

      expect(receivedResult).toBe(expectedResult);
    });
});
