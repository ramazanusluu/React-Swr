import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Axios from "./components/Axios";
import QuickStart from "./components/QuickStart";
import Home from "./components/Design/Home";
import Navbar from "./components/Navbar";
import RefreshInterval from "./components/RefreshInterval";
import ConditionalFetching from "./components/ConditionalFetching";
import Dependent from "./components/Dependent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quick-start" element={<QuickStart />} />
        <Route path="axios" element={<Axios />} />
        <Route path="refreshinterval" element={<RefreshInterval />} />
        <Route path="conditional-fetching" element={<ConditionalFetching />} />
        <Route path="dependent" element={<Dependent />} />
      </Routes>
    </div>
  );
}

export default App;
