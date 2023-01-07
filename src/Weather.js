import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather.data,
      minTemp: response.data.main.temp_min,
      maxTemp: response.data.main.temp_max,
      feelsLike: response.data.main.feels_like,
      city: response.data.name,
      descriptionAlt: response.data.weather[1].main,
      iconUrl: "http://openweathermap.org/img/w/03d.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                autoFocus="on"
                placeholder="Search city"
                className="w-100 p-1"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-8">
            <h1>{weatherData.city}</h1>
            <img
              src="{weatherData.iconUrl}"
              alt="{weatherData.descriptionAlt}"
            />
            <span> {Math.round(weatherData.temperature)}</span>
            <div>Feels like {Math.round(weatherData.feelsLike)}◦C</div>
            <div>
              ↑{Math.round(weatherData.minTemp)}◦C | ↓{" "}
              {Math.round(weatherData.maxTemp)}◦C
            </div>
            <div className="weatherDescription">{weatherData.description}</div>
          </div>
          <div className="col-4">
            <ul className="weatherDetails">
              <li>Humidity: {Math.round(weatherData.humidity)} %</li>
              <li>Wind: {Math.round(weatherData.wind)} km/t</li>
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
  } else {
    const apiKey = "18a1ec75f53ba1a0a864da5b6480a3f8";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
