import {Observable} from "rxjs";

/**
 * Class that provides utilities to receive a {@link Date} at a defined interval.
 */
export class DateProvider {

  /**
   * Default interval in which a fresh {@link Date} should be provided.
   */
  static readonly DEFAULT_INTERVAL = 1000;

  /**
   * Returns an {@link Observable} that emits the current {@link Date} at an optional interval. If no interval is
   * provided, the value of the static member DEFAULT_INTERVAL is used.
   *
   * @param interval Optional {@link number} with the interval in which a fresh {@link Date} should be emitted. If
   *   this param is omitted, the value of the static member DEFAULT_INTERVAL is used.
   * @return {@link Observable} that emits a fresh {@link Date} in a defined interval.
   */
  static asObservable(interval?: number): Observable<Date> {
    return new Observable<Date>((observer) => {
      setInterval(() => {
        observer.next(new Date());
      },
      interval ? interval : DateProvider.DEFAULT_INTERVAL);
    });
  }
}
