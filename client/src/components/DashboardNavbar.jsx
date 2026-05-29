import React from "react";
import { Bell, Search, Menu } from "lucide-react";

const DashboardNavbar = ({ setIsMobileOpen }) => {
    const user = JSON.parse(localStorage.getItem("user"));

    const userInitial = user?.name?.charAt(0).toUpperCase() || "U";
    
return (
<div className="dashboard-navbar">

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

<div className="profile-circle">
{userInitial}
</div>

</div>
</div>
);
};

export default DashboardNavbar;