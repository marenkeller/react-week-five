import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecastrow">
        <div className="col-2">
          <div>Mon</div>
          <div>☃️</div>
          <span className="ForecastTempMax"> {forecast[0].temp.max}°</span>{" "}
          <span className="ForecastTempMin">{forecast[0].temp.min}°</span>
        </div>
      </div>
    );
  } else {
    let apiKey = "bce6e660398b266f6fc70ee8855a9bca";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
}
