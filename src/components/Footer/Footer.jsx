import React from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdCall } from "react-icons/md";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Information */}
        <div className="footer-section">
          <h3 className="footer-heading">Get in touch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <MdEmail className="iconf" size={24} /> {/* Mail icon */}
              <span>biustinnovationclub&#64;gmail.com</span>
            </div>
            <div className="contact-item">
              <MdCall className="iconf" size={24} /> {/* Phone icon */}
              <span>+267 XX XXX XXX</span>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="footer-section">
          <h3 className="footer-heading">Location</h3>
          <div className="offices-info">
            <p>
              BIUST Campus
              <br />
              Palapye
              <br />
              Botswana
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook className="iconf" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <Twitter className="iconf" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram className="iconf" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin className="iconf" />
            </a>
            <a href="https://github.com/INNOVATION-CLUB-BIUST" aria-label="GitHub">
              <Github className="iconf" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © 2024 BIUST Innovation Club. All Rights Reserved |{" "}
          <Link to="/terms-of-use">Terms of Use</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
