import React from "react";
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
  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="dashboard-main">

        {/* Navbar */}
        <DashboardNavbar />

        {/* Content */}
        <div className="dashboard-content">

          {/* Header Section */}
          <div className="toll-header">
            <h1>FASTag Toll Calculator</h1>

            <p>
              Estimate highway toll charges before starting your trip.
              FastagTracker helps drivers, families, fleet owners,
              and transport businesses plan travel expenses better.
            </p>

            <p>
              Review your
              <Link to="/toll-history"> Toll History </Link>
              or explore
              <Link to="/analytics"> Travel Analytics </Link>
              while we build real-time estimation features.
            </p>
          </div>

          {/* Calculator Card (Coming Soon) */}
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
                <input type="text" placeholder="Enter destination city" disabled />
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
                We're building route intelligence, real-time toll estimation,
                and FASTag cost prediction.
              </p>
              <span>Available in a future release</span>
            </div>

          </div>

          {/* Feature Grid */}
          <div className="feature-grid">

            <div className="calculate-feature-card">
              <h4>🚗 Route Estimation</h4>
              <p>Calculate toll charges between any two locations.</p>
            </div>

            <div className="calculate-feature-card">
              <h4>🛣 Toll Plaza Breakdown</h4>
              <p>View toll-wise charges for every plaza on the route.</p>
            </div>

            <div className="calculate-feature-card">
              <h4>⚡ FASTag Insights</h4>
              <p>Predict deductions and manage trip expenses better.</p>
            </div>

          </div>

          {/* Info Section */}
          <section className="toll-calculator-info">

            <h2>Why Use a FASTag Toll Calculator?</h2>

            <p>
              Planning toll expenses before a trip helps drivers,
              families, fleet managers, and transport businesses
              estimate travel costs more accurately.
            </p>

            <p>
              FastagTracker's upcoming Toll Calculator will provide
              route-wise toll estimates, FASTag cost predictions,
              and travel expense insights to help users make informed decisions.
            </p>

            <p>
              After your trip, you can review your
              <Link to="/toll-history"> Toll History </Link>
              and analyze spending through
              <Link to="/analytics"> Travel Analytics </Link>.
            </p>

          </section>

        </div>
      </div>
    </div>
  );
};

export default TollCalculation;