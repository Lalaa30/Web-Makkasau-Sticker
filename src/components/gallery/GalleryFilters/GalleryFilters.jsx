import React from 'react';
import './GalleryFilters.css';

const GalleryFilters = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { value: 'all', label: 'Semua' },
    { value: 'mobil', label: 'Plat Mobil' },
    { value: 'motor', label: 'Plat Motor' },
    { value: 'premium', label: 'Premium' }
  ];

  return (
    <div className="gallery-filters">
      {filters.map((filter) => (
        <button
          key={filter.value}
          className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilters;