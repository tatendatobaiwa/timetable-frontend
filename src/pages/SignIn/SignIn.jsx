import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import blob1 from "../../assets/blob1.png";
import blob2 from "../../assets/blob2.png";
import darkmodelogo from "../../assets/schedulemasterlogo.png";
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };
  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="signin-page">
      {/* Background blobs */}
      <div className="backgrounds-blobs">
        <img
          src={blob1} // Use imported blob1
          alt="Decorative blob 1"
          className="blob blob-1"
        />
        <img
          src={blob2} // Use imported blob2
          alt="Decorative blob 2"
          className="blob blob-2"
        />
        <img
          src={blob1} // Use imported blob1
          alt="Decorative blob 3"
          className="blob blob-3"
        />
        <img
          src={blob2} // Use imported blob2
          alt="Decorative blob 4"
          className="blob blob-4"
        />
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={handleBackClick}>
        Go Back
      </button>
        {/* Logo Placeholder */}
      <div className="logo-container">
      <img
                  src={darkmodelogo}
                  alt="ScheduleMaster Logo"
                  className="logoup"
                />
      </div>
      {/* SignIn Content */}
      <div className="signin-content">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="Student ID" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
        <p className="switch-page-text">
          Don't have an account?{' '}
          <span className="switch-page-link" onClick={handleSignUpClick}>
            Sign Up
          </span>
        </p>
      </div>
      {/* Footer */}
      <footer className="landing-footer">
      <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook className="icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="icon" />
          </a>
        </div>
        <p className="rights-reserved">
          &copy; {new Date().getFullYear()} MaintainMe. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SignIn;