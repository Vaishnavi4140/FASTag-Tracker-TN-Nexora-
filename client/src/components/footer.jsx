// import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import logo from "../assets/Track.png"

const Footer = () => {
  return (
    <footer className="footer">
        
      <div className="footer-top container">

        <div className="footer-brand">
          <div className="logo-box">
            <img src={logo} alt="logo" />
          </div>
          <p>
            Track FASTag transactions, toll expenses, vehicle activity, and travel records from one centralized dashboard. Built for drivers, families, and fleet operators across India.
          </p>
        </div>

       
        <div className="footer-column">
  <h4>Product</h4>

  <ul>
    <li>
      <Link to="/features">Features</Link>
    </li>

    <li>
      <Link to="/analytics">Analytics</Link>
    </li>

    <li>
      <Link to="/signup">Get Started</Link>
    </li>
  </ul>
</div>

       
        <div className="footer-column">
  <h4>Company</h4>

  <ul>
    <li>
      <Link to="/about">About</Link>
    </li>

    <li>
      <Link to="/contact">Contact</Link>
    </li>

    <li>
      <Link to="/signup">Join Us</Link>
    </li>
  </ul>
</div>

        
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
          
        <div className="social-icons">
           <a href="#"><FaTwitter size={30} /></a>
  <a href="#"><FaLinkedin size={30} /></a>
  <a href="#"><FaGithub size={30} /></a>
  <a href="#"><FaEnvelope size={30} /></a>
        </div>
        </div>
        
      </div>
      

      
      <div className="footer-bottom container">
        <p>© 2026 TollTrack. All right reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;