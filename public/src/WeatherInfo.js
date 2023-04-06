import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <img
            className="mainIcon"
            src={props.data.iconUrl}
            alt={props.data.descriptionAlt}
          />
          <div className="tempMainCelcius">
            {Math.round(props.data.temperature)}
            <span className="tempMainDegreeSign">°C</span>{" "}
          </div>
        </div>
        <div className="col-6">
          <FormattedDate date={props.data.date} />

          <ul className="weatherDetails">
            <li className="feelsLIke">
              Feels like {Math.round(props.data.feelsLike)}°C
            </li>
            <li className="minMaxtemp">
              ↑ {Math.round(props.data.minTemp)}°C | ↓{" "}
              {Math.round(props.data.maxTemp)}°C{" "}
            </li>
            <li className="weatherDescription">{props.data.descriptionAlt}</li>
            <br />
            <li className="humidity">
              Humidity: {Math.round(props.data.humidity)} %
            </li>
            <li className="humidity">
              Wind: {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
        <hr />
        <WeatherForecast data={props.data} />
      </div>
    </div>
  );
}
