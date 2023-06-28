import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar, Navbar } from "./components";
import { Dashboard, LandingPage, Myexpense, CreateExpense } from "./pages";
const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="content">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/myexpense" element={<Myexpense />} />
            <Route path="/create" element={<CreateExpense />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
