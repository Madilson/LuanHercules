
"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  animate?: boolean;
}

/**
 * Componente Logo que reflete o brasão enviado (LHT + Leão + Louros).
 * Implementa efeitos de brilho metálico e profundidade.
 */
const Logo: React.FC<LogoProps> = ({ className = "w-full h-full", animate = true }) => {
  return (
    <div className={`relative flex items-center justify-center ${className} group`}>
      {/* Aura de profundidade (Glow) */}
      <div className="absolute inset-0 bg-gold-primary/20 blur-[60px] rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <motion.div
        initial={animate ? { opacity: 0, scale: 0.8, filter: 'brightness(0.5)' } : {}}
        animate={animate ? { 
          opacity: 1, 
          scale: 1, 
          filter: 'brightness(1)',
        } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        <img 
          src="/logo.png" 
          alt="Luan Hércules Tattoo - Brasão Imperial" 
          className="w-full h-full object-contain relative z-10"
          onError={(e) => {
            // Fallback para uma versão aproximada do brasão enviado (Crest/Gold)
            (e.target as HTMLImageElement).src = 'https://i.ibb.co/q9Wz4vM/lht-logo-reference.png';
          }}
        />
        
        {/* Efeito de Reflexo de Luz (Shine) que atravessa o brasão */}
        <motion.div 
          animate={{ 
            x: ['-150%', '150%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatDelay: 2,
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-20 pointer-events-none"
        />
      </motion.div>
    </div>
  );
};

export default Logo;
