import { Component, Input, OnInit } from '@angular/core';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-single-hour-indicator',
  templateUrl: './single-hour-indicator.component.html',
  styleUrls: ['./single-hour-indicator.component.scss']
})
export class SingleHourIndicatorComponent implements OnInit {
  @Input() active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
