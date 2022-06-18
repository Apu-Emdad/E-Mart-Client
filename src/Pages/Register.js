import React from "react";
import "../Assets/CSS/Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h1 className="register-title">Create An Account</h1>
        {/* ==== Form Starts ==== */}
        <form action="" className="register-form">
          <input
            type="text"
            className="register-input"
            placeholder="First Name"
          />
          <input
            type="text"
            className="register-input"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="register-input"
            placeholder="User Name"
          />
          <input type="email" className="register-input" placeholder="Email" />
          <input
            type="password"
            className="register-input"
            placeholder="Password"
          />
          <input
            type="password"
            className="register-input"
            placeholder="Confirm Password"
          />

          <span className="register-agreement">
            I hereby consent to the processing of the personal data that I have
            provided and declare my agreement with the{" "}
            <b> data protection regulations</b>
          </span>

          <button>CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
