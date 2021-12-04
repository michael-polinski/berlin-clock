import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DateProviderService } from '../../services/date-provider.service';
import { MinValueIndicatorModel } from '../../model/min-value-indicator.model';
import { ModuloRestIndicatorModel } from '../../model/modulo-rest-indicator.model';
import { IndicatorColor } from '../../model/indicator-color.enum';

/**
 * Component to display the hours of the 'Berlin-clock' (https://en.wikipedia.org/wiki/Mengenlehreuhr). This
 * component uses the {@link IndicatorComponent} to display its values.
 */
@Component({
  selector: 'berlin-clock-hours-bar',
  templateUrl: './hours-bar.component.html',
  styleUrls: ['./hours-bar.component.scss']
})
export class HoursBarComponent {
  /**
   * {@link MinValueIndicatorModel} to configure the displayed {@link IndicatorComponent}s, which stand for the values
   * with a base of 5. These kind of hours should be displayed with the {@link IndicatorColor} 'accent'. Furthermore,
   * every model contains a minimal amount of minutes, which is needed to render this indicator as
   * 'active'.
   */
  hoursBaseFiveData: MinValueIndicatorModel[] = [
    {
      color: IndicatorColor.ACCENT,
      minValue: 5
    },
    {
      color: IndicatorColor.ACCENT,
      minValue: 10
    },
    {
      color: IndicatorColor.ACCENT,
      minValue: 15
    },
    {
      color: IndicatorColor.ACCENT,
      minValue: 20
    }
  ]

  /**
   * {@link ModuloRestIndicatorModel} to configure the displayed {@link IndicatorComponent}s, which stand for the values
   * with a base of 1. These kind of hours should be displayed with the {@link IndicatorColor} 'accent'. Nevertheless,
   * whether or not a single indicator is rendered 'active' depends on the rest of a division with a
   * certain divisor. The values to use are defined by a {@link ModuloMinimumValuePair}.
   */
  hoursBaseOneData: ModuloRestIndicatorModel[] = [
    {
      color: IndicatorColor.ACCENT,
      model: {
        divisor: 5,
        minimum: 1
      }
    },
    {
      color: IndicatorColor.ACCENT,
      model: {
        divisor: 5,
        minimum: 2
      }
    },
    {
      color: IndicatorColor.ACCENT,
      model: {
        divisor: 5,
        minimum: 3
      }
    },
    {
      color: IndicatorColor.ACCENT,
      model: {
        divisor: 5,
        minimum: 4
      }
    }
  ]

  /**
   * {@link Observable} which the current time in hours.
   */
  currentTimeInHours$: Observable<number>;

  /**
   * Constructor.
   *
   * @param dateProviderService {@link DateProviderService} to provide the current {@link Date} containing the
   *   current time.
   */
  constructor(private dateProviderService: DateProviderService) {
    this.currentTimeInHours$ = dateProviderService.date$.pipe(
      map(date => HoursBarComponent.transformToHours(date)));
  }

  /**
   * Transforms a provided {@link Date} into its time in hours.
   *
   * @param date {@link Date} which should be transformed into the current time in hours.
   * @returns {@link number} - the current time in hours.
   */
  static transformToHours(date: Date): number {
    return date.getHours();
  }
}
