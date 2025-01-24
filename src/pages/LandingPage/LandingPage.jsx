import React from 'react';
import './LandingPage.css';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import darkmodelogo from "../../assets/schedulemasterlogo.png";
import blob1 from "../../assets/blob1.png";
import blob2 from "../../assets/blob2.png";
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <div className="landing-page">
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
      <div className="logo-container">
      <img
                  src={darkmodelogo}
                  alt="ScheduleMaster Logo"
                  className="logol"
                />
      </div>

      <div className="landing-content">
        <div className="landing-buttons">
          <button className="landing-button sign-up" onClick={handleSignUpClick}>
            Sign Up
          </button>
          <button className="landing-button sign-in" onClick={handleSignInClick}>
            Sign In
          </button>
        </div>
      </div>

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
}

export default LandingPage;