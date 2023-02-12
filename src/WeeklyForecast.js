import React from "react";

export default function WeeklyForecast(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeeklyForecast-Day">{day()}</div>
            <span className="ForecastTempMax">{maxTemp()}</span>{" "}
            <span className="ForecastTempMin">{minTemp()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
