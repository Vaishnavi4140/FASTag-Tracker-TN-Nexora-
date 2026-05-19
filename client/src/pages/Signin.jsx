import React, { useState } from "react";
import axios from "axios"; 
import "../styles/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Track.png";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      
      localStorage.setItem("token", response.data.token);
      alert("Welcome back!");
      navigate("/dashboard"); 
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container-1">
      <div className="Back-To">
              
                <Link to="/"> ←Back to Home</Link>
      
            </div>
      <div className="card-1">
        <div className="logoBox">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <h1>Welcome back</h1>
        <p className="subtitle">Sign in to view your live FASTag dashboard.</p>

        {/* 
        add onchange in input field*/}
        <div className="inputBox">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="you@tagpulse.io" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputBox">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="******" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="options">
          <div className="remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <p className="forgot">Forgot password?</p>
        </div>
        
        {/*r onClick handler on button */}
        <button type="button" className="btn" onClick={handleSignin}>Sign in →</button>

        <p className="bottomText">
          Don't have an account?<Link to="/signup">Sign up free</Link> 
        </p>
      </div>
    </div>
  );
}

export default Signin;