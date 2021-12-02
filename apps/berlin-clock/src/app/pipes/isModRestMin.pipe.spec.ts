import { IsModRestMinPipe } from './isModRestMin.pipe';

describe('ModPipe', () => {
  it('create an instance', () => {
    const pipe = new IsModRestMinPipe();
    expect(pipe).toBeTruthy();
  });
});
