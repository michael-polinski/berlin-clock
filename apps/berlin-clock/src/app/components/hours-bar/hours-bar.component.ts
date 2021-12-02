import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DateProviderService } from '../../services/date-provider.service';
import { MinValueIndicatorModel } from '../../model/min-value-indicator.model';
import { ModuloRestIndicatorModel } from '../../model/modulo-rest-indicator.model';

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
      color: 'accent',
      minValue: 5
    },
    {
      color: 'accent',
      minValue: 10
    },
    {
      color: 'accent',
      minValue: 15
    },
    {
      color: 'accent',
      minValue: 20
    }
  ]
  hoursBaseOneData: ModuloRestIndicatorModel[] = [
    {
      color: 'accent',
      model: {
        modulo: 5,
        minimum: 1
      }
    },
    {
      color: 'accent',
      model: {
        modulo: 5,
        minimum: 2
      }
    },
    {
      color: 'accent',
      model: {
        modulo: 5,
        minimum: 3
      }
    },
    {
      color: 'accent',
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
