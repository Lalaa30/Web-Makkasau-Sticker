import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import OrderPage from './pages/OrderPage/OrderPage';
import LoginPage from './pages/Login/LoginPage';
import TrackingPage from './pages/OrderTracking/OrderTracking'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/track-order/:orderId" element={<TrackingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
