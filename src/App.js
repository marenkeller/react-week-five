import "./App.css";
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Oslo" />
        <footer>
          {" "}
          Coded by Maren Keller. See code at{" "}
          <a
            href="https://github.com/marenkeller/react-week-five"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
