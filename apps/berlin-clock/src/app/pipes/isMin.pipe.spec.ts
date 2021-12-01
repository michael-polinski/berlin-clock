import { IsMinPipe } from './isMin.pipe';

describe('MinPipe', () => {
  it('create an instance', () => {
    const pipe = new IsMinPipe();
    expect(pipe).toBeTruthy();
  });
});
