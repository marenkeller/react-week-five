import React from "react";
import FormattedDate from "./FormattedDate";
import ChangeTemperature from "./ChangeTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <h1>{props.data.city}</h1>
          <img src={props.data.iconUrl} alt={props.data.descriptionAlt} />
          <ChangeTemperature celcius={props.data.temperature} />

          <div>Feels like {Math.round(props.data.feelsLike)}°C</div>
          <div>
            ↑{Math.round(props.data.minTemp)}°C | ↓{" "}
            {Math.round(props.data.maxTemp)}°C
          </div>
          <div className="weatherDescription">{props.data.description}</div>
        </div>
        <div className="col-4">
          <ul className="weatherDetails">
            <li>Humidity: {Math.round(props.data.humidity)} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/t</li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-2">Mon</div>
        <div className="col-2">Tue</div>
        <div className="col-2">Wed</div>
        <div className="col-2">Thu</div>
        <div className="col-2">Fri</div>
        <div className="col-2">Sat</div>
      </div>
    </div>
  );
}
