import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AddVehicle.css";
import logo from "../assets/Track.png";
import vehicleImage from "../assets/vehicle-illustration.png";

const AddVehicle = () => {
  const navigate = useNavigate();

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/vehicle-details", {
      state: {
        vehicleNumber,
        registeredPhone: phoneNumber,
      },
    });

    console.log({
      vehicleNumber,
      phoneNumber,
      // model: "Not Added",
      // fastag: "Paytm FASTag",
      // fuel: "Petrol",
      // expiry: "Dec 2026",
      // status: "Active",
    });

    alert("Vehicle Added Successfully");
  };

  return (
    <div className="add-vehicle-page">
      <div className="add-vehicle-container">

      <Link to="/vehicles" className="back-home">
        ← Back to Vehicles
      </Link>

      <div className="add-vehicle-card">

        <div className="vehicle-logo">
          <img src={logo} alt="logo" />
          {/* <h2>FastagTracker</h2> */}
        </div>

        <h1>Add Vehicle</h1>

        <p>
          Link your FASTag vehicle using vehicle number and
          registered phone number.
        </p>

        <form className="vehicle-form" onSubmit={handleSubmit}>

          <div className="vehicle-form-group">
            <label>Vehicle Number</label>

            <input
              type="text"
              placeholder="MH-02-AB-1234"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />
          </div>

          <div className="vehicle-form-group">
            <label>Registered Phone Number</label>

            <input
              type="tel"
              placeholder="+91 9876543210"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="add-vehicle-submit" >
            Add Vehicle →
          </button>

        </form>

        </div>
      </div>
    </div>
  );
};

export default AddVehicle;