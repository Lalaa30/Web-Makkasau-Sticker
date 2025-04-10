import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SecurityNote from '../SecurityNote/SecurityNote';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (username.trim() === '' || username.length < 4) {
      newErrors.username = 'Username harus minimal 4 karakter';
    }

    // Password validation
    if (password.length < 8) {
      newErrors.password = 'Password minimal 8 karakter';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Call the login function passed as prop
        // This could be a call to an authentication service
        if (onLogin) {
          await onLogin(username, password, rememberMe);
        }
        
        // In a real app, the navigation would happen after successful login
        // and would be managed by a protected route or auth context
        navigate('/admin');
      } catch (error) {
        setErrors({
          general: error.message || 'Login gagal. Silakan coba lagi.'
        });
      }
    }
  };

  return (
    <div className="login-form">
      {errors.general && (
        <div className="form-error general-error">{errors.general}</div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            id="username" 
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            placeholder=" Masukkan username admin" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {errors.username && (
            <div className="form-error">{errors.username}</div>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="password-wrapper">
            <input 
              type={showPassword ? "text" : "password"}
              id="password" 
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              placeholder="Masukkan password admin" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button" 
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && (
            <div className="form-error">{errors.password}</div>
          )}
        </div>
        
        <div className="form-group">
          <div className="form-check">
            <input 
              type="checkbox" 
              className="form-check-input" 
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="rememberMe">Ingat saya</label>
            <Link to="/admin-reset-password" className="forgot-password">Lupa Password?</Link>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary">Masuk</button>
        
        <SecurityNote />
      </form>
    </div>
  );
};

export default LoginForm;