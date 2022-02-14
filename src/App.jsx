import React from "react";
import "./App.css";
import Quadrado from "./components/quadrado";
import Drop from "./components/drop";

const App = () => {
  return (
    <div style={{ alignContent: "center" }} className="App">
      <h1>Slide Puzzle</h1>
      <div style={{ marginBottom: 16 }}>
        {/* <Drop getValue={this.getValue} /> */}
      </div>
      <div>
        {/* {squares.map((squares) => (
          <div style={{ display: "flex" }}> {squares} </div>
        ))} */}
      </div>
    </div>
  );
};

export default App;
