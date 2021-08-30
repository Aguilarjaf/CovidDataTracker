import React, { useEffect, useState } from "react";

function GlobalData() {
  const [confirmedCases, setConfirmedCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [confirmedDeaths, setConfirmedDeaths] = useState("");

  const globalDataUrl = "https://covid19.mathdro.id/api";

  useEffect(() => {
    fetch(globalDataUrl)
      .then((response_data) => {
        return response_data.json();
      })
      .then((parsed_data) => {
        // console.log(parsed_data);
        console.log("API for Global Data has been called.");

        setConfirmedCases(parsed_data.confirmed.value);
        setRecoveredCases(parsed_data.deaths.value);
        setConfirmedDeaths(parsed_data.recovered.value);
      })
      .catch((error_data) => {
        console.log(error_data);
      });
  }, []);

  return (
    <div>
      <div className="container border rounded mb-2">
          <h2>Global Data Overview:</h2>

        <div className="row p-3">

          <div className="col-xl-4 p-1">
            <div className="card border-0">
              <div className="text-dark rounded-top p-2" style={{ backgroundColor: "pink" }}><p><b>{confirmedDeaths}</b></p></div>
              <div className="bg-danger rounded-bottom p-2"><p>Deaths</p></div>
            </div>
          </div>

          <div className="col-xl-4 p-1">
            <div className="card border-0">
              <div className="text-dark rounded-top p-2" style={{ backgroundColor: "yellow" }}><p><b>{confirmedCases}</b></p></div>
              <div className="bg-warning rounded-bottom p-2"><p>Confirmed</p></div>
            </div>
          </div>

          <div className="col-xl-4 p-1">
            <div className="card border-0">
              <div className="text-dark rounded-top p-2" style={{ backgroundColor: "lightgreen" }}><p><b>{recoveredCases}</b></p></div>
              <div className="bg-success rounded-bottom p-2"><p>Recoveries</p></div>
            </div>
          </div>
        </div>
      </div>

      <img className="pb-2" src="https://covid19.mathdro.id/api/og" alt="" width="100%"></img>

    </div>
  );
}

export default GlobalData;
