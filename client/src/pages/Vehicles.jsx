import React from "react";
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

  const vehicles = [
    {
      number: "MH-02-AB-1234",
      model: "Hyundai Creta",
      fastag: "Paytm FASTag",
      fuel: "Petrol",
      expiry: "Dec 2026",
      status: "Active",
    },
    {
      number: "MH-02-CD-5678",
      model: "Tata Nexon",
      fastag: "HDFC FASTag",
      fuel: "Diesel",
      expiry: "Aug 2026",
      status: "Active",
    },
  ];

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-main">

        <DashboardNavbar />

        <div className="dashboard-content">

          <div className="vehicles-header">

            <div>
              <h1>Vehicles</h1>
              <p>Manage all your linked vehicles and FASTag accounts.</p>
            </div>

            <button className="add-vehicle-btn">
              <Plus size={18} />
              Add Vehicle
            </button>

          </div>

          <div className="vehicles-grid">

            {vehicles.map((vehicle, index) => (
              <div className="vehicle-card" key={index}>

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

             {/* VEHICLE DETAILS TABLE */}
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
                    <td>{vehicle.model}</td>

                    <td>
                      <span className="provider-badge">
                        {vehicle.fastag}
                      </span>
                    </td>

                    <td>{vehicle.fuel}</td>

                    <td>{vehicle.expiry}</td>

                    <td>
                      <span className="vehicle-status-table">
                        {vehicle.status}
                      </span>
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
