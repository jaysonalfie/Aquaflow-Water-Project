import React, { useState } from "react";
import logo from "../../images/logo2.GIF";
import { NavLink } from "react-router-dom";
import "../about/style2.css";

const Signup = () => {
  //creating states that are in the form component
  const [email, setEmail] = useState(" ");
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState(false);

  //function to validate the form inputs
  const validateForm = () => {
    if (!username || !password || !email) {
      setError("Username, email and password are required");
      return false;
    }
    setError("");
    return true;
  };

  //function to handle the submit event
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    const formData = {
      username,
      email,
      password,
    };
    //try-catch block
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        //if registration is successful one can now proceed to the login page to log in
        console.log("Registration successful");
        setSuccess(true);
      } else {
        const errorData = await response.json();
        setError(errorData.detail || "Registration failed");
        setSuccess(false);
      }
    } catch (error) {
      setError("An Error occured. Please try again later");
      setSuccess(false);
    }
  };

  return (
    <div className="signup_wrapper">
      <div>
        <div className="form-header">
          <img src={logo} className="logo3" alt="" />
          <h2>Sign Up</h2>
        </div>
      </div>
      <div className="signUp_form">
        <form onSubmit={handleSubmit}>
          {/* Start of the form, onSubmit event calls the handleSubmit function from react-hook-form */}
          {/* Email input field */}
          <div className="text">
            <label> Email</label>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="text">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small className="passwordtxt">
              -Your password must contain at least 8 characters
            </small>
          </div>
          <div>
            <label>Password Confirmation</label>
            <input
              type="password"
              name={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <small className="passwordtxt">
              -Enter the same password as before for verification
            </small>
          </div>
          <div className="buttondiv">
            <button type="submit" className="btn10">
              Sign Up
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && (
              <p style={{ color: "green" }}>Account created successfully</p>
            )}
          </div>
          <div className="signdet">
            <p>
              Don't have an account?{" "}
              <span>
                <NavLink to="/">Sign In</NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
