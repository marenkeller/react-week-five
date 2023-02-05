import React from "react";

export default function WeeklyForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div>Mon</div>
          <span className="ForecastTempMax"> {forecast[0].temp.max}°</span>{" "}
          <span className="ForecastTempMin">{forecast[0].temp.min}°</span>
        </div>
      </div>
    </div>
  );
}
