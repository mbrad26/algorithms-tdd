const { fib } = require('../lib/fibonaci');

describe('fib', () => {
  [
    [0, 0],
    [1, 1],
  ].forEach(item => 
    it(`returns ${item[0]} for fib(${item[1]})`, () => {
      expect(fib(0)).toEqual(0);
    })
  );
});