import { IsMinPipe } from './is-min.pipe';

describe('IsMinPipe', () => {
  it('test that the pipe should create without an error.', () => {
    const pipe = new IsMinPipe();
    expect(pipe).toBeTruthy();
  });

  it.each`
    providedValue | providedMinimum | expectedResult
    ${null}       | ${0}            | ${false}
    ${0}          | ${0}            | ${true}
    ${0}          | ${1}            | ${false}
    ${1}          | ${0}            | ${true}
  `(`test that the pipe returns the expected result for a provided value.`,
    async ({ providedValue, providedMinimum, expectedResult }) => {
      const pipe = new IsMinPipe();

      const receivedResult = pipe.transform(providedValue, providedMinimum);

      expect(receivedResult).toBe(expectedResult);
    });
});
