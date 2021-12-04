import { IndicatorModel } from './indicator.model';

/**
 * Specialization of an {@link IndicatorModel} that holds a property describing a minimum value. This value is used
 * to determine whether an {@link IndicatorComponent} is active or not.
 */
export interface MinValueIndicatorModel extends IndicatorModel {
  /**
   * Minimal value defining whether an {@link IndicatorComponent} is active or not.
   */
  minValue: number;
}


