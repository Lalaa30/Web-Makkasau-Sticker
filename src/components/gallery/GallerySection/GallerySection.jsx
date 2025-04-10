import React, { useState } from 'react';
import GalleryFilters from '../GalleryFilters/GalleryFilters';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import GalleryModal from '../GalleryModal/GalleryModal';
import Pagination from '../Pagination/Pagination';
import { galleryData } from '../../../data/galleryData';
import './GallerySection.css';

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const openModal = (itemId) => {
    const item = galleryData.find(data => data.id === itemId);
    if (item) {
      setModalData(item);
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const filteredItems = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => {
        const categories = item.categories.split(' ');
        return categories.includes(activeFilter);
      });

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Koleksi Custom Plat Kendaraan</h2>
          <p className="section-desc">
            Berikut adalah beberapa contoh hasil produksi custom plat kendaraan dari Makkasau Sticker. 
            Tersedia berbagai pilihan desain dan model yang bisa disesuaikan dengan keinginan Anda.
          </p>
        </div>
        
        <GalleryFilters 
          activeFilter={activeFilter} 
          onFilterChange={handleFilterChange} 
        />
        
        <GalleryGrid 
          items={filteredItems} 
          onItemClick={openModal} 
        />
        
        <Pagination />
        
        {isModalOpen && (
          <GalleryModal 
            item={modalData} 
            onClose={closeModal} 
          />
        )}
      </div>
    </section>
  );
};

export default GallerySection;