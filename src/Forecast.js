import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast({ lon, lat }) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function getData() {
    let apiKey = "3fdc8cfbf2d6fa0116c9ae92d3df4f79";
    if (lon && lat) {
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
  }

  useEffect(() => {
    getData();
  }, [lon, lat]);

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
    return <div></div>;
  }
}
