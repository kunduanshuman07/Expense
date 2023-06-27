import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { LandingPage } from "./pages";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
