

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Login.css";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">

        {/* Updated Title */}
        <h1 className="app-title">🛒 Flipkart Light</h1>
        <p className="subtitle">
          Login to explore the best deals and offers
        </p>

        {error && <p className="error-text">{error}</p>}

        <input
          type="email"
          placeholder="📧 Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="🔒 Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button onClick={handleLogin} disabled={!email || !password}>
          Login
        </button>

        <p className="register-text">
          New to Flipkart Light?
          <span onClick={() => navigate("/register")}> Create an account</span>
        </p>

      </div>
    </div>
  );
}

export default Login;
