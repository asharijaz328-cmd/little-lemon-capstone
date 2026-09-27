import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleToggle = (signUpMode) => {
    setIsSignUp(signUpMode);
    setError('');
    setSuccessMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      if (!fields.name.trim() || !fields.email.trim() || !fields.password.trim()) {
        setError('Please fill in all required fields');
        return;
      }
      if (!/\S+@\S+\.\S+/.test(fields.email)) {
        setError('Please enter a valid email address');
        return;
      }
      if (fields.password.length < 6) {
        setError('Password should be at least 6 characters');
        return;
      }
      if (fields.password !== fields.confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      setSuccessMsg('Account created successfully! Welcome to Little Lemon.');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } else {
      if (!fields.email.trim() || !fields.password.trim()) {
        setError('Please enter your email and password');
        return;
      }

      setSuccessMsg('Signed in successfully! Redirecting...');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  return (
    <main className="login-page" aria-label="Account sign in and registration">
      <div className="login-card">
        <div className="login-header">
          <span className="login-icon" aria-hidden="true">🍋</span>
          <h1>{isSignUp ? 'Create an Account' : 'Welcome Back'}</h1>
          <p>
            {isSignUp
              ? 'Join Little Lemon to reserve tables faster and unlock rewards'
              : 'Sign in to manage your bookings and access member perks'}
          </p>
        </div>

        <div className="auth-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={!isSignUp}
            className={`auth-tab ${!isSignUp ? 'active' : ''}`}
            onClick={() => handleToggle(false)}
          >
            Sign In
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isSignUp}
            className={`auth-tab ${isSignUp ? 'active' : ''}`}
            onClick={() => handleToggle(true)}
          >
            Sign Up
          </button>
        </div>

        {successMsg ? (
          <div className="login-success" role="status">
            <h3>{isSignUp ? 'Welcome Aboard!' : 'Logged In!'}</h3>
            <p>{successMsg}</p>
          </div>
        ) : (
          <form className="login-form" onSubmit={handleSubmit} noValidate>
            {error && <div className="login-error" role="alert">{error}</div>}

            {isSignUp && (
              <div className="form-group">
                <label htmlFor="reg-name">Full Name</label>
                <input
                  type="text"
                  id="reg-name"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="auth-email">Email Address</label>
              <input
                type="email"
                id="auth-email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            {isSignUp && (
              <div className="form-group">
                <label htmlFor="reg-phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="reg-phone"
                  name="phone"
                  value={fields.phone}
                  onChange={handleChange}
                  placeholder="(312) 555-0123"
                  autoComplete="tel"
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="auth-password">Password</label>
              <input
                type="password"
                id="auth-password"
                name="password"
                value={fields.password}
                onChange={handleChange}
                placeholder="••••••••"
                autoComplete={isSignUp ? 'new-password' : 'current-password'}
                required
              />
            </div>

            {isSignUp ? (
              <div className="form-group">
                <label htmlFor="reg-confirm">Confirm Password</label>
                <input
                  type="password"
                  id="reg-confirm"
                  name="confirmPassword"
                  value={fields.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  required
                />
              </div>
            ) : (
              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" name="remember" />
                  <span>Remember me</span>
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Password reset link sent to your email.');
                  }}
                >
                  Forgot password?
                </a>
              </div>
            )}

            <button type="submit" className="login-btn">
              {isSignUp ? 'Create My Account' : 'Sign In'}
            </button>

            <div className="login-footer">
              <p>
                {isSignUp ? (
                  <>Already have an account? <button type="button" className="switch-link-btn" onClick={() => handleToggle(false)}>Sign In</button></>
                ) : (
                  <>Need an account? <button type="button" className="switch-link-btn" onClick={() => handleToggle(true)}>Sign Up</button></>
                )}
              </p>
              <p>Or continue without an account: <Link to="/booking">Reserve as a Guest</Link></p>
              <Link to="/" className="back-link">&larr; Back to Home</Link>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}

export default LoginPage;
