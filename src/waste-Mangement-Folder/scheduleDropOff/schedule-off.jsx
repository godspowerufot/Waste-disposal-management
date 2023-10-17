import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../assets/contextAPI/firebasejsx";
import Calendar from 'react-calendar';
import { Link, useNavigate } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';
import '../react-calender.css';
import { UserAuth } from "../onboardingScreeen/contextApi";
import BottomNavBar from "../reusablecomponent/BottomNavbar";

function DisplayImageFromDatabase() {
    const [imageURL, setImageURL] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
const {setImage}=UserAuth()
    const { user } = UserAuth();
    useEffect(() => {
        const fetchImage = async () => {
            if (user?.email) {
                try {
                    const imagesRef = collection(db, "containers");
                    const userQuery = query(imagesRef, where("userId", "!=", user?.uid));
                    const querySnapshot = await getDocs(userQuery);

                    if (querySnapshot.size === 1) {
                        // We assume that there should be only one image for this user
                        const imageData = querySnapshot.docs[0].data();
                        setImageURL(imageData.imageUrl);
                    }

                    setIsLoading(false);
                } catch (error) {
                    console.error("Error fetching image:", error);
                    setError(error.message);
                    setIsLoading(false);
                }
            }
        };

        fetchImage();
    }, [user]);

    const currentDate = new Date();
    const [date, setDate] = useState(currentDate);

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    let navigate=useNavigate()

    return (
        <div>
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
                    Make it easier for the drop-folks to spot your container! 😮
                </p>
            </div>
            <div className="containerForImgae">
                <div className="image-upload-box" style={{ minWidth: "259px",marginLeft:"22px" }}>
                    <label className="add-image-label" htmlFor="image-upload" style={{ minWidth: "221px",marginRight:"50px" }} >
                        
                            <div>
                                <img src={setImage} alt="Database Image" width="100%" height="100%"/>
                            </div>
                  
                    
                    </label>
                </div>
                <div className="calendar-container">
                    <Calendar onChange={handleDateChange} value={date} />
                    <Link to="DropOffConfirmed">
                        <button id="clickBtness" style={{ marginBottom: "5rem" }}>
                            Confirm Time slot
                        </button>
                    </Link>
                </div>
            </div>
            <BottomNavBar />
        </div>
    );
}

export default DisplayImageFromDatabase;
