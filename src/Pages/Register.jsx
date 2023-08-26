import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../Assets/CSS/Register.css';
import { register } from '../Redux/apiCalls';
import { Link } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const user = {
      username: inputs.username,
      email: inputs.email,
      password: inputs.password
    };
    // console.log(user);
    register(dispatch, user);
    navigate('/home');
  };

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
            required
          />
          <input
            type="text"
            className="register-input"
            placeholder="Last Name"
            required
          />
          <input
            type="text"
            className="register-input"
            placeholder="User Name"
            name="username"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            className="register-input"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="register-input"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="register-input"
            placeholder="Confirm Password"
            name="confirmPassword"
          />

          <span className="register-agreement">
            I hereby consent to the processing of the personal data that I have
            provided and declare my agreement with the
            <b>&nbsp;data protection regulations</b>
          </span>

          <button onClick={handleRegister}>CREATE</button>
        </form>
        <br />
        <br />
        <Link to="/login" className="register-link">
          Already registered? Please Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
