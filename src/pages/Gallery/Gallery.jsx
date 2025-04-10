import React from 'react';
import PageHeader from '../../components/gallery/PageHeader/PageHeader';
import GallerySection from '../../components/gallery/GallerySection/GallerySection';
import ContactCTA from '../../components/gallery/ContactCTA/ContactCTA';
import './Gallery.css';

const Gallery = () => {
  return (
    <main className="gallery-page">
      <PageHeader />
      <GallerySection />
      <ContactCTA />
    </main>
  );
};

export default Gallery;