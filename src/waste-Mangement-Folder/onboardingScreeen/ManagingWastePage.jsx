import React, {useState, useEffect } from "react"
import "./stylesForOnboardingScreen/Managescreen.css"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import BottomNavBar from "../reusablecomponent/BottomNavbar";
import basket2 from '@iconify/icons-majesticons/basket-2';
import eBike2Fill from '@iconify/icons-ri/e-bike-2-fill';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import container from "../icon/waste.png"
import scotter from "../icon/scooter.png"
import time from "../icon/time-waste.png"
import coin from '../icon/wasto.gif'
import { UserAuth } from "./contextApi";
import washHandsOutline from '@iconify/icons-healthicons/wash-hands-outline';
function MangeWasteScreen() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Fetch the user's location when the component mounts
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Set userLocation state with the coordinates
          setUserLocation({ latitude, longitude });

          // Store the coordinates in local storage
          storeLocationInLocalStorage(latitude, longitude);
        },
        (error) => {
          console.error(`Error getting user location: ${error.message}`);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const storeLocationInLocalStorage = (latitude, longitude) => {
    // Store the location in local storage
    localStorage.setItem(
      "userLocation",
      JSON.stringify({ latitude, longitude })
    );
  };
 const storedWastoCoins = localStorage.getItem("wastoCoins");
const storedSchedulecoin=localStorage.getItem("schedulewastoCoins")
const storedisposecoin=localStorage.getItem("disposeCoins")
const itemList = [
  
        {
          text: "Create collection container",
          icon: container,
          uniquestyle: "special",
          link: "containers",
          animation: "fade-right",
          coinicon:coin,
          Coin:storedisposecoin
        },
        {
          text: "Drop off at nearby collection container",
          icon: time,

          link: "DropOff",
          animation: "fade-left",
          coinicon:coin,
Coin:storedSchedulecoin
        },

    {
      text: "Schedule pick up from your door step",
      icon:scotter,
      animation:"fade-left",
      coinicon:coin,

      link: "pick",

      rotate:0,
      Coin:storedWastoCoins,

    },

   
  ];
 
 
  return (
    <>
    <div className="ManageScreenB">
        <div className="header">
        <h1 className="h1">Manage Waste</h1>

        <p id="Monospace"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fb791b" d="M14 11.5A2.5 2.5 0 0 0 16.5 9A2.5 2.5 0 0 0 14 6.5A2.5 2.5 0 0 0 11.5 9a2.5 2.5 0 0 0 2.5 2.5M14 2c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S7 14.25 7 9a7 7 0 0 1 7-7M5 9c0 4.5 5.08 10.66 6 11.81L10 22S3 14.25 3 9c0-3.17 2.11-5.85 5-6.71C6.16 3.94 5 6.33 5 9Z"/></svg>    {userLocation && (
              <>
                <p>Latitude: {userLocation.latitude}</p>
                <p>Longitude: {userLocation.longitude}</p>
              </>
            )} </p>
        </div>
        <div className="block">  
            {itemList.map((text, index) => (
         
                <div className={`cardblock ${text.animation}`}>
                  <img src={text.icon} alt="" srcSet="" width="25px" height="25px" />
                  <span id="icon">
                    <p id="content" className={text.uniquestyle}>
                      {text.text}
                    </p>
                    <div style={{display:'flex'}}>
                      <div style={{ display:"flex",paddingTop:"8px"}}>
                  <p> <img src={text.coinicon} alt='animated' srcset="" width='20px' height ='20px'  /></p>  <p style={{color:"#fb971b"}}> {text.Coin}</p>   </div> <Link to={text.link}>
                      <button id="clickBtn">create</button>
                    </Link> </div> 
              
                  </span>
                </div>
            ))}
              
        </div>
      
    </div>
    <BottomNavBar/> 
    </>
  )
}

export default MangeWasteScreen