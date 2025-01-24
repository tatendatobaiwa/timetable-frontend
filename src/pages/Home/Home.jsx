import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCalendar, FiSettings, FiList } from "react-icons/fi";
import rightarrow from "../../assets/right-arrow.webp";
import blob1 from "../../assets/blob1.png"; // Import blob1
import blob2 from "../../assets/blob2.png"; // Import blob2
import scheduleMasterLogo from "../../assets/schedulemasterlogo.png"; // Import logo
import "./Home.css";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStartedClick = () => {
    navigate("/timetable-maker");
  };

  return (
    <div className="home-container">
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

      {/* Logo Placeholder */}
      <div className="logo-container">
        <img
          src={scheduleMasterLogo} // Use imported logo
          alt="Schedulemaster Logo"
          className="logoh"
        />
      </div>

      {/* Hero Section */}
      <div className={`hero-section ${animate ? "fade-in" : "pre-animate"}`}>
        <button
          className={`button ${animate ? "fade-in-delayed" : "pre-animate"}`}
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links">
        <div
          className="link-card"
          onClick={() => navigate("/select-modules")} // Navigate to module selection
        >
          <FiList className="link-icon" />
          <h3>Select Modules</h3>
          <p>
            Choose the modules you're enrolled in to generate your timetable.
          </p>
        </div>
        <div
          className="link-card"
          onClick={() => navigate("/view-timetable")} // Navigate to view timetable
        >
          <FiCalendar className="link-icon" />
          <h3>View Timetable</h3>
          <p>See your personalized timetable based on your selected modules.</p>
        </div>
        <div
          className="link-card"
          onClick={() => navigate("/manage-schedule")} // Navigate to manage schedule
        >
          <FiSettings className="link-icon" />
          <h3>Manage Schedule</h3>
          <p>Customize and adjust your timetable to fit your preferences.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
