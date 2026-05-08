import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
// import TollHistory from "./pages/TollHistory";
// import Vehicles from "./pages/Vehicles";
// import Profile from "./pages/Profile";


function App() {
  return (
 <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Signin />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* 
        <Route path="/toll-history" element={<TollHistory />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/profile" element={<Profile />} />
        */}

      </Routes>

    </BrowserRouter>
  );
};

export default App;