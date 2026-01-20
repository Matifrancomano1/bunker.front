import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-20 bg-[#0a0a0a] text-white pt-20 pb-10 sm:pb-0">
      <motion.h1 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] font-black leading-tight sm:leading-none tracking-tighter">
        B<span className="text-[#FF6B00]">U</span>NKER<br />STUDIO<span className="text-[#FF6B00]">.</span>
      </motion.h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mt-4 sm:mt-6 max-w-xl uppercase tracking-widest">
        Potenciamos tu imagen. Gestión de redes y contenido audiovisual.
      </p>
    </section>
  );
};

export default Hero;
