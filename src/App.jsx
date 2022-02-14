import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Quadrado from "./components/quadrado";
import Drop from "./components/drop";

const App = () => {
  const [gameSize, setGameSize] = useState(undefined);
  const [squares, setSquares] = useState([]);

  const generateSquares = useCallback(() => {
    const newSquares = [];
    for (let i = 0; i < gameSize ** 2; i++) {
      newSquares.push(
        <Quadrado
          x={0}
          y={0}
          changeSquares={() => {}}
          value={i}
          squaresPerLine={gameSize}
        />
      );
    }

    setSquares(newSquares);
  }, [gameSize]);

  useEffect(() => {
    if (gameSize === undefined) return;

    generateSquares();
  }, [generateSquares, gameSize]);

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
        {squares.map((squares, index) => (
          <div key={`square-${index}`}>{squares}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
