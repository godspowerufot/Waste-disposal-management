import React, { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import { UserAuth } from "./contextApi";
import BottomNavBar from "../reusablecomponent/BottomNavbar";
import "../onboardingScreeen/stylesForOnboardingScreen/cardblocContainer.css";

function ContainersOpenningHours() {
  const itemList = [
    {
      text: "Mo",
      btn:"buttons"
    },
    {
      text: "Tu",
      btn:"buttons"
    },
    {
      text: "We",
      btn:"buttons"
    },
    {
      text: "Thu",
      btn:"buttons"
    },
    {
      text: "Fr",
      btn:"buttons"
    },
    {
      text: "Sa",
    },
    {
      text: "Su",
    },
  ];
  const [location, setLocation] = useState("");
  const handleLocationChange = (e) => {
    setLocations(e.target.value);
  };
 
  const { openingHours, setOpeningHours } = UserAuth(); // Use the context hook
  const { openingHourSecond, setOpeningHoursecond } = UserAuth(); // Use the context hook
const {SelectInput,setLocations}=UserAuth()
  const handleTimeChange = (day, time) => {
    setOpeningHours({ ...openingHours, [day]: time });
  };
  const handleTimeChanges= (day, time) => {
    setOpeningHoursecond({ ...openingHourSecond, [day]: time });
  };
 
  let navigate=useNavigate()

  return (
    <>
      <div className="containerBox">
        <div className="headerTwo">
          <Link onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke=" #fb791b"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M31 36L19 24l12-12"
              />
            </svg>
          </Link>
          <span className="headerbox">
            <h1 className="headersone">Containers Open days</h1>
          </span>
        </div>
        <div className="bodyBox">
          <p className="textbox">Opening days</p>
          <div className="divDate">
            {itemList.map((text, index) => (
              <span className="button" key={index} id={text.btn}>
                {text.text}
              </span>
            ))}
          </div>
          <div className="timeInputContainer">
            <p className="textbox">Select Timing</p>
            {Object.entries(openingHours).map(([day, time]) => (
              <div className="timeInput" key={day}>
                <label htmlFor={day}>{day}:</label>
                <div className="Time">
                  <input
                    type="time"
                    id={day}
                    value={time}
                    onChange={(e) => handleTimeChange(day, e.target.value)}
                  />
                  <input
                    type="time"
                    id={day + "2"} 
                    value={openingHourSecond[day]}
                    onChange={(e) => handleTimeChanges(day, e.target.value)}
                  />
                </div>
               
              </div>
            ))}
            <div className="selectLocation">
            <p className="textboxes">Insert Location</p>

         <input
        type="text"
        placeholder="Enter location"
        value={SelectInput}
        onChange={handleLocationChange}
        className="location-input"
        required
      />
      </div>
          </div>
          <div id="Link">
              <Link to="/AddImage" >
      <button id="clickBtns">
        Confirm  container
        </button>  
       </Link>
       </div>
        </div>
        <BottomNavBar/>
      </div>
    </>
  );
}

export default ContainersOpenningHours;
