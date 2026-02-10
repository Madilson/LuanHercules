import React from 'react';
import { motion } from 'framer-motion';

interface GoldButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const GoldButton: React.FC<GoldButtonProps> = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-bold tracking-[0.2em] text-black uppercase transition-all bg-gold-gradient rounded-none group ${className}`}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform"></span>
      <span className="relative z-10">{children}</span>
      
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </motion.button>
  );
};

export default GoldButton;