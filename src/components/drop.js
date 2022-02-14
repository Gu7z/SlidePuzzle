import React from "react";

function Drop(props) {
  function setValues(value) {
    props.getValue(value);
  }

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Escolha um tamanho de jogo
      </button>
      <div
        className="dropdown-menu dropdown-menu-center"
        aria-labelledby="dropdownMenuButton"
      >
        <p className="dropdown-item" onClick={() => setValues(3)}>
          3
        </p>
        <p className="dropdown-item" onClick={() => setValues(4)}>
          4
        </p>
        <p className="dropdown-item" onClick={() => setValues(5)}>
          5
        </p>
        <p className="dropdown-item" onClick={() => setValues(6)}>
          6
        </p>
        <p className="dropdown-item" onClick={() => setValues(7)}>
          7
        </p>
        <p className="dropdown-item" onClick={() => setValues(8)}>
          8
        </p>
        <p className="dropdown-item" onClick={() => setValues(9)}>
          9
        </p>
        <p className="dropdown-item" onClick={() => setValues(10)}>
          10
        </p>
      </div>
    </div>
  );
}

export default Drop;
