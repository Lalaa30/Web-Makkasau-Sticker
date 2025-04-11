import React from 'react';
import { Link } from 'react-router-dom';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Siap Untuk memesan Plat Kendaraan?</h2>
          <p className="cta-desc">Hubungi kami sekarang untuk mendapatkan penawaran khusus dan konsultasi gratis tentang kebutuhan custom plat kendaraan Anda</p>
          <Link to="/order" className="btn btn-primary cta-btn">Pesan Sekarang</Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;