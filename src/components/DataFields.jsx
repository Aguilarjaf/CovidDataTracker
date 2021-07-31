import React from "react";
import LearnMoreBtn from "./LearnMoreBtn.jsx";

function DataFields(props) {
  function refreshPage() {
    window.location.reload("Refresh");
  }

  return (
      <div>
        <div className="row d-flex justify-content-center refresh-items">
          <p id="completed-vaccines" className="covid-data">
            <b>Completed vaccines: </b>
            {props.completed}
          </p>
        </div>
        <div className="row d-flex justify-content-center refresh-items">
          <p id="total-population" className="covid-data">
            <b>Total population: </b>
            {props.population}
          </p>
        </div>
        <div className="row d-flex justify-content-center refresh-items">
          <p id="percentage-vaxxed" className="covid-data">
            <b>Percentage vaccinated: </b>
            {props.percentage}%
          </p>
        </div>
        <div className="row d-flex justify-content-center refresh-items">
          <p id="last-updated" className="covid-data">
            <b>Last updated: </b>
            {props.updated}
          </p>
        </div>

        <div className="row d-flex justify-content-center refresh-items">
          <p id="refresh-button">
            <button
              onClick={refreshPage}
              className="btn btn-sm btn-secondary btn-block"
              type="button"
              id="resetDataBtn"
            >
              Reset Data
            </button>
          </p>
        </div>
        <LearnMoreBtn />
      </div>
  );
}

export default DataFields;
