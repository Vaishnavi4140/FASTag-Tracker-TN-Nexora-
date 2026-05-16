import React from "react";
import { Bell, Search, Menu } from "lucide-react";

const DashboardNavbar = ({ setIsMobileOpen }) => {
  return (
    <div className="dashboard-navbar">

      {/* MOBILE MENU BUTTON */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu size={28} />
      </button>

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