import { WithValuePipe } from './with-value.pipe';

describe('WithValuePipe', () => {
  let pipe: WithValuePipe;

  beforeEach(() => {
    pipe = new WithValuePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter out values with corresponding falsy vars', () => {
    const values = ['value1', 'value2', 'value3'];
    const vars = [0, 'truthy', null];
    const result = pipe.transform(values, vars);
    expect(result).toEqual(['value2']);
  });

  it('should handle array vars', () => {
    const values = ['value1', 'value2', 'value3'];
    const vars = [[0, '', null], ['truthy', 0], [null, undefined]];
    const result = pipe.transform(values, vars);
    expect(result).toEqual(['value2']);
  });
});
