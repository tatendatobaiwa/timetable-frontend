import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import blob1 from "../../assets/blob1.png";
import blob2 from "../../assets/blob2.png";
import darkmodelogo from "../../assets/schedulemasterlogo.png";
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    studentId: '',
    password: '',
    confirmPassword: '',
  });
  const handleBackClick = () => {
    navigate('/');
  };
  const handleSignUpClick = () => {
    navigate('/signup');
  };
  

  const validateStudentId = (id) => {
    if (id.length !== 8) {
      setErrors((prev) => ({
        ...prev,
        studentId: 'Student ID must be exactly 8 characters long.',
      }));
      return false;
    }

    const firstTwoDigits = parseInt(id.substring(0, 2), 10);
    if (isNaN(firstTwoDigits) || firstTwoDigits < 11 || firstTwoDigits > 24) {
      setErrors((prev) => ({
        ...prev,
        studentId: 'The first 2 digits must be between 11 and 24.',
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, studentId: '' }));
    return true;
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrors((prev) => ({
        ...prev,
        password:
          'Password must contain at least one letter, one number, and one special character.',
      }));
      return false;
    }

    setErrors((prev) => ({ ...prev, password: '' }));
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isStudentIdValid = validateStudentId(studentId);
    const isPasswordValid = validatePassword(password);

    if (isStudentIdValid && isPasswordValid) {
      console.log('Form submitted successfully!');
    }
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
        <form onSubmit={handleSubmit}>
          {/* Student ID Input */}
          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            onBlur={() => validateStudentId(studentId)}
          />
          {errors.studentId && <p className="error-message">{errors.studentId}</p>}

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validatePassword(password)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
          {/* Submit Button */}
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
          <a href="https://github.com/INNOVATION-CLUB-BIUST" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="icon" />
          </a>
        </div>
        <p className="rights-reserved">
          &copy; {new Date().getFullYear()} ScheduleMaster. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SignIn;