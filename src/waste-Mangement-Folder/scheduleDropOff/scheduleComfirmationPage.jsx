import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import "../onboardingScreeen/stylesForOnboardingScreen/svg.css"

function PageDropOff() {
  return (
    <>
     <>
      <div className="fullbodypage">
        <div className="iconsss">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 130.2 130.2">
  <circle class="path circle" fill="none" stroke="#73AF55" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
  <polyline class="path check" fill="none" stroke="#73AF55" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
</svg>
        </div>
        <span className="detailsPage">
         <h2> Awesome!..</h2>   
        </span>


        <div className="wait">

           Drop off registered 
      
        </div>
      
<Link to="/ManageWaste">
        <button id="clickBtness">
            Return to Home
        </button>
        </Link>
      </div>
    </>
      
    </>
  )
}

export default PageDropOff