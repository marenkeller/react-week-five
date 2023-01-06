import React from "react";
import "./Weather.css";

export default function Weather() {
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
          <h1>OSLO</h1>
          <span>☃️</span> <span> -5◦C</span>
          <div>Feels like -2◦C</div>
          <div>↑-3◦C | ↓ -5◦C</div>
          <div className="weatherDescription">Heavy snow all day</div>
        </div>
        <div className="col-4">
          <ul className="weatherDetails">
            <li>Humidity</li>
            <li>Wind</li>
            <li>Perspiration</li>
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
