import React, { useEffect,useState } from "react"
import "../addAddressStyling.css"
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { db } from "../../assets/contextAPI/firebasejsx";
function AddHomeAdress() {
 
    
  const [isLoading, setIsLoading] = useState(false);
  const navigate=useNavigate() 
   const [form, setform] = useState({
        house: "",
        street: "",
     });

     const handleVerification = async () => {
      setIsLoading(true);
  
      // Store the location in the database
      await storeLocationData(form.house,form.street);
  
      setIsLoading(false);
  
      // Navigate to the confirmation page
      navigate('/ManageWaste/pick/AddAddress/Addressconfirmed');
    };
  
    const storeLocationData = async (House,Street) => {
      try {
        const messageRef = collection(db, "location");
        await addDoc(messageRef, {
          House: House,
          Street:Street
        });
      } catch (error) {
        console.error('Error storing location:', error);
      }
    };
      
     function handlechange(event) {
        const { name, value } = event.target;
        setform((p) => {
          return { ...p, [name]: value };
        });
      }
  return (
    <>
    <div className="HomeAdressBox">
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
            <h1 className="headersone">Complete Address</h1>
          </span>
        </div>
        <div id="boxes">
        <p className="textbox">Make it easy as possible for our pickup partner</p>
        </div>
        <div className="Addressbox">
            <form action="
            ">
          <div className="form-groups">
            <label htmlFor="home-Address">
                House / flat /block no
            </label>
            <input
        type="text"
        name="house"
        placeholder="Enter House name or Number "
        value={form.house}
        onChange={handlechange}
        className="location-input"
        required
      />
</div>
          <div className="form-groups" style={{marginTop:"40px"}}>
            <label htmlFor="home-Address">
                Street / road  / area
            </label>
            <input
        type="text"
        name="street"
        placeholder="Enter street Address "
        value={form.street}
        onChange={handlechange}
        className="location-input"
      />
</div>

            </form>
        </div>
        
    <span id="btncontaner">
    {isLoading ? (
            <div className="spinner"></div>
          ) : (
<button id="clickBtns"  onClick={handleVerification}>
          save address
        </button>)}
        </span>
        </div>
    </>
  )
}

export default AddHomeAdress