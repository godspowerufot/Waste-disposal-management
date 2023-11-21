import React, { useState,useEffect } from "react"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { UserAuth } from "../onboardingScreeen/contextApi"
import "../onboardingScreeen/stylesForOnboardingScreen/svg.css"
import "../onboardingScreeen/stylesForOnboardingScreen/cardblocContainer.css"
function ComfirmationPageAddress() {
  const currentCoins = parseInt(localStorage.getItem("wastoCoins")) || 0;

  useEffect(() => {
    // Increment the coin and update local storage
    const storedWastoCoins= currentCoins + 1;
    localStorage.setItem("wastoCoins", storedWastoCoins.toString());
  }, []); 
  const StoreLocationforthecontainer=async()=>{
    try{
      const Pointref=collection(db,"POINT");
      await addDoc(Pointref,{
        Storedwastocoin:storedWastoCoins
      })
    }
    catch(error){
      console.log("alert ", error)
    }
  }
  return (
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

           pickup confirmed
      
        </div>
      
<Link to="/ManageWaste" >
        <button id="clickBtness" >
            Return to Home
        </button>
        </Link>
      </div>
    </>
  )
}

export default ComfirmationPageAddress