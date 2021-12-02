import { Component } from '@angular/core';
import { DateProviderService } from '../../services/date-provider.service';
import { map, Observable } from 'rxjs';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-second-indicator',
  templateUrl: './second-indicator.component.html',
  styleUrls: ['./second-indicator.component.scss']
})
export class SecondIndicatorComponent {

  isSecondCountOdd: Observable<boolean>;

  constructor(private dateProviderService: DateProviderService) {
    this.isSecondCountOdd = dateProviderService.date$.pipe(map(date => date.getSeconds() % 2 !== 0));
  }

}
