import React, { useState } from "react";

function AddImageContainer() {
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onLocationChange(e.target.value); // Pass the location to the parent component
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div>
      <h2>Add an Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="image-input"
      />
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
