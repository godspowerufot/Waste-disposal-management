import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { Link, useNavigate } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import '../react-calender.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../assets/contextAPI/firebasejsx";

import BottomNavBar from '../reusablecomponent/BottomNavbar';

function PickOff() {
  const currentDate = new Date(); // Get the current date
  const currentYear = currentDate.getFullYear();

  const [date, setDate] = useState(currentDate);
  const [preferredTime, setPreferredTime] = useState('12:00'); // Initialize with a default time
  const [isLoading, setIsLoading] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleTimeChange = (event) => {
    setPreferredTime(event.target.value);
  };

  let navigate=useNavigate()
  const addPickupLocation = async (date, time, year) => {
    setIsLoading(true);
  try {
    const locationsCollection = collection(db, 'location'); // Change 'locations' to your desired collection name
    const docRef = await addDoc(locationsCollection, {
      date: date,
      time: time,
      year: year,
    });
    setIsLoading(false);
    navigate('/ManageWaste/pick/AddAddress');

    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};
  return (
    <div className="calenderBox">
      <div className="headerTwo">
        <Link     onClick={() => navigate(-1)}
>
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
          <h1 className="headersone">Pickup off Availability</h1>
          <h2 id="h2">Select a Date</h2>
        </span>
      </div>

      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={date} />
      </div>

      <div className="selectPreferredTime">
        <h2 id="h2">Select Time</h2>
        <input
          type="time"
          id="preferredTime"
          value={preferredTime}
          min="00:00"
          max="23:59"
          step="1800"
          onChange={handleTimeChange}
        />

          <div>
             {isLoading ? (
            <div className="spinner"></div>
          ) : (
           
  <button
    className="btns"
    onClick={() => {
      addPickupLocation(date.toISOString(), preferredTime, currentYear);
    }}
  >
    Confirm Pickup
  </button>
  )}
  </div>   



      </div>
      <BottomNavBar/>
    </div>
  );
}

export default PickOff;
