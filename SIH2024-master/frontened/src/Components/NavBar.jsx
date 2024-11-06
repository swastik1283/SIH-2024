import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi"; // For the hamburger menu icons
import "../Css/NavBar.css";
import { navbarData } from "../data/NavbarData/navbardata";
import CTAButton from "./CTAButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../redux/services/operations/profileService";

const Navbar = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track which dropdown is open
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu open/close
  const dropdownRefs = useRef([]); // Array to hold references to each dropdown
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentUserDetails = async () => {
      // dispatch(setLoading(true));
      if (token) {
        await getCurrentUser(token, dispatch, navigate);
      }
      // dispatch(setLoading(false));
    };
    getCurrentUserDetails();
  }, [token, dispatch, navigate]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDropdownToggle = (index) => {
    // For desktop (hover), we don't need to toggle visibility on click
    if (window.innerWidth > 768) {
      setOpenDropdownIndex(index); // Open specific dropdown on hover for desktop
    } else {
      // Toggle dropdown on click for mobile
      setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    }
  };

  // Close dropdown when leaving hover on desktop
  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setOpenDropdownIndex(null); // Close dropdown on hover leave for desktop
    }
  };

  // Toggle dropdown content visibility in mobile view using useRef
  const toggleDropdownVisibility = (index) => {
    // Toggle visibility by setting display to block/none based on state
    if (dropdownRefs.current[index]) {
      dropdownRefs.current[index].style.display =
        dropdownRefs.current[index].style.display === "block"
          ? "none"
          : "block";
    }
  };

  return (
    <header>
      <div className="top-bar">
        <div className="logo">
          <h1>LOGISTICA</h1>
          <p>Architecture Agency</p>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            className="search-bar-input"
          />
          <button type="submit" className="search-btn">
            <FaSearch />
          </button>
        </div>

        {/* <div className="navBar-right-container"> */}
        {token === null ? (
          <div className="login-container">
            <CTAButton>
              <Link to="/login">Login</Link>
            </CTAButton>
            <CTAButton>
              <Link to="/register">Sign Up</Link>
            </CTAButton>
          </div>
        ) : (
          user &&
          user.avatar && (
            <div className="profile-icon-container">
              <div
                className="profile-icon"
                onClick={() => setIsMenuOpen((cur) => !cur)}
              >
                <img src={user.avatar} alt="User Avatar" />
              </div>
              {
                <ul
                  className={`dropdown-content dashboard-dropdown ${
                    isMenuOpen ? "open" : ""
                  }`}
                  // ref={(el) => ()} // Assigning ref to each dropdown content
                  style={{
                    display: isMenuOpen ? "block" : "none", // Control visibility through state
                  }}
                >
                  <li className="dropdown-item ">
                    <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                      Dashboard
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <a>Logout</a>
                  </li>
                </ul>
              }
            </div>
          )
        )}
        {/* </div> */}
      </div>

      <nav className="navbar">
        {/* Hamburger icon for mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FiX className="menu-icon" />
          ) : (
            <FiMenu className="menu-icon" />
          )}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {navbarData.map((navdata, index) => (
            <li
              key={index}
              className={`nav-link-items ${navdata.subMenu ? "dropdown" : ""}`}
              onMouseEnter={() => handleDropdownToggle(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                handleDropdownToggle(index); // For mobile click dropdown toggle
                toggleDropdownVisibility(index); // Use ref to show/hide content
              }}
            >
              {!navdata.subMenu && (
                <div className="link-icon-container">
                  <a
                    href={navdata.link}
                    className={navdata.subMenu ? "dropbtn" : ""}
                  >
                    {navdata.title}
                  </a>
                </div>
              )}

              {navdata.subMenu && (
                <div className="link-icon-container">
                  <a className={navdata.subMenu ? "dropbtn" : ""}>
                    {navdata.title}
                  </a>
                  <i className="drop-icons">
                    {openDropdownIndex !== index ? (
                      <MdOutlineKeyboardArrowDown />
                    ) : (
                      <MdOutlineKeyboardArrowUp />
                    )}
                  </i>
                </div>
              )}

              {/* Dropdown Menu */}
              {navdata.subMenu && (
                <ul
                  className={`dropdown-content ${
                    openDropdownIndex === index ? "open" : ""
                  }`}
                  ref={(el) => (dropdownRefs.current[index] = el)} // Assigning ref to each dropdown content
                  style={{
                    display: openDropdownIndex === index ? "block" : "none", // Control visibility through state
                  }}
                >
                  {navdata.submenuList.map((submenu, subIndex) => (
                    <li key={subIndex} className="dropdown-item">
                      <a href={submenu.link}>{submenu.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
