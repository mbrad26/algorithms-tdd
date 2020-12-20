const generateFirstNArrayOfFibs = require('../lib/fibArray');

describe('generateFirstNArrayOfFibs', () => {
  it('returns [1] for n = 1', () => {
    expect(generateFirstNArrayOfFibs(1)).toEqual([1]);
  });

  it('returns [1, 1] for n = 2', () => {
    expect(generateFirstNArrayOfFibs(2)).toEqual([1, 1]);
  });
});
