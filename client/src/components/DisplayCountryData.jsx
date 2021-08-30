import React from "react";

//! Testing
//* Testing
//Todo: Testing

function DisplayCountryData(props) {
  console.log("The prop: \n" + props.country.confirmed);
  return (
    <div className="container border rounded mt-2">
      <p style={{ fontSize: "25px" }}><b>Displaying Data for {props.country.name}</b></p>

      <div className="row p-3">

        <div className="col-xl-4 p-1">
          <div className="card border-0">
            <div className="text-dark rounded-top p-2" style={{ backgroundColor: "pink" }}><p><b>{props.country.deaths}</b></p></div>
            <div className="bg-danger rounded-bottom p-2"><p>Deaths</p></div>
          </div>
        </div>

        <div className="col-xl-4 p-1">
          <div className="card border-0">
            <div className="text-dark rounded-top p-2" style={{ backgroundColor: "yellow" }}><p><b>{props.country.confirmed}</b></p></div>
            <div className="bg-warning rounded-bottom p-2"><p>Confirmed</p></div>
          </div>
        </div>

        <div className="col-xl-4 p-1">
          <div className="card border-0">
            <div className="text-dark rounded-top p-2" style={{ backgroundColor: "lightgreen" }}><p><b>{props.country.recovered}</b></p></div>
            <div className="bg-success rounded-bottom p-2"><p>Recoveries</p></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default DisplayCountryData;