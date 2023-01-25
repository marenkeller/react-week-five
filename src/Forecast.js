import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="WeatherForecastrow">
      <div className="col-2">
        <div>Mon</div>
        <div>☃️</div>
        <span className="ForecastTempMax">3°</span>{" "}
        <span className="ForecastTempMin">-2°</span>
      </div>
    </div>
  );
}
