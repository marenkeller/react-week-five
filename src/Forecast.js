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
      <div className="WeatherForecastRow">
        <div className="col-2">
          <div>Mon</div>
          <div>☃️</div>
          <span className="ForecastTempMax"> {forecast[0].temp.max}°</span>{" "}
          <span className="ForecastTempMin">{forecast[0].temp.min}°</span>
        </div>
      </div>
    );
  } else {
    let apiKey = "2a2eaa51d996796495bf456e5b58adf4";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
