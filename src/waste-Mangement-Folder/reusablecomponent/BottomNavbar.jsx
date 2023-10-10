import React, { useEffect } from "react"
import { Icon } from '@iconify/react';
import "./BottomStylingNavbar.css"
import basket2 from '@iconify/icons-majesticons/basket-2';
import eBike2Fill from '@iconify/icons-ri/e-bike-2-fill';
import washHandsOutline from '@iconify/icons-healthicons/wash-hands-outline';


function BottomNavBar() {
    const itemList = [
        {
          icon: basket2,
          link:"",
        },
        {
          icon: washHandsOutline,
          link:"",
        },
    
        {
          icon:eBike2Fill,
    
          link: "#About",
        },
    
       
      ];
  return (
    <>
      <div className="BottomWrapper">
        <div className="bottomSecondWrapper">
        {itemList.map((text, index) => ( 
            <div className="IconsBottom" key={index}>
<Icon icon={text.icon}  width="30" height="30" />   
            </div>))}
        </div>
      </div>
    </>
  )
}

export default BottomNavBar