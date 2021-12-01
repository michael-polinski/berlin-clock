import { Component, OnInit } from '@angular/core';
import { DateProviderService } from '../../services/date-provider.service';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-berlin-clock',
  templateUrl: './berlin-clock.component.html',
  styleUrls: ['./berlin-clock.component.scss']
})
export class BerlinClockComponent implements OnInit {

  constructor(private dateProviderService: DateProviderService) {
  }

  ngOnInit(): void {

  }

}
