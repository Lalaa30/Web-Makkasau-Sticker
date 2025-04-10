import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="logo">
            <div className="logo-text">Makkasau <span>Sticker</span></div>
          </Link>
          
          <div className="nav-items">
            <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
              <li><NavLink to="/" onClick={closeNav}>Beranda</NavLink></li>
              <li><NavLink to="/gallery" onClick={closeNav}>Galeri Produk</NavLink></li>
              <li><NavLink to="/order" onClick={closeNav}>Pemesanan</NavLink></li>
              <li><NavLink to="/track-order" onClick={closeNav}>Lacak Pesanan</NavLink></li>
            </ul>
            
            <Link to="/login" className="login-btn">Masuk</Link>
            <div className="menu-toggle" onClick={toggleNav}>☰</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;