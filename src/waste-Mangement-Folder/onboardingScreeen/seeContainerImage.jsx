import React from "react";
import { UserAuth } from "./contextApi";
import { Link } from "react-router-dom";
 export function DisplayAddImage() {
  const { selectedImage } = UserAuth(); // Use the context hook to access the selected image

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
      <div className="image-upload-box">
      
      {/* Display the selected image */}
      {/* ... rest of your component */}
      </div>
      
    </div>
  );
}
