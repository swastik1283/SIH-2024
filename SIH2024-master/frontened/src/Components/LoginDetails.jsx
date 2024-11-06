import React from "react";
import { useState } from "react";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import {
  login,
  sendOtp,
  signUp,
} from "../redux/services/operations/authServices";
import { useDispatch, useSelector } from "react-redux";
import { setSignUpData } from "../redux/slices/authSlice";
import SocialAccountsLogin from "./SocialAccountsLogin";

const LoginDetails = ({ form }) => 
{
  const [isVisible, setIsVisible] = useState(false);

  function handlePasswordClick() 
  {
    setIsVisible((curVal) => !curVal);
  }

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const { signUpData, setToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmitlogin = async (e) => {
    e.preventDefault();
    login(email, password, dispatch, useNavigate);
  };
  const handleOnSubmitsign = async (e) => {
    e.preventDefault();

    // Setting signup data that will be used after otp verification
    dispatch(setSignUpData(formData));
    sendOtp(email, dispatch, navigate);
  };

  return (
    <>
      <p className="text-center text-xl font-bold">
        {form === "sign" ? "Register Your Account" : "Login"}
      </p>
      <form
        className="mt-6"
        onSubmit={form === "login" ? handleOnSubmitlogin : handleOnSubmitsign}
      >
        <div className="mt-1 text-sm">
          <label htmlFor="email" className="block text mb-1">
            Email
          </label>

          <input
            type="text"
            value={email}
            name="email"
            id="email"
            className="w-full rounded-md border border-gray-700 p-3 focus:border-purple-400 outline-none text-gray-900"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="mt-4 text-sm">
          <label htmlFor="password" className="block  mb-1 text">
            Password
          </label>
          <div className="relative">
          <input
            type={isVisible ? "text" : "password"}
            placeholder="********"
            value={password}
            name="password"
            id="password"
            onChange={handleOnChange}
            className={`block w-full p-3 text-black bg-white border border-gray-200 appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm reset-input border border-gray-700 Passwordclass`}
          />
          <span
            className="w-1/9 h-full flex items-center justify-end absolute top-0 right-0"
            onClick={handlePasswordClick}
          >
            {isVisible ? (
              <BiSolidShow className="text-gray-500 text-xl mr-3 hover:text-gray-800" />
            ) : (
              <BiSolidHide className="text-gray-500 text-xl mr-3 hover:text-gray-800" />
            )}
          </span>
        </div>

          {/* <input
            type="password"
            name="password"
            id="password"
            value={password}
            className="w-full rounded-md border border-gray-700 p-3 focus:border-purple-400 outline-none text-gray-900"
            onChange={handleOnChange}
            required
          /> */}

          <div className="flex justify-end text-xs mt-2 text">
            <Link to="/forgot-password" className="hover:underline text">
              Forgot Password?
            </Link>
          </div>
        </div>
        <button
          type="submit"
          className="w-full mt-6 bg-purple-500 p-3 text-gray-900 rounded-md font-semibold  transition submitButton" //submit button
        >
          Sign In
        </button>
      </form>
      <SocialAccountsLogin type="Login" />
      <p className="text-center text-xs mt-6 text">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="hover:underline text">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginDetails;
