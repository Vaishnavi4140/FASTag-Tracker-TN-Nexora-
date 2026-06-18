import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/TollCalculation.css";

import {
  MapPinned,
  Car,
  Calculator,
  Construction,
} from "lucide-react";

const TollCalculation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    document.title = "FASTag Toll Calculator | Estimate Toll Charges";

    let metaDescription = document.querySelector("meta[name='description']");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Use FastagTracker's FASTag Toll Calculator to estimate toll charges, plan travel expenses, and compare trip costs with toll history and travel analytics."
    );
  }, []);

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Area */}
      <div className="dashboard-main">
        {/* Navbar */}
        <DashboardNavbar setIsMobileOpen={setIsMobileOpen} />

        {/* Content */}
        <div className="dashboard-content">
          {/* Header Section */}
          <div className="toll-header">
            <h1>FASTag Toll Calculator</h1>

            <p>
              Estimate toll charges before your trip and plan travel expenses
              better.
            </p>

            <p>
              You can also check your{" "}
              <Link to="/toll-history">Toll History</Link> or view{" "}
              <Link to="/analytics">Travel Analytics</Link>.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="calculator-card">
            <div className="coming-soon-badge">
              <Construction size={16} />
              Launching Soon
            </div>

            <div className="calculator-preview">
              <div className="input-group">
                <label>
                  <MapPinned size={16} />
                  Start Location
                </label>
                <input type="text" placeholder="Enter starting city" disabled />
              </div>

              <div className="input-group">
                <label>
                  <MapPinned size={16} />
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Enter destination city"
                  disabled
                />
              </div>

              <div className="input-group">
                <label>
                  <Car size={16} />
                  Vehicle Type
                </label>

                <select disabled>
                  <option>Car</option>
                </select>
              </div>

              <button disabled className="calculate-btn">
                <Calculator size={18} />
                Calculate Toll
              </button>
            </div>

            <div className="overlay-message">
              <h3>🚧 Feature Under Development</h3>

              <p>
                We are building route-based toll estimates and FASTag cost
                insights.
              </p>

              <span>Available in a future release</span>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="feature-grid">
            <div className="calculate-feature-card">
              <h4>🚗 Route Estimate</h4>
              <p>Check expected toll cost between two locations.</p>
            </div>

            <div className="calculate-feature-card">
              <h4>🛣 Toll Plaza Details</h4>
              <p>View toll charges for plazas on your route.</p>
            </div>

            <div className="calculate-feature-card">
              <h4>⚡ FASTag Insights</h4>
              <p>Plan deductions and manage trip expenses better.</p>
            </div>
          </div>

          {/* Info Section */}
          <section className="toll-calculator-info">
            <h2>Why Use a Toll Calculator?</h2>

            <p>
              A toll calculator helps you estimate highway costs before you
              travel.
            </p>

            <p>
              FastagTracker will help users plan toll expenses and later compare
              them with actual FASTag deductions.
            </p>

            <p>
              After your trip, review your{" "}
              <Link to="/toll-history">Toll History</Link> and check spending
              trends in <Link to="/analytics">Travel Analytics</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TollCalculation;