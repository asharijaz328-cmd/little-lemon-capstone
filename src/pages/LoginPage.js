import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.email.trim() || !credentials.password.trim()) {
      setError('Please fill in both email and password');
      return;
    }

    setLoggedIn(true);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <main className="login-page" aria-label="Customer login page">
      <div className="login-card">
        <div className="login-header">
          <span className="login-icon" aria-hidden="true">🍋</span>
          <h1>Welcome Back</h1>
          <p>Sign in to your Little Lemon account to view reservations and saved tables</p>
        </div>

        {loggedIn ? (
          <div className="login-success" role="status">
            <h3>Login Successful!</h3>
            <p>Redirecting you to the home page...</p>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            {error && <div className="login-error" role="alert">{error}</div>}

            <div className="form-group">
              <label htmlFor="login-email">Email or Username</label>
              <input
                type="email"
                id="login-email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" name="remember" />
                <span>Remember me</span>
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to your email.'); }}>
                Forgot password?
              </a>
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>

            <div className="login-footer">
              <p>Don&apos;t have an account? <Link to="/booking">Reserve as a Guest</Link></p>
              <Link to="/" className="back-link">&larr; Back to Home</Link>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

export default LoginPage;
