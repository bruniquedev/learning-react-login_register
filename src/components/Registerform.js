import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
//Icon
import userIcon from "../Assets/images/user.svg";
import emailIcon from "../Assets/images/email.svg";
import passwordIcon from "../Assets/images/password.svg";
// Validate
import { validate } from "../helpers/validate";

// stylesheet
import styles from '../Assets/css/style.css';


const Registerform = () => {


    const [formData , setformData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        IsAccepted: false,
      });
    
      const [errors, setErrors] = useState({});
      const [touched, setTouched] = useState({});
    
      useEffect(() => {
        setErrors(validate(formData, "signUp"));
      }, [formData, touched]);
    
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
           document.getElementById("signup-form").reset(); 
         //console.log(response);
         event.target.reset();
        
      };



    return (

    
        
        <div className="container">
        
        <form className="formLogin" id="signup-form" onSubmit={submitHandler} autoComplete="off">
          <h2>Sign Up</h2>
          <div>
            <div className={errors.name && touched.name ? styles.unCompleted : !errors.name && touched.name ? styles.completed : undefined}>
              <input type="text" name="name" value={formData.name} placeholder="Name" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
              <img src={userIcon} alt="" />
            </div>
            {errors.name && touched.name && <span className={styles.error}>{errors.name}</span>}
          </div>
          <div>
            <div className={errors.email && touched.email ? styles.unCompleted : !errors.email && touched.email ? styles.completed : undefined}>
              <input type="text" name="email" value={formData.email} placeholder="E-mail" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
              <img src={emailIcon} alt="" />
            </div>
            {errors.email && touched.email && <span className={styles.error}>{errors.email}</span>}
          </div>
          <div>
            <div className={errors.password && touched.password ? styles.unCompleted : !errors.password && touched.password ? styles.completed : undefined}>
              <input type="password" name="password" value={formData.password} placeholder="Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
              <img src={passwordIcon} alt="" />
            </div>
            {errors.password && touched.password && <span className={styles.error}>{errors.password}</span>}
          </div>
          <div>
            <div className={errors.confirmPassword && touched.confirmPassword ? styles.unCompleted : !errors.confirmPassword && touched.confirmPassword ? styles.completed : !errors.confirmPassword && touched.confirmPassword ? styles.completed : undefined}>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} placeholder="Confirm Password" onChange={changeHandler} onFocus={focusHandler} autoComplete="off" />
              <img src={passwordIcon} alt="" />
            </div>
            {errors.confirmPassword && touched.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
          </div>
          <div>
            <div className={styles.terms}>
              <input type="checkbox" name="IsAccepted" value={formData.IsAccepted} id="accept" onChange={changeHandler} onFocus={focusHandler} />
              <label htmlFor="accept">I accept terms of privacy policy</label>
            </div>
            {errors.IsAccepted && touched.IsAccepted && <span className={styles.error}>{errors.IsAccepted}</span>}
          </div>
          <div>
            <button type="submit">Create Account</button>
            <span style={{ color: "#a29494", textAlign: "center", display: "inline-block", width: "100%" }}>
              Already have a account? <Link to="/login">Sign In</Link>
            </span>
          </div>
        </form>
      
      </div>
        
    );
};

export default Registerform;