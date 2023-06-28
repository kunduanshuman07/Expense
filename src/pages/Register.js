import React from "react";
import Wrapper from "../assets/wrappers/Register";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Wrapper>
      <div className="registration-page">
        <h2>Registration</h2>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <button type="submit">Register</button>
          <p>
            Already have an account?
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default Register;
