//Login.js
import React, { useContext, useState } from "react";
import logo from "../../images/logo2.GIF";
import '../about/style2.css'
import { NavLink, useNavigate } from "react-router-dom";
import {AuthContext} from '../AuthContext'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useContext(AuthContext);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username || !password) {
      return false;
    }
    return true;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      await login(username, password);
      navigate("/home"); // Navigate to the desired route after successful authentication
    } catch (error) {
      console.log('Login error:', error);
    }
  };

  return (
    <div className="form_wrapper">
      <div className="form-header">
        <img src={logo} className="logo3" alt="Logo" />
        <h2>Login</h2>
        <p className="header">Sign in into your account</p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="text">
            <label>
              Username
              <span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </span>
            </label>
          </div>
          <div>
            <label>
              Password
              <span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
            </label>
          </div>
          <div className="buttondiv">
            <button type="submit" className="btn10" disabled={loading}>
              {loading ? "logging in..." : "Login"}
            </button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="signdet">
            <p>
              Don't have an account?
              <span>
                <NavLink to='/signup'>Sign Up</NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;