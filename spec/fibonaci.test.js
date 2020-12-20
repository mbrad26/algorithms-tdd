const { fib } = require('../lib/fibonaci');

describe('fib', () => {
  [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
  ].forEach(item =>
    it(`returns ${item[1]} for fib(${item[0]})`, () => {
      expect(fib(item[0])).toEqual(item[1]);
    })
  );

  it('uses memoization for high performance', () => {
    const t0 = performance.now();
    const result = fib(500);
    const t1 = performance.now();

    expect(result).toEqual(1.394232245616977e+104);
    expect(t1-t0).toBeLessThan(0.9);
  });
});
