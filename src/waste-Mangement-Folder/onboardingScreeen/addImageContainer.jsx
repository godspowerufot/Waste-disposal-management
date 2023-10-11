import React, { useState } from "react";
import { Link} from "react-router-dom";
import "../onboardingScreeen/stylesForOnboardingScreen/cardblocContainer.css";

function AddImageContainer() {
  const [location, setLocation] = useState("");
  const [SelectImage, setImage] = useState(null);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onLocationChange(e.target.value); // Pass the location to the parent component
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if(selectedImage){
        const reader=new FileReader();
        reader.onload=(e)=>{
            setImage(e.target.result)
        }
        reader.readAsDataURL(file)
    }
    setImage(selectedImage);

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
            <h2 className="headersone">Images</h2>
          </span>
        </div>
        <div className="content">
        <p className="textboxes">Make it easier for thedrop-folks to spot your container!</p>

        </div>
     <div className="divBox">
        hey
     </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="image-input"
      />
      {SelectImage&&(<img src={SelectImage} alt="select" className="selected-image"/>)}
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={handleLocationChange}
        className="location-input"
      />
    </div>
  );
}

export default AddImageContainer;
