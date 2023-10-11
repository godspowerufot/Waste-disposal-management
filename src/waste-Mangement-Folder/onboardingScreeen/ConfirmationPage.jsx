import React, { useEffect } from "react"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

import "../onboardingScreeen/stylesForOnboardingScreen/cardblocContainer.css"
function ComfirmationPage() {
  return (
    <>
      <div className="fullbodypage">
        <div className="iconsss">
        😊
        </div>
        <span className="detailsPage">
         <h2> Congrats..</h2>   
        </span>


        <div className="wait">

           
        Details of collection container updated
      
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

export default ComfirmationPage