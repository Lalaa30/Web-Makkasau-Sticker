import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TrackingSection.css';

const TrackingSection = () => {
  const [trackingId, setTrackingId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingId.trim()) {
      navigate(`/track-order?id=${trackingId}`);
    }
  };

  return (
    <section className="tracking-section" id="track-order">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Status Pesanan</div>
          <h2 className="section-title">Lacak Pesanan Anda</h2>
          <p className="section-desc">Masukkan ID pesanan Anda untuk melihat status pemesanan produk custom plat kendaraan</p>
        </div>
        
        <div className="tracking-container">
          <form className="tracking-section-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="tracking-section-input" 
              placeholder="Masukkan ID Pesanan (contoh: MS-2025xxxxxxx)" 
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              required 
            />
            <button type="submit" className="tracking-section-btn">Cek Status Pesanan</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;