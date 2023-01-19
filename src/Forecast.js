import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-2">
        <div>Mon</div> <span className="ForecastTempMax">3</span>{" "}
        <span className="ForecastTempMin">-2</span>
      </div>
      <div className="col-2">Tue</div>
      <div className="col-2">Wed</div>
      <div className="col-2">Thu</div>
      <div className="col-2">Fri</div>
      <div className="col-2">Sat</div>
    </div>
  );
}
