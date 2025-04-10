import React from 'react';
import './AdditionalInfoSection.css';

const AdditionalInfoSection = ({ formState, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="section-title">Informasi Tambahan</h2>
      
      <div className="form-group">
        <label htmlFor="catatan">Catatan Tambahan (Opsional)</label>
        <textarea 
          id="catatan" 
          name="catatan" 
          rows="4" 
          placeholder="Tuliskan informasi tambahan atau pertanyaan yang ingin Anda sampaikan..."
          value={formState.catatan}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default AdditionalInfoSection;