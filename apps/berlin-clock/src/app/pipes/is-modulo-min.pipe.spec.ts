import { IsModuloMinPipe } from './is-modulo-min.pipe';

describe('IsModuloMinPipe', () => {
  it('test that the pipe should create without an error.', () => {
    const pipe = new IsModuloMinPipe();
    expect(pipe).toBeTruthy();
  });

  it.each`
    providedValue | providedModulo | providedMinimum | expectedResult
    ${null}       | ${1}           | ${0}   | ${false}
    ${1}          | ${2}           | ${0}   | ${true}
    ${1}          | ${2}           | ${1}   | ${true}
    ${1}          | ${2}           | ${2}   | ${false}
  `(`test that the pipe returns the expected result for a provided value.`,
    async ({ providedValue, providedModulo,  providedMinimum, expectedResult }) => {
      const pipe = new IsModuloMinPipe();
      const providedValuePair = {
        divisor: providedModulo,
        minimum: providedMinimum
      }

      const receivedResult = pipe.transform(providedValue, providedValuePair);

      expect(receivedResult).toBe(expectedResult);
    });
});
