import React, { useEffect } from 'react';
import './OrderConfirmation.css';

const OrderConfirmation = ({ isOpen, formState, onBack, onSubmit }) => {
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
  
  // Format the date
  const formatDate = (dateString) => {
    if (!dateString) return '-';
    
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  // Get text from select options
  const getSelectText = (selectId, value) => {
    if (!value) return '-';
    
    const select = document.getElementById(selectId);
    if (!select) return value;
    
    const option = Array.from(select.options).find(opt => opt.value === value);
    return option ? option.text : value;
  };
  
  // Get file name
  const getFileName = (file) => {
    if (!file) return '-';
    return file.name || '-';
  };
  
  // Get plate size display value
  const getPlateSize = () => {
    if (formState.ukuran_plat === 'kustom') {
      return `Kustom: ${formState.ukuran_kustom}`;
    }
    return getSelectText('ukuran_plat', formState.ukuran_plat);
  };
  
  // Get plate color display value
  const getPlateColor = () => {
    if (formState.warna_plat === 'lainnya') {
      return formState.warna_lainnya;
    }
    return getSelectText('warna_plat', formState.warna_plat);
  };
  
  return (
    <div className="confirmation-overlay">
      <div className="confirmation-container">
        <div className="confirmation-header">
          <h1 className="confirmation-title">Konfirmasi Ulang Pesanan</h1>
        </div>
        
        <div className="confirmation-body">
          {/* Informasi Pelanggan */}
          <h2 className="section-title">Informasi Pelanggan</h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Nama Pelanggan</div>
              <div className="info-value">{formState.nama || '-'}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">{formState.email || '-'}</div>
            </div>
            <div className="info-item">
              <div className="info-label">WhatsApp</div>
              <div className="info-value">{formState.telepon || '-'}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Alamat</div>
              <div className="info-value">{formState.alamat || '-'}</div>
            </div>
          </div>
          
          {/* Informasi Plat Kendaraan */}
          <h2 className="section-title">Informasi Plat Kendaraan</h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-label">Nomor Polisi</div>
              <div className="info-value">{formState.no_plat || '-'}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Finishing</div>
              <div className="info-value">{getSelectText('finishing', formState.finishing)}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Ukuran Plat</div>
              <div className="info-value">{getPlateSize()}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Jumlah</div>
              <div className="info-value">{formState.jumlah_plat || '-'}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Bahan</div>
              <div className="info-value">{getSelectText('bahan_plat', formState.bahan_plat)}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Tanggal Pesanan</div>
              <div className="info-value">{formatDate(formState.tanggal_penggantian)}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Warna Dasar</div>
              <div className="info-value">{getPlateColor()}</div>
            </div>
            <div className="info-item">
              <div className="info-label">File STNK</div>
              <div className="info-value">{getFileName(formState.upload_stnk)}</div>
            </div>
            <div className="info-item">
              <div className="info-label">Warna Font</div>
              <div className="info-value">{getSelectText('warna_font', formState.warna_font)}</div>
            </div>
          </div>
          
          {/* Catatan Tambahan */}
          {formState.catatan && (
            <div id="catatan-section">
              <h2 className="section-title">Catatan Tambahan</h2>
              <div className="note-section">
                <div className="note-box">
                  {formState.catatan}
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="confirmation-buttons">
          <button className="btn btn-back" onClick={onBack}>Kembali</button>
          <button className="btn" onClick={onSubmit}>Pesan</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;