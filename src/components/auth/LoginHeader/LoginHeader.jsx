import React from 'react';
import './LoginHeader.css';

const LoginHeader = ({ badge = 'Admin', title = 'Admin Dashboard', subtitle = 'Masuk untuk mengelola website' }) => {
  return (
    <div className="login-header">
      <div className="login-badge">{badge}</div>
      <h2 className="login-title">{title}</h2>
      <p className="login-subtitle">{subtitle}</p>
    </div>
  );
};

export default LoginHeader;