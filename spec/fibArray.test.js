const generateFirstNArrayOfFibs = require('../lib/fibArray');

describe('generateFirstNArrayOfFibs', () => {
  it('returns [1] for n = 1', () => {
    expect(generateFirstNArrayOfFibs(1)).toEqual([1]);
  });

  it('returns [1, 1] for n = 2', () => {
    expect(generateFirstNArrayOfFibs(2)).toEqual([1, 1]);
  });

  it('returns [1, 1, 2] for n = 3', () => {
    expect(generateFirstNArrayOfFibs(3)).toEqual([1, 1, 2]);
  });

  it('returns [1, 1, 2, 3] for n = 4', () => {
    expect(generateFirstNArrayOfFibs(4)).toEqual([1, 1, 2, 3]);
  });

  it('returns [1, 1, 2, 3, 5] for n = 5', () => {
    expect(generateFirstNArrayOfFibs(5)).toEqual([1, 1, 2, 3, 5]);
  });

  describe('throws an error', () => {
    const error = 'Input must be a positive integer > 0!';

    it('if n is a string', () => {
      expect(() => generateFirstNArrayOfFibs('String')).toThrow(error);
    });

    it('if n is a number < 1', () => {
      expect(() => generateFirstNArrayOfFibs(-1.5)).toThrow(error);
    });
  });
});
