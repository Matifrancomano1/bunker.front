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
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          
          {/* LADO IZQUIERDO: LOGO Y FRASE */}
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-4">
              B<span className="text-[#FF6B00]">U</span>NKER
            </h2>
            <p className="text-gray-500 max-w-xs uppercase tracking-widest text-sm">
              Potenciando marcas desde Santa Fe, Argentina.
            </p>
          </div>

          {/* LADO DERECHO: REDES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {socialLinks.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 hover:text-[#FF6B00] transition-colors"
              >
                <div className="p-3 bg-gray-900 rounded-full group-hover:bg-[#FF6B00] group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">{item.name}</p>
                  <p className="text-sm md:text-base font-medium">{item.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-750 text-xs">
            © 2026 Bunker Studio. Desarrollado por <span className="text-white font-bold">FlowTech</span>.
          </p>
          <button 
            onClick={() => scroll.scrollToTop()}
            className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition"
          >
            VOLVER ARRIBA <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;