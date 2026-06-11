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
          <h2>FastagTracker</h2>
        </div>

        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
<li><Link to="/features">Features</Link></li>
<li><Link to="/analytics">Analytics</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
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
            <button className="get-btn-nav">Get Started</button>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;