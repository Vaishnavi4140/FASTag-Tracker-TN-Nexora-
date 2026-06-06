import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../styles/VehicleDashboard.css";

import {
  ArrowLeft,
  Car,
  Wallet,
  IndianRupee,
  Route,
  Clock,
  Menu,
  X,
  ShieldCheck,
  Download,
  Phone,
  CreditCard,
  CheckCircle
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from "recharts";

const VehicleDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const vehicle = location.state?.vehicle;

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    setDrawerOpen(false);
  };

  const balanceData = [
    { day: "1", balance: 900 },
    { day: "5", balance: 1200 },
    { day: "10", balance: 1500 },
    { day: "15", balance: 1250 },
    { day: "20", balance: 1100 },
    { day: "25", balance: 800 },
    { day: "30", balance: 1050 }
  ];

  const tollData = [
    { name: "Mumbai Pune", value: 12 },
    { name: "Lonavala", value: 6 },
    { name: "Khalapur", value: 4 }
  ];

  const COLORS = ["#2563eb", "#16a34a", "#f59e0b"];

  const transactions = [
    {
      plaza: "Mumbai Pune Expressway",
      date: "20 May 2026",
      amount: "₹120"
    },
    {
      plaza: "Lonavala Toll Plaza",
      date: "19 May 2026",
      amount: "₹65"
    },
    {
      plaza: "Khalapur Toll Plaza",
      date: "18 May 2026",
      amount: "₹95"
    },
    {
      plaza: "FASTag Recharge",
      date: "15 May 2026",
      amount: "+₹1000"
    }
  ];

  return (
    <div className="vw-workspace">

      {/* Mobile Menu Button */}
      <button
        className="vw-mobile-menu-btn"
        onClick={() => setDrawerOpen(true)}
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="vw-overlay"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`vw-mobile-drawer ${
          drawerOpen ? "vw-mobile-drawer-open" : ""
        }`}
      >
        <div className="vw-drawer-header">
          <h3>Sections</h3>

          <button
            onClick={() => setDrawerOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <button onClick={() => scrollToSection("hero")}>
          Vehicle Card
        </button>

        <button onClick={() => scrollToSection("stats")}>
          Stats
        </button>

        <button onClick={() => scrollToSection("charts")}>
          Charts
        </button>

        <button onClick={() => scrollToSection("transactions")}>
          Transactions
        </button>

        <button onClick={() => scrollToSection("details")}>
          Details
        </button>
      </div>

      {/* Topbar */}
      <div className="vw-topbar">

        <button
          className="vw-back-btn"
          onClick={() => navigate("/vehicles")}
        >
          <ArrowLeft size={18} />
          Back to Vehicles
        </button>

        <div className="vw-top-actions">
          <button className="vw-secondary-btn">
            <Download size={16} />
            Download Report
          </button>

          <button className="vw-primary-btn">
            <CreditCard size={16} />
            Recharge FASTag
          </button>
        </div>
      </div>

      {/* Hero */}
      <section
        id="hero"
        className="vw-hero-card"
      >
        <div className="vw-hero-left">

          <div className="vw-car-icon">
            <Car size={50} />
          </div>

          <div>
            <h1>
              {vehicle?.vehicleNumber || "MH12AB1234"}
            </h1>

            <p>
              {vehicle?.category || "SUV"}
            </p>

            <span className="vw-status-badge">
              {vehicle?.status || "Active"}
            </span>
          </div>
        </div>

        <div className="vw-hero-info">
          <div>
            <span>FASTag ID</span>
            <h4>{vehicle?.tagId}</h4>
          </div>

          <div>
            <span>Vehicle Type</span>
            <h4>{vehicle?.vehicleType}</h4>
          </div>

          <div>
            <span>Balance</span>
            <h4>₹{vehicle?.fasTagBalance}</h4>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        id="stats"
        className="vw-stat-grid"
      >

        <div className="vw-stat-card vw-balance">
          <Wallet size={28} />
          <h2>₹{vehicle?.fasTagBalance || 1050}</h2>
          <p>FASTag Balance</p>
        </div>

        <div className="vw-stat-card vw-trips">
          <Route size={28} />
          <h2>24</h2>
          <p>Total Trips</p>
        </div>

        <div className="vw-stat-card vw-spent">
          <IndianRupee size={28} />
          <h2>₹2780</h2>
          <p>Total Spent</p>
        </div>

        <div className="vw-stat-card vw-last">
          <Clock size={28} />
          <h2>₹120</h2>
          <p>Last Transaction</p>
        </div>

      </section>

      {/* Charts */}
      <section
        id="charts"
        className="vw-chart-grid"
      >

        <div className="vw-chart-card">

          <div className="vw-card-header">
            <h3>Balance Trend</h3>
          </div>

          <ResponsiveContainer
            width="100%"
            height={320}
          >
            <LineChart data={balanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="balance"
                stroke="#16a34a"
                strokeWidth={4}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>

        </div>

        <div className="vw-chart-card">

          <div className="vw-card-header">
            <h3>Toll Usage</h3>
          </div>

          <div className="vw-donut-wrapper">

            <ResponsiveContainer
              width="100%"
              height={320}
            >
              <PieChart>
                <Pie
                  data={tollData}
                  dataKey="value"
                  innerRadius={70}
                  outerRadius={110}
                >
                  {tollData.map((item, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="vw-donut-center">
              <h2>24</h2>
              <span>Trips</span>
            </div>

          </div>

        </div>

      </section>

      {/* Transactions */}
      <section
        id="transactions"
        className="vw-timeline-card"
      >

        <h3>Recent Transactions</h3>

        {transactions.map((txn, index) => (
          <div
            className="vw-timeline-item"
            key={index}
          >
            <div className="vw-timeline-dot" />

            <div className="vw-timeline-content">
              <h4>{txn.plaza}</h4>
              <p>{txn.date}</p>
            </div>

            <span className="vw-timeline-amount">
              {txn.amount}
            </span>
          </div>
        ))}

      </section>

      {/* Details + Shared */}
      <section
        id="details"
        className="vw-bottom-grid"
      >

        <div className="vw-details-card">

          <h3>Vehicle Details</h3>

          <div className="vw-detail-row">
            <span>Vehicle Number</span>
            <strong>
              {vehicle?.vehicleNumber}
            </strong>
          </div>

          <div className="vw-detail-row">
            <span>Vehicle Type</span>
            <strong>
              {vehicle?.vehicleType}
            </strong>
          </div>

          <div className="vw-detail-row">
            <span>FASTag ID</span>
            <strong>{vehicle?.tagId}</strong>
          </div>

          <div className="vw-detail-row">
            <span>Status</span>
            <strong>{vehicle?.status}</strong>
          </div>

        </div>

        <div className="vw-shared-card">

          <h3>Shared Access Rules</h3>

          <ul>

            <li>
              <CheckCircle size={16} />
              View Vehicle Details
            </li>

            <li>
              <CheckCircle size={16} />
              View Transactions
            </li>

            <li>
              <CheckCircle size={16} />
              Check FASTag Balance
            </li>

            <li>
              <CheckCircle size={16} />
              Cannot Delete Vehicle
            </li>

            <li>
              <CheckCircle size={16} />
              Cannot Transfer Ownership
            </li>

          </ul>

        </div>

      </section>

      {/* Banner */}

      <div className="vw-banner">

        <div className="vw-banner-left">

          <ShieldCheck size={34} />

          <div>
            <h3>Shared Vehicle Access</h3>

            <p>
              You are viewing a shared FASTag
              vehicle with limited permissions.
            </p>
          </div>

        </div>

        <button className="vw-contact-btn">
          <Phone size={16} />
          Contact Owner
        </button>

      </div>

    </div>
  );
};

export default VehicleDashboard;
