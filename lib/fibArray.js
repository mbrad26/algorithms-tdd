const generateFirstNArrayOfFibs = n => {
  const fibsArray = new Array(1).fill(1);

  if(n === 2) return [ ...fibsArray, 1];

  return fibsArray;
};

module.exports = generateFirstNArrayOfFibs;
