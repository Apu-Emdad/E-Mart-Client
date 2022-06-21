import React, { Children } from "react";
import "../Assets/CSS/Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper w">
        <h1 className="register-title">Sign In</h1>
        <form action="" className="login-form">
          <input type="email" className="register-input" placeholder="Email" />
          <input
            type="password"
            className="register-input"
            placeholder="Password"
          />
          <button>Login</button>
          <a href="" className="login-link">
            CAN'T REMEMBER THE PASSWORD?
          </a>
          <a href="" className="login-link">
            CREATE A NEW ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
