import { IsMinModRestPipe } from './isMinModRest.pipe';

describe('ModPipe', () => {
  it('create an instance', () => {
    const pipe = new IsMinModRestPipe();
    expect(pipe).toBeTruthy();
  });
});
