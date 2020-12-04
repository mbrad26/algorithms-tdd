const { fib } = require('../lib/fibonaci');

describe('fib', () => {
  [
    [0, 0],
    [1, 1],
    [2, 1],
  ].forEach(item => 
    it(`returns ${item[1]} for fib(${item[0]})`, () => {
      const t0 = performance.now();
      fib(item[0]);
      const t1 = performance.now();
      console.log('PERFORMANCE: ', t1 - t0);

      expect(fib(item[0])).toEqual(item[1]);
    })
  );
});