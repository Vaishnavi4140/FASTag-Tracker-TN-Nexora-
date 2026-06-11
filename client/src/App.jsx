import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Sidebar from "./components/Sidebar";
// import Topbar from "./components/Topbar";

import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import TollHistory from "./pages/TollHistory";
import Vehicles from "./pages/Vehicles";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import AddVehicle from "./pages/AddVehicle";
import VehicleDetails from "./pages/VehicleDetails";
import VehicleDashboard from "./pages/VehicleDashboard";
import TollCalculation from "./pages/TollCalculation";

function App() {
const [isMobileOpen, setIsMobileOpen] = useState(false);

return (
  <BrowserRouter> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/toll-history" element={<TollHistory />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/vehicle-details" element={<VehicleDetails />} />
          <Route path="/toll-calculation" element={<TollCalculation />} />
          <Route path="/vehicle/:id" element={<VehicleDashboard />} />

        </Routes>
  </BrowserRouter>
);
}

export default App;
