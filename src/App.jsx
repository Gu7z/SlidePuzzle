import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Quadrado from "./components/quadrado";
import Drop from "./components/drop";

const App = () => {
  const [gameSize, setGameSize] = useState(undefined);
  const [squares, setSquares] = useState([]);
  const [positions, setPositions] = useState([]);

  const generateSquares = useCallback(() => {
    const newSquares = [];
    const newPositions = [];

    for (let i = 1; i <= gameSize ** 2; i++) {
      newSquares.push(
        <Quadrado
          moveSquare={() => {}}
          position={i}
          squaresPerLine={gameSize}
        />
      );

      newPositions.push(i);
    }

    setSquares(newSquares);
    setPositions(newPositions);
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
