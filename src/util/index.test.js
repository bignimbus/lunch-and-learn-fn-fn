import { bind } from './';

function myTestFn () {
  return {
    context: this,
    args: Array.from(arguments),
  };
}

describe('bind', () => {
  it('should return a function', () => {
    const obj = {};
    const fn = bind(myTestFn, obj, 'foo');
    expect(fn).toBeInstanceOf(Function);
  });

  it('should return a bound function', () => {
    const obj = {};
    const fn = bind(myTestFn, obj, 'foo');
    const { context } = fn();
    expect(context).toBe(obj);
  });

  it('should be able to return a curried function', () => {
    const obj = {};
    const fn = bind(myTestFn, obj, 'foo');
    const { args } = fn('bar');
    expect(args).toEqual(['foo', 'bar']);
  });

  it('should be able to return a partially applied function', () => {
    const obj = {};
    const fn = bind(myTestFn, obj, 'foo');
    const { args } = fn('bar', 'baz');
    expect(args).toEqual(['foo', 'bar', 'baz']);
  });
});
