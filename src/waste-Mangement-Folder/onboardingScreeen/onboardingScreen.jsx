import React, { useState,useEffect } from "react"
import "./stylesForOnboardingScreen/onboardingStyle.css"
import MangeWasteScreen from "./ManagingWastePage";
function WelcomeScreen() {

    const [showLoader, setShowLoader] = useState(false);
    useEffect(() => {
      // Simulate a delay to demonstrate the loader
      const timer = setTimeout(() => {
        setShowLoader(true);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
        return (
    <>
      {!showLoader ? (
        <div className="OnboardingScreen">
        <p>Wasto</p>
      </div>
     
    ) :<MangeWasteScreen/> }
   
    </>
  )
}

export default WelcomeScreen