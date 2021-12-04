import { Component, Input, OnInit } from '@angular/core';
import { IndicatorSize } from '../../model/indicator-size.enum';
import { IndicatorShape } from '../../model/indicator-shape.enum';
import { IndicatorModel } from '../../model/indicator.model';
import { IndicatorColor } from '../../model/indicator-color.enum';

/**
 * Component to display a single unit of the 'Berlin-clock' (https://en.wikipedia.org/wiki/Mengenlehreuhr). This
 * component can be widely configured using an {@link IndicatorModel} and therefore work as any indicator used
 * in the 'Berlin-clock'.
 */
@Component({
  selector: 'berlin-clock-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {

  /**
   * Determines whether the indicator should be displayed as active or not.
   */
  @Input() active: boolean | null = false;
  /**
   * Configuration of type {@link IndicatorModel}. This model holds information about the size or shape of the
   * indicator.
   */
  @Input() model: IndicatorModel | undefined;

  /**
   * Lifecycle hook. Executed once as the component is initialized.
   */
  ngOnInit(): void {
    this.model = {
      size: this.model?.size ? this.model.size : IndicatorSize.NORMAL,
      shape: this.model?.shape ? this.model.shape : IndicatorShape.RECTANGLE,
      color: this.model?.color ? this.model.color : IndicatorColor.PRIMARY
    }
  }

  /**
   * Determines whether the indicator is active.
   *
   * @returns {@link boolean} true, if the indicator is active.
   */
  isActive(): boolean {
    return !!this.active;
  }

  /**
   * Determines whether the indicator is of shape 'rectangle'.
   *
   * @returns {@link boolean} true, if the indicator is of shape 'rectangle'.
   */
  isRectangle(): boolean {
    return this.model?.shape === IndicatorShape.RECTANGLE;
  }

  /**
   * Determines whether the indicator is of shape 'circle'.
   *
   * @returns {@link boolean} true, if the indicator is of shape 'circle'.
   */
  isCircle(): boolean {
    return this.model?.shape === IndicatorShape.CIRCLE;
  }

  /**
   * Determines whether the indicator is of size 'small'.
   *
   * @returns {@link boolean} true, if the indicator is of size 'small'.
   */
  isSmall(): boolean {
    return this.model?.size === IndicatorSize.SMALL;
  }

  /**
   * Determines whether the indicator is of color 'primary'.
   *
   * @returns {@link boolean} true, if the indicator is of color 'primary'.
   */
  isPrimaryColor(): boolean {
    return this.model?.color === IndicatorColor.PRIMARY;
  }

  /**
   * Determines whether the indicator is of color 'accent'.
   *
   * @returns {@link boolean} true, if the indicator is of color 'accent'.
   */
  isAccentColor(): boolean {
    return this.model?.color === IndicatorColor.ACCENT;
  }
}
