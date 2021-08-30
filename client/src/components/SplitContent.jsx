import React from "react";
import GlobalData from "./GlobalData.jsx";
import CountryData from "./CountryData.jsx";
import CovidResources from "./CovidResources"
import CovidNews from "./CovidNews.jsx";

function SplitContent() {
    return (
        <div className="container" id="learn-more">
            <div className="row p-3">
                <div className="col-lg-5" id="left-pane">
                    <CountryData />
                    <GlobalData />
                    <CovidResources />
                </div>

                <div className="col-lg-7" id="right-pane">
                    <CovidNews />
                </div>
            </div>
        </div>
    );
}

export default SplitContent;