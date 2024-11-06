import React from "react";
// import Login from "./Components/Login.jsx";
// import Navbar from "./Components/NavBar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/NavBar";
import LoginPage from "./Pages/LoginPage";
import LoginDetails from "./Components/LoginDetails";
import Otp from "./Components/Otp";
import VerifyEmail from "./Components/VerifyEmail";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import WideProductCards from "./Components/WideProductCards";
import Dashboard from "./Pages/Dashboard.js";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import PublicRoute from "./Components/PublicRoute.jsx";
import PDAForm from "./Components/PDAForm.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <PublicRoute
              route={
                <LoginPage>
                  <LoginDetails form={"login"} />
                </LoginPage>
              }
            />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute
              route={
                <LoginPage>
                  <SignUp form={"sign"} />
                </LoginPage>
              }
            />
          }
        />
        <Route
          path="/verify-email"
          element={
            <PublicRoute
              route={
                <LoginPage>
                  <Otp />
                </LoginPage>
              }
            />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicRoute
              route={
                <LoginPage>
                  <ForgotPassword />
                </LoginPage>
              }
            />
          }
        />
        <Route
          path="/reset-password"
          element={
            <PublicRoute
              route={
                <LoginPage>
                  <ResetPassword />
                </LoginPage>
              }
            />
          }
        />

        <Route
          path="/dashboard"
          element={<PrivateRoute route={<Dashboard />} />}
        />
        <Route
          path="/pda/register"
          element={<PrivateRoute route={<PDAForm />} />}
        />
      </Routes>
    </>
  );
};

export default App;
