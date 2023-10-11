import React, { useEffect,useState } from "react"
import "../styling/LoginScreen.css"
import { Link } from "react-router-dom";
import { UserAuth } from "../contextApi";
import { useNavigate } from "react-router-dom";

function SignUpScreen() {
    // update email and password form data
    const [form, setform] = useState({
      email: "",
      password: "",
   });
    const { signUp } = UserAuth();
    const [loading, setLoading] = useState(false); // To track loading state
    const [error, setError] = useState(null); // To track error state
   let navigate=useNavigate()
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      setError(null);
      try {
        await signUp(form.email, form.password);
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
          <h1 className="TextHead">ChatGuardian
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
  <svg  id="svg"xmlns="http://www.w3.org/2000/svg" width="81" height="70" viewBox="0 0 81 70"  fill=" #fb791b">
  <rect x="0.216431" width="80.0866" height="69.5489" rx="17.5189"  fill=" #fb791b"/>
  <path d="M48.1599 46.405C46.73 47.7396 45.1689 47.5289 43.6661 46.8967C42.0757 46.2505 40.6167 46.2224 38.9388 46.8967C36.8378 47.7677 35.729 47.5148 34.4742 46.405C27.3542 39.3386 28.4047 28.5775 36.4877 28.1841C38.4574 28.2824 39.8288 29.2237 40.9815 29.308C42.7031 28.9708 44.3518 28.0015 46.1902 28.1279C48.3933 28.2965 50.0566 29.1394 51.1509 30.6566C46.5987 33.2837 47.6784 39.0576 51.8512 40.6732C51.0196 42.7805 49.9399 44.8737 48.1453 46.4191L48.1599 46.405ZM40.8356 28.0998C40.6167 24.967 43.2576 22.3821 46.2923 22.1292C46.7155 25.7537 42.8782 28.451 40.8356 28.0998Z" fill="#F8F8F8"/>
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
            <button type="submit" className="btn">SignUp</button>)}
         </form>
        </div>
        <div className="link">
        Don’t Have Account?   <Link to="/login">  Login</Link>
</div>
        </div>

        
      </div>
    </>
  )
}

export default SignUpScreen