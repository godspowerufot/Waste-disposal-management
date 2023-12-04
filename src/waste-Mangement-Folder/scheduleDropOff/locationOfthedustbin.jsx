import React, { useEffect, useState } from "react";
import { db } from "../../assets/contextAPI/firebasejsx";
import { collection, getDocs } from "firebase/firestore";
import BottomNavBar from "../reusablecomponent/BottomNavbar";
import { Link, useNavigate } from "react-router-dom";
import MapDirection from "./MapDirection";
import "./LocationList.css"; // Import your CSS file

function LocationList() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "locations"));
        const locationData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setLocations(locationData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching locations:", error);
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const handleViewClick = (location) => {
    setSelectedLocation(location);
    navigate("/MapView");
  };
console.log(selectedLocation)
  return (
    <div>
      <div className="headerTwo">
        <Link onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="28"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="#fb791b"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M31 36L19 24l12-12"
            />
          </svg>
        </Link>
        <span className="headerbox">
          <h2 className="headersone" style={{ fontSize: "16px" }}>
            Location List
          </h2>
        </span>
      </div>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
    
        </div>
      ) : (
        <div className="card-container">
          {locations.map((location) => (
            <div className="card" key={location.id}>
              <div className="card-header">{location.userEmail}</div>
              <div className="card-body">
                <p>{location.DustBinLocation}</p> <p style={{ marginLeft: "5px" }}> @</p>{" "}
                <p>
                  Lat:{location.latitude} and Lon:{location.longiitude}l
                </p>
                <div className="centering-button">
                  <button
                    // onClick={() => handleViewClick(location)}
                    className="view-button"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedLocation && (
        <MapDirection
          startingLocation={{
            latitude: locations.latitude,
            longitude: locations.longitude,
          }}
          destinationLocation={{
            latitude: location.latitude,
            longitude: location.longitude, // You need to provide the destination location here
          }}
        />
      )}

      <Link to="/ManageWaste/DropOff/DropOffConfirmed" style={{marginLeft:"30px"}}> 
        <button id="clickBtnesss" style={{ marginBottom: "5rem" ,marginLeft:"20px"}}>
          CONFIRM SCHEDULE
        </button>
      </Link>
      <BottomNavBar />
    </div>
  );
}

export default LocationList;
