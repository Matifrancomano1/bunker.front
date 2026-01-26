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
    <div className="bg-gray-50 py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-center text-xl font-semibold text-gray-500 uppercase tracking-widest">
          Empresas que confían en nosotros
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-scroll flex items-center whitespace-nowrap">
          {/* Duplicamos el array para el efecto infinito */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Logo Cliente"
              className="mx-12 h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;