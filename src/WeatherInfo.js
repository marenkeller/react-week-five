import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <h1>{props.city}</h1>
          <img src="{props.iconUrl}" alt="{props.descriptionAlt}" />
          <span> {Math.round(props.temperature)}</span>
          <div>Feels like {Math.round(props.feelsLike)}◦C</div>
          <div>
            ↑{Math.round(props.minTemp)}◦C | ↓ {Math.round(props.maxTemp)}◦C
          </div>
          <div className="weatherDescription">{props.description}</div>
        </div>
        <div className="col-4">
          <ul className="weatherDetails">
            <li>Humidity: {Math.round(props.humidity)} %</li>
            <li>Wind: {Math.round(props.wind)} km/t</li>
            <li>
              <FormattedDate date={props.date} />
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
