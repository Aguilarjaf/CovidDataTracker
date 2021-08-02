import React from "react";
// import CovidNews from "./CovidNews.jsx";
import GlobalData from "./GlobalData.jsx";
import CountryData from "./CountryData.jsx";

function LearnMore() {
  return (
    <div className="learnMoreSection">
      <div id="learn-more">
        <h1><u>Learn More</u></h1>
      </div>
      <GlobalData/>
      <CountryData/>
      {/* <CovidNews /> */}
    </div>
  );
}

export default LearnMore;
