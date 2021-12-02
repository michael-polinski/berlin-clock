import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DateProviderService } from '../../services/date-provider.service';
import { MinValueIndicatorModel } from '../../model/min-value-indicator.model';
import { ModuloRestIndicatorModel } from '../../model/modulo-rest-indicator.model';
import { IndicatorColor } from '../../model/indicator-color.enum';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-hours-bar',
  templateUrl: './hours-bar.component.html',
  styleUrls: ['./hours-bar.component.scss']
})
export class HoursBarComponent {
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
  hoursBaseOneData: ModuloRestIndicatorModel[] = [
    {
      color: IndicatorColor.ACCENT,
      model: {
        modulo: 5,
        minimum: 1
      }
    },
    {
      color: IndicatorColor.ACCENT,
      model: {
        modulo: 5,
        minimum: 2
      }
    },
    {
      color: IndicatorColor.ACCENT,
      model: {
        modulo: 5,
        minimum: 3
      }
    },
    {
      color: IndicatorColor.ACCENT,
      model: {
        modulo: 5,
        minimum: 4
      }
    }
  ]

  amountOfHours$: Observable<number>;

  constructor(private dateProviderService: DateProviderService) {
    this.amountOfHours$ = dateProviderService.date$.pipe(map(date => date.getHours()));
  }
}
