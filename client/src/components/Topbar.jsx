import React from "react";
import { Menu, Bell } from "lucide-react";
import "../styles/Topbar.css";

const Topbar = ({ setIsMobileOpen }) => {
  return (
    <div className="topbar">
      <button
        className="hamburger"
        onClick={() => setIsMobileOpen(true)}
      >
        <Menu size={24} />
      </button>

      <div className="topbar-right">
        <Bell size={20} />
        <div className="avatar">JD</div>
      </div>
    </div>
  );
};

export default Topbar;