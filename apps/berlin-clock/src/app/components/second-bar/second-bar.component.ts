import { Component } from '@angular/core';
import { DateProviderService } from '../../services/date-provider.service';
import { map, Observable } from 'rxjs';
import { IndicatorShape } from '../../model/indicator-shape.enum';
import { IndicatorModel } from '../../model/indicator.model';

/**
 * Component to display the seconds of the 'Berlin-clock' (https://en.wikipedia.org/wiki/Mengenlehreuhr). This
 * component uses the {@link IndicatorComponent} to display its values.
 */
@Component({
  selector: 'berlin-clock-second-bar',
  templateUrl: './second-bar.component.html',
  styleUrls: ['./second-bar.component.scss']
})
export class SecondBarComponent {
  /**
   * {@link IndicatorModel} to configure the displayed {@link IndicatorComponent}. This configuration uses mostly
   * default values except the shape, with should be an {@link IndicatorShape} of type 'circle'.
   */
  model: IndicatorModel = {
    shape: IndicatorShape.CIRCLE
  };

  /**
   * {@link Observable} which emits whether the current time in seconds is an odd value, in which case a
   * {@link boolean} true will be emitted. If the current value is an even value, a {@link boolean} false
   * will be emitted.
   */
  isCurrentTimeInSecondsOdd$: Observable<boolean>;

  /**
   * Constructor.
   *
   * @param dateProviderService {@link DateProviderService} to provide the current {@link Date} containing the
   *   current time.
   */
  constructor(private dateProviderService: DateProviderService) {
    this.isCurrentTimeInSecondsOdd$ = dateProviderService.date$.pipe(
      map(date => SecondBarComponent.isTimeInSecondsOdd(date)));
  }

  /**
   * Determines whether the current time, identified by an object of type {@link Date}, is odd. If the amount of
   * seconds is odd, a {@link boolean} true will be returned, otherwise a {@link boolean} false.
   *
   * @param date {@link Date} which should be tested whether its current time in seconds is odd or not.
   * @returns {@link boolean} true if the provided params time in seconds is odd, otherwise false.
   */
  static isTimeInSecondsOdd(date: Date): boolean {
    return date.getSeconds() % 2 !== 0;
  }
}
