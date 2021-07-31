import React, { useState } from "react";
import VaccineIcon from "./vac-icon.png";
import states from "./StatesArray.js";
import FadeIn from "react-fade-in";
import CovidSpinner from "./CovidSpinner.jsx";
import DataFields from "./DataFields.jsx";

function StateSearch() {
  const [stateEntered, setStateEntered] = useState("");

  const [covidData, setCovidData] = useState({
    completedVaccines: "",
    totalPopulation: "",
    percentageVaccinated: "",
    lastUpdated: "",
  });

  const [retrievedSuccessfully, setRetrieved] = useState(false);

  function submit(e) {
    getCovidData(e);
    e.preventDefault();
  }

  function handleChange(e) {
    setStateEntered(e.target.value);
  }

  function getCovidData(e) {
    setRetrieved(false);

    // Get the state abbreviation input
    let stateAbbrev = stateEntered.toUpperCase().trim();

    // Handles invalid input
    if (stateAbbrev.length > 3) {
      states.map((currentState) => {
        if (currentState[0].toUpperCase() === stateAbbrev) {
          stateAbbrev = currentState[1];
          return null;
        }
        return null;
      });
    } else if (stateAbbrev.length === 2) {
      // eslint-disable-next-line
      stateAbbrev = stateAbbrev;
    } else {
      alert("Data for this state does not exist.");
    }

    // Retrieves data from API
    fetch(
      `https://api.covidactnow.org/v2/state/` +
        stateAbbrev +
        `.json?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response_data) => {
        // console.log(response_data);
        return response_data.json();
      })
      .then((parsed_data) => {
        // console.log(parsed_data);

        setRetrieved(true);

        setCovidData({
          completedVaccines: parsed_data.actuals.vaccinationsCompleted,
          totalPopulation: parsed_data.population,
          percentageVaccinated: Math.round(
            (parsed_data.actuals.vaccinationsCompleted /
              parsed_data.population) *
              100
          ),
          lastUpdated: parsed_data.lastUpdatedDate,
        });
        // refreshDataBtn.css("display", "block");
      })
      .catch((error_data) => {
        console.log(error_data);
      });

    e.preventDefault();
  }

  return (
    <div className="jumbotron-fluid">
      <div className="container">
        <div className="row">
          <form className="form-signin" id="searchForm" onSubmit={submit}>
            <img
              className="mb-4"
              src={VaccineIcon}
              alt=""
              width="150"
              height="150"
            ></img>
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ color: "white" }}
            >
              <b>Find Covid Vaccinations by State</b>
            </h1>
            <input
              onChange={handleChange}
              value={stateEntered}
              type="text"
              id="stateInput"
              className="form-control"
              name="stateName"
              placeholder="State Name"
              required
              autoFocus
            ></input>
            <button
              onClick={getCovidData}
              className="btn btn-lg btn-primary btn-block"
              type="button"
              id="searchNowBtn"
              style={{ marginTop: "10px" }}
            >
              Search Now
            </button>
            <p className="mt-2 mb-3">
              <span style={{ color: "white" }}>Powered by </span>
              <a href="https://covidactnow.org/?s=1898818">CovidActNow.org</a>
            </p>
          </form>
        </div>
        {!retrievedSuccessfully ? (
          <CovidSpinner />
        ) : (
          <FadeIn>
            <DataFields
              completed={covidData.completedVaccines}
              population={covidData.totalPopulation}
              percentage={covidData.percentageVaccinated}
              updated={covidData.lastUpdated}
            />
          </FadeIn>
        )}
      </div>
    </div>
  );
}

export default StateSearch;
