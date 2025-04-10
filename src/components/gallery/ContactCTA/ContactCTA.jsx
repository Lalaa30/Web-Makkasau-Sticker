import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section className="contact-cta">
      <div className="container">
        <h2 className="cta-title">Ingin Buat Custom Plat Kendaraan?</h2>
        <p className="cta-text">
          Hubungi kami sekarang untuk mendapatkan penawaran khusus dan 
          konsultasi gratis tentang custom plat kendaraan sesuai keinginan Anda.
        </p>
        <Link to="/order" className="btn btn-primary">Buat Pesanan</Link>
      </div>
    </section>
  );
};

export default ContactCTA;