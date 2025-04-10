import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GalleryModal.css';

const GalleryModal = ({ item, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('modal')) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-close" onClick={onClose}>&times;</div>
        <img src={item.image} alt={item.title} className="modal-img" />
          <span className="modal-category">{item.category}</span>
          <h3 className="modal-title">{item.title}</h3>
        </div>
      </div>
  );
};

export default GalleryModal;