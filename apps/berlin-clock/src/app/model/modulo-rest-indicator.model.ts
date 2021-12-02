import { IndicatorModel } from './indicator.model';
import { ModuloMinimumValuePair } from '../pipes/is-modulo-min.pipe';

/**
 * TODO
 */
export interface ModuloRestIndicatorModel extends IndicatorModel {
  model: ModuloMinimumValuePair;
}
