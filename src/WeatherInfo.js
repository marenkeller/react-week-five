import React from "react";
import FormattedDate from "./FormattedDate";
import ChangeTemperature from "./ChangeTemperature";
import "./WeatherInfo.css";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <img src={props.data.iconUrl} alt={props.data.descriptionAlt} />
          <ChangeTemperature celcius={props.data.temperature} />

          <div className="feelsLIke">
            Feels like {Math.round(props.data.feelsLike)}°C
          </div>
          <div className="minMaxtemp">
            ↑ {Math.round(props.data.minTemp)}°C | ↓{" "}
            {Math.round(props.data.maxTemp)}°C
          </div>
          <div className="weatherDescription">{props.data.descriptionAlt}</div>
        </div>
        <div className="col-6">
          <ul className="weatherDetails">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <br />
            <li>Humidity: {Math.round(props.data.humidity)} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/t</li>
          </ul>
        </div>
        <hr />
        <WeatherForecast data={props.data} />
      </div>
    </div>
  );
}
