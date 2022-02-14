import React from "react";

function Quadrados(props) {
  const sq_Size = 500 / props.qnt;
  var last = false;

  if (props.value === props.square_amt + 1) {
    last = true;
  }

  return (
    <div>
      {!last ? (
        <div
          onClick={() => props.changeSquares(props.x, props.y)}
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
          <div>{props.value}</div>
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
