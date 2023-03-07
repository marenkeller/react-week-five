import React from "react";
export default function WeeklyForecast(props) {
  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°C`;
  }
  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°C`;
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

            <div className="ForecastTempMax">{maxTemp()}</div>
            <div className="ForecastTempMin">{minTemp()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
