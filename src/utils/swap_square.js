import { isValidMoviment } from ".";

const swapSquares = (squaresValues, gameSize, squareValue) => {
  const lastValue = gameSize ** 2;

  const lastvalueIndex = squaresValues.indexOf(lastValue);
  const squareValueIndex = squaresValues.indexOf(squareValue);

  const newSquarePositions = [...squaresValues];

  if (!isValidMoviment(squaresValues, gameSize, squareValue)) {
    return squaresValues;
  }

  const temp = newSquarePositions[squareValueIndex];
  newSquarePositions[squareValueIndex] = newSquarePositions[lastvalueIndex];
  newSquarePositions[lastvalueIndex] = temp;

  return newSquarePositions;
};

export default swapSquares;
