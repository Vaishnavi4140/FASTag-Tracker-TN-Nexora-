import React, { useState } from "react";
import "../styles/Sidebar.css";
import {  NavLink, useLocation } from "react-router-dom";
import logo from "../assets/Track.png";
import {
    LayoutDashboard,
    History,
    Car,
    BarChart3,
    User,
    Menu,
    X,
} from "lucide-react";

const Sidebar = ( { isMobileOpen, setIsMobileOpen } ) => {
    // const location = useLocation();
    // const [isCollapsed, setIsCollapsed] = useState(false);
    // const [isMobileOpen, setIsMobileOpen] = useState(false);

    const menuItems = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <LayoutDashboard size={20} />,
    },
    {
        name: "Vehicles",
        path: "/vehicles",
        icon: <Car size={20} />,
    },
    {
        name: "Toll History",
        path: "/toll-history",
        icon: <History size={20} />,
    },
    {
        name: "Analytics",
        path: "/analytics",
        icon: <BarChart3 size={20} />,
    },
    {
        name: "Profile",
        path: "/profile",
        icon: <User size={20} />,
    },
    ];

    return (
        <>
      {isMobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div className={`sidebar ${isMobileOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-logo">
          <h2>TollTrack</h2>
        </div>

        <div className="sidebar-menu">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
              onClick={() => setIsMobileOpen(false)}
            >
              <div className="menu-icon">{item.icon}</div>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
    );
};

export default Sidebar;
