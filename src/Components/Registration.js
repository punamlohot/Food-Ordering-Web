import React, { useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const isPasswordValid = () => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    return (
      password.length >= minLength && hasUppercase && hasLowercase && hasDigit
    );
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (!isPasswordValid()) {
      setPasswordError("Password must meet specific constraints.");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isPasswordValid() || password !== confirmPassword) {
      setPasswordError("Invalid password or passwords do not match.");
      return;
    }

    // Proceed with registration
    console.log("Registration successful");
    alert("Registration successful");
  };

  return (
    <div className="register mt-5">
      <div className="container p-3 m-10" id="log2">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-5">
            <h1>Registration Form</h1>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username Or Email"
              name="email"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="pswd"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {/* <p className="Prompted">
            (password length should be greater than 8, should contain at
            least one Uppercase letter, one special character, and one
            number)
          </p> */}
          <div className="mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              name="confirmPswd"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
          <br />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <br />
          <Link to="/Login">Back To Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Registration;
