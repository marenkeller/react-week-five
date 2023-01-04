import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <form>
            <input type="search" autoFocus="on" placeholder="Search city" />
          </form>
        </div>
        <div className="col-3">
          <input type="submit" value="search" />
        </div>
      </div>
    </div>
  );
}
