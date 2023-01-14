import React, { useState } from "react";
import "./ChangeTemperature.css";

export default function ChangeTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function ShowCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function ShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celcius") {
    return (
      <span>
        <span className="tempMainCelcius"> {Math.round(props.celcius)}</span>
        <span className="unit"> °C</span>⎮{" "}
        <span>
          {" "}
          <a href="/" onClick={ShowFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span>
        <span className="tempMainFahrenheit">
          {Math.round(fahrenheit)}{" "}
          <span>
            {" "}
            <a href="/" onClick={ShowCelcius}>
              °C
            </a>
          </span>
          ⎮ <span className="unit"> °F</span>
        </span>
      </span>
    );
  }
}
