import { IndicatorModel } from './indicator.model';
import { ModuloMinimumValuePair } from '../pipes/is-modulo-min.pipe';

/**
 * Specialization of an {@link IndicatorModel} that holds a {@link ModuloMinimumValuePair} to determine whether the
 * model is active or not.
 */
export interface ModuloRestIndicatorModel extends IndicatorModel {
  /**
   * {@link ModuloMinimumValuePair} used to define whether the {@link IndicatorComponent} is active or not.
   */
  model: ModuloMinimumValuePair;
}
