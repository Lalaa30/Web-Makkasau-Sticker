import React from 'react';
import './OrderDetails.css';

const OrderDetails = ({ orderData }) => {
  const { orderDate, customerName, whatsapp, email, items } = orderData;
  
  return (
    <div className="order-details">
      <h3>Detail Pesanan</h3>
      
      <div className="order-info">
        <div>
          <div className="info-group">
            <div className="info-label">Tanggal Pemesanan</div>
            <div className="info-value">{orderDate}</div>
          </div>
        </div>
        
        <div>
          <div className="info-group">
            <div className="info-label">Nama Pemesan</div>
            <div className="info-value">{customerName}</div>
          </div>
          
          <div className="info-group">
            <div className="info-label">Nomor WhatsApp</div>
            <div className="info-value">{whatsapp}</div>
          </div>
          
          <div className="info-group">
            <div className="info-label">Email</div>
            <div className="info-value">{email}</div>
          </div>
        </div>
      </div>
      
      <div className="order-items">
        {items.map((item, index) => (
          <div className="item-card" key={index}>
            <div className="item-details">
              <div className="item-name">{item.name}</div>
              {item.specs.map((spec, i) => (
                <div className="item-specs" key={i}>{spec}</div>
              ))}
              <div className="item-price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetails;