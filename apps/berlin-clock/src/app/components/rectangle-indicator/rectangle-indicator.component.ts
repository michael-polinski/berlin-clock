import { Component, Input } from '@angular/core';
import { IndicatorModel } from '../../model/indicator.model';

/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-rectangle-indicator',
  templateUrl: './rectangle-indicator.component.html',
  styleUrls: ['./rectangle-indicator.component.scss']
})
export class RectangleIndicatorComponent {

  @Input() active = false;
  @Input() model: IndicatorModel | undefined;
}
