import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = ({ formData, setFormData }) => {
  const [status, setStatus] = useState('');
  const API_URL = "https://bunker-api-he07.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    
    try {
      const response = await fetch(`${API_URL}/api/contactos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('¡Gracias! Nos pondremos en contacto pronto.');
        setFormData({ name: '', lastname: '', gmail: '', tel: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Error al enviar. Intentalo de nuevo.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('No se pudo conectar con el servidor.');
    }
  };

  return (
    <section id="contacto" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-8 sm:mb-10 tracking-tighter">¿ENTRAMOS AL <span className="text-[#FF6B00]">BUNKER?</span></h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          <input 
            type="text" 
            placeholder="Nombre" 
            value={formData.name}
            className="border-b-2 border-slate-200 p-3 sm:p-4 text-sm sm:text-base outline-none focus:border-[#FF6B00] transition" 
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input 
            type="text" 
            placeholder="Apellido" 
            value={formData.lastname}
            className="border-b-2 border-slate-200 p-3 sm:p-4 text-sm sm:text-base outline-none focus:border-[#FF6B00] transition" 
            onChange={(e) => setFormData({...formData, lastname: e.target.value})}
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={formData.gmail}
            className="col-span-1 md:col-span-2 border-b-2 border-slate-200 p-3 sm:p-4 text-sm sm:text-base outline-none focus:border-[#FF6B00] transition" 
            onChange={(e) => setFormData({...formData, gmail: e.target.value})}
            required
          />
          <input 
            type="text" 
            placeholder="WhatsApp" 
            value={formData.tel}
            className="col-span-1 md:col-span-2 border-b-2 border-slate-200 p-3 sm:p-4 text-sm sm:text-base outline-none focus:border-[#FF6B00] transition" 
            onChange={(e) => setFormData({...formData, tel: e.target.value})}
            required
          />
          <button type="submit" className="col-span-1 md:col-span-2 bg-black text-white font-bold py-4 sm:py-6 rounded-full hover:bg-[#FF6B00] transition-colors flex justify-center items-center gap-2 text-sm sm:text-base">
            ENVIAR SOLICITUD <Send size={18} className="hidden sm:block"/><Send size={16} className="sm:hidden"/>
          </button>
        </form>
        {status && (
          <p className={`mt-4 text-sm sm:text-base font-medium ${status.includes('Error') || status.includes('No se pudo') ? 'text-red-500' : 'text-green-500'}`}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
