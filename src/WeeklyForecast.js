import React from "react";
import Weather from "./Weather";

export default function WeeklyForecast() {
  return (
    <div className="WeatherForecastRow">
      <div className="col-2">
        <div>Mon</div>
        <Weather icon={props.data.iconUrl} />
        <span className="ForecastTempMax">
          {" "}
          {Math.round(forecast[0].temp.max)}°
        </span>{" "}
        <span className="ForecastTempMin">{forecast[0].temp.min}°</span>
      </div>
    </div>
  );
}
