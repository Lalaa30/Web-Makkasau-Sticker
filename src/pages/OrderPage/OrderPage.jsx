import React from 'react';
import OrderForm from '../../components/order/OrderForm/OrderForm';
import './OrderPage.css';

const OrderPage = () => {
  return (
    <div className="order-page-wrapper">
      <div className="container">
        <OrderForm />
      </div>
    </div>
  );
};

export default OrderPage;