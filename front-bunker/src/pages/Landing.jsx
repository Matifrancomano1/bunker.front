import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SocialMediaPacks from '../components/SocialMediaPacks';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Landing = () => {
  const [formData, setFormData] = useState({ name: '', lastname: '', gmail: '', tel: '' });

  return (
    <div className="bg-white text-slate-900 selection:bg-orange-500">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Servicios Section */}
      <Services />

      {/* Packs Section */}
      <SocialMediaPacks />

      {/* Contacto Section */}
      <ContactForm formData={formData} setFormData={setFormData} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;