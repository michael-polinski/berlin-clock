import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Class that provides utilities to receive a {@link Date} at a defined interval.
 */
@Injectable({
  providedIn: 'root'
})
export class DateProviderService {

  /**
   * Interval in which a fresh {@link Date} should be provided. The tick is less than a second to provide a smooth
   * entry if the first subscriber is too close to the switch of a second.
   */
  static readonly TICK_INTERVAL = 500;
  /**
   * TODO
   */
  readonly date$ = new Observable<Date>((observer) => {
    setInterval(() => {
        observer.next(new Date());
      },
      DateProviderService.TICK_INTERVAL);
  });

}
