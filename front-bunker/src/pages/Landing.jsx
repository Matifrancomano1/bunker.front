import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Camera, Palette, Share2, Video, Send } from 'lucide-react';

const Landing = () => {
  const [formData, setFormData] = useState({ name: '', lastname: '', gmail: '', tel: '' });

  return (
    <div className="bg-white text-slate-900 selection:bg-orange-500">
      
      {/* HERO SECTION - Estilo Mediática */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20 bg-[#0a0a0a] text-white">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          className="text-7xl md:text-[10rem] font-black leading-none tracking-tighter">
          B<span className="text-[#FF6B00]">U</span>NKER<br />STUDIO<span className="text-[#FF6B00]">.</span>
        </motion.h1>
        <p className="text-xl text-gray-400 mt-6 max-w-xl uppercase tracking-widest">
          Potenciamos tu imagen. Gestión de redes y contenido audiovisual.
        </p>
      </section>

      {/* SERVICIOS - Diseño Gráfico y Audiovisual */}
      <section className="py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:bg-orange-600 transition-colors duration-500">
          <Palette className="w-12 h-12 mb-6 text-[#FF6B00] group-hover:text-white" />
          <h3 className="text-5xl font-bold mb-4 group-hover:text-white tracking-tighter">DISEÑO GRÁFICO</h3>
          <p className="text-gray-600 group-hover:text-orange-100 text-lg">
            Creamos soluciones visuales: identidades, materiales de marketing, papelería y más.
          </p>
        </div>

        <div className="bg-slate-900 p-10 rounded-3xl text-white group hover:bg-white hover:text-black transition-all duration-500 border border-transparent hover:border-slate-200">
          <Video className="w-12 h-12 mb-6 text-[#FF6B00]" />
          <h3 className="text-5xl font-bold mb-4 tracking-tighter">CONTENIDO AUDIOVISUAL</h3>
          <ul className="space-y-2 text-gray-400 group-hover:text-gray-600">
            <li>• Cobertura de eventos</li>
            <li>• Foto producto</li>
            <li>• Contenido para redes</li>
            <li>• Tomas aéreas (Drones)</li>
          </ul>
        </div>
      </section>

      {/* PACKS DE REDES SOCIALES */}
      <section className="py-20 px-6 md:px-20 bg-[#FF6B00]">
        <h2 className="text-6xl font-black text-white mb-12 tracking-tighter">PACKS SOCIAL MEDIA</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PACK 1 */}
          <div className="bg-black text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 bg-orange-600 font-bold">PACK 1</div>
             <h4 className="text-3xl font-bold mb-6">Posicionamiento</h4>
             <ul className="space-y-4">
                <li className="flex gap-2"><Check className="text-orange-500"/> 4 Post mensuales</li>
                <li className="flex gap-2"><Check className="text-orange-500"/> Mínimo de 3 Historias diarias</li>
                <li className="flex gap-2"><Check className="text-orange-500"/> Diseño de portada y destacadas</li>
                <li className="flex gap-2"><Check className="text-orange-500"/> Propuestas de mejoras</li>
             </ul>
          </div>

          {/* PACK 2 */}
          <div className="bg-white text-black p-8 rounded-3xl shadow-2xl relative border-4 border-black">
             <div className="absolute top-0 right-0 p-4 bg-black text-white font-bold">PACK 2</div>
             <h4 className="text-3xl font-bold mb-6">Full Management</h4>
             <ul className="space-y-4">
                <li className="flex gap-2"><Check className="text-orange-500"/> 6 Post mensuales</li>
                <li className="flex gap-2"><Check className="text-orange-500"/> Mínimo de 3 Historias diarias</li>
                <li className="flex gap-2"><Check className="text-orange-500"/> 1 Sesión de fotos al mes</li>
                <li className="flex gap-2"><Check className="text-orange-500"/> Gestión de Meta ADS</li>
             </ul>
          </div>

        </div>
      </section>

      {/* FORMULARIO FINAL - EL BUNKER */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-7xl font-black mb-10 tracking-tighter">¿ENTRAMOS AL <span className="text-[#FF6B00]">BUNKER?</span></h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <input type="text" placeholder="Nombre" className="border-b-2 border-slate-200 p-4 outline-none focus:border-[#FF6B00]" onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <input type="text" placeholder="Apellido" className="border-b-2 border-slate-200 p-4 outline-none focus:border-[#FF6B00]" onChange={(e) => setFormData({...formData, lastname: e.target.value})} />
            <input type="email" placeholder="Email" className="md:col-span-2 border-b-2 border-slate-200 p-4 outline-none focus:border-[#FF6B00]" onChange={(e) => setFormData({...formData, gmail: e.target.value})} />
            <input type="text" placeholder="WhatsApp" className="md:col-span-2 border-b-2 border-slate-200 p-4 outline-none focus:border-[#FF6B00]" onChange={(e) => setFormData({...formData, tel: e.target.value})} />
            <button className="md:col-span-2 bg-black text-white font-bold py-6 rounded-full hover:bg-[#FF6B00] transition-colors flex justify-center items-center gap-2">
              ENVIAR SOLICITUD <Send size={20}/>
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Landing;