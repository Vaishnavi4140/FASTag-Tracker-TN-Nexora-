import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/Vehicles.css";

import {
  Car,
  Plus,
  Fuel,
  Calendar,
  ShieldCheck,
} from "lucide-react";

const Vehicles = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const newVehicle = location.state?.vehicle;

    if (!newVehicle?.vehicleNumber) return;

    const formattedVehicle = {
      number: newVehicle.vehicleNumber,
      vehicleType: newVehicle.vehicleType || "",
      model: newVehicle.model || "",
      fastag: newVehicle.tagId || "",
      fuel: newVehicle.fuelType || "",
      expiry: newVehicle.expiry || "",
      status: newVehicle.status || "Active",
      driverName: newVehicle.driverName || "",
    };

    setVehicles((prevVehicles) => {
      const exists = prevVehicles.some(
        (vehicle) =>
          vehicle.number === newVehicle.vehicleNumber
      );

      if (exists) {
        return prevVehicles.map((vehicle) =>
          vehicle.number === newVehicle.vehicleNumber
            ? formattedVehicle
            : vehicle
        );
      }

      return [...prevVehicles, formattedVehicle];
    });

  }, [location.state]);

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
            <p>No vehicles added yet.</p>
          ) : (
            <>
              <div className="vehicles-grid">

                {vehicles.map((vehicle, index) => (
                  <div
                    className="vehicle-card"
                    key={index}
                  >

                    <div className="vehicle-top">

                      <div className="vehicle-icon">
                        <Car size={30} />
                      </div>

                      <span className="vehicle-status">
                        {vehicle.status}
                      </span>

                    </div>

                    <h2>{vehicle.number}</h2>

                    <p className="vehicle-model">
                      {vehicle.model}
                    </p>

                    <div className="vehicle-details">

                      <div className="vehicle-detail">
                        <ShieldCheck size={18} />
                        <span>{vehicle.fastag}</span>
                      </div>

                      <div className="vehicle-detail">
                        <Fuel size={18} />
                        <span>{vehicle.fuel}</span>
                      </div>

                      <div className="vehicle-detail">
                        <Calendar size={18} />
                        <span>{vehicle.expiry}</span>
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
                      <th>Model</th>
                      <th>FASTag Provider</th>
                      <th>Driver Name</th>
                      <th>Fuel Type</th>
                      <th>Expiry</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {vehicles.map((vehicle, index) => (
                      <tr key={index}>
                        <td>{vehicle.number}</td>
                        <td>{vehicle.vehicleType}</td>
                        <td>{vehicle.model}</td>
                        <td>{vehicle.fastag}</td>
                        <td>{vehicle.driverName}</td>
                        <td>{vehicle.fuel}</td>
                        <td>{vehicle.expiry}</td>
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