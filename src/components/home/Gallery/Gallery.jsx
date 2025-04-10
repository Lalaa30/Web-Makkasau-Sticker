import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: '/images/gallery/plat-mobil-vintage.jpg',
      title: 'Custom Plat Mobil Vintage',
      description: 'Plat mobil dengan desain vintage dan font klasik'
    },
    {
      id: 2,
      image: '/images/gallery/plat-mobil-sport.jpg',
      title: 'Custom Plat Mobil Sport',
      description: 'Plat mobil dengan desain modern dan warna kontras'
    },
    {
      id: 3,
      image: '/images/gallery/plat-motor-racing.jpg',
      title: 'Custom Plat Motor Racing',
      description: 'Plat motor dengan desain racing dan nomor kompetisi'
    },
    {
      id: 4,
      image: '/images/gallery/plat-mobil-luxury.jpg',
      title: 'Custom Plat Mobil Luxury',
      description: 'Plat mobil dengan desain mewah dan font elegan'
    },
    {
      id: 5,
      image: '/images/gallery/plat-motor-retro.jpg',
      title: 'Custom Plat Motor Retro',
      description: 'Plat motor dengan desain retro dan motif klasik'
    },
    {
      id: 6,
      image: '/images/gallery/plat-event.jpg',
      title: 'Custom Plat Event',
      description: 'Plat kustom untuk event otomotif dengan logo sponsor'
    }
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Hasil Karya Kami</div>
          <h2 className="section-title">Galeri Produk</h2>
          <p className="section-desc">Contoh hasil pembuatan custom plat kendaraan oleh Makkasau Sticker</p>
        </div>
        
        <div className="gallery-container">
          {galleryItems.map(item => (
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
        
        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <Link to="/gallery" className="btn btn-primary">Lihat Semua Produk</Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;