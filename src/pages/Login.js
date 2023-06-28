import React from "react";
import Wrapper from "../assets/wrappers/Login";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <div className="registration-page">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <p>
            Don't have an account?
            <Link to="/register" className="link">
              Register
            </Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default Login;
