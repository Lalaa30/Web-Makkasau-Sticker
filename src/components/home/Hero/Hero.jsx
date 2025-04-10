import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-subtitle">Selamat Datang di Makkasau Stickers</div>
          <h1>Temukan Plat Kendaraan Custom untuk Setiap Kebutuhan</h1>
          <p>Makkasau Sticker menyediakan jasa pembuatan custom plat kendaraan premium dengan kualitas terbaik. 
          Kami memiliki komitmen untuk memberikan layanan terbaik sejak tahun 2015.</p>
          <div className="hero-btns">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;