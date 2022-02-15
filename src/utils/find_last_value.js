const findLastValue = (squaresValues_2d, valueToFind) => {
  let x, y;

  for (const [i, row] of squaresValues_2d.entries()) {
    for (const [j, value] of row.entries()) {
      if (value === valueToFind) {
        x = j;
        y = i;
      }
    }
  }

  return { x, y };
};

export default findLastValue;
