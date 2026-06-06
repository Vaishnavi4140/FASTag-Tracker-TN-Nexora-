import React from "react";
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
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="dashboard-main">
        <DashboardNavbar />

        <div className="dashboard-content">

          <div className="toll-header">
            <h1>Toll Calculator</h1>
            <p>
              Estimate toll expenses before your journey with
              route-wise cost breakdown and FASTag insights.
            </p>
          </div>

          {/* Preview Calculator */}
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
                <input
                  type="text"
                  placeholder="Enter starting city"
                  disabled
                />
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
                We're building real-time toll estimation,
                route intelligence, and FASTag cost prediction.
              </p>

              <span>Available in a future release</span>
            </div>
          </div>

          {/* Feature Cards */}

          <div className="feature-grid">

            <div className="calculate-feature-card">
              <h4>🚗 Route Estimation</h4>
              <p>
                Calculate toll charges between any two locations.
              </p>
            </div>

            <div className="calculate-feature-card">
              <h4>🛣 Toll Plaza Breakdown</h4>
              <p>
                View toll-wise charges for every plaza on the route.
              </p>
            </div>

            <div className="calculate-feature-card">
              <h4>⚡ FASTag Insights</h4>
              <p>
                Predict deductions and manage trip expenses better.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TollCalculation;