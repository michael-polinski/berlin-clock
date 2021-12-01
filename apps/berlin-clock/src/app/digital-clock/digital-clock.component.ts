import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DateProvider} from "./date-provider";

/**
 * Component that mimics a digital clock and displays the current time. The time value is provided by an
 * {@link Observable} of type date that is received from the {@link DateProvider} class.
 */
@Component({
  selector: 'berlin-clock-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {
  /**
   * {@link Observable} of type {@link Date} to provide the current date every second.
   */
  dateProvider: Observable<Date>;

  /**
   * Constructor.
   */
  constructor() {
    this.dateProvider = DateProvider.asObservable();
  }

  /**
   * Lifecycle hook. Once executed as the component is initialized.
   */
  ngOnInit(): void {

  }

}
