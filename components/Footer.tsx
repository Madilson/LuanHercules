
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary/5 blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 flex flex-col items-center relative z-10">
        <a href="/" className="flex flex-col items-center group mb-16">
          <div className="w-32 h-32 mb-8 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
            <img 
              src="/logo.png" 
              alt="Luan Hércules Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            />
          </div>
          <span className="text-2xl font-serif-imperial text-gold-gradient font-black tracking-[0.4em]">
            LUAN HÉRCULES
          </span>
          <div className="flex items-center space-x-4 mt-4">
             <span className="h-[1px] w-8 bg-gold-primary/30"></span>
             <span className="text-[9px] text-gray-500 uppercase tracking-[0.6em] font-bold">Arte marcada com força, honra e eternidade.</span>
             <span className="h-[1px] w-8 bg-gold-primary/30"></span>
          </div>
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 w-full max-w-4xl border-y border-white/5 py-16 mb-16 text-center md:text-left">
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs text-gold-primary tracking-widest font-black">Navegação</h4>
            <a href="/portfolio" className="text-[10px] text-gray-400 hover:text-white tracking-widest uppercase transition-colors">Portfólio</a>
            <a href="/estilos" className="text-[10px] text-gray-400 hover:text-white tracking-widest uppercase transition-colors">Estilos</a>
            <a href="/sobre" className="text-[10px] text-gray-400 hover:text-white tracking-widest uppercase transition-colors">O Artista</a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs text-gold-primary tracking-widest font-black">Social</h4>
            <a href="https://www.instagram.com/luanherculestatuador" target="_blank" className="text-[10px] text-gray-400 hover:text-white tracking-widest uppercase transition-colors">Instagram</a>
            <a href="#" className="text-[10px] text-gray-400 hover:text-white tracking-widest uppercase transition-colors">Facebook</a>
            <a href="#" className="text-[10px] text-gray-400 hover:text-white tracking-widest uppercase transition-colors">Behance</a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs text-gold-primary tracking-widest font-black">Contato</h4>
            <a href="https://wa.me/558299534698" target="_blank" className="text-[10px] text-gray-400 hover:text-white tracking-widest uppercase transition-colors">WhatsApp</a>
            <a href="mailto:luanherculestattoo@gmail.com" className="text-[10px] text-gray-400 hover:text-white tracking-widest uppercase transition-colors">E-mail</a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-xs text-gold-primary tracking-widest font-black">Local</h4>
            <p className="text-[10px] text-gray-400 tracking-widest uppercase leading-relaxed">
              Maceió - AL<br/>Brasil
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-700 text-[9px] tracking-[0.4em] uppercase font-bold">
            © 2024 LUAN HÉRCULES TATTOO ART. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
