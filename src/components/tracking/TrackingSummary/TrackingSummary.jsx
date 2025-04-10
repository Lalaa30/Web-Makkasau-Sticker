import React from 'react';
import './TrackingSummary.css';

const TrackingSummary = ({ status, estimatedCompletion }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'selesai':
        return 'success';
      case 'dalam proses produksi':
        return 'processing';
      case 'menunggu konfirmasi':
        return 'pending';
      case 'dibatalkan':
        return 'cancelled';
      default:
        return '';
    }
  };

  return (
    <div className="tracking-summary">
      <div className="tracking-status">
        <div className="status-label">Status Pesanan</div>
        <div className={`status-value ${getStatusClass(status)}`}>{status}</div>
      </div>
      
      <div className="delivery-date">
        <div className="status-label">Perkiraan Selesai</div>
        <div className="status-value">{estimatedCompletion}</div>
      </div>
    </div>
  );
};

export default TrackingSummary;