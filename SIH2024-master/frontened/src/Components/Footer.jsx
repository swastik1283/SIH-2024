import React from "react";
import "../Css/Footer.css";
import { Link } from "react-router-dom";
import FooterCard from "./FooterCard";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import footerLinks from "../data/FooterData/footerdata";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top-section">
        <div className="footer-left-section">
          <div className="footer-logo">
            <Link to={"/"}>
              <img
                src="/path-to-your-logo.png"
                alt="logo"
                className="object-contain"
              />
            </Link>

            <FooterCard data={footerLinks[0]} />

            <div className="footer-links">
              <div className="footer-icons">
                <Link to={"https://www.linkedin.com/in/sunny8080/"}>
                  <FaLinkedin />
                </Link>
                <Link to={"https://twitter.com/sunny8080_"}>
                  <FaTwitter />
                </Link>
                <Link to={"https://www.youtube.com/"}>
                  <FaYoutube />
                </Link>
                <Link to={"https://www.facebook.com/sunny80801/"}>
                  <FaFacebook />
                </Link>
                <Link to={"https://www.instagram.com/sunny8080_/"}>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {Array(6)
          .fill(1)
          .map((_, i) => {
            return <FooterCard data={footerLinks[i + 1]} />;
          })}
      </div>

      <div className="footer-bottom-container">
        <div className="footer-bottom-links">
          {BottomFooter.map((ele, i) => (
            <div
              key={i}
              className={`footer-bottom-link ${
                BottomFooter.length - 1 === i ? "" : "footer-bottom-link-border"
              }`}
            >
              <Link to={ele.split(" ").join("-").toLowerCase()}>{ele}</Link>
            </div>
          ))}
        </div>
        <div className="footer-bottom-text">
          Made with ❤️ CodeHelp © 2023 Studynotion
        </div>
      </div>
    </div>
  );
};

export default Footer;
