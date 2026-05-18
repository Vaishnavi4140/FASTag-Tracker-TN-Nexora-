import React, { useState } from "react";
import axios from "axios";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Track.png";

function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [step, setStep] = useState(1);

  const [emailOtp, setEmailOtp] = useState("");
  const [mobileOtp, setMobileOtp] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {

    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      return alert("Passwords do not match");
    }

    try {

      await axios.post(
        "http://127.0.0.1:5001/api/auth/register",
        formData
      );

      alert("Account created successfully");

      navigate("/signin");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );

    }
  };

  return (
    <div className="signup-container">

      <div className="Back-To">
        <Link to="/">← Back to Home</Link>
      </div>

      <div className="signup-card-1">

        <div className="logo-row">
          <div className="logo-box">
            <img src={logo} alt="logo" />
          </div>
        </div>

        <h3>Create your account</h3>

        <p className="subtext">
          Secure signup with email and mobile verification.
        </p>

        <form onSubmit={handleSignup}>

          {
            step === 1 && (
              <>

                <label>Full Name</label>

                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter full name"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                <label>Email Address</label>

                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Enter email"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                <label>Mobile Number</label>

                <div className="input-box">
                  <input
                    type="text"
                    placeholder="+91 9876543210"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>

                <button
                  type="button"
                  className="btn"
                  onClick={() => {

                    if (
                      !formData.name ||
                      !formData.email ||
                      !formData.phone
                    ) {
                      return alert(
                        "Please fill all fields"
                      );
                    }

                    setStep(2);
                  }}
                >
                  Next
                </button>

              </>
            )
          }

          {
            step === 2 && (
              <>

                <h4 className="step-title">
                  OTP Verification
                </h4>

                <label>Email OTP</label>

                <div className="otp-row">

                  <input
                    type="text"
                    placeholder="Enter email OTP"
                    onChange={(e) =>
                      setEmailOtp(e.target.value)
                    }
                  />

                  <button
                    type="button"
                    className="small-btn"
                  >
                    Send OTP
                  </button>

                </div>

                <label>Mobile OTP</label>

                <div className="otp-row">

                  <input
                    type="text"
                    placeholder="Enter mobile OTP"
                    onChange={(e) =>
                      setMobileOtp(e.target.value)
                    }
                  />

                  <button
                    type="button"
                    className="small-btn"
                  >
                    Send OTP
                  </button>

                </div>

                <button
                  type="button"
                  className="btn"
                  onClick={() => {

                    if (
                      !emailOtp ||
                      !mobileOtp
                    ) {
                      return alert(
                        "Enter OTP first"
                      );
                    }

                    setStep(3);
                  }}
                >
                  Verify OTP
                </button>

              </>
            )
          }

          {
            step === 3 && (
              <>

                <h4 className="step-title">
                  Create Password
                </h4>

                <label>Password</label>

                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                <label>Confirm Password</label>

                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword:
                          e.target.value,
                      })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn"
                >
                  Create Account
                </button>

              </>
            )
          }

        </form>

        <div className="bottom">
          <p>
            Already have an account?
            <Link to="/signin">
              Sign In
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Signup;
