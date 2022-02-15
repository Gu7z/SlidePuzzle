/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./App.css";
import Quadrado from "./components/quadrado";
import Drop from "./components/drop";
import { swapSquares } from "./utils";

const App = () => {
  const [gameSize, setGameSize] = useState(3);
  const [squaresValues, setSquaresValues] = useState([]);

  const generateSquares = () => {
    let newSquaresValues = [];

    for (let i = 1; i <= gameSize ** 2; i++) {
      newSquaresValues.push(i);
    }

    const numberOfRandomizes = 1000 * (gameSize ** 2 / 2);

    for (let index = 1; index <= numberOfRandomizes; index++) {
      const randomNumber = Math.floor(Math.random() * gameSize ** 2 + 1);

      newSquaresValues = swapSquares(newSquaresValues, gameSize, randomNumber);
    }

    setSquaresValues(newSquaresValues);
  };

  const moveSquare = (squareValue) => {
    const newSquaresValues = swapSquares(squaresValues, gameSize, squareValue);

    setSquaresValues(newSquaresValues);
  };

  useEffect(() => {
    if (gameSize === undefined) return;

    generateSquares();
  }, [gameSize]);

  return (
    <div style={{ alignContent: "center" }} className="App">
      <h1>Slide Puzzle</h1>
      <div style={{ marginBottom: 16 }}>
        <Drop setGameSize={setGameSize} />
      </div>
      <div
        style={{
          width: 500,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squaresValues.map((squareValue, index) => (
          <div key={`square-${index}`}>
            <Quadrado
              moveSquare={moveSquare}
              squareValue={squareValue}
              squaresPerLine={gameSize}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
