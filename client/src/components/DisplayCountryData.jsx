import React from "react";

function DisplayCountryData(props) {
  console.log("The prop: \n" + props.country.confirmed);
  return (
    <div>
      <h3>Displaying Data for {props.country.name}</h3>
      <p>
        <b>Confirmed Cases</b>
      </p>
      <p>{props.country.confirmed}</p>

      <p>
        <b>Recoveries</b>
      </p>
      <p>{props.country.recovered}</p>

      <p>
        <b>Deaths</b>
      </p>
      <p>{props.country.deaths}</p>
    </div>
  );
}

export default DisplayCountryData;
