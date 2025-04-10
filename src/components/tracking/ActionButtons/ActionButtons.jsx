import React from 'react';
import { Link } from 'react-router-dom';
import './ActionButtons.css';

const ActionButtons = ({ orderId, whatsappNumber }) => {
  const whatsappMessage = encodeURIComponent(`Halo, saya ingin menanyakan pesanan dengan ID: ${orderId}`);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  return (
    <div className="action-buttons">
      <Link to="/" className="btn btn-outline">Kembali ke Beranda</Link>
      <a href={whatsappLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
        Hubungi via WhatsApp
      </a>
    </div>
  );
};

export default ActionButtons;