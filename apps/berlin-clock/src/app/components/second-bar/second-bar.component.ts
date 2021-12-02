import { Component } from '@angular/core';
import { DateProviderService } from '../../services/date-provider.service';
import { map, Observable } from 'rxjs';
import { IndicatorShape } from '../../model/indicator-shape.enum';
import { IndicatorModel } from '../../model/indicator.model';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-second-bar',
  templateUrl: './second-bar.component.html',
  styleUrls: ['./second-bar.component.scss']
})
export class SecondBarComponent {

  model: IndicatorModel = {
    shape: IndicatorShape.CIRCLE
  };

  isSecondCountOdd: Observable<boolean>;

  constructor(private dateProviderService: DateProviderService) {
    this.isSecondCountOdd = dateProviderService.date$.pipe(map(date => date.getSeconds() % 2 !== 0));
  }

}
