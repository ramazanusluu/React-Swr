import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Axios from "./components/Axios";
import QuickStart from "./components/QuickStart";
import Home from "./components/Design/Home";
import Navbar from "./components/Navbar";
import RefreshInterval from "./components/RefreshInterval";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quick-start" element={<QuickStart />} />
        <Route path="axios" element={<Axios />} />
        <Route path="refreshinterval" element={<RefreshInterval />} />
      </Routes>
    </div>
  );
}

export default App;
