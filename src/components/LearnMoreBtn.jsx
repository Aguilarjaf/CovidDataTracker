import React from "react";
import { BsCaretDownFill } from "react-icons/bs";

function LearnMoreBtn() {
  return (
    <div className="learnMore">
      <p>
        <a className="learnMore" href="#learn-more">
          Learn More<br></br>
          
            <BsCaretDownFill size={32}></BsCaretDownFill>
          
        </a>
      </p>
    </div>
  );
}

export default LearnMoreBtn;
