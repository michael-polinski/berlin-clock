import { Pipe, PipeTransform } from '@angular/core';

/**
 * TODO
 */
@Pipe({
  name: 'isMinModRest'
})
export class IsMinModRestPipe implements PipeTransform {

  transform(value: number | null, mod: number, rest: number): boolean {
    if (value === null) {
      return false;
    }
    return value % mod >= rest;
  }

}
