import React, { useEffect } from "react"
import { Icon } from '@iconify/react';
import "./BottomStylingNavbar.css"
import basket  from "../icon/recycle-bin.png"
import eBike2Fill from '../icon/scooter-xxl.png';
import washHandsOutline from '../icon/time-wasteblack.png';
import { Link } from "react-router-dom";

function BottomNavBar() {
    const itemList = [
        {
          icon: basket,
          link:"/ManageWaste/containers",
        },
        {
          icon: washHandsOutline,
          link:"/ManageWaste/DropOff",
        },
    
        {
          icon:eBike2Fill,
    
          link: "/ManageWaste/pick",
        },
    
       
      ];
  return (
    <>
      <div className="BottomWrapper">
        <div className="bottomSecondWrapper">
        {itemList.map((text, index) => ( 
         
            <div className="IconsBottom" key={index}>
               <Link to={text.link}>
               <img src= {text.icon} alt="" srcset="" width="25px" height="25px" />
</Link>  
            </div>
           ))}
        </div>
      </div>
    </>
  )
}

export default BottomNavBar