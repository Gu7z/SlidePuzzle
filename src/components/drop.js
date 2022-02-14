import React from "react";

const gameSizes = [3, 4, 5, 6, 7, 8, 9, 10];

const Drop = ({ setGameSize }) => {
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
        {gameSizes.map((size, index) => (
          <p
            key={`size-${size}`}
            className="dropdown-item"
            onClick={() => setGameSize(size)}
          >
            {size}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Drop;
