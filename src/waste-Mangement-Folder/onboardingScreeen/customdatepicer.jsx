import React from "react";

function DisplayOpeningHours({ location }) {
  const openingHours = location.state.openingHours;

  // Render the openingHours data
  return (
    <div>
      <h2>Opening Hours</h2>
      <ul>
        {Object.entries(openingHours).map(([day, time]) => (
          <li key={day}>
            {day}: {time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayOpeningHours;
