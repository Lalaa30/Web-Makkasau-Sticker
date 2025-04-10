import React, { useEffect } from 'react';
import './PlateInfoSection.css';

const PlateInfoSection = ({ formState, handleInputChange }) => {
  // Set minimum date for replacement date (today)
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('tanggal_penggantian').setAttribute('min', today);
  }, []);
  
  // Handle showing/hiding custom size input
  const isCustomSize = formState.ukuran_plat === 'kustom';
  
  // Handle showing/hiding custom color input
  const isCustomColor = formState.warna_plat === 'lainnya';
  
  return (
    <div className="form-section">
      <h2 className="section-title">Informasi Plat Kendaraan</h2>
      
      <div className="form-group">
        <label htmlFor="no_plat" className="required">Nomor Polisi</label>
        <input 
          type="text" 
          id="no_plat" 
          name="no_plat" 
          placeholder="Contoh: DB 1234 XX" 
          value={formState.no_plat}
          onChange={handleInputChange}
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="tanggal_penggantian" className="required">Tanggal Penggantian</label>
        <input 
          type="date" 
          id="tanggal_penggantian" 
          name="tanggal_penggantian" 
          value={formState.tanggal_penggantian}
          onChange={handleInputChange}
          required 
        />
        <p className="form-info">Tanggal penggantian yang tertera pada plat kendaraan Anda saat ini.</p>
      </div>
      
      <div className="form-group">
        <label htmlFor="ukuran_plat" className="required">Ukuran Plat</label>
        <select 
          id="ukuran_plat" 
          name="ukuran_plat" 
          value={formState.ukuran_plat}
          onChange={handleInputChange}
          required
        >
          <option value="">-- Pilih Ukuran Plat --</option>
          <option value="standar">Ukuran Standar (43cm x 13.5cm)</option>
          <option value="motor">Ukuran Motor (25cm x 7cm)</option>
          <option value="mobil_mini">Mobil Mini (30cm x 10cm)</option>
          <option value="kustom">Ukuran Kustom</option>
        </select>
      </div>
      
      {isCustomSize && (
        <div className="form-group">
          <label htmlFor="ukuran_kustom" className="required">Tentukan Ukuran Kustom</label>
          <input 
            type="text" 
            id="ukuran_kustom" 
            name="ukuran_kustom"
            placeholder="Contoh: 40cm x 12cm"
            value={formState.ukuran_kustom}
            onChange={handleInputChange}
            required={isCustomSize}
          />
        </div>
      )}
      
      <div className="form-group">
        <label htmlFor="bahan_plat" className="required">Bahan Plat</label>
        <select 
          id="bahan_plat" 
          name="bahan_plat" 
          value={formState.bahan_plat}
          onChange={handleInputChange}
          required
        >
          <option value="">-- Pilih Bahan --</option>
          <option value="acrylic">Acrylic</option>
          <option value="aluminium">Aluminium</option>
          <option value="stainless">Stainless Steel</option>
          <option value="abs">ABS Plastic</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="warna_plat" className="required">Warna Dasar Plat</label>
        <select 
          id="warna_plat" 
          name="warna_plat" 
          value={formState.warna_plat}
          onChange={handleInputChange}
          required
        >
          <option value="">-- Pilih Warna --</option>
          <option value="hitam">Hitam</option>
          <option value="putih">Putih</option>
          <option value="merah">Merah</option>
          <option value="kuning">Kuning</option>
          <option value="biru">Biru</option>
          <option value="silver">Silver</option>
          <option value="lainnya">Warna Lainnya</option>
        </select>
      </div>
      
      {isCustomColor && (
        <div className="form-group">
          <label htmlFor="warna_lainnya" className="required">Tentukan Warna Lainnya</label>
          <input 
            type="text" 
            id="warna_lainnya" 
            name="warna_lainnya"
            value={formState.warna_lainnya}
            onChange={handleInputChange}
            required={isCustomColor}
          />
        </div>
      )}
      
      <div className="form-group">
        <label htmlFor="warna_font" className="required">Warna Font</label>
        <select 
          id="warna_font" 
          name="warna_font" 
          value={formState.warna_font}
          onChange={handleInputChange}
          required
        >
          <option value="">-- Pilih Warna Font --</option>
          <option value="putih">Putih</option>
          <option value="hitam">Hitam</option>
          <option value="kuning">Kuning</option>
          <option value="merah">Merah</option>
          <option value="silver">Silver</option>
          <option value="lainnya">Warna Lainnya</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="finishing" className="required">Finishing</label>
        <select 
          id="finishing" 
          name="finishing" 
          value={formState.finishing}
          onChange={handleInputChange}
          required
        >
          <option value="">-- Pilih Jenis Finishing --</option>
          <option value="glossy">Glossy</option>
          <option value="doff">Doff (Matte)</option>
          <option value="chrome">Chrome</option>
          <option value="emboss">Emboss (Timbul)</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="jumlah_plat" className="required">Jumlah Pesanan</label>
        <input 
          type="number" 
          id="jumlah_plat" 
          name="jumlah_plat" 
          min="1" 
          value={formState.jumlah_plat}
          onChange={handleInputChange}
          required 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="upload_stnk">Upload STNK (Opsional)</label>
        <input 
          type="file" 
          id="upload_stnk" 
          name="upload_stnk" 
          className="file-input"
          onChange={handleInputChange}
        />
        <p className="file-info">Format yang didukung: JPG, PNG, PDF. Maksimal 5MB.</p>
      </div>
    </div>
  );
};

export default PlateInfoSection;