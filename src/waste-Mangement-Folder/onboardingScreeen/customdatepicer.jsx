import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./contextApi";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../../assets/contextAPI/firebasejsx";
import "../onboardingScreeen/stylesForOnboardingScreen/cardblocContainer.css";

function DisplayOpeningHours() {
  const { openingHours, openingHourSecond, SelectInput } = UserAuth(); // Use the context hook

  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate()
  const handleVerification = async () => {
    setIsLoading(true);

    // Store the location in the database
    await storeLocationData(SelectInput);

    setIsLoading(false);

    // Navigate to the confirmation page
    navigate('/confirmation');
  };

  const storeLocationData = async (location) => {
    try {
      const messageRef = collection(db, "location");
      await addDoc(messageRef, {
        location: location,
      });
    } catch (error) {
      console.error('Error storing location:', error);
    }
  };

  return (
    <div>
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
          <h1 className="headersone">Verify</h1>
        </span>
      </div>
      <div className="check">Check, container details before proceeding</div>
      <div className="Opening-Hours">
        <div className="timeOpen">
          <h3>Open hours</h3>
        </div>
        <div className="Hours">
          {Object.entries(openingHours).map(([day, time]) => (
            <span key={day}>
              {day}: {time}
            </span>
          ))}-
          <div className="timeOpen">
            <h3>Closing hours</h3>
          </div>
          {Object.entries(openingHourSecond).map(([day, time]) => (
            <span key={day}>
              {day}: {time}
            </span>
          ))}
        </div>
        <div className="displayLocation">
          <h3>Location</h3>
          <p>{SelectInput}</p>
        </div>
        <div className="divBox">
          {isLoading ? (
            <div className="spinner"></div>
          ) : (
            <button id="clickBtnss" onClick={handleVerification}>
              Verify container
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DisplayOpeningHours;
