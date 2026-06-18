import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/TollHistory.css";
import { MapPin, Calendar, Car } from "lucide-react";

const TollHistory = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    document.title = "FASTag Toll History | Track Toll Transactions";

    let metaDescription = document.querySelector("meta[name='description']");

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "View FASTag toll history, toll deductions, vehicle activity, transaction records, and travel expenses from one simple FastagTracker dashboard."
    );
  }, []);

  const transactions = [
    {
      plaza: "Navi Mumbai Toll Plaza",
      highway: "Mumbai–Pune Highway",
      date: "Mar 5, 2026",
      time: "10:30 AM",
      vehicle: "MH-02-AB-1234",
      bank: "Paytm Payments Bank",
      amount: "₹120",
    },
    {
      plaza: "Pune–Mumbai Expressway",
      highway: "Expressway km 45",
      date: "Mar 4, 2026",
      time: "3:45 PM",
      vehicle: "MH-02-CD-5678",
      bank: "HDFC Bank",
      amount: "₹215",
    },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="dashboard-main">
        <DashboardNavbar setIsMobileOpen={setIsMobileOpen} />

        <div className="tollhistory-content">
          <div className="page-header">
            <h1>FASTag Toll History</h1>

            <p>
              View your FASTag transactions, toll deductions, vehicle activity,
              and travel expenses in one place.
            </p>

            <p>
              Check your <Link to="/analytics">Travel Analytics</Link> or
              manage vehicles from{" "}
              <Link to="/vehicles">Vehicle Management</Link>.
            </p>
          </div>

          {/* FILTER SECTION */}
          <div className="filter-box">
            <h3>Filters</h3>

            <div className="filters-row">
              <select>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>

              <select>
                <option>MH-02-CD-5678</option>
                <option>MH-02-AB-1234</option>
              </select>

              <select>
                <option>Mumbai</option>
                <option>Pune</option>
              </select>

              <button className="apply-btn">Apply Filters</button>
            </div>
          </div>

          <section className="tollhistory-info">
            <h2>Why Track Toll History?</h2>

            <p>
              Toll history helps you understand where your money is going and
              how often your vehicles use highways.
            </p>

            <p>
              FastagTracker keeps your toll records clean, organized, and easy
              to review.
            </p>

            <p>
              You can also use <Link to="/analytics">Travel Analytics</Link> for
              deeper spending insights.
            </p>
          </section>

          {/* TRANSACTION CARDS */}
          <div className="transactions-list">
            {transactions.map((item, index) => (
              <div className="transaction-card" key={index}>
                <div className="transaction-left">
                  <div className="location-icon">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <h3>{item.plaza}</h3>
                    <p className="highway">{item.highway}</p>

                    <div className="details-row">
                      <div>
                        <Calendar size={14} />
                        <span>
                          {item.date} <br /> {item.time}
                        </span>
                      </div>

                      <div>
                        <Car size={14} />
                        <span>{item.vehicle}</span>
                      </div>

                      <div>
                        <span className="bank-label">Bank</span>
                        <span>{item.bank}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="transaction-right">
                  <p>Amount Deducted</p>
                  <h2>{item.amount}</h2>
                </div>
              </div>
            ))}
          </div>

          <section className="tollhistory-cta">
            <h2>Understand Your Toll Spending</h2>

            <p>
              Review past FASTag transactions and find useful travel spending
              patterns.
            </p>

            <Link to="/analytics" className="cta-btn">
              View Travel Analytics
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TollHistory;