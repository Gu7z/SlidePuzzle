const transformArrayValuesIn2D = (squaresValues, gameSize) => {
  const squaresValues_2d = [];

  for (const [i] of squaresValues.entries()) {
    const index = i + 1;

    if (index % gameSize === 0 && index !== 1) {
      const slicedSquaredValues = squaresValues.slice(index - gameSize, index);

      squaresValues_2d.push(slicedSquaredValues);
    }
  }

  return squaresValues_2d;
};

export default transformArrayValuesIn2D;
