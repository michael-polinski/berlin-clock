import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondBarComponent } from './second-bar.component';
import { IndicatorComponent } from '../indicator/indicator.component';
import { DateProviderService } from '../../services/date-provider.service';
import { of } from 'rxjs';

describe('SecondIndicatorComponent', () => {
  const date = new Date();

  let component: SecondBarComponent;
  let fixture: ComponentFixture<SecondBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SecondBarComponent,
        IndicatorComponent
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
    fixture = TestBed.createComponent(SecondBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`test that the component should create without an error.`, () => {
    expect(component).toBeTruthy();
  });

  it.each`
    providedAmountOfSeconds |  expectedResult
    ${0}                    | ${false}        |
    ${1}                    | ${true}         |
    ${2}                    | ${false}        |
    ${3}                    | ${true}         |
  `(`test that 'isTimeInSecondsOdd()' returns the expected result for a provided date.`,
    async ({ providedAmountOfSeconds, expectedResult }) => {
      const dateToTest = new Date(2000, 1, 1, 0, 0, providedAmountOfSeconds);
      const receivedResult = SecondBarComponent.isTimeInSecondsOdd(dateToTest);

      expect(receivedResult).toBe(expectedResult);
    });
});
