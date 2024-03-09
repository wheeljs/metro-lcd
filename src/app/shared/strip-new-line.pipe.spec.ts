import { StripNewLinePipe } from './strip-new-line.pipe';

describe('StripNewLinePipe', () => {
  it('create an instance', () => {
    const pipe = new StripNewLinePipe();
    expect(pipe).toBeTruthy();
  });
});
