
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
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold tracking-widest text-black uppercase transition-all bg-gold-gradient rounded-none gold-glow group ${className}`}
    >
      <span className="relative">{children}</span>
    </motion.button>
  );
};

export default GoldButton;
