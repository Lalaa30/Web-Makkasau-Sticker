import React from 'react';
import './GalleryItem.css';

const GalleryItem = ({ item }) => {
  return (
    <div className="gallery-item" data-category={item.categories}>
      <div className="gallery-img">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="gallery-content">
        <div className="gallery-category">{item.category}</div>
        <h3 className="gallery-title">{item.title}</h3>
        <p className="gallery-description">{item.shortDescription}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
