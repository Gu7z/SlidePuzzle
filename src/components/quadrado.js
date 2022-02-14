import React from "react";

function Quadrados({ squaresPerLine, x, y, value, changeSquares }) {
  const sq_Size = 500 / squaresPerLine;
  var last = false;

  if (value === squaresPerLine ** 2 - 1) {
    last = true;
  }

  return (
    <div>
      {!last ? (
        <div
          onClick={() => changeSquares(x, y)}
          className="quadrado"
          style={{
            width: `${sq_Size}px`,
            height: `${sq_Size}px`,
          }}
        >
          <div>{value}</div>
        </div>
      ) : (
        <div
          className="quadrado"
          style={{
            width: `${sq_Size}px`,
            height: `${sq_Size}px`,
            backgroundColor: "#9DADCC",
          }}
        ></div>
      )}
    </div>
  );
}

export default Quadrados;
