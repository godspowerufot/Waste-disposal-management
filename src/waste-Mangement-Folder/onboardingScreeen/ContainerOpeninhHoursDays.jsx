import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
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

  const [openingHours, setOpeningHours] = useState({
    Monday: "",
    Tuesday: "",
    Wednesday: "",
    Thursday: "",
    Friday: "",
  });

  const handleTimeChange = (day, time) => {
    setOpeningHours({ ...openingHours, [day]: time });
  };
  const handleSubmit = () => {
    // Navigate to the next component and pass openingHours as a parameter
    history.push("/next-component", { openingHours });
  };

  return (
    <>
      <div className="containerBox">
        <div className="headerTwo">
          <Link>
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
                    value={openingHours[day]}
                    onChange={(e) => handleTimeChange(day, e.target.value)}
                  />
                </div>
                <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContainersOpenningHours;
