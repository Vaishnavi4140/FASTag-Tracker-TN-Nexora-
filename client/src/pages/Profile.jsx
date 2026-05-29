import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/Profile.css";

import {
  User,
  Phone,
  Mail,
  Car,
  CreditCard,
  Shield,
  Bell,
  RefreshCcw,
  CheckCircle,
} from "lucide-react";

const Profile = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="dashboard-layout">
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <div className="dashboard-main">
        <DashboardNavbar setIsMobileOpen={setIsMobileOpen} />

        <div className="dashboard-content">

          {/* HEADER */}
          <div className="profile-header">
            <h1>Profile Settings</h1>
            <p>Manage your account and preferences</p>
          </div>

          <div className="profile-grid">

            {/* LEFT CARD */}
            <div className="profile-card">
              <div className="avatar">JD</div>
              <h2>John Doe</h2>
              <p>Member since January 15, 2026</p>

              <button className="primary-btn">Edit Profile</button>
              <button className="danger-btn" onClick={handleLogout}>Logout</button>
            </div>

            {/* RIGHT SECTION */}
            <div className="profile-details">

              {/* LINKED VEHICLES */}
              <div className="info-card">
                <h3>Linked Vehicles</h3>

                <div className="linked-item">
                  <Car size={20} />
                  <div>
                    <strong>MH-02-AB-1234</strong>
                    <span>Paytm FASTag</span>
                  </div>
                  <CheckCircle className="status-icon" />
                </div>

                <div className="linked-item">
                  <Car size={20} />
                  <div>
                    <strong>MH-02-CD-5678</strong>
                    <span>HDFC Bank FASTag</span>
                  </div>
                  <CheckCircle className="status-icon" />
                </div>
              </div>

              {/* SMS SYNC */}
              <div className="info-card">
                <h3>SMS Sync Status</h3>
                <p className="sub-text">
                  Last synced: Today at 10:30 AM
                </p>

                <button className="secondary-btn">
                  <RefreshCcw size={16} />
                  Sync SMS Again
                </button>
              </div>

              {/* PAYMENT METHODS */}
              <div className="info-card">
                <h3>Payment Methods</h3>

                <div className="linked-item">
                  <CreditCard size={20} />
                  <div>
                    <strong>HDFC Bank •••• 4532</strong>
                    <span>Expires 12/27</span>
                  </div>
                  <CheckCircle className="status-icon" />
                </div>

                <div className="linked-item">
                  <CreditCard size={20} />
                  <div>
                    <strong>Paytm Wallet</strong>
                    <span>Balance: ₹2,450</span>
                  </div>
                </div>

                <button className="secondary-btn full-width">
                  Add Payment Method
                </button>
              </div>

              {/* PREFERENCES */}
              <div className="info-card">
                <h3>Preferences</h3>

                <div className="toggle-item">
                  <Bell size={18} />
                  <div>
                    <strong>Push Notifications</strong>
                    <span>Get notified about toll transactions</span>
                  </div>
                  <input type="checkbox" defaultChecked />
                </div>

                <div className="toggle-item">
                  <Mail size={18} />
                  <div>
                    <strong>Email Notifications</strong>
                    <span>Receive monthly reports</span>
                  </div>
                  <input type="checkbox" defaultChecked />
                </div>

                <div className="toggle-item">
                  <RefreshCcw size={18} />
                  <div>
                    <strong>Auto Sync</strong>
                    <span>Automatically sync SMS daily</span>
                  </div>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>

              {/* SECURITY */}
              <div className="info-card">
                <h3>Security</h3>

                <div className="linked-item">
                  <Shield size={20} />
                  <div>
                    <strong>Password</strong>
                    <span>Last changed 3 months ago</span>
                  </div>
                  <button className="small-btn">Change</button>
                </div>

                <div className="linked-item">
                  <Shield size={20} />
                  <div>
                    <strong>Two-Factor Authentication</strong>
                    <span>Not enabled</span>
                  </div>
                  <button className="small-btn">Enable</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;