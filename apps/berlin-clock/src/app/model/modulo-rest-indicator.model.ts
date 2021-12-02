import { IndicatorModel } from './indicator.model';
import { ModuloMinimumValuePair } from '../pipes/isModRestMin.pipe';

/**
 * TODO
 */
export interface ModuloRestIndicatorModel extends IndicatorModel {
  model: ModuloMinimumValuePair;
}
