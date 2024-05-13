import { UnitPipe, formatUnit, Units } from './unit.pipe';

describe('UnitPipe', () => {
  let pipe: UnitPipe;

  beforeEach(() => {
    pipe = new UnitPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return undefined when value is undefined', () => {
    expect(pipe.transform(undefined, '亿')).toBeUndefined();
  });

  it('should return original value when unit is undefined', () => {
    expect(pipe.transform(100)).toEqual(100);
  });

  it('should return value divided by unit when value and unit are defined', () => {
    expect(pipe.transform(1e8, '亿')).toEqual(1);
    expect(pipe.transform(1e4, '万')).toEqual(1);
  });

  it('should return original value when unit is not in Units', () => {
    expect(pipe.transform(100, '千' as any)).toEqual(100);
  });
});
