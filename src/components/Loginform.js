import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import emailIcon from "../Assets/images/email.svg";
import passwordIcon from "../Assets/images/password.svg";
const Loginform = () => {


        const [formData , setformData] = useState({
          email: "",
          password: "",
        });
      
        const [touched, setTouched] = useState({});
      
        const changeHandler = (event) => {
          if (event.target.name === "IsAccepted") {
            setformData({ ...formData, [event.target.name]: event.target.checked });
          } else {
            setformData({ ...formData, [event.target.name]: event.target.value });
          }
        };
      
        const focusHandler = (event) => {
          setTouched({ ...touched, [event.target.name]: true });
        };
      
        const submitHandler = (event) => {
          event.preventDefault();
          console.log(formData);
    
          console.log("supposed to be reset")
             document.getElementById("login-form").reset(); 
           //console.log(response);
           event.target.reset();
          
        };
      

    return (
        
        <div className="container" >
        <form className="formLogin" id="login-form" onSubmit={submitHandler} autoComplete="off">
          <h2>Sign In</h2>
          <div>
            <div>
              <input type="text" name="email" value={formData.email} placeholder="E-mail" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
              <img src={emailIcon} alt="" />
            </div>
          </div>
          <div>
            <div>
              <input type="password" name="password" value={formData.password} placeholder="Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
              <img src={passwordIcon} alt="" />
            </div>
          </div>
  
          <div>
            <button type="submit">Login</button>
            
            <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
              Don't have a account? <Link to="/forgotpassword">Forgot password ?</Link>
            </span>

            <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
              Don't have a account? <Link to="/signup">Create account</Link>
            </span>
          </div>
        </form>
      </div>
        
    );
};

export default Loginform;