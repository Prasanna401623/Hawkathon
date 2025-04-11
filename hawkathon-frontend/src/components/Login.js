// src/components/Login.js

import React from 'react';
import GoogleAuth from './GoogleAuth';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <img 
            src="/images/ULM_Logo.jpg" 
            alt="ULM Logo" 
            className="ulm-logo"
          />
          <h1>Welcome to Hawkathon</h1>
          <p className="subtitle">Sign in to access your account</p>
        </div>
        
        <div className="login-content">
          <GoogleAuth />
          <div className="divider">
            <span>OR</span>
          </div>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Enter your password"
                className="form-input"
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" id="remember" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">Sign In</button>
          </form>
        </div>
        
        <div className="login-footer">
          <p>Don't have an account? <a href="#" className="signup-link">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
