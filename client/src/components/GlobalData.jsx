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
      <h2>Global Data</h2>
      {/* <img src="https://covid19.mathdro.id/api/og" alt="" width="400px"></img> */}
      <p><b>Confirmed Cases</b></p>
      <p>{confirmedCases}</p>

      <p><b>Recoveries</b></p>
      <p>{recoveredCases}</p>

      <p><b>Deaths</b></p>
      <p>{confirmedDeaths}</p>
      <hr></hr>
    </div>
  );
}

export default GlobalData;
