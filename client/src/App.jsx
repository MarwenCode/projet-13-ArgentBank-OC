import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SignIn from "./components/sign/SignIn";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Profile from "./pages/profile/Profile";
// import Register from "./components/register/Register";
import { useSelector } from "react-redux";
import "./App.css"
import Footer from "./components/footer/Footer";

function App() {
  // const authState = useSelector((state) => state.auth);
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Routes>
          <Route path="/login" element={<SignIn />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/profile" element={authState.token ? <Profile /> : <SignIn/>} /> */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
