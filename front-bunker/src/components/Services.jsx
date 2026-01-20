import React from 'react';
import { Palette, Video } from 'lucide-react';

const Services = () => {
  return (
    <section id="servicios" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 bg-white">
      {/* Diseño Gráfico */}
      <div className="bg-slate-50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-100 group hover:bg-orange-600 transition-colors duration-500">
        <Palette className="w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 text-[#FF6B00] group-hover:text-white" />
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 group-hover:text-white tracking-tighter">DISEÑO GRÁFICO</h3>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 group-hover:text-orange-100">
          Creamos soluciones visuales: identidades, materiales de marketing, papelería y más.
        </p>
      </div>

      {/* Contenido Audiovisual */}
      <div className="bg-slate-900 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl text-white group hover:bg-white hover:text-black transition-all duration-500 border border-transparent hover:border-slate-200">
        <Video className="w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 text-[#FF6B00]" />
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tighter">CONTENIDO AUDIOVISUAL</h3>
        <ul className="space-y-2 text-sm sm:text-base lg:text-base text-gray-400 group-hover:text-gray-600">
          <li>• Cobertura de eventos</li>
          <li>• Foto producto</li>
          <li>• Contenido para redes</li>
          <li>• Tomas aéreas (Drones)</li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
