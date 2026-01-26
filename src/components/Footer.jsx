import React from 'react';
import { Instagram, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram size={24} />, 
      link: "https://www.instagram.com/bunkerargentina_?igsh=MXd1cHg4ZXkzczcxbA==", 
      label: '@bunkerargentina' 
    },
    { 
      name: 'WhatsApp', 
      icon: <MessageCircle size={24} />, 
      link: 'https://wa.me/543424382048', 
      label: '+54 342 438-2048' 
    },
    { 
      name: 'Gmail', 
      icon: <Mail size={24} />, 
      link: 'mailto:Bunkerargentina01@gmail.com', 
      label: 'Bunkerargentina01@gmail.com' 
    }
  ];

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-20 border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* SECCIÓN PRINCIPAL - CENTRADA */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* LOGO Y FRASE */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
              B<span className="text-[#FF6B00]">U</span>NKER
            </h2>
            <p className="text-gray-500 uppercase tracking-widest text-xs md:text-sm">
              Potenciando marcas desde Santa Fe, Argentina.
            </p>
          </div>

          {/* REDES SOCIALES CENTRADAS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 w-full max-w-2xl">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 hover:text-[#FF6B00] transition-colors"
              >
                <div className="p-3 bg-gray-900 rounded-full group-hover:bg-[#FF6B00] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 uppercase font-bold">{item.name}</p>
                  <p className="text-xs md:text-sm font-medium break-all">{item.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* DIVISOR */}
        <div className="border-t border-gray-900 my-8"></div>

        {/* FOOTER INFERIOR */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-center md:text-center">
          <p className="text-gray-600 text-xs order-2 md:order-1">
            © 2026 Bunker Studio. Desarrollado por <span className="text-white font-bold">FlowTech</span>.
          </p>
          <button
            onClick={() => scroll.scrollToTop()}
            className="flex items-center justify-center gap-2 text-xs font-bold text-gray-400 hover:text-[#FF6B00] transition order-1 md:order-2"
          >
            VOLVER ARRIBA <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;