
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GoldButton from '../components/GoldButton';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-paper.png")' }}></div>

      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6 pt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-[-1]"
        >
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/20 via-black to-black"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="w-48 h-48 md:w-64 md:h-64 mb-8 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/tattoo-logo-placeholder.png" 
              alt="Luan Hércules Tattoo" 
              className="w-full h-full object-contain filter brightness-125"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/2150/2150179.png';
              }}
            />
          </motion.div>

          <h2 className="text-gray-500 uppercase tracking-[0.5em] text-xs md:text-sm mb-4">Arte • Honra • Eternidade</h2>
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            LUAN HÉRCULES <br />
            <span className="text-gold-gradient italic">TATTOO STUDIO</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-xl font-light mb-10 leading-relaxed">
            Exclusividade e maestria em cada traço. Onde a tradição imperial se encontra com a arte contemporânea da tatuagem.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/portfolio">
              <GoldButton>Explorar Portfólio</GoldButton>
            </Link>
            <Link href="/contato">
              <button className="px-8 py-3 border border-gray-700 text-white uppercase tracking-widest hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all bg-black/50 backdrop-blur-sm">
                Agendar Consulta
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
        </motion.div>
      </section>

      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="absolute right-[-10%] bottom-[-10%] opacity-[0.03] pointer-events-none scale-150">
           <img src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/tattoo-logo-placeholder.png" alt="Watermark" className="w-[600px] h-[600px] object-contain" />
        </div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] border border-[#D4AF37]/30 group"
          >
            <img 
              src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800" 
              alt="Artist Work"
              className="w-full h-full object-cover p-4 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute -bottom-8 -right-8 bg-black border border-[#D4AF37] p-8 hidden md:block gold-glow transition-shadow duration-500">
              <span className="text-4xl font-serif-imperial text-gold-gradient block">12+</span>
              <span className="text-xs tracking-[0.3em] uppercase text-gray-400">Anos de Maestria</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-5xl font-serif-imperial mb-8 text-white leading-tight">
              A BUSCA PELA <span className="text-gold-gradient">PERFEIÇÃO</span> NÃO É UMA OPÇÃO, É UM DEVER.
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg font-light">
              Cada agulhada é um compromisso com a excelência. Em meu estúdio, não apenas tatuamos; eternizamos legados. Minha técnica funde o clássico com o contemporâneo, garantindo que sua arte envelheça com a mesma dignidade que foi criada.
            </p>
            <Link href="/sobre" className="inline-block text-[#D4AF37] tracking-[0.2em] uppercase text-sm border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all">
              Conheça a História
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
