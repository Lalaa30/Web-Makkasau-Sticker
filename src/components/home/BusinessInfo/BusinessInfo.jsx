import React from 'react';
import {
  FaPhoneAlt,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaClock,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './BusinessInfo.css';

const BusinessInfo = () => {
  const operationalHours = [
    { day: 'Senin', time: '09:00 - 17:00' },
    { day: 'Selasa', time: '09:00 - 17:00' },
    { day: 'Rabu', time: '09:00 - 17:00' },
    { day: 'Kamis', time: '09:00 - 17:00' },
    { day: 'Jumat', time: '09:00 - 17:00' },
    { day: 'Sabtu', time: '09:00 - 17:00' },
    { day: 'Minggu', time: '09:00 - 12:00' }
  ];

  const contactInfo = [
    { icon: <FaPhoneAlt />, text: '+62 8528-2534-171', link: 'tel:+6285282534171' },
    { icon: <FaFacebookF />, text: 'Makkasau Sticker', link: 'https://web.facebook.com/makkasau.sticker' },
    { icon: <FaWhatsapp />, text: '+62 8528-2534-171', link: 'https://wa.me/6285282534171' },
    { icon: <FaInstagram />, text: '@makkasau_sticker', link: 'https://www.instagram.com/makkasausticker/' },
  ];

  return (
    <section className="business-info" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Informasi</div>
          <h2 className="section-title">Informasi Bisnis</h2>
          <p className="section-desc">Temukan kami dan dapatkan layanan stiker premium terbaik</p>
        </div>
        
        <div className="info-container">
          {/* Jam Operasional */}
          <div className="info-card">
            <div className="info-header">
              <div className="info-icon"><FaClock /></div>
              <h3 className="info-title">Jam Operasional</h3>
            </div>
            <ul className="hours-list">
              {operationalHours.map((item, index) => (
                <li className="hours-item" key={index}>
                  <span className="day">{item.day}</span>
                  <span className="time">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokasi */}
          <div className="info-card">
            <div className="info-header">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <h3 className="info-title">Lokasi Kami</h3>
            </div>
            <p className="address">
              Jl. Andi Makkasau No.20, Pangkajene, Kec. Maritengngae, Kabupaten Sidenreng Rappang, Sulawesi Selatan 91611
            </p>
            <div className="map-container">
              <img src="/images/maps.png" alt="Lokasi Makkasau Sticker" />
            </div>
            <a
              href="https://maps.app.goo.gl/1BZp3AhzPBWAzY4YA"
              className="map-directions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Petunjuk Arah
            </a>
          </div>

          {/* Kontak */}
          <div className="info-card">
            <div className="info-header">
              <div className="info-icon"><FaPhoneAlt /></div>
              <h3 className="info-title">Kontak</h3>
            </div>
            <ul className="contact-list">
              {contactInfo.map((item, index) => (
                <li className="contact-item" key={index}>
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-text">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.text}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
