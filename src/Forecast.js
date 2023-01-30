import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import WeeklyForecast from "./WeeklyForecast";

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
    return <WeeklyForecast />;
  } else {
    return <div></div>;
  }
}
