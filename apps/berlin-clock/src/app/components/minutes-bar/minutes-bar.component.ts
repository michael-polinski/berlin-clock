import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DateProviderService } from '../../services/date-provider.service';
import { MinValueIndicatorModel } from '../../model/min-value-indicator.model';
import { ModuloRestIndicatorModel } from '../../model/modulo-rest-indicator.model';
import { IndicatorSize } from '../../model/indicator-size.enum';
import { IndicatorColor } from '../../model/indicator-color.enum';

/**
 * Component to display the minutes of the 'Berlin-clock' (https://en.wikipedia.org/wiki/Mengenlehreuhr). This
 * component uses the {@link IndicatorComponent} to display its values.
 */
@Component({
  selector: 'berlin-clock-minutes-bar',
  templateUrl: './minutes-bar.component.html',
  styleUrls: ['./minutes-bar.component.scss']
})
export class MinutesBarComponent {
  /**
   * {@link MinValueIndicatorModel} to configure the displayed {@link IndicatorComponent}s, which stand for the values
   * with a base of 5. These kind of minutes should be displayed with a 'small' {@link IndicatorSize} and every
   * third value should contain the {@link IndicatorColor} 'accent' instead of the default value 'primary'.
   * Furthermore, every model contains a minimal amount of minutes, which is needed to render this indicator as
   * 'active'.
   */
  minutesBaseFiveData: MinValueIndicatorModel[] = [
    {
      size: IndicatorSize.SMALL,
      minValue: 5
    },
    {
      size: IndicatorSize.SMALL,
      minValue: 10
    },
    {
      size: IndicatorSize.SMALL,
      color: IndicatorColor.ACCENT,
      minValue: 15
    },
    {
      size: IndicatorSize.SMALL,
      minValue: 20
    },
    {
      size: IndicatorSize.SMALL,
      minValue: 25
    },
    {
      size: IndicatorSize.SMALL,
      color: IndicatorColor.ACCENT,
      minValue: 30
    },
    {
      size: IndicatorSize.SMALL,
      minValue: 35
    },
    {
      size: IndicatorSize.SMALL,
      minValue: 40
    },
    {
      size: IndicatorSize.SMALL,
      color: IndicatorColor.ACCENT,
      minValue: 45
    },
    {
      size: IndicatorSize.SMALL,
      minValue: 50
    },
    {
      size: IndicatorSize.SMALL,
      minValue: 55
    },
  ]

  /**
   * {@link ModuloRestIndicatorModel} to configure the displayed {@link IndicatorComponent}s, which stand for the values
   * with a base of 1. The configuration uses mostly defaults value from the {@link IndicatorModel}. Nevertheless,
   * whether or not a single indicator is rendered 'active' depends on the rest of a division with a
   * certain divisor. The values to use are defined by a {@link ModuloMinimumValuePair}.
   */
  minutesBaseOneData: ModuloRestIndicatorModel[] = [
    {
      model: {
        divisor: 5,
        minimum: 1
      }
    },
    {
      model: {
        divisor: 5,
        minimum: 2
      }
    },
    {
      model: {
        divisor: 5,
        minimum: 3
      }
    },
    {
      model: {
        divisor: 5,
        minimum: 4
      }
    }
  ]

  /**
   * {@link Observable} which the current time in minutes.
   */
  currentTimeInMinutes: Observable<number>;

  /**
   * Constructor.
   *
   * @param dateProviderService {@link DateProviderService} to provide the current {@link Date} containing the
   *   current time.
   */
  constructor(private dateProviderService: DateProviderService) {
    this.currentTimeInMinutes = dateProviderService.date$.pipe(
      map(date => MinutesBarComponent.transformToMinutes(date)));
  }

  /**
   * Transforms a provided {@link Date} into its time in minutes.
   *
   * @param date {@link Date} which should be transformed into the current time in minutes.
   * @returns {@link number} - the current time in minutes.
   */
  static transformToMinutes(date: Date): number {
    return date.getMinutes();
  }

}
