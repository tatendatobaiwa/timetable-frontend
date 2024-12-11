import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rightarrow from "../../assets/right-arrow.png";
import backgroundImage from '../../assets/output-onlinepngtools.png';
import './Home.css'; 

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
    navigate('/timetable-maker');
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="thrive-container">
        <h1 className={`${animate ? 'fade-in' : 'pre-animate'}`}>
          Streamline your schedule. Effortlessly create, customize, and manage your perfect timetable
        </h1>
        <button 
          className={`button ${animate ? 'fade-in-delayed' : 'pre-animate'}`}
          onClick={handleGetStartedClick}
        >
          Get Started
          <img
            src={rightarrow}
            alt="right-arrow"
            className="arrow-icon"
            height="20"
            width="20"
            style={{ paddingLeft: '15px' }}
          />
        </button>
      </div>
    </div>
  );
};

export default Home;