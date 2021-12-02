import { Component, Input, OnInit } from '@angular/core';
import { IndicatorModel } from '../../model/indicator.model';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit{

  static readonly STANDARD_SIZE = 'normal';
  static readonly STANDARD_SHAPE = 'rectangle';
  static readonly STANDARD_COLOR = 'primary';

  @Input() active: boolean | null = false;
  @Input() model: IndicatorModel | undefined;

  ngOnInit(): void {
    this.model = {
      size: this.model?.size ? this.model?.size : IndicatorComponent.STANDARD_SIZE,
      shape: this.model?.shape ? this.model?.shape : IndicatorComponent.STANDARD_SHAPE,
      color: this.model?.color ? this.model?.color : IndicatorComponent.STANDARD_COLOR
    }
  }

}
