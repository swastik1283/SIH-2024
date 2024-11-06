import React, { useState } from "react";
import OtpInput from "react-otp-input";
import CTAButton from "./CTAButton";
import "../Css/Otp.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../redux/services/operations/authServices";

export default function Otp() {
  const email = useSelector((state) => state.auth?.signUpData?.email) ?? "";
  const { loading, signUpData } = useSelector((state) => state.auth);
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleVerifyAndSignUp = (e) => {
    e.preventDefault();
    console.log(signUpData);
    signUp({ ...signUpData, otp }, dispatch, navigate);
  };

  if (!signUpData) {
    return <Navigate to={"/register"} />;
  }

  return (
    <>
      <h3 className="otp-heading">Enter OTP:</h3>
      <form onSubmit={handleVerifyAndSignUp}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span style={{ width: "8px" }}></span>}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            border: "1px solid transparent",
            borderRadius: "8px",
            width: "54px",
            height: "54px",
            fontSize: "1.3rem",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
          }}
        />
        <button type="submit">Verify Email</button>
      </form>
      <button
        // className="flex items-center gap-x-2 text-blue-100"
        onClick={() => sendOtp(signUpData.email, dispatch, navigate)}
      >
        {/* <RxCountdownTimer /> */}
        <p>Resend OTP</p>
      </button>
    </>
  );
}
