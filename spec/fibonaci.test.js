const { fib } = require('../lib/fibonaci');

describe('fib', () => {
  it('returns the first fibonaci number', () => {
    expect(fib(0)).toEqual(0);
  });

  it('returns the second fibonaci number', () => {
    expect(fib(1)).toEqual(1);
  });
});