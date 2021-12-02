import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DateProviderService } from '../../services/date-provider.service';
import { MinValueIndicatorModel } from '../../model/min-value-indicator.model';
import { ModuloRestIndicatorModel } from '../../model/modulo-rest-indicator.model';

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
      size: 'small',
      minValue: 5
    },
    {
      size: 'small',
      minValue: 10
    },
    {
      size: 'small',
      color: 'accent',
      minValue: 15
    },
    {
      size: 'small',
      minValue: 20
    },
    {
      size: 'small',
      minValue: 25
    },
    {
      size: 'small',
      color: 'accent',
      minValue: 30
    },
    {
      size: 'small',
      minValue: 35
    },
    {
      size: 'small',
      minValue: 40
    },
    {
      size: 'small',
      color: 'accent',
      minValue: 45
    },
    {
      size: 'small',
      minValue: 50
    },
    {
      size: 'small',
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
