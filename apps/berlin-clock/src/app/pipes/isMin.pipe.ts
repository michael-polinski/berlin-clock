import { Pipe, PipeTransform } from '@angular/core';

/**
 * TODO
 */
@Pipe({
  name: 'isMin'
})
export class IsMinPipe implements PipeTransform {

  transform(value: number | null, minimum: number): boolean {
    if (value === null) {
      return false;
    }
    return value >= minimum;
  }

}
