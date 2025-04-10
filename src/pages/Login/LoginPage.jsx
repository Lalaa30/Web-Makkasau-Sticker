import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../../components/auth/LoginContainer/LoginContainer';
import { login } from '../../services/authService';
import './LoginPage.css';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (username, password, rememberMe) => {
    try {
      setIsLoading(true);
      setError(null);

      // Call the login service
      await login(username, password, rememberMe);

      // Redirect to admin dashboard on successful login
      navigate('/admin');
    } catch (err) {
      setError(err?.message || 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="login-section">
      <div className="container">
        {error && (
          <div className="error-alert">
            {error}
          </div>
        )}

        <LoginContainer onLogin={handleLogin} />

        {isLoading && (
          <div className="loading-overlay">
            <div className="spinner"></div>
            <p>Logging in...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LoginPage;
