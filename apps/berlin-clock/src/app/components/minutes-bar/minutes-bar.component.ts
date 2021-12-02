import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DateProviderService } from '../../services/date-provider.service';
import { MinValueIndicatorModel } from '../../model/min-value-indicator.model';
import { ModuloRestIndicatorModel } from '../../model/modulo-rest-indicator.model';
import { IndicatorSize } from '../../model/indicator-size.enum';
import { IndicatorColor } from '../../model/indicator-color.enum';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-minutes-bar',
  templateUrl: './minutes-bar.component.html',
  styleUrls: ['./minutes-bar.component.scss']
})
export class MinutesBarComponent {

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
  minutesBaseOneData: ModuloRestIndicatorModel[] = [
    {
      model: {
        modulo: 5,
        minimum: 1
      }
    },
    {
      model: {
        modulo: 5,
        minimum: 2
      }
    },
    {
      model: {
        modulo: 5,
        minimum: 3
      }
    },
    {
      model: {
        modulo: 5,
        minimum: 4
      }
    }
  ]

  amountOfMinutes$: Observable<number>;

  constructor(private dateProviderService: DateProviderService) {
    this.amountOfMinutes$ = dateProviderService.date$.pipe(map(date => date.getMinutes()));
  }

}
