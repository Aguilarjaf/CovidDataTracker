import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import DisplayCountryData from "./DisplayCountryData.jsx";

function CountryData() {
  const [countryArray, setCountryArray] = useState([]);
  const [individualCountry, setIndividualCountry] = useState({
    name: "",
    confirmed: "",
    deaths: "",
    recovered: "",
  });
  const [wasSelected, setWasSelected] = useState(false);

  // Get all country names from the url below. Set the
  // returned array to a constant
  const countryUrl = "https://covid19.mathdro.id/api/countries";

  // From a drop down list, select a country to retrieve data from
  // When country is selected, call the api below

  useEffect(() => {
    fetch(countryUrl)
      .then((response_data) => {
        return response_data.json();
      })
      .then((parsed_data) => {
        console.log("API for Country Data has been called.");
        // console.log(parsed_data.countries);
        setCountryArray(parsed_data.countries);
      })
      .catch((error_data) => {
        console.log(error_data);
      });
  }, []);

  function handleChange(e) {
    const countrySelected = e.target.value;
    const countryDataUrl = `https://covid19.mathdro.id/api/countries/${countrySelected}`;

    console.log(countryDataUrl);

    fetch(countryDataUrl)
      .then((response_data) => {
        return response_data.json();
      })
      .then((parsed_data) => {
        console.log("API for Individual Country.");
        console.log(parsed_data);

        setIndividualCountry({
          name: countrySelected,
          confirmed: parsed_data.confirmed.value,
          deaths: parsed_data.deaths.value,
          recovered: parsed_data.recovered.value,
        });

        setWasSelected(true);
      })
      .catch((error_data) => {
        console.log(error_data);
      });
  }

  return (
    <div>
      <h2>Select a Country Below</h2>
      <select onChange={handleChange} value="test">
        {countryArray.map((singleCountry) => (
          <option key={uuid()} value={singleCountry.name}>
            {singleCountry.name}
          </option>
        ))}
      </select>
      {wasSelected ? <DisplayCountryData country={individualCountry} /> : null}
      <hr></hr>
    </div>
  );
}

export default CountryData;
