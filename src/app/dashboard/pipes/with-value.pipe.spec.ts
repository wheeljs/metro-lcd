import { WithValuePipe } from './with-value.pipe';

describe('WithValuePipe', () => {
  it('create an instance', () => {
    const pipe = new WithValuePipe();
    expect(pipe).toBeTruthy();
  });
});
