import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

import "../styles/Vehicles.css";

import {
  Car,
  Plus,
  ShieldCheck,
} from "lucide-react";

import axios from "axios";

const Vehicles = () => {
  const navigate = useNavigate();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const res = await axios.get(
        `http://localhost:5001/api/vehicles/user/${userId}`
      );

      if (res.data.success) {
        setVehicles(res.data.data);
      }
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

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
              <p>Manage all your linked vehicles and FASTag accounts.</p>
            </div>

            <button
              className="add-vehicle-btn"
              onClick={() => navigate("/add-vehicle")}
            >
              <Plus size={18} />
              Add Vehicle
            </button>
          </div>

          {/* VEHICLE CARDS */}
          <div className="vehicles-grid">
            {vehicles.map((vehicle) => (
              <div
                className="vehicle-card"
                key={vehicle._id}
              >
                <div className="vehicle-top">
                  <div className="vehicle-icon">
                    <Car size={28} />
                  </div>

                  <span className="vehicle-status">
                    {vehicle.status}
                  </span>
                </div>

                <h2>{vehicle.vehicleNumber}</h2>

                <p className="vehicle-model">
                  {vehicle.vehicleType}
                </p>

                <div className="vehicle-details">

                  <div className="vehicle-detail">
                    <ShieldCheck size={16} />
                    <span>{vehicle.tagId}</span>
                  </div>

                  <div className="vehicle-detail">
                    <span>
                      Category: {vehicle.category || "N/A"}
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* TABLE */}
          <div className="transactions-section">

            <div className="transactions-header">
              <h2>All Vehicles</h2>
            </div>

            <table className="transactions-table">

              <thead>
                <tr>
                  <th>Owner Name</th>
                  <th>Vehicle Number</th>
                  <th>Mobile Number</th>
                  <th>FASTag Bank</th>
                  <th>Vehicle Type</th>
                  <th>Category</th>
                  <th>Lease Status</th>
                  <th>FASTag Balance</th>
                  <th>Last Toll Deduction</th>
                  <th>Monthly Toll Expense</th>
                  <th>Fleet Manager</th>
                </tr>
              </thead>

              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle._id}>
                    <td>{vehicle.ownerName}</td>
                    <td>{vehicle.vehicleNumber}</td>
                    <td>{vehicle.mobileNumber}</td>
                    <td>{vehicle.fastagBank}</td>
                    <td>{vehicle.vehicleType}</td>
                    <td>{vehicle.category}</td>
                    <td>{vehicle.leaseStatus}</td>
                    <td>₹{vehicle.fasTagBalance}</td>
                    <td>{vehicle.lastTollDeduction}</td>
                    <td>₹{vehicle.monthlyTollExpense}</td>
                    <td>{vehicle.fleetManager}</td>
                    <td> 
                      {new Date(
                        vehicle.createdAt
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Vehicles;
