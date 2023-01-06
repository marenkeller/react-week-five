import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  let [temperature, setTemperature] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [ready, setReady] = useState("false");
  let [description, setDescription] = useState("");
  let [minTemp, setMinTemp] = useState("");
  let [maxTemp, setMaxTemp] = useState("");
  let [feelsLike, setFeelsLike] = useState("");

  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(reponse.data.weather.data);
    setMinTemp(response.data.main.temp_min);
    setMaxTemp(response.data.main.temp_max);
    setFeelsLike(response.data.main.feels_like);
    setReady(true);
  }
  const apiKey = "18a1ec75f53ba1a0a864da5b6480a3f8";
  let city = "Oslo";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  if (ready) {
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
            <h1>{city}</h1>
            <span>☃️</span> <span> {temperature}</span>
            <div>Feels like {feelsLike}◦C</div>
            <div>
              ↑-{minTemp}◦C | ↓ {maxTemp}◦C
            </div>
            <div className="weatherDescription">{description}</div>
          </div>
          <div className="col-4">
            <ul className="weatherDetails">
              <li>Humidity: {humidity} %</li>
              <li>Wind: {wind} km/t</li>
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
}
