
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gold-gradient opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
          <div className="relative border border-[#D4AF37]/30 p-2">
            <img 
              src="https://images.unsplash.com/photo-1562159278-1253a58da141?auto=format&fit=crop&q=80&w=800" 
              alt="Luan Hércules"
              className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-gold-gradient text-sm uppercase tracking-[0.4em] mb-4">O Artista</h2>
          <h1 className="text-4xl md:text-6xl font-serif-imperial mb-8 leading-tight">LUAN HÉRCULES</h1>
          
          <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed">
            <p>
              Natural da arte urbana e apaixonado pela precisão do realismo clássico, Luan Hércules consolidou seu nome como um dos principais artistas de elite do cenário nacional. Sua jornada é pautada pelo estudo incessante da anatomia e da luz.
            </p>
            <p>
              Com mais de uma década de experiência, Luan não vê a pele apenas como uma tela, mas como um suporte para eternizar a essência humana. Seu estúdio é um refúgio para quem busca exclusividade, higiene impecável e um atendimento personalizado que transcende o convencional.
            </p>
            <p className="italic border-l-4 border-[#D4AF37] pl-6 text-white py-2">
              "Minha missão é transformar a dor em arte, o conceito em imagem, e o momento em eternidade."
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-serif-imperial text-xl mb-1">Premiações</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">3x Melhor Realismo</p>
            </div>
            <div>
              <h4 className="text-white font-serif-imperial text-xl mb-1">Experiência</h4>
              <p className="text-xs text-gray-500 uppercase tracking-widest">Atendimento Global</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
