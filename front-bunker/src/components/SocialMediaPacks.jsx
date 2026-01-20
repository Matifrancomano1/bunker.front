import React from 'react';
import { Check } from 'lucide-react';

const SocialMediaPacks = () => {
  return (
    <section id="packs" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 bg-[#FF6B00]">
      <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-8 sm:mb-10 lg:mb-12 tracking-tighter">PACKS SOCIAL MEDIA</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        
        {/* PACK 1 - Posicionamiento */}
        <div className="bg-black text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 sm:p-4 bg-orange-600 font-bold text-xs sm:text-sm">PACK 1</div>
          <h4 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Posicionamiento</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <li className="flex gap-2"><Check className="text-orange-500 flex-shrink-0" size={20}/> 4 Post mensuales</li>
            <li className="flex gap-2"><Check className="text-orange-500 flex-shrink-0" size={20}/> Mínimo de 3 Historias diarias</li>
            <li className="flex gap-2"><Check className="text-orange-500 flex-shrink-0" size={20}/> Diseño de portada y destacadas</li>
            <li className="flex gap-2"><Check className="text-orange-500 flex-shrink-0" size={20}/> Propuestas de mejoras</li>
          </ul>
        </div>

        {/* PACK 2 - Full Management */}
        <div className="bg-white text-black p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl relative border-2 sm:border-4 border-black">
          <div className="absolute top-0 right-0 p-3 sm:p-4 bg-black text-white font-bold text-xs sm:text-sm">PACK 2</div>
          <h4 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Full Management</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <li className="flex gap-2"><Check className="text-orange-500 flex-shrink-0" size={20}/> 6 Post mensuales</li>
            <li className="flex gap-2"><Check className="text-orange-500 flex-shrink-0" size={20}/> Mínimo de 3 Historias diarias</li>
            <li className="flex gap-2"><Check className="text-orange-500 flex-shrink-0" size={20}/> 1 Sesión de fotos al mes</li>
            <li className="flex gap-2"><Check className="text-orange-500 flex-shrink-0" size={20}/> Gestión de Meta ADS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPacks;
