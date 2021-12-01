import { Component, Input, OnInit } from '@angular/core';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-single-minute-base-five-indicator',
  templateUrl: './single-minute-base-five-indicator.component.html',
  styleUrls: ['./single-minute-base-five-indicator.component.scss']
})
export class SingleMinuteBaseFiveIndicatorComponent implements OnInit {

  @Input() active = false;
  @Input() color: 'primary' | 'accent' = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

}
