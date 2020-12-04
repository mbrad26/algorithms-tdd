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
});