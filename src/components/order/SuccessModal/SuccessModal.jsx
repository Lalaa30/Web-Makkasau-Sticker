import React, { useEffect } from 'react';
import './SuccessModal.css';

const SuccessModal = ({ isOpen, orderNumber, onClose, onBackToHome }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  // Handle click outside of modal
  const handleOutsideClick = (e) => {
    if (e.target.className === 'modal') {
      onClose();
    }
  };
  
  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Pemesanan Berhasil</h2>
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <div className="success-message">
          <h3>Terima Kasih Atas Pesanan Anda!</h3>
          <p>Pesanan Anda telah kami terima dan sedang diproses.</p>
          <p>Tim kami akan menghubungi Anda melalui WhatsApp dalam waktu 24 jam untuk konfirmasi pesanan dan informasi pembayaran.</p>
          <p>Nomor Pesanan: <span className="order-number">{orderNumber}</span></p>
        </div>
        <div className="modal-buttons">
          <button className="btn" onClick={onBackToHome}>Kembali ke Beranda</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;