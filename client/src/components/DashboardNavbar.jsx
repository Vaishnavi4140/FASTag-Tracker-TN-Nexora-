import React from "react";
import { Bell, Search } from "lucide-react";

const DashboardNavbar = () => {
  return (
    <div className="dashboard-navbar">
      <div className="search-box">
        <Search size={18} />
        <input type="text" placeholder="Search transactions..." />
      </div>

      <div className="navbar-right-dashboard">
        <div className="notification-icon">
          <Bell size={20} />

          <span className="notification-dot"></span>
        </div>

        <div className="profile-circle">JD</div>
      </div>
    </div>
  );
};

export default DashboardNavbar;