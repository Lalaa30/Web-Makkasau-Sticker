import React from 'react';
import Hero from '../../components/home/Hero/Hero';
import TrackingSection from '../../components/home/TrackingSection/TrackingSection';
import Gallery from '../../components/home/Gallery/Gallery';
import Services from '../../components/home/Services/Services';
import BusinessInfo from '../../components/home/BusinessInfo/BusinessInfo';
import CTABanner from '../../components/home/CTABanner/CTABanner';
import './Home.css';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrackingSection />
      <Gallery />
      <Services />
      <BusinessInfo />
      <CTABanner />
    </main>
  );
};

export default Home;