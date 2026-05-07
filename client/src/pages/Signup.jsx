import React, { useState } from "react";
import axios from "axios";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Track.png";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    vehicleNumber: "", // match with backend code
    phone: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5001/api/auth/register", formData);
      alert("Account created successfully!");
      navigate("/signin");
      
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="Back-To">
        
          <Link to="/"> ←Back to Home</Link>

      </div>
      <div className="signup-card">
        <div className="logo-row">
          <div className="logo-box">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <h3>Create your account</h3>
        <p className="subtext">Start tracking your tolls in under 60 seconds.</p>

        <form onSubmit={handleSignup}> {/* Form submit handler */}
          <label>Full name</label>
          <div className="input-box">
            <input 
              type="text" 
              placeholder="Aarav Sharma" 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="row">
            <div className="field">
              <label>Vehicle</label>
              <div className="input-box">
                <input 
                  type="text" 
                  placeholder="HR26-DK-8930" 
                  onChange={(e) => setFormData({...formData, vehicleNumber: e.target.value})}
                />
              </div>
            </div>
            <div className="field">
              <label>Phone</label>
              <div className="input-box">
                <input 
                  type="text" 
                  placeholder="+91 98765..." 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          <label>Email</label>
          <div className="input-box">
            <input 
              type="email" 
              placeholder="you@tagpulse.io" 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <input 
              type="password" 
              placeholder="********" 
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button type="submit" className="btn">Create account →</button>
        </form>

        <div className="bottom">
          <p>Already a member? <Link to="/signin">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;