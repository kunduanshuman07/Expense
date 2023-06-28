import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <Wrapper>
      <div className="container">
        <header className="container-header">
          <h1>Expense Tracker</h1>
          <p>Track and manage your expenses easily!</p>
          <div className="button-container">
            <Link to="/register" className="link">
              <button className="get-started-button">Get Started</button>
            </Link>
            <Link to="/" className="link">
              <button className="learn-more-button">Learn More</button>
            </Link>
            <Link to="/" className="link">
              <button className="contact-button">Contact Us</button>
            </Link>
          </div>
        </header>
        <div className="info">
          <section className="features-section">
            <h2>Key Features</h2>
            <ul>
              <li>Expense tracking made easy</li>
              <li>Manage your income and expenses</li>
              <li>Set budgets and financial goals</li>
              <li>Visualize your spending patterns</li>
            </ul>
          </section>
          <section className="benefits-section">
            <h2>Benefits of Expense Tracker</h2>
            <ul>
              <li>Stay organized with your finances</li>
              <li>Gain insights into your spending habits</li>
              <li>Save money and reach your financial goals</li>
              <li>Track your expenses anytime, anywhere</li>
            </ul>
          </section>
        </div>
      </div>
    </Wrapper>
  );
}

export default LandingPage;
