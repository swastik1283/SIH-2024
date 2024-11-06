import React from "react";
import "../Css/Login.css";
import LoginDetails from "./LoginDetails";

const Login = ({ children }) => {
  return (
    <div className="flex justify-center items-center vertical-align">
      <div className="w-80 rounded-lg p-8 text FormBG">{children}</div>
    </div>
  );
};

export default Login;
