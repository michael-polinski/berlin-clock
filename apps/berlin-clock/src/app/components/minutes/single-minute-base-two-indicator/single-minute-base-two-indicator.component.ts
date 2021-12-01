import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'berlin-clock-single-minute-base-two-indicator',
  templateUrl: './single-minute-base-two-indicator.component.html',
  styleUrls: ['./single-minute-base-two-indicator.component.scss']
})
export class SingleMinuteBaseTwoIndicatorComponent implements OnInit {

  @Input() active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
