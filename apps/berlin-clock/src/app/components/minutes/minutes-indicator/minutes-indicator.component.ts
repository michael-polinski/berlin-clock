import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DateProviderService } from '../../../services/date-provider.service';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-minutes-indicator',
  templateUrl: './minutes-indicator.component.html',
  styleUrls: ['./minutes-indicator.component.scss']
})
export class MinutesIndicatorComponent implements OnInit {

  amountOfMinutes$: Observable<number>;

  constructor(private dateProviderService: DateProviderService) {
    this.amountOfMinutes$ = dateProviderService.date$.pipe(map(date => date.getMinutes()));
  }

  ngOnInit(): void {
  }

}
