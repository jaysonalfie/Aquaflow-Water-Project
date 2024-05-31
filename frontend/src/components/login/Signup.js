import React from "react";
import logo from "../../images/logo2.GIF";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../about/style2.css";

const Signup = () => {
  // Destructuring the necessary functions and properties from the useForm hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
    // Add logic to save user data or interact with backend API
    reset(); // Reset form fields after successful submission
  };

  return (
    <div className="signup_wrapper">
      <div>
        <div className="form-header">
          <img src={logo} className="logo3" />
          <h2>Sign Up</h2>
        </div>
      </div>
      <div className="signUp_form">
        <form onSubmit={handleSubmit(onFormSubmit)}>
        {/* Start of the form, onSubmit event calls the handleSubmit function from react-hook-form */}
         {/* Email input field */}
          <div className="text">
            <label>
              Email
              <span>
                <input
                // email validation rules
                  type="text"
                  {...register("email", { required: "Email is required." })}
                />
                {/* Displaying the error message if the email field is invalid */}
                {errors.email && <small>{errors.email.message}</small>}
              </span>
            </label>
          </div>
          <div className="text">
            <label>
              Username
              <span>
                <input
                  type="text"
                  {...register("username", { required: "Username is required." })}
                />
                 {/* Displaying the error message if the username field is invalid */}
                {errors.username && <small>{errors.username.message}</small>}
              </span>
            </label>
          </div>
          <div>
            <label>
              Password
              <span>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required.",
                    minLength: {
                      value: 8,
                      message: "Your password must contain at least 8 characters",
                    },
                  })}
                />
                 {/* Displaying the error message if the password field is invalid */}
                {errors.password && <small>{errors.password.message}</small>}
                <small className="passwordtxt">
                  -Your password must contain at least 8 characters
                </small>
              </span>
            </label>
          </div>
          <div>
            <label>
              Password Confirmation
              <span>
                <input
                  type="password"
                  {...register("passwordConfirm", {
                    required: "Please confirm your password.",
                    validate: (value) =>
                      value === watch("password") || "Passwords don't match.",
                  })}
                />
                 {/* Displaying the error message if the password confirmation field is invalid */}
                {errors.passwordConfirm && (
                  <small>{errors.passwordConfirm.message}</small>
                )}
                <small className="passwordtxt">
                  -Enter the same password as before for verification
                </small>
              </span>
            </label>
          </div>
          <div className="buttondiv">
            <button type="submit" className="btn10">
              Sign Up
            </button>
          </div>
          <div className="signdet">
            <p>
              Don't have an account?{" "}
              <span>
                <NavLink to="/login">Sign In</NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;