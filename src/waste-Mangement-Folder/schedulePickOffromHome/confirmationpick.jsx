import React, { useEffect } from "react"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

import "../onboardingScreeen/stylesForOnboardingScreen/cardblocContainer.css"
function ComfirmationPageAddress() {
  return (
    <>
      <div className="fullbodypage">
        <div className="iconsss">
        😊
        </div>
        <span className="detailsPage">
         <h2> Awesome!..</h2>   
        </span>


        <div className="wait">

           pickup confirmed
      
        </div>
      
<Link to="/ManageWaste">
        <button id="clickBtness">
            Return to Home
        </button>
        </Link>
      </div>
    </>
  )
}

export default ComfirmationPageAddress