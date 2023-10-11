import React, { useState,useEffect } from "react"
import "./stylesForOnboardingScreen/onboardingStyle.css"
import MangeWasteScreen from "./ManagingWastePage";
import LoginScreen from "./AuthPage/signin";
import { Link } from "react-router-dom";
function WelcomeScreen() {

  
        return (
    <>

        <div className="OnboardingScreen">
        <p style={{fontSize:"26px"}}>Wasto</p>
        <div className="boxbtn">
        <Link to="login">
        <button className="btnuon">
LogIn
        </button>
        </Link>
        <Link to="SignUp">
        <button className="btnuon">
SignUp
        </button>
        </Link>
        </div>
      </div>
     
  
   
    </>
  )
}

export default WelcomeScreen