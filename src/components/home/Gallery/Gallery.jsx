import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import galleryData from '../../../data/galleryData';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Hasil Karya Kami</div>
          <h2 className="section-title">Galeri Produk</h2>
          <p className="section-desc">Contoh hasil pembuatan custom plat kendaraan oleh Makkasau Sticker</p>
        </div>

        <div className="gallery-container">
          {galleryData.map(item => (
            <div className="gallery-item" key={item.id}>
              <div className="gallery-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="gallery-item-content">
                <h3 className="gallery-item-title">{item.title}</h3>
                <p className="gallery-item-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/gallery" className="btn btn-primary gallery-btn">Lihat Semua Produk</Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
