import React, { Children, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Assets/CSS/Login.css";
import { login } from "../Redux/apiCalls";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);

  console.log(isFetching);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  currentUser && navigate("/home");

  return (
    <div className="login-container">
      <div className="login-wrapper w">
        <h1 className="register-title">Sign In</h1>
        <form action="" className="login-form">
          <input
            type="email"
            className="register-input"
            placeholder="Email"
            onChange={handleEmail}
          />
          <input
            type="password"
            className="register-input"
            placeholder="Password"
            onChange={handlePassword}
          />
          <button onClick={handleLogin} disabled={isFetching}>
            Login
          </button>
          {error ? (
            <span>Wrong credentilas!</span>
          ) : (
            <span style={{ visibility: "hidden" }}>This part is hidden</span>
          )}
          <a href="#" className="login-link">
            CAN'T REMEMBER THE PASSWORD?
          </a>
          <a href="#" className="login-link">
            CREATE A NEW ACCOUNT
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
