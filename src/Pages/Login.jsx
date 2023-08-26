import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useNavigate } from 'react-router-dom';
import '../Assets/CSS/Login.css';
import { login } from '../Redux/apiCalls';
import { Link } from 'react-router-dom';
const Login = ({ state }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, error, currentUser } = useSelector((state) => state.user);
  const location = useLocation();

  const redirect_uri = location?.state?.from?.pathname || '/home';

  console.log(location);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("clicked");
    login(dispatch, { email, password });
  };

  useEffect(() => {
    if (currentUser) {
      navigate(redirect_uri, { replace: true });
    }
  }, [currentUser, navigate, redirect_uri]);

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
          <button onClick={handleLogin}>Login</button>
          {error ? (
            <span>Wrong credentials!</span>
          ) : (
            <span style={{ visibility: 'hidden' }}>This part is hidden</span>
          )}
          <a href="#" className="login-link">
            CAN&apos;T REMEMBER THE PASSWORD?
          </a>
          <Link to="/register" className="login-link">
            CREATE A NEW ACCOUNT
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
