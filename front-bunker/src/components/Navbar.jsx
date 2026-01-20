import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-xl sm:text-2xl font-black tracking-tighter cursor-pointer whitespace-nowrap">
          B<span className="text-[#FF6B00]">U</span>NKER
        </div>

        {/* LINKS */}
        <div className="hidden lg:flex gap-4 xl:gap-8 font-bold text-xs sm:text-sm uppercase tracking-widest text-slate-600">
          <Link to="hero" smooth={true} duration={500} className="hover:text-[#FF6B00] cursor-pointer transition">Inicio</Link>
          <Link to="servicios" smooth={true} duration={500} className="hover:text-[#FF6B00] cursor-pointer transition">Servicios</Link>
          <Link to="packs" smooth={true} duration={500} className="hover:text-[#FF6B00] cursor-pointer transition">Packs</Link>
          <Link to="contacto" smooth={true} duration={500} className="hover:text-[#FF6B00] cursor-pointer transition">Contacto</Link>
        </div>

        {/* BOTÓN DE ACCIÓN */}
        <Link to="contacto" smooth={true} duration={500}>
          <button className="bg-black text-white px-4 sm:px-6 py-2 rounded-full text-xs font-bold hover:bg-[#FF6B00] transition">
            PRESUPUESTO
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;