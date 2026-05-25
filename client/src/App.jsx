import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import TollHistory from "./pages/TollHistory";
import Vehicles from "./pages/Vehicles";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import AddVehicle from "./pages/AddVehicle";

function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <BrowserRouter> 

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/toll-history" element={<TollHistory />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-vehicle" element={<AddVehicle />} />

          </Routes>
    </BrowserRouter>
  );
}

export default App;
