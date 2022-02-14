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
          style={{
            width: `${sq_Size}px`,
            height: `${sq_Size}px`,
            backgroundColor: "#626C80",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #9DADCC",
          }}
        >
          <div>{value}</div>
        </div>
      ) : (
        <div
          style={{
            width: `${sq_Size}px`,
            height: `${sq_Size}px`,
            display: "flex",
            backgroundColor: "#9DADCC",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #9DADCC",
          }}
        ></div>
      )}
    </div>
  );
}

export default Quadrados;
