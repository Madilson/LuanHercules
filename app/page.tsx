
"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GoldButton from '../components/GoldButton.tsx';
import Logo from '../components/Logo.tsx';

export default function Home() {
  const [config, setConfig] = useState({
    showBanner: false, // Padrão baseado no último pedido de remoção
    heroImage: 'https://images.unsplash.com/photo-1590201841344-38f176c5b057?auto=format&fit=crop&q=80&w=2000',
    heroTitle: 'LUAN HÉRCULES',
    heroSubtitle: 'A imortalidade gravada na pele através do realismo de elite'
  });

  useEffect(() => {
    const saved = localStorage.getItem('lht_config');
    if (saved) setConfig(JSON.parse(saved));
  }, []);

  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 800], [0, 250]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative bg-black min-h-screen">
      {/* Hero Section Dinâmica */}
      <section className={`relative flex flex-col items-center justify-center text-center px-6 overflow-hidden ${config.showBanner ? 'h-screen' : 'h-[85vh]'}`}>
        
        {/* Camada de Banner (Apenas se ativado no Admin) */}
        {config.showBanner && (
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/85 z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-10" />
            <motion.div style={{ y: yBackground }} className="absolute inset-0 w-full h-full">
              <img 
                src={config.heroImage}
                className="w-full h-full object-cover grayscale opacity-40"
                alt="Banner Background"
              />
            </motion.div>
          </div>
        )}

        {/* Conteúdo Principal */}
        <motion.div
          style={{ opacity: opacityHero }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center w-full max-w-6xl"
        >
          {/* Logo Central (Se o banner estiver ativo, ele brilha mais) */}
          <div className={`${config.showBanner ? 'w-[300px] h-[300px] md:w-[500px] md:h-[500px] mb-[-40px]' : 'mb-12'}`}>
            {config.showBanner ? <Logo /> : (
              <div className="flex items-center space-x-6">
                <span className="h-[1px] w-8 md:w-16 bg-gold-primary/40" />
                <span className="text-gold-primary tracking-[1em] text-[10px] md:text-xs font-black uppercase opacity-90">
                  Maestria • Honra • Eternidade
                </span>
                <span className="h-[1px] w-8 md:w-16 bg-gold-primary/40" />
              </div>
            )}
          </div>

          <h1 className="text-5xl md:text-9xl font-cinzel font-black mb-8 leading-none tracking-tighter">
            {config.heroTitle.split(' ')[0]} <span className="text-gold-gradient">{config.heroTitle.split(' ')[1] || ''}</span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-[10px] md:text-sm font-light mb-16 leading-relaxed tracking-[0.6em] uppercase italic">
            "{config.heroSubtitle}"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center items-center w-full">
            <a href="/portfolio" className="w-full sm:w-auto">
              <GoldButton className="w-full sm:min-w-[300px] text-[10px]">
                Explorar Portfólio
              </GoldButton>
            </a>
            <a href="https://wa.me/558299534698" className="w-full sm:w-auto">
              <button className="w-full sm:min-w-[300px] px-10 py-4 border border-gold-primary/30 text-white uppercase tracking-[0.4em] text-[10px] font-black hover:bg-gold-primary hover:text-black transition-all duration-500 bg-black/20 backdrop-blur-sm gold-glow">
                Consultoria VIP
              </button>
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-primary/60 to-transparent" />
        </motion.div>
      </section>

      {/* Seção de Filosofia */}
      <section className="py-40 bg-[#020202] relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-6xl font-cinzel mb-10 leading-tight">MAESTRIA EM CADA <br/><span className="text-gold-gradient">MILÍMETRO</span></h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
              Em Maceió, o estúdio Luan Hércules redefine o conceito de tatuagem. Não se trata apenas de pigmento, mas de uma experiência sensorial onde cada detalhe é planejado para exalar exclusividade e perfeição técnica.
            </p>
            <div className="grid grid-cols-2 gap-10">
               <div className="border-l border-gold-primary/40 pl-6">
                  <span className="text-2xl font-cinzel text-white block mb-1">REALISMO</span>
                  <span className="text-[8px] uppercase tracking-widest text-gold-primary">Alta Definição</span>
               </div>
               <div className="border-l border-gold-primary/40 pl-6">
                  <span className="text-2xl font-cinzel text-white block mb-1">VIP CARE</span>
                  <span className="text-[8px] uppercase tracking-widest text-gold-primary">Privacidade Total</span>
               </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square border border-gold-primary/10 p-6 bg-neutral-950/50"
            >
              <img 
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
                alt="Detalhe de Arte"
              />
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-gold-primary" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-gold-primary" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
