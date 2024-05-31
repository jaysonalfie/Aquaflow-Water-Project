import React, { useState } from "react";
import logo from "../../images/logo2.GIF";
import '../about/style2.css'
import { NavLink ,useNavigate } from "react-router-dom";

const Login = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  const validateForm = ()=>{
    if(!username || !password){
      setError("USername and Password are required");
      return false;
    }
    setError("");
    return true;
  }
  
  const handleSubmit = async(event) =>{
    event.preventDefault();
    if(!validateForm()) return;
    setLoading(true);


    const formDetails = new URLSearchParams();
    formDetails.append("username", username);
    formDetails.append("password", password);

    try {
      const response = await fetch ("http://localhost:8000/token", {
        method: "POST",
        headers : {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDetails,
      });

      setLoading(false);

      if(response.ok){
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        navigate("/about")
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Authentication failed");
      }

    } catch (error){
      setLoading(false);
      setError("An error occured. Please try again later")
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
                  name={password}
                  onChange={(e) => setPassword(e.target.value)}
                 />
              </span>
            </label>
          </div>
          <div className="buttondiv">
            <button type="submit" className="btn10" disabled={loading}>
            {loading ? "logging in..." : "Login"}</button>
          </div>
          {error && <p style={{color : "red"}}>{error}</p>}
          <div className="signdet">
            <p>Don't have an account?<span>
              <NavLink to='/signup'>Sign Up</NavLink>
            </span></p>
          </div>
        </form>
      </div>
    </div>
  );
  
};

export default Login;
