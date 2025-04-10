import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalInfoSection from '../PersonalInfoSection/PersonalInfoSection';
import PlateInfoSection from '../PlateInfoSection/PlateInfoSection';
import AdditionalInfoSection from '../AdditionalInfoSection/AdditionalInfoSection';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';
import SuccessModal from '../SuccessModal/SuccessModal';
import './OrderForm.css';

const OrderForm = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formState, setFormState] = useState({
    // Personal info
    nama: '',
    telepon: '',
    email: '',
    alamat: '',
    
    // Plate info
    no_plat: '',
    tanggal_penggantian: '',
    ukuran_plat: '',
    ukuran_kustom: '',
    bahan_plat: '',
    warna_plat: '',
    warna_lainnya: '',
    warna_font: '',
    finishing: '',
    jumlah_plat: 1,
    upload_stnk: null,
    
    // Additional info
    catatan: ''
  });
  
  // UI state
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      setFormState({
        ...formState,
        [name]: files[0]
      });
    } else {
      setFormState({
        ...formState,
        [name]: value
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show confirmation card
    setShowConfirmation(true);
    
    // Scroll to top
    window.scrollTo(0, 0);
  };
  
  // Go back to form
  const handleBackToForm = () => {
    setShowConfirmation(false);
  };
  
  // Submit final order
  const handleFinalSubmit = () => {
    // Hide confirmation
    setShowConfirmation(false);
    
    // Generate random order number
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().substr(-2);
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const orderNum = `MS-${year}${month}${day}-${random}`;
    
    setOrderNumber(orderNum);
    
    // Show success modal
    setShowSuccessModal(true);
  };
  
  // Close success modal
  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };
  
  // Return to home page
  const handleBackToHome = () => {
    navigate('/');
  };
  
  return (
    <div className="order-page">
      <h1 className="page-title">Pemesanan Plat Kendaraan</h1>
      
      <div className="form-container">
        <form id="orderForm" onSubmit={handleSubmit}>
          <PersonalInfoSection 
            formState={formState} 
            handleInputChange={handleInputChange} 
          />
          
          <PlateInfoSection 
            formState={formState} 
            handleInputChange={handleInputChange} 
          />
          
          <AdditionalInfoSection 
            formState={formState} 
            handleInputChange={handleInputChange} 
          />
          
          <div className="button-container">
            <button type="submit" className="btn">Pesan Sekarang</button>
          </div>
        </form>
      </div>
      
      {/* Order Confirmation Card */}
      <OrderConfirmation 
        isOpen={showConfirmation}
        formState={formState}
        onBack={handleBackToForm}
        onSubmit={handleFinalSubmit}
      />
      
      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal}
        orderNumber={orderNumber}
        onClose={handleCloseSuccessModal}
        onBackToHome={handleBackToHome}
      />
    </div>
  );
};

export default OrderForm;