import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryGrid.css';

const GalleryGrid = ({ items, onItemClick }) => {
  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <GalleryItem 
          key={item.id} 
          item={item} 
          onItemClick={onItemClick} 
        />
      ))}
    </div>
  );
};

export default GalleryGrid;