import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import '../../../src/index.css';
import Button from './button';
import { Logo } from "../../assets/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for mobile number popup visibility
  const [isOtpPopupOpen, setIsOtpPopupOpen] = useState(false); // State for OTP popup visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen); // Toggle mobile number popup visibility
  };

  const handleContinue = () => {
    setIsPopupOpen(false); // Close the mobile number popup
    setIsOtpPopupOpen(true); // Open the OTP popup
  };

  const closeOtpPopup = () => {
    setIsOtpPopupOpen(false); // Close OTP popup
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo on left */}
          <div className="logo-container" style={{ cursor: 'pointer' }}>
            <NavLink to="/">
              <img src={Logo} alt="AC Wallah Logo" className="logo" />
            </NavLink>
          </div>

          {/* Right side navigation and auth */}
          <div className="nav-right">
            {/* Desktop Navigation */}
            <div className="nav-links">
              <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
              <NavLink to="/old_ac" className="nav-link" activeClassName="active">AC Listing</NavLink>
              <NavLink to="/pricing" className="nav-link" activeClassName="active">Pricing</NavLink>
              <NavLink to="/about" className="nav-link" activeClassName="active">About Us</NavLink>
            </div>
            <button className="refer-button">Refer Someone</button>

            {/* Login/Signup Button */}
            <div className="auth-button">
              <Button text="Login / Signup" className="default-button" onClick={togglePopup} />
            </div>
          </div>

          {/* Mobile Menu Button - only visible on small screens */}
          <div className="mobile-menu-button">
            <button onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <NavLink to="/" className="mobile-nav-link" activeClassName="active">Home</NavLink>
            <NavLink to="/old_ac" className="mobile-nav-link" activeClassName="active">AC Listing</NavLink>
            <NavLink to="/pricing" className="mobile-nav-link" activeClassName="active">Pricing</NavLink>
            <NavLink to="/about" className="mobile-nav-link" activeClassName="active">About Us</NavLink>
            <button className="refer-button">Refer Someone</button>
            <button className="mobile-login-button">Login / Signup</button>
          </div>
        )}
      </nav>

      {/* Mobile Number Popup */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="auth-page">
            <Button text="×" className="popup-close-button" onClick={togglePopup} />
            <div className="container" id="container">
              <div className="form-container sign-up-container">
                <form action="#">
                  <h1 className="auth-heading">Create Account</h1>
                  <br />
                  <input type="text" className="auth-input" placeholder="Name" />
                  <div className="mobile-input-container">
                    <span className="country-code">+91</span>
                    <input type="tel" className="auth-input mobile-input" placeholder="Enter Mobile Number" />
                  </div>
                  <br />
                  <Button text="Get OTP" className="default-button auth-btn" onClick={handleContinue} />
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form action="#">
                  <h1 className="auth-heading">Sign in</h1>
                  <span className="auth-span">or use your mobile number</span>
                  <div className="mobile-input-container">
                    <span className="country-code">+91</span>
                    <input type="tel" className="auth-input mobile-input" placeholder="Enter Mobile Number" />
                  </div>
                  <br />
                  <Button text="Sign In" className="default-button auth-btn" />
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1 className="auth-heading">Welcome Back!</h1>
                    <p className="auth-paragraph">To keep connected with us please login with your personal info</p>
                    <Button
                      text="Sign In"
                      className="default-button-overlay"
                      id="signIn"
                      onClick={() => document.getElementById('container').classList.remove('right-panel-active')}
                    />
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1 className="auth-heading">Welcome to AC Wallah !!</h1>
                    <p className="auth-paragraph">Enter your details and become part of something great.</p>
                    <Button
                      text="Sign Up"
                      className="default-button-overlay"
                      id="signUp"
                      onClick={() => document.getElementById('container').classList.add('right-panel-active')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OTP Popup */}
      {isOtpPopupOpen && (
        <div className="popup-overlay-otp">
          <div className="popup-container">
            <button className="popup-close-button" onClick={closeOtpPopup}>×</button>
            <h2>Enter OTP</h2>
            <p>Please enter the 4-digit OTP sent to your mobile number.</p>
            <div className="otp-input-container">
              <input type="text" maxLength="4" placeholder="Enter OTP" className="otp-input" />
            </div>
            <Button text="Verify" className="default-button" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;