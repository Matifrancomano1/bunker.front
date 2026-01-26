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
import logoLasTresMarias from '../assets/Las-tres-marias.png';
import logoInmobiliaria from '../assets/InmobiliariaMonteVera.png';
import logoIO from '../assets/IO.png';
import logoRodados from '../assets/Rodados-Ricards.png';
import logoFarmaciaBonino from '../assets/FarmaciaBonino .png';
import logoFarmaciaIrrazabal from '../assets/FarmaciaIrrazabal.png';
import logoFarmaciaMontes from '../assets/FarmaciaMontes.png';
import logoCantina from '../assets/Cantina-LigaPro.png';

const LogoCarousel = () => {
  const logos = [
    logoParador, logoChoperia, logoCosta, 
    logoLiga, logoVera, logoNicolina,
    logoBubulae, logoIndiana, logoIdent,
    logoKurday, logoLasTresMarias, logoInmobiliaria,
    logoIO, logoRodados, logoFarmaciaBonino,
    logoFarmaciaIrrazabal, logoFarmaciaMontes, logoCantina
  ];

  return (
    <div className="bg-white py-16 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-center text-2xl font-bold text-gray-800 uppercase tracking-widest">
          Empresas que confían en nosotros
        </h2>
      </div>
      
      <div className="relative w-full overflow-hidden bg-white py-8">
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
        `}</style>
        
        <div className="carousel-track">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Logo Cliente"
              className="h-40 w-auto object-contain px-12 flex-shrink-0 transition-transform duration-300 hover:scale-125"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;