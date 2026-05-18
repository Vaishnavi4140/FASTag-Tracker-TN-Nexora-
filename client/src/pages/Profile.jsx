// import React from "react";
// import Sidebar from "../components/Sidebar";
// import DashboardNavbar from "../components/DashboardNavbar";
// import "../styles/Profile.css";
// import {
//   User,
//   Phone,
//   Mail,
//   Car,
//   CreditCard,
//   Shield,
//   Bell,
//   RefreshCcw,
// } from "lucide-react";

// const Profile = () => {
//   return (
//     <>
    
//       <div className="profile-header">
//         <h1>Profile Settings</h1>
//         <p>Manage your account and preferences</p>
//       </div>

//       <div className="profile-grid">
//         {/* LEFT CARD */}
//         <div className="profile-card">
//           <div className="avatar">JD</div>
//           <h2>John Doe</h2>
//           <p>Member since January 15, 2026</p>

//           <button className="primary-btn">Edit Profile</button>
//           <button className="danger-btn">Logout</button>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="profile-details">

//           <div className="info-card">
//             <h3>Personal Information</h3>

//             <div className="info-item">
//               <User size={18} />
//               <div>
//                 <span>Full Name</span>
//                 <strong>John Doe</strong>
//               </div>
//             </div>

//             <div className="info-item">
//               <Phone size={18} />
//               <div>
//                 <span>Phone Number</span>
//                 <strong>+91 98765 43210</strong>
//               </div>
//             </div>

//             <div className="info-item">
//               <Mail size={18} />
//               <div>
//                 <span>Email</span>
//                 <strong>john.doe@example.com</strong>
//               </div>
//             </div>
//           </div>

//           <div className="info-card">
//             <h3>Security</h3>

//             <div className="info-item">
//               <Shield size={18} />
//               <div>
//                 <span>Password</span>
//                 <strong>Last changed 3 months ago</strong>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/Profile.css";
import {
  User,
  Phone,
  Mail,
  Shield,
} from "lucide-react";

const Profile = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      
      {/* SIDEBAR */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* MAIN AREA */}
      <div className="dashboard-main">
        
        {/* TOP NAVBAR */}
        <DashboardNavbar setIsMobileOpen={setIsMobileOpen} />

        {/* PAGE CONTENT */}
        <div className="dashboard-content">

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
              <button className="danger-btn">Logout</button>
            </div>

            {/* RIGHT SECTION */}
            <div className="profile-details">

              <div className="info-card">
                <h3>Personal Information</h3>

                <div className="info-item">
                  <User size={18} />
                  <div>
                    <span>Full Name</span>
                    <strong>John Doe</strong>
                  </div>
                </div>

                <div className="info-item">
                  <Phone size={18} />
                  <div>
                    <span>Phone Number</span>
                    <strong>+91 98765 43210</strong>
                  </div>
                </div>

                <div className="info-item">
                  <Mail size={18} />
                  <div>
                    <span>Email</span>
                    <strong>john.doe@example.com</strong>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3>Security</h3>

                <div className="info-item">
                  <Shield size={18} />
                  <div>
                    <span>Password</span>
                    <strong>Last changed 3 months ago</strong>
                  </div>
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