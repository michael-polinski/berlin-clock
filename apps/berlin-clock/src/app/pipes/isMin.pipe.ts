import { Pipe, PipeTransform } from '@angular/core';

/**
 * TODO
 */
@Pipe({
  name: 'isMin'
})
export class IsMinPipe implements PipeTransform {

  transform(value: null | number, minimum: number): boolean {
    if (value === null) {
      return false;
    }
    return value >= minimum;
  }

}
