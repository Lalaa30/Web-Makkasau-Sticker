import React from 'react';
import './SecurityNote.css';

const SecurityNote = ({ title = 'Catatan keamanan:', message = 'Halaman ini hanya untuk administrator yang berwenang. Setiap aktivitas mencurigakan akan dipantau dan dicatat.' }) => {
  return (
    <div className="security-note">
      <strong>{title}</strong> {message}
    </div>
  );
};

export default SecurityNote;