import React from "react";
import { useState } from "react";
import "../Css/SignUp.css";
import { Link,useNavigate } from "react-router-dom";
import SocialAccountsLogin from "./SocialAccountsLogin";
import { setSignUpData } from "../redux/slices/authSlice";
import { sendOtp } from "../redux/services/operations/authServices";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => 
{
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    confirmPassword:"",
  });
  const { email, password,confirmPassword,firstName,lastName } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleOnSubmitsign = async (e) => 
  {
    e.preventDefault();
    // Setting signup data that will be used after otp verification
    dispatch(setSignUpData(formData));
    sendOtp(email, dispatch, navigate);
  };


  return (
    <>
      <form className="form" onSubmit={handleOnSubmitsign}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex-signup">
          <label>
            <input required type="text" 
            className="input"
            name="firstName"
            id="firstName"
            onChange={handleOnChange}
             />
            <span>Firstname</span>
          </label>

          <label>
            <input required type="text" 
            className="input"
            name="lastName"
            id="lastName"
            onChange={handleOnChange}
             />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input required type="email" 
          className="input"
          name="email"
          id="email"
          onChange={handleOnChange}
           />
          <span>Email</span>
        </label>

        <label>
          <input required type="password" 
          className="input"
          name="password"
          id="password"
          onChange={handleOnChange}
          />
          {/* <PasswordField
            placeholder=""
            Passwordclass="input"
        
          /> */}
          <span>Password</span>
        </label>
        <label>
          <input required type="password" 
          className="input"
          name="confirmPassword"
          id="confirmPassword"
          onChange={handleOnChange}
           />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
      </form>
      <SocialAccountsLogin type="Signup" />
      <p className="signin">
        Already have an acount ? <Link to="/login">Signin</Link>
      </p>
    </>
  );
};

export default SignUp;
