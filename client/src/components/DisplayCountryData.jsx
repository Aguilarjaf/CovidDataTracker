import React from "react";

function DisplayCountryData(props) {
  console.log("The prop: \n" + props.country.confirmed);
  return (
    <div style={{lineHeight: "15px", marginTop: "25px"}}>
      <p style={{fontSize: "25px"}}><b>Displaying Data for {props.country.name}</b></p>
      <p style={{fontSize: "20px"}}>
        <b>Confirmed Cases</b>
      </p>
      <p>{props.country.confirmed}</p>

      <p style={{fontSize: "20px"}}>
        <b>Recoveries</b>
      </p>
      <p>{props.country.recovered}</p>

      <p style={{fontSize: "20px"}}>
        <b>Deaths</b>
      </p>
      <p>{props.country.deaths}</p>
    </div>
  );
}

export default DisplayCountryData;
