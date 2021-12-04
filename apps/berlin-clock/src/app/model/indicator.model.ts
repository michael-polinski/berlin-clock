import { IndicatorSize } from './indicator-size.enum';
import { IndicatorShape } from './indicator-shape.enum';
import { IndicatorColor } from './indicator-color.enum';

/**
 * Data that could be used to configure and customize an {@link IndicatorComponent}. The indicator uses default values
 * for all the optional properties in this model.
 */
export interface IndicatorModel {
  /**
   * Optional size of the indicator, defined by a value of type {@link IndicatorSize}.
   */
  size?: IndicatorSize,
  /**
   * Optional shape of the indicator, defined by a value of type {@link IndicatorShape}.
   */
  shape?: IndicatorShape,
  /**
   * Optional color of the indicator, defined by a value of type {@link IndicatorColor}.
   */
  color?: IndicatorColor,
}


