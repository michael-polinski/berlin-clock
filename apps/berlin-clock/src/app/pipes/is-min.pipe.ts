import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe that takes a numeric value and a minimum and determines whether the value is higher or equal than the minimum.
 * If so, the pipe maps the provided values to a {@link boolean} true, otherwise to a {@link boolean} false.
 *
 * If 'null' is provided as a value, a {@link boolean} false will be returned.
 *
 * @example
 *  0 and 0 will result in: true
 *  0 and 1 will result in: false
 *  1 and 0 will result in: true
 *
 */
@Pipe({
  name: 'isMin'
})
export class IsMinPipe implements PipeTransform {

  /**
   * Transforms a numeric value into a {@link boolean} value. If the provided value is equal to or higher than a
   * provided minimum, a {@link boolean} true will be returned, otherwise it will be a {@link boolean} false.
   *
   * If 'null' is provided as a value, a {@link boolean} false will be returned.
   *
   * @param value The numeric value that should be transformed, or 'null'.
   * @param minimum The minimum the numeric value should be changed against.
   * @returns {@link boolean} true, if the provided value is equal to or higher than the provided minimum, otherwise
   *   false.
   */
  transform(value: number | null, minimum: number): boolean {
    if (value === null) {
      return false;
    }
    return value >= minimum;
  }

}
