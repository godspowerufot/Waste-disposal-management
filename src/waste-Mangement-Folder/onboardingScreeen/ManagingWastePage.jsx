import React, { useEffect } from "react"
import "./stylesForOnboardingScreen/Managescreen.css"
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import BottomNavBar from "../reusablecomponent/BottomNavbar";
import basket2 from '@iconify/icons-majesticons/basket-2';
import eBike2Fill from '@iconify/icons-ri/e-bike-2-fill';
import washHandsOutline from '@iconify/icons-healthicons/wash-hands-outline';
function MangeWasteScreen() {
      const itemList = [
  
    {
      text: "Create collection container",
      icon: basket2,
      rotate:0,
      link:"containers"
    },
 
    {
      text: "Drop off at nearby collection container",
      icon: washHandsOutline,
      rotate:1
    },

    {
      text: "Schedule pick up from your door step",
      icon:eBike2Fill,

      link: "pick",
      rotate:0
    },

   
  ];
  return (
    <>
    <div className="ManageScreenB">
        <div className="header">
        <h1 className="h1">Manage Waste</h1>

        <p id="Monospace"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fb791b" d="M14 11.5A2.5 2.5 0 0 0 16.5 9A2.5 2.5 0 0 0 14 6.5A2.5 2.5 0 0 0 11.5 9a2.5 2.5 0 0 0 2.5 2.5M14 2c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S7 14.25 7 9a7 7 0 0 1 7-7M5 9c0 4.5 5.08 10.66 6 11.81L10 22S3 14.25 3 9c0-3.17 2.11-5.85 5-6.71C6.16 3.94 5 6.33 5 9Z"/></svg>flat 3A Block ,ABC Market </p>
        </div>
        <div className="block">
        {itemList.map((text, index) => (  <div className="cardblock" key={index}>
              <span id="icon">
              
<Icon icon={text.icon} color="#fb791b" width="50" height="50" rotate={text.rotate}/>      </span>        <span id="containertwo">
              <p id="content">{text.text}</p>
            <Link to={text.link}>
              <button id="clickBtn">create</button>
              </Link>
</span>
            
            </div>))}
              
        </div>
      
    </div>
    <BottomNavBar/> 
    </>
  )
}

export default MangeWasteScreen