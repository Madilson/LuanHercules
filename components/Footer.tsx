
import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <Link href="/" className="flex flex-col items-center group mb-12">
          <div className="w-20 h-20 mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/tattoo-logo-placeholder.png" 
              alt="Luan Hércules Logo" 
              className="w-full h-full object-contain filter grayscale brightness-125 group-hover:grayscale-0 transition-all duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/2150/2150179.png';
              }}
            />
          </div>
          <span className="text-2xl font-serif-imperial text-gold-gradient font-bold tracking-[0.3em]">
            LUAN HÉRCULES
          </span>
          <span className="text-[10px] text-gray-600 uppercase tracking-[0.5em] mt-2">Tattoo Studio • Brazil</span>
        </Link>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
          <a 
            href="https://www.instagram.com/luanherculestatuador?igsh=cm43eGJoNXNlMGE2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-[#D4AF37] transition-colors uppercase tracking-[0.2em] text-xs"
          >
            Instagram
          </a>
          <a 
            href="https://wa.me/558299534698" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-[#D4AF37] transition-colors uppercase tracking-[0.2em] text-xs"
          >
            WhatsApp
          </a>
          <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors uppercase tracking-[0.2em] text-xs">Behance</a>
          <a href="mailto:luanherculestattoo@gmail.com" className="text-gray-500 hover:text-[#D4AF37] transition-colors uppercase tracking-[0.2em] text-xs">Email</a>
        </div>

        <div className="text-center">
          <p className="text-gray-700 text-[10px] tracking-[0.3em] uppercase">
            © 2024 LUAN HÉRCULES ART. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-800 text-[9px] mt-2 tracking-widest uppercase font-light">
            Maceió, Alagoas • Rua Comendador José Geraldo da Silva, 266
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
