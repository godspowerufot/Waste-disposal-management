import React, { useEffect,useState } from "react"
import "../styling/LoginScreen.css"
import { Link } from "react-router-dom";
import { UserAuth } from "../contextApi";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
    // update email and password form data
    const [form, setform] = useState({
      email: "",
      password: "",
   });
    const { logIn } = UserAuth();
    const [loading, setLoading] = useState(false); // To track loading state
    const [error, setError] = useState(null); // To track error state
   let navigate=useNavigate()
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      setError(null);
      try {
        await logIn(form.email, form.password);
        setLoading(false)
        navigate("/ManageWaste");
      } catch (error) {
        setLoading(false);
  
        // Set the error state to display an alert
        setError(" failed. Please try again.")     }
    };
function handlechange(event) {
    const { name, value } = event.target;
    setform((p) => {
      return { ...p, [name]: value };
    });
  }

  return (
    <>
      <div className="LoginBody">
        <div id="boxLogin">
          <div className="boxtext"></div>
          <h1 className="TextHead">WASTO
          <p className="smallText">Please Login To Your Account</p>
</h1>
<div className="Icons">
  
  <span className="icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="70" viewBox="0 0 81 70"  fill=" #fb791b">
  <rect width="80.0866" height="69.5489" rx="17.5189"  fill=" #fb791b"/>
  <path d="M30.6268 30.043C31.5036 28.2972 32.8486 26.8295 34.5115 25.8042C36.1744 24.7788 38.0897 24.2361 40.0433 24.2367C42.8832 24.2367 45.269 25.281 47.0931 26.9818L44.0719 30.004C42.9791 28.9597 41.5903 28.4276 40.0433 28.4276C37.2983 28.4276 34.9747 30.2822 34.1475 32.7723C33.9367 33.4045 33.8166 34.0789 33.8166 34.7744C33.8166 35.4699 33.9367 36.1443 34.1475 36.7766C34.9757 39.2677 37.2983 41.1213 40.0433 41.1213C41.4606 41.1213 42.6672 40.7472 43.6114 40.1149C44.1588 39.7546 44.6274 39.2869 44.9889 38.7403C45.3504 38.1937 45.5973 37.5794 45.7147 36.9347H40.0433V32.8587H49.9677C50.0921 33.5478 50.1595 34.2665 50.1595 35.0136C50.1595 38.2234 49.0109 40.9253 47.0172 42.7589C45.2742 44.369 42.8885 45.3121 40.0433 45.3121C38.6593 45.3127 37.2888 45.0405 36.0101 44.5111C34.7313 43.9818 33.5694 43.2056 32.5908 42.227C31.6122 41.2483 30.836 40.0864 30.3066 38.8077C29.7772 37.529 29.5051 36.1584 29.5056 34.7744C29.5056 33.0736 29.9124 31.4656 30.6268 30.043Z" fill="#F8F8F8"/>
</svg>
  </span>
  <span className="icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="70" viewBox="0 0 81 70"  fill=" #fb791b">
  <rect x="0.108154" width="80.0866" height="69.5489" rx="17.5189"  fill=" #fb791b"/>
  <path d="M44.186 27.0314H46.4741V23.3453C45.3663 23.2356 44.2532 23.1814 43.1394 23.183C39.829 23.183 37.5652 25.1072 37.5652 28.631V31.6679H33.8289V35.7945H37.5652V46.3659H42.044V35.7945H45.7682L46.3281 31.6679H42.044V29.0367C42.044 27.8196 42.3848 27.0314 44.186 27.0314Z" fill="#F8F8F8"/>
</svg>
  </span>
  <span className="icon">
  <svg xmlns="http://www.w3.org/2000/svg" width="81" height="70" viewBox="0 0 81 70" fill="#fb791b">
    <rect x="0.108154" width="80.0866" height="69.5489" rx="17.5189" fill="#fb791b" />
    <path
      d="M52.47 22.92C53.09 23.19 53.73 23.35 54.39 23.39C53.7 23.74 53 23.96 52.27 24.04C53 23.67 53.59 23.08 53.97 22.35C53.27 22.69 52.51 22.92 51.72 23.05C51.01 22.33 50.03 21.96 48.99 21.96C46.93 21.96 45.31 23.58 45.31 25.63C45.31 25.93 45.34 26.22 45.39 26.5C41.18 26.33 37.39 24.13 34.92 21.01C34.47 21.9 34.2 22.91 34.2 24C34.2 25.58 35.37 26.92 36.84 27.27C36.19 27.42 35.49 27.48 34.79 27.48C34.51 27.48 34.24 27.46 33.97 27.41C34.52 28.18 35.27 28.74 36.14 29.05C35.43 28.86 34.67 28.5 33.92 28C33.92 28 33.92 28 33.92 28.01C33.92 29.24 34.73 30.31 35.88 30.69C35.13 30.64 34.41 30.44 33.76 30.13C33.76 30.14 33.76 30.15 33.76 30.16C33.76 31.39 34.59 32.47 35.74 32.85C35.05 33.06 34.32 33.13 33.57 33.13C33.27 33.13 32.97 33.1 32.68 33.06C33.84 33.85 34.97 34.42 36.18 34.42C35.43 35.01 34.59 35.39 33.68 35.57C34.45 36.05 35.35 36.33 36.29 36.33C35.94 36.56 35.57 36.68 35.18 36.68C34.99 36.68 34.8 36.65 34.61 36.61C35.4 37.15 36.28 37.49 37.2 37.49C36.69 37.83 36.15 38.05 35.56 38.05C35.39 38.05 35.23 38.03 35.06 38.01C35.84 38.58 36.7 39 37.63 39C37.6 38.95 37.56 38.9 37.52 38.85C37.18 38.52 36.78 38.27 36.33 38.12C37.08 38.58 37.84 38.79 38.63 38.79C39.55 38.79 40.35 38.42 40.95 37.86C40.72 38.4 40.28 38.81 39.75 38.99C40.14 38.79 40.51 38.5 40.83 38.15"
      fill="#F8F8F8"
    />
  </svg>
  </span>

</div>
<div className="stroke">
  <div className="strokeLength">
  <svg xmlns="http://www.w3.org/2000/svg" width="86" height="2" viewBox="0 0 86 2"  fill=" #fb791b">
  <path d="M0 1H86"  stroke=" #fb791b"/>
</svg></div>
<h2 > Or</h2>
  <div className="strokeLength"> <svg xmlns="http://www.w3.org/2000/svg" width="86" height="2" viewBox="0 0 86 2"  fill=" #fb791b">
  <path d="M0 1H86"  stroke=" #fb791b"/>
</svg></div>
</div>
        <div className="form" >
          <form action=" "  onSubmit={handleSubmit}>
          <div class="form-group">
       <input type="text" id="email" name="email"  placeholder="Enter your email " onChange={handlechange} value={form.email}required/>
            </div>
            <div class="form-group">
      
                <input type="password" id="password" name="password" placeholder="Enter your password"    onChange={handlechange}
              value={form.password} required/>
            </div>
            {error && <div className="error-alert">{error}</div>}
            {loading ? (
            <div className="spinnerLogin"></div>
          ) :(
            <button type="submit" className="btn">LogIn</button>)}
         </form>
        </div>
        <div className="link">
        Don’t Have Account?   <Link to="/SignUp">  Sign Up</Link>
</div>
        </div>

        
      </div>
    </>
  )
}

export default LoginScreen