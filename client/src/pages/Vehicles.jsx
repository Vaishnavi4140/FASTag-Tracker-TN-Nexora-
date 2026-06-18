import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/Vehicles.css";
import axios from "axios";


import {
  Car,
  Plus,
  Fuel,
  Calendar,
  ShieldCheck,
} from "lucide-react";

const Vehicles = () => {
  const navigate = useNavigate();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const userId = localStorage.getItem("userId");

        if (!userId) return;

        const res = await axios.get(
          `http://localhost:5001/api/vehicles/user/${userId}`
        );

        setVehicles(res.data);
      } catch (error) {
        console.log("Error fetching vehicles:", error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="dashboard-main">
        <DashboardNavbar
          setIsMobileOpen={setIsMobileOpen}
        />

        <div className="dashboard-content">
          <div className="vehicles-header">
            <div>
              <h1>Vehicle Management</h1>

<p>
  Manage all your vehicles, FASTag accounts, balances,
  and travel activity from one centralized platform.
</p>

<p>
  FastagTracker helps vehicle owners, families,
  fleet managers, and transport businesses organize
  vehicle information and monitor FASTag-related activity
  more efficiently.
</p>
<div className="vehicle-links">
  <p>
    Review your
    <Link to="/toll-history"> Toll History </Link>
    or explore
    <Link to="/analytics"> Travel Analytics </Link>
    for deeper insights into vehicle expenses.
  </p>
</div>
<section className="vehicles-info">
  <h2>Why Vehicle Management Matters</h2>

  <p>
    Keeping vehicle information organized helps users
    track FASTag balances, monitor travel expenses,
    and manage transportation costs more effectively.
  </p>

  <p>
  Whether you manage a single vehicle or an entire fleet,
  FastagTracker provides a centralized vehicle management
  system that simplifies tracking and reporting.
  You can also monitor expenses through our
  <Link to="/analytics"> Travel Analytics </Link>
  dashboard.
</p>
</section>
            </div>

            <button
              className="add-vehicle-btn"
              onClick={() => navigate("/add-vehicle")}
            >
              <Plus size={18} />
              Add Vehicle
            </button>
          </div>

          {vehicles.length === 0 ? (
            <div className="empty-vehicle-state">
  <h2>No vehicles added yet</h2>
  <p>
    Add your first vehicle to start tracking FASTag balance, toll history, and
    travel expenses.
  </p>

  <button
    className="add-vehicle-btn"
    onClick={() => navigate("/add-vehicle")}
  >
    <Plus size={18} />
    Add Your First Vehicle
  </button>
</div>
          ) : (
            <>
              <div className="vehicles-grid">
                {vehicles.map((vehicle) => (
                  <div className="vehicle-card" key={vehicle._id}
                    onClick={() =>
                      navigate(`/vehicle/${vehicle._id}`, {state: {vehicle}
                      })
                    }>
                    <div className="vehicle-top">
                      <div className="vehicle-icon">
                        <Car size={30} />
                      </div>

                      <span className="vehicle-status">
                        {vehicle.status}
                      </span>
                    </div>

                    <h2>{vehicle.vehicleNumber}</h2>

                    <p className="vehicle-model">
                      {vehicle.category}
                    </p>

                    <div className="vehicle-details">
                      <div className="vehicle-detail">
                        <ShieldCheck size={18} />
                        <span>{vehicle.tagId}</span>
                      </div>

                      <div className="vehicle-detail">
                        <Fuel size={18} />
                        <span>{vehicle.vehicleType}</span>
                      </div>

                      <div className="vehicle-detail">
                        <Calendar size={18} />
                        <span>
                          ₹{vehicle.fasTagBalance}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="transactions-section">
                <div className="transactions-header">
                  <h2>Vehicle Details</h2>
                </div>

                <table className="transactions-table">
                  <thead>
                    <tr>
                      <th>Vehicle Number</th>
                      <th>Vehicle Type</th>
                      <th>Category</th>
                      <th>FASTag Provider</th>
                      <th>Balance</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {vehicles.map((vehicle) => (
                      <tr key={vehicle._id}>
                        <td>{vehicle.vehicleNumber}</td>
                        <td>{vehicle.vehicleType}</td>
                        <td>{vehicle.category}</td>
                        <td>{vehicle.tagId}</td>
                        <td>₹{vehicle.fasTagBalance}</td>
                        <td>{vehicle.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
