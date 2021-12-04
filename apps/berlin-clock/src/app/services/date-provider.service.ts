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
   * Interval in which a fresh {@link Date} should be provided. The tick is way less than a second to provide a smooth
   * entry if the first subscriber is too close to the switch of a second.
   */
  static readonly TICK_INTERVAL = 10;
  /**
   *  {@link Observable} that emits a fresh {@link Date} in a specified interval. The interval is defined by the
   *  constant 'TICK_INTERVAL'.
   */
  readonly date$ = new Observable<Date>((observer) => {
    setInterval(() => {
        observer.next(new Date());
      },
      DateProviderService.TICK_INTERVAL);
  });

}
