import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeeklyForecast from "./WeeklyForecast";
import Weather from "./Weather";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeeklyForecast data={dailyForecast} />
                  <img
                    className="forecastIcons"
                    src="https://openweathermap.org/img/wn/${response.weather[0].icon
         }@2x.png"
                    alt="icon"
                    size={36}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "8944afa6845bd7c413a687258d3211ef";
    let longitude = props.data.coordinates.lon;
    let latitude = props.data.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
