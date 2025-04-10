import React from 'react';
import './TrackingHeader.css';

const TrackingHeader = ({ orderId }) => {
  return (
    <div className="tracking-header">
      <h1>Hasil Pelacakan Pesanan</h1>
      <div className="order-id">ID Pesanan: {orderId}</div>
    </div>
  );
};

export default TrackingHeader;