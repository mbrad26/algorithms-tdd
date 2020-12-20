const generateFirstNArrayOfFibs = n => {
  const fibsArray = new Array(1).fill(1);

  if(n === 2) fibsArray.push(1);

  if(n > 2) {
    fibsArray.push(1);

    for(let i = 2; i < n; i++) {
      fibsArray.push(fibsArray[i-2] + fibsArray[i-1]);
    };
  };

  return fibsArray;
};

module.exports = generateFirstNArrayOfFibs;
