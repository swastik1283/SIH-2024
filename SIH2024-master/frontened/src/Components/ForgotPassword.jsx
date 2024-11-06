import React from "react";
import "../Css/ForgotPassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    /* From Uiverse.io by gharsh11032000 */
    <div className="form-container">
      <div className="logo-container">Forgot Password</div>

      <form className="form">
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <button className="form-submit-btn" type="submit">
          Send Email
        </button>
      </form>

      <p className="signup-link">
        Don't have an account?
        <Link to="/register" className="signup-link link">
          Signup now
        </Link>
      </p>
    </div>
  );
};

export default ForgotPassword;
