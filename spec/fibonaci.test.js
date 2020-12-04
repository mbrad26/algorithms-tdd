const { fib } = require('../lib/fibonaci');

describe('fib', () => {
  it('returns the first fibonaci number', () => {
    expect(fib(1)).toEqual(0);
  });
});