import { Component, Input, OnInit } from '@angular/core';
import { IndicatorSize } from '../../model/indicator-size.enum';
import { IndicatorShape } from '../../model/indicator-shape.enum';
import { IndicatorModel } from '../../model/indicator.model';
import { IndicatorColor } from '../../model/indicator-color.enum';



/**
 * TODO
 */
@Component({
  selector: 'berlin-clock-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {

  @Input() active: boolean | null = false;
  @Input() model: IndicatorModel | undefined;

  ngOnInit(): void {
    this.model = {
      size: this.model?.size ? this.model?.size : IndicatorSize.NORMAL,
      shape: this.model?.shape ? this.model?.shape : IndicatorShape.RECTANGLE,
      color: this.model?.color ? this.model?.color : IndicatorColor.PRIMARY
    }
  }
}
