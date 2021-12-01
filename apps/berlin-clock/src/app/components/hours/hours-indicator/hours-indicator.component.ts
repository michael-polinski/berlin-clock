import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DateProviderService } from '../../../services/date-provider.service';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-hours-indicator',
  templateUrl: './hours-indicator.component.html',
  styleUrls: ['./hours-indicator.component.scss']
})
export class HoursIndicatorComponent implements OnInit {
  amountOfHours$: Observable<number>;

  constructor(private dateProviderService: DateProviderService) {
    this.amountOfHours$ = dateProviderService.date$.pipe(map(date => date.getHours()));
  }

  ngOnInit(): void {
  }

}
