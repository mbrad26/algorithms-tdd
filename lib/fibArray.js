const generateFirstNArrayOfFibs = n => {
  if(typeof n === 'string') throw new Error('Input must not be a String!');
  const fibsArray = new Array(1).fill(1);

  if(n !== 1) {
    fibsArray.push(1);

    for(let i = 2; i < n; i++) {
      fibsArray.push(fibsArray[i-2] + fibsArray[i-1]);
    };
  };

  return fibsArray;
};

module.exports = generateFirstNArrayOfFibs;
