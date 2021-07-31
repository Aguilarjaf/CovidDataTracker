import React from "react";
import CovidPng from "./covid.png";

function CovidSpinner() {
  return (
    <div className="row d-flex justify-content-center">
      <img
        className="rotate"
        alt=""
        src={CovidPng}
        id="covid-icon"
        width="150"
        height="150"
      ></img>
    </div>
  );
}

export default CovidSpinner;
