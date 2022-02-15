import { findLastValue, transformArrayValuesIn2D } from ".";

const isValidMoviment = (squaresValues, gameSize, squareValue) => {
  const squaresValues_2d = transformArrayValuesIn2D(squaresValues, gameSize);

  const { x, y } = findLastValue(squaresValues_2d, squareValue);

  const selectedSquareRight = squaresValues_2d[y][x + 1];
  const selectedSquareLeft = squaresValues_2d[y][x - 1];
  const selectedSquareUp = squaresValues_2d[y - 1]?.[x];
  const selectedSquareDown = squaresValues_2d[y + 1]?.[x];

  if (
    selectedSquareRight !== gameSize ** 2 &&
    selectedSquareLeft !== gameSize ** 2 &&
    selectedSquareUp !== gameSize ** 2 &&
    selectedSquareDown !== gameSize ** 2
  ) {
    return false;
  }

  return true;
};

export default isValidMoviment;
