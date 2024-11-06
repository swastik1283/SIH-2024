import React from "react";
import "../Css/Newsletter.css";
import Line from "./Line";
import { IoMdMail } from "react-icons/io";

const Newsletter = () => {
  return (
    <section>
      <div className="newsletter-heading">
        <Line />
        <span>Subscribe to our Newsletter</span>
      </div>
      <div className="newsletter-section-background">
        <div className="newsletter-overlay">
          <div className="wrapper">
            <form action="#" className="card-content">
              <div className="container">
                <div className="image">
                  <IoMdMail />
                </div>
                <h1>Subscribe</h1>
                <p>Subscribe to our newsletter and stay updated.</p>
              </div>
              <div className="news-form-input">
                <label for="email"></label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
