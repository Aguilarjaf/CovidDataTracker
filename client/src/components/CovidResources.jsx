import React from "react";

function CovidResources() {
    return <div className="bg-light p-2 border rounded">
        <h3 className="text-left p-0 m-0">Covid Resources</h3>
        <p className="text-left">Learn more about the pandemic and find tips for prevention.</p>
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">
            <button type="button" className="btn btn-primary col-md-12 text-center">Learn More</button>
        </a>

    </div>
}

export default CovidResources;