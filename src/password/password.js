// src/components/PasswordPage.js
import React, { useState } from "react";
import "./password.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Welcome from "../welcome/welcome.js";
function Password() {
  const [password, setPassword] = useState("");

  // Add your password-related logic here
  const googleLogoUrl =
    "https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png";
  return (
    <div>
      <div className="login-container">
        <img src={googleLogoUrl} alt="Google Logo" className="google-logo" />
        <h3>Enter Your Password</h3>
        <form>
          <div className="input-group">
            <label></label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="button-container">
            <Link to="/Welcome">
              <button type="button">Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Password;
