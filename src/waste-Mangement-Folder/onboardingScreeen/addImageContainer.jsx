import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../onboardingScreeen/stylesForOnboardingScreen/cardblocContainer.css";
import { UserAuth } from "./contextApi";
import { collection, addDoc } from 'firebase/firestore';
import emoji from "../icon/happy.png"
import { db } from "../../assets/contextAPI/firebasejsx";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function AddImageContainer() {
  const { setImage, setSelectedImages } = UserAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      try {
        // Initialize Firebase Storage
        const storage = getStorage();
        const storageRef = ref(storage, 'images/' + selectedFile.name);

        // Upload the image to Firebase Storage
        await uploadBytes(storageRef, selectedFile);

        // Get the download URL of the uploaded image
        const url = await getDownloadURL(storageRef);

        // Set the image URL and selected image
        setImageUrl(url);
        setSelectedImages(url)
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

  };
  
  const handleAddImage = () => {
    // Trigger the file input element when the "Add Image" button is clicked
    fileInputRef.current.click();
  };

  const handleCreateContainer = async () => {
  
    if (imageUrl) {
      setIsLoading(true);
      try {
        // Initialize Firebase Storage

        // Save the image URL to the container data
        const containerData = {
          name: "YourContainerName",
          imageUrl: imageUrl,
          otherContainerData: "imageData",
        };
  
        // Create the container document in Firestore
        const containersRef = collection(db, "containers");
        await addDoc(containersRef, containerData);
  
        // After creating the container, you can navigate to a different page
        navigate("/SubmitContainerDetail");
        setIsLoading(false);
      } catch (error) {
        console.error("Error creating container:", error);
        setIsLoading(false);
      }
    } else {
      setShowModal(true);
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
              stroke="#fb791b"
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
        <p className="textboxes">
          Make it easier for the drop-folks to spot your container!
         </p>
      </div>
      <div className="containerForImgae">
        <div className="image-upload-box">
          <label className="add-image-label" htmlFor="image-upload">
          <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        ref={fileInputRef}
      />
      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" width="200" />
        </div>
      )}

          {/* Use the camera SVG icon here */}
          <svg xmlns="http://www.w3.org/2000/svg" width="39" id="svg"height="48" viewBox="0 0 24 24"><g fill="currentColor"><path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.408 4.408 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697c0-3.065 0-4.597-.749-5.697a4.407 4.407 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.405 4.405 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364c0 3.064 0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" opacity=".5"/><path d="M17.556 9.272a.826.826 0 0 0-.833.819c0 .452.373.818.833.818h1.111c.46 0 .834-.367.834-.818a.826.826 0 0 0-.834-.819h-1.11Z"/><path fill-rule="evenodd" d="M12 9.272c-2.3 0-4.166 1.832-4.166 4.091c0 2.26 1.865 4.091 4.167 4.091c2.3 0 4.166-1.831 4.166-4.09c0-2.26-1.865-4.092-4.166-4.092Zm0 1.637c-1.38 0-2.5 1.099-2.5 2.454c0 1.356 1.12 2.455 2.5 2.455c1.381 0 2.5-1.099 2.5-2.455c0-1.355-1.119-2.454-2.5-2.454Z" clip-rule="evenodd"/></g></svg>
          </label>
        </div>
       
        <button  onClick={handleAddImage} className="buttonadd">
          Add Image
        </button>
        <div className="Hours">
        {isLoading ? (  
          <div className="spinner"></div>
          ) : (
        <button id="clickBtness" onClick={handleCreateContainer}>
        Create Container
      </button> )}    </div>
      {showModal && !imageUrl && (
  <div className={`modal ${showModal ? 'show' : ''}`}>
    <div className="modal-content">
      <span className="close" onClick={() => setShowModal(false)}>
        &times;
      </span>
      <p>Please select an image before creating a container.</p>
    </div>
  </div>
)}
</div>
      
    </div>
  );
}

export default AddImageContainer;
