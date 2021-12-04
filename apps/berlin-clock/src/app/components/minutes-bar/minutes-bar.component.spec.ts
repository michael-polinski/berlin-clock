import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesBarComponent } from './minutes-bar.component';
import { IndicatorComponent } from '../indicator/indicator.component';
import { IsMinPipe } from '../../pipes/is-min.pipe';
import { IsModuloMinPipe } from '../../pipes/is-modulo-min.pipe';
import { DateProviderService } from '../../services/date-provider.service';
import { of } from 'rxjs';

describe('MinutesIndicatorComponent', () => {
  const date = new Date();
  let component: MinutesBarComponent;
  let fixture: ComponentFixture<MinutesBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MinutesBarComponent,
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
    fixture = TestBed.createComponent(MinutesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`test that the component should create without an error.`, () => {
    expect(component).toBeTruthy();
  });

  it.each`
    providedAmountOfMinutes | expectedResult
    ${0}                    | ${0}           |
    ${30}                   | ${30}          |
    ${59}                   | ${59}          |
    ${60}                   | ${0}           |
    ${90}                   | ${30}          |
  `(`test that 'transformToMinutes()' returns the expected result for a provided date.`,
    async ({ providedAmountOfMinutes, expectedResult }) => {
      const dateToTransform = new Date(2000, 1, 1, 0, providedAmountOfMinutes);
      const receivedResult = MinutesBarComponent.transformToMinutes(dateToTransform);

      expect(receivedResult).toBe(expectedResult);
    });
});
