"use client";
import { useState } from "react";
import { setCookie } from "../../utils/auth";
import "../../css/login.css";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!username || !email || !password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For demo purposes, always "succeed" registration
    setSuccess("Registration successful! You are now logged in.");
    
    // Set authentication cookie (auto-login after registration)
    setCookie("isLoggedIn", "true", 7);
    
    // Generate a fake JWT-like token
    const fakeToken = `fake-jwt-token-${Date.now()}`;
    setCookie("authToken", fakeToken, 7);
    
    // Redirect after a short delay
    setTimeout(() => {
      window.location.href = "/contact";
    }, 2000);

    setLoading(false);
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Register</h1>
      <form className="login-form" onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        {error && <div className="login-error">{error}</div>}
        {success && <div className="login-success">{success}</div>}
        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        <div className="login-links">
          <a href="/login">Already have an account? Login</a>
        </div>
      </form>
    </div>
  );
}
