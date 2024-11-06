import React from "react";
import "../Css/Login.css";
// import Login from "../Components/Login.jsx";

const LoginPage = ({ children }) => {
  return (
    <div className="flex justify-center items-center vertical-align">
      <div className="rounded-lg p-8 text FormBG">{children}</div>
    </div>
  );
};

export default LoginPage;
