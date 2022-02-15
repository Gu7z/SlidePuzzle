import React from "react";
import IsMobile from "../hooks/is_mobile";

function Quadrados({ squaresPerLine, squareValue, moveSquare }) {
  const isMobileDevice = IsMobile();
  const sq_Size = (isMobileDevice ? 300 : 500) / squaresPerLine;
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
