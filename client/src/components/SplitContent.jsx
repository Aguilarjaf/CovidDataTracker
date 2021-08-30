import React from "react";
import GlobalData from "./GlobalData.jsx";
import CountryData from "./CountryData.jsx";
import CovidNews from "./CovidNews.jsx";

function SplitContent() {
    return (
        <div className="container">
            <div className="row p-3">
                <div className="col-lg-5" id="left-pane">
                    <CountryData />
                    <GlobalData />
                </div>

                <div className="col-lg-7" id="right-pane">
                    <CovidNews />
                </div>
            </div>
        </div>
    );
}

export default SplitContent;