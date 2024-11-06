import React from "react";
import { Link } from "react-router-dom";
// import "../Css/Footer.css";

const FooterCard = ({ data }) => {
  return (
    <div className={`footer-card ${data.title.toLowerCase()}`}>
      <h2>{data.title}</h2>
      <div className="footer-links">
        {data.links.map((link, index) => {
          return (
            <div key={index} className="footer-link-item">
              {link.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FooterCard;
