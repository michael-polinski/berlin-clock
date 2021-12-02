import { Pipe, PipeTransform } from '@angular/core';

/**
 * TODO
 */
export interface ModuloMinimumValuePair {
  modulo: number,
  minimum: number
}

/**
 * TODO
 */
@Pipe({
  name: 'isModRestMin'
})
export class IsModRestMinPipe implements PipeTransform {

  transform(value: number | null, valuePair: ModuloMinimumValuePair): boolean {
    if (value === null) {
      return false;
    }
    return value % valuePair.modulo >= valuePair.minimum;
  }

}
