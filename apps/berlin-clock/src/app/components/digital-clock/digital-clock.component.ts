import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DateProviderService } from '../../services/date-provider.service';

/**
 * Component that mimics a digital clock and displays the current time. The time value is provided by an
 * {@link Observable} of type date that is received from the {@link DateProvider} class.
 */
@Component({
  selector: 'berlin-clock-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent {
  /**
   * {@link Observable} of type {@link Date} to provide the current date every second.
   */
  dateProvider: Observable<Date>;

  /**
   * Constructor.
   */
  constructor(private dateProviderService: DateProviderService) {
    this.dateProvider = dateProviderService.date$;
  }
}
