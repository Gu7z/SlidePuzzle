import React from "react";

function Quadrados({ squaresPerLine, squareValue, moveSquare }) {
  const sq_Size = 500 / squaresPerLine;
  var last = false;

  if (squareValue === squaresPerLine ** 2) {
    last = true;
  }

  return (
    <div>
      {!last ? (
        <div
          onClick={() => moveSquare(squareValue)}
          className="quadrado"
          style={{
            width: `${sq_Size}px`,
            height: `${sq_Size}px`,
          }}
        >
          <div>{squareValue}</div>
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
