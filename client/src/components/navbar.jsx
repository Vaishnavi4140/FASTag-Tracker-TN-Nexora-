import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/Track.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  
  const token = localStorage.getItem("token");

 
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="container navbar-inner">

        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className="navbar-menu">
          <li>Home</li>
          <li>Features</li>
          <li>Analytics</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="navbar-right">

          {
            token ? (
              <button className="login-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/signin">
                <button className="login-btn">Login</button>
              </Link>
            )
          }

          <Link to="/signup">
            <button className="get-btn">Get Started</button>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;