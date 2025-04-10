import React from 'react';
import './PersonalInfoSection.css';

const PersonalInfoSection = ({ formState, handleInputChange }) => {
  return (
    <div className="form-section">
      <h2 className="section-title">Informasi Pribadi</h2>
      
      <div className="form-group">
        <label htmlFor="nama" className="required">Nama Lengkap</label>
        <input 
          type="text" 
          id="nama" 
          name="nama" 
          value={formState.nama}
          onChange={handleInputChange}
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="telepon" className="required">Nomor WhatsApp</label>
        <input 
          type="tel" 
          id="telepon" 
          name="telepon" 
          value={formState.telepon}
          onChange={handleInputChange}
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email (Opsional)</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formState.email}
          onChange={handleInputChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="alamat">Alamat (Opsional)</label>
        <textarea 
          id="alamat" 
          name="alamat" 
          rows="3"
          value={formState.alamat}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default PersonalInfoSection;