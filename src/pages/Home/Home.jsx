import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiAlertTriangle,
  FiMessageSquare,
  FiList,
  FiHelpCircle,
  FiMail,
} from "react-icons/fi";
import rightarrow from "../../assets/right-arrow.webp";
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
          src="../../assets/blob1.png"
          alt="Decorative blob 1"
          className="blob blob-1"
        />
        <img
          src="../../assets/blob2.png"
          alt="Decorative blob 2"
          className="blob blob-2"
        />
        <img
          src="../../assets/blob1.png"
          alt="Decorative blob 3"
          className="blob blob-3"
        />
        <img
          src="../../assets/blob2.png"
          alt="Decorative blob 4"
          className="blob blob-4"
        />
      </div>

      {/* Logo Placeholder */}
      <div className="logo-container">
        <img
          src="../../assets/schedulemasterlogo.png"
          alt="Schedulemaster Logo"
          className="logo"
        />
      </div>

      {/* Hero Section */}
      <div className={`hero-section ${animate ? "fade-in" : "pre-animate"}`}>
        <h1>Streamline your schedule.</h1>
        <p>
          Effortlessly create, customize, and manage your perfect timetable.
        </p>
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
          onClick={() => console.log("Navigate to Report Fault")}
        >
          <FiAlertTriangle className="link-icon" />
          <h3>Report a Fault</h3>
          <p>Submit a new maintenance request.</p>
        </div>
        <div
          className="link-card"
          onClick={() => console.log("Navigate to Fault Status")}
        >
          <FiList className="link-icon" />
          <h3>View Fault Status</h3>
          <p>Track the progress of your requests.</p>
        </div>
        <div
          className="link-card"
          onClick={() => console.log("Navigate to Chat")}
        >
          <FiMessageSquare className="link-icon" />
          <h3>Chat with Maintenance</h3>
          <p>Communicate directly with the maintenance team.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
