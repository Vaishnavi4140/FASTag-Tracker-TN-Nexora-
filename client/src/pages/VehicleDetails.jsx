import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/AddVehicle.css";
import logo from "../assets/Track.png";

const VehicleDetails = () => {
const navigate = useNavigate();
const location = useLocation();

const { vehicleNumber, registeredPhone } = location.state || {};

const [formData, setFormData] = useState({
  vehicleType: "",
  brand: "",
  model: "",
  tagId: "",
  fasTagBalance: "",
  category: "",
  fuelType: "",
  expiry: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    vehicleNumber,
    registeredPhone,
    ...formData,
    status: "Active",
  };

  // later:
  // await axios.post("/api/vehicles", payload)

  navigate("/vehicles",{
      state: {
          vehicle: payload,
      },
  });
};

return (
  <div className="add-vehicle-page">
    <div className="add-vehicle-container">

      <Link to="/add-vehicle" className="back-home">
        ← Back to Add Vehicle
      </Link>

      <div className="add-vehicle-card">

        <div className="vehicle-logo">
          <img src={logo} alt="logo" />
        </div>

        <h1>Review Vehicle Details</h1>

        <p>
          Add the remaining vehicle details before saving.
        </p>
          <div className="vehicle-details-links">
<p>
  Need to review your existing vehicles?
  <Link to="/vehicles"> Vehicle Management </Link>

  or check your
  <Link to="/toll-history"> Toll History </Link>
  before adding a new vehicle.
</p>
</div>
        <form
          className="vehicle-form"
          onSubmit={handleSubmit}
        >

          <div className="vehicle-form-group">
            <label>Vehicle Number</label>
            <input
              type="text"
              value={vehicleNumber || ""}
              disabled
            />
          </div>

          <div className="vehicle-form-group">
            <label>Registered Phone Number</label>
            <input
              type="text"
              value={registeredPhone || ""}
              disabled
            />
          </div>

          <div className="vehicle-form-group">
            <label>Vehicle Type</label>
            <input
              type="text"
              name="vehicleType"
              placeholder="Car / Bike / Truck"
              value={formData.vehicleType}
              onChange={handleChange}
            />
          </div>

          <div className="vehicle-form-group">
            <label>Brand</label>
            <input
              type="text"
              name="brand"
              placeholder="Hyundai"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>

          <div className="vehicle-form-group">
            <label>Model</label>
            <input
              type="text"
              name="model"
              placeholder="Creta"
              value={formData.model}
              onChange={handleChange}
            />
          </div>

          <div className="vehicle-form-group">
            <label>FASTag Provider</label>
            <input
              type="text"
              name="tagId"
              placeholder="Paytm FASTag"
              value={formData.tagId}
              onChange={handleChange}
            />
          </div>

          <div className="vehicle-form-group">
            <label>FASTag Balance</label>
            <input
              type="number"
              name="fasTagBalance"
              placeholder="₹500"
              value={formData.fasTagBalance}
              onChange={handleChange}
            />
          </div>

          <div className="vehicle-form-group">
            <label>Category</label>
            <input
              type="text"
              name="category"
              placeholder="Private or Commercial"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="vehicle-form-group">
            <label>Fuel Type</label>
            <input
              type="text"
              name="fuelType"
              placeholder="Petrol / Diesel / EV"
              value={formData.fuelType}
              onChange={handleChange}
            />
          </div>

          <div className="vehicle-form-group">
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiry"
              placeholder="Dec 2026"
              value={formData.expiry}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="add-vehicle-submit"
          >
            Save Vehicle
          </button>

        </form>
        <section className="vehicle-details-info">
  <h2>Why Accurate Vehicle Details Matter</h2>

  <p>
    Keeping vehicle information updated helps maintain
    accurate FASTag records, toll expense tracking,
    and travel analytics.
  </p>

  <p>
    FastagTracker uses vehicle details to organize
    transaction history, vehicle activity, and travel
    reports more effectively.
  </p>

  <p>
  After saving your vehicle, you can review
  <Link to="/analytics"> Travel Analytics </Link>,
  monitor
  <Link to="/toll-history"> Toll History </Link>,
  and manage all vehicles through
  <Link to="/vehicles"> Vehicle Management </Link>.
</p>
</section>
      </div>
    </div>
  </div>
);
};

export default VehicleDetails;