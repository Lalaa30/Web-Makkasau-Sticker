import React from 'react';
import LoginHeader from '../LoginHeader/LoginHeader';
import LoginForm from '../LoginForm/LoginForm';
import './LoginContainer.css';

const LoginContainer = ({ onLogin }) => {
  return (
    <div className="login-container">
      <LoginHeader />
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default LoginContainer;