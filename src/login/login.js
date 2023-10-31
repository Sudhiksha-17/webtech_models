// src/components/Login/Login.js
import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./login.css";
import Password from "../password/password.js";

function Login() {
  const [email, setEmail] = useState("");

  const googleLogoUrl =
    "https://w7.pngwing.com/pngs/523/198/png-transparent-google-logo-google-search-google-play-google-text-logo-number.png"; // Replace with the actual URL of the Google logo
  const usernameLogoUrl =
    "https://mspgh.unimelb.edu.au/__data/assets/image/0011/3576098/Placeholder.jpg"; // Replace with the actual URL of the username logo

  return (
    <div className="login-container">
      <img src={googleLogoUrl} alt="Google Logo" className="google-logo" />
      <p>Sign in to continue</p>
      <form>
        <div className="input-group">
          <label>Email or Phone:</label>
          <input
            type="text"
            placeholder="Enter your email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <Link to="/password">
            <button type="button">Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
