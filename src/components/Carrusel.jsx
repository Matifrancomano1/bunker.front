import logoParador from '../assets/Parador-Santafe.png';
import logoChoperia from '../assets/ChoperiaSantaFe.png';
import logoCosta from '../assets/CostaLitoral.png';
import logoLiga from '../assets/liga-pro.png';
import logoVera from '../assets/vera.png';
import logoNicolina from '../assets/Nicolina Deco..png';
import logoBubulae from '../assets/Bubulae-mercadocarnes.png';
import logoIndiana from '../assets/Indiana.png';
import logoIdent from '../assets/Ident.png';
import logoKurday from '../assets/Kurday.png';
import logoLasTresMarias from '../assets/3marias.png';
import logoInmobiliaria from '../assets/InmobiliariaMonteVera.png';
import logoIO from '../assets/IO.png';
import logoRodados from '../assets/Ricards.png';
import logoFarmaciaBonino from '../assets/FarmaciaBonino .png';
import logoFarmaciaIrrazabal from '../assets/FarmaciaIrrazabal.png';
import logoFarmaciaMontes from '../assets/FarmaciaMontes.png';
import logoCantina from '../assets/Cantina-LigaPro.png';
import logoIguana from '../assets/Iguana.png';
import logoAntro from '../assets/Antro-Bar.png';
import logoBreak from '../assets/break.png';

const LogoCarousel = () => {
  const logos = [
    logoParador, logoChoperia, logoCosta, 
    logoLiga, logoVera, logoNicolina,
    logoBubulae, logoIndiana, logoIdent,
    logoKurday, logoLasTresMarias, logoInmobiliaria,
    logoIO, logoRodados, logoFarmaciaBonino,
    logoFarmaciaIrrazabal, logoFarmaciaMontes, logoCantina, logoAntro, logoBreak, logoIguana
  ];

  return (
    <div className="bg-gray-100 py-8 sm:py-12 lg:py-16 border-y border-gray-300">
      <div className="w-full px-4 mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 uppercase tracking-widest">
          Empresas que confían en nosotros
        </h2>
      </div>
      
      <div className="relative w-full overflow-hidden bg-gray-100 py-4 sm:py-6 lg:py-8">
        <style>{`
          @keyframes scroll-infinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .carousel-track {
            animation: scroll-infinite 30s linear infinite;
            display: flex;
            width: fit-content;
          }
          
          .carousel-track:hover {
            animation-play-state: paused;
          }

          /* Mobile */
          @media (max-width: 640px) {
            .carousel-logo {
              height: 60px;
              padding: 0 12px;
            }
          }

          /* Tablet */
          @media (min-width: 641px) and (max-width: 1024px) {
            .carousel-logo {
              height: 100px;
              padding: 0 16px;
            }
          }

          /* Desktop */
          @media (min-width: 1025px) {
            .carousel-logo {
              height: 160px;
              padding: 0 24px;
            }
          }
        `}</style>
        
        <div className="carousel-track">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Logo Cliente"
              className="carousel-logo w-auto object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110 sm:hover:scale-115 lg:hover:scale-125"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;