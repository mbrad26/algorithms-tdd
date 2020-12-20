const generateFirstNArrayOfFibs = require('../lib/fibArray');

describe('generateFirstNArrayOfFibs', () => {
  it('returns [1] for n = 1', () => {
    expect(generateFirstNArrayOfFibs(1)).toEqual([1]);
  });
});
