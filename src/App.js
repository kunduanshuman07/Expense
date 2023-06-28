import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components";
import {
  Dashboard,
  LandingPage,
  Myexpense,
  CreateExpense,
  ProtectedRoute,
  Register,
  Error,
} from "./pages";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myexpense" element={<Myexpense />} />
          <Route path="/create" element={<CreateExpense />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
