
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo.tsx';

const SplashScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 2.5, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        className="w-72 h-72 md:w-[450px] md:h-[450px] mb-8 flex items-center justify-center"
      >
        <Logo className="w-full h-full" animate={false} />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1.2 }}
        className="text-center"
      >
        <h1 className="text-xl md:text-3xl font-cinzel text-gold-gradient font-black tracking-[1em]">
          LUAN HÉRCULES
        </h1>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent w-64 mx-auto mt-6" />
        <p className="text-[9px] uppercase tracking-[1.2em] text-gray-500 font-bold mt-6 opacity-70">
          MAESTRIA • HONRA • ETERNIDADE
        </p>
      </motion.div>

      {/* Cinematic ambient light */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 4 }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_70%)] pointer-events-none"
      />
    </motion.div>
  );
};

export default SplashScreen;
