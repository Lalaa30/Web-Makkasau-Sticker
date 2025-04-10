import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: "🚗",
      title: "Plat Mobil Custom",
      description: "Pembuatan custom plat nomor mobil dengan berbagai pilihan desain, ukuran, dan material premium yang tahan lama."
    },
    {
      icon: "🏍️",
      title: "Plat Motor Custom",
      description: "Desain dan cetak plat nomor motor kustom dengan ukuran standar maupun khusus sesuai kebutuhan Anda."
    },
    {
      icon: "🎨",
      title: "Custom Design",
      description: "Layanan desain custom plat kendaraan dengan pilihan font, warna, dan grafis sesuai keinginan pelanggan."
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Layanan</div>
          <h2 className="section-title">Layanan Custom Plat Kendaraan</h2>
          <p className="section-desc">Makkasau Sticker menawarkan pembuatan custom plat kendaraan berkualitas premium dengan berbagai pilihan</p>
        </div>
        
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;