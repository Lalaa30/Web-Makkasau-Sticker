import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrackingHeader from '../../components/tracking/TrackingHeader/TrackingHeader';
import TrackingSummary from '../../components/tracking/TrackingSummary/TrackingSummary';
import ProgressTracker from '../../components/tracking/ProgressTracker/ProgressTracker';
import OrderDetails from '../../components/tracking/OrderDetails/OrderDetails';
import ActionButtons from '../../components/tracking/ActionButtons/ActionButtons';
import './OrderTracking.css';

const OrderTracking = () => {
  const { orderId } = useParams();
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      setTimeout(() => {
        setOrderData({
          id: orderId || 'MS-2503-2574',
          status: 'Dalam Proses Produksi',
          estimatedCompletion: '23 Maret 2025',
          currentStep: 2,
          steps: [
            { icon: '✓', label: 'Pesanan Diterima', date: '20 Mar 2025' },
            { icon: '✓', label: 'Dikonfirmasi', date: '20 Mar 2025' },
            { icon: '⚙️', label: 'Dalam Proses Produksi', date: '21 Mar 2025' },
            { icon: '📦', label: 'Siap Diambil', date: '-' },
            { icon: '✓', label: 'Selesai', date: '-' }
          ],
          orderDate: '20 Maret 2025, 14:30 WITA',
          customerName: 'Budi Santoso',
          whatsapp: '0813-5678-9012',
          email: 'budi.santoso@example.com',
          items: [
            {
              name: 'Custom Plat Mobil',
              specs: [
                'Nomor Polisi: DB 1234 XX',
                'Tanggal Penggantian: 10 April 2025',
                'Ukuran: Ukuran Standar (43cm x 13.5cm)',
                'Bahan: Acrylic',
                'Warna Dasar: Hitam',
                'Warna Font: Putih',
                'Finishing: Glossy',
                'Jumlah: 1'
              ]
            }
          ]
        });
        setLoading(false);
      }, 1000);
    };

    fetchOrderData();
  }, [orderId]);

  return (
    <section className="tracking-result">
      <div className="container">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Memuat data pesanan...</p>
          </div>
        ) : (
          <div className="tracking-result-container">
            <TrackingHeader orderId={orderData.id} />
            
            <div className="tracking-body">
              <TrackingSummary 
                status={orderData.status} 
                estimatedCompletion={orderData.estimatedCompletion} 
              />
              
              <ProgressTracker 
                steps={orderData.steps} 
                currentStep={orderData.currentStep} 
              />
              
              <OrderDetails orderData={orderData} />
              
              <ActionButtons 
                orderId={orderData.id} 
                whatsappNumber="6281234567890" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderTracking;
