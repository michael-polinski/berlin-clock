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
      color: 'primary',
      minValue: 5
    },
    {
      size: 'small',
      color: 'primary',
      minValue: 10
    },
    {
      size: 'small',
      color: 'accent',
      minValue: 15
    },
    {
      size: 'small',
      color: 'primary',
      minValue: 20
    },
    {
      size: 'small',
      color: 'primary',
      minValue: 25
    },
    {
      size: 'small',
      color: 'accent',
      minValue: 30
    },
    {
      size: 'small',
      color: 'primary',
      minValue: 35
    },
    {
      size: 'small',
      color: 'primary',
      minValue: 40
    },
    {
      size: 'small',
      color: 'accent',
      minValue: 45
    },
    {
      size: 'small',
      color: 'primary',
      minValue: 50
    },
    {
      size: 'small',
      color: 'primary',
      minValue: 55
    },
  ]
  minutesBaseOneData: ModuloRestIndicatorModel[] = [
    {
      size: 'normal',
      color: 'primary',
      model: {
        modulo: 5,
        minimum: 1
      }
    },
    {
      size: 'normal',
      color: 'primary',
      model: {
        modulo: 5,
        minimum: 2
      }
    },
    {
      size: 'normal',
      color: 'primary',
      model: {
        modulo: 5,
        minimum: 3
      }
    },
    {
      size: 'normal',
      color: 'primary',
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
