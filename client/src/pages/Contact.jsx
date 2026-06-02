import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
              <h1>Vehicles</h1>
              <p>
                Manage all your linked vehicles and FASTag accounts.
              </p>
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
            <p>No vehicles found.</p>
          ) : (
            <>
              <div className="vehicles-grid">
                {vehicles.map((vehicle) => (
                  <div
                    className="vehicle-card"
                    key={vehicle._id}
                  >
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
