import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AddVehicle.css";
import logo from "../assets/Track.png";

const AddVehicle = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      vehicleNumber,
      phoneNumber,
    });

    alert("Vehicle Added Successfully");
  };

  return (
    <div className="add-vehicle-page">

      <div className="add-vehicle-card">

        <Link to="/vehicles" className="back-home">
          ← Back to Vehicles
        </Link>

        <img
          src={logo}
          alt="logo"
          className="vehicle-logo"
        />

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

          <button
            type="submit"
            className="add-vehicle-submit"
          >
            Add Vehicle →
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddVehicle;