import React from "react";

function Quadrados({ squaresPerLine, position, moveSquare }) {
  const sq_Size = 500 / squaresPerLine;
  var last = false;

  if (position === squaresPerLine ** 2) {
    last = true;
  }

  return (
    <div>
      {!last ? (
        <div
          onClick={() => moveSquare(position)}
          className="quadrado"
          style={{
            width: `${sq_Size}px`,
            height: `${sq_Size}px`,
          }}
        >
          <div>{position}</div>
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
