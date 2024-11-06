import React from "react";
import { FaInstagram, FaGoogle, FaFacebookF } from "react-icons/fa";

const SocialAccountsLogin = ({ type }) => {
  return (
    <>
      <div className="flex items-center pt-4">
        <div className="flex-grow border-t text"></div>
        <p className="px-3 text-sm text">{type} with social accounts</p>
        <div className="flex-grow border-t text"></div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        <button aria-label="Log in with Google" className="p-3 bg-transparent">
          <FaGoogle className="icons" />
        </button>
        <button aria-label="Log in with Twitter" className="p-3 bg-transparent">
          <FaInstagram className="icons" />
        </button>
        <button
          aria-label="Log in with Facebook"
          className="p-3 bg-transparent"
        >
          <FaFacebookF className="icons" />
        </button>
      </div>
    </>
  );
};

export default SocialAccountsLogin;
