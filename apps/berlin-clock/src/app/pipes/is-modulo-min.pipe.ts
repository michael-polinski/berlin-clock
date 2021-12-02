import { Pipe, PipeTransform } from '@angular/core';

/**
 * A pair of a divisor and a minimum value.
 */
export interface ModuloMinimumValuePair {
  /**
   * A divisor a certain value should be divided by.
   */
  divisor: number,
  /**
   * The minimal value the rest of a certain division should be equal to.
   */
  minimum: number
}

/**
 * Pipe that takes a value and a value pair of a divisor and an expected minimum and determines whether the rest of a
 * division of the value by the modulo is higher or equal than the provided minimum. If so,
 * the pipe maps the provided values to a {@link boolean} true, otherwise to a false.
 *
 * If 'null' is provided as a value, it will always be returned a {@link boolean} false
 */
@Pipe({
  name: 'isModuloMin'
})
export class IsModuloMinPipe implements PipeTransform {

  /**
   * Transforms a numeric value into a {@link boolean} value. If the rest of the provided value divided by the provided
   * divisor is equal to or higher than a provided minimum, a {@link boolean} true will be returned, otherwise it will
   * be a {@link boolean} false.
   *
   * If 'null' is provided as a value, a {@link boolean} false will be returned.
   *
   * @param value The numeric value that should be transformed, or 'null'.
   * @param valuePair A pair of a divisor and a minimum value, represented by a {@link ModuloMinimumValuePair}.
   * @returns {@link boolean} true, if the rest of the provided value divided by the divisor is equal to or higher than
   *   the provided minimum, otherwise false.
   */
  transform(value: number | null, valuePair: ModuloMinimumValuePair): boolean {
    if (value === null) {
      return false;
    }
    return value % valuePair.divisor >= valuePair.minimum;
  }

}
