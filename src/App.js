import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter

import Login from "./login/login.js";
import Password from "./password/password.js";
import Welcome from "./welcome/welcome.js";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap your routes in the Router component */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
