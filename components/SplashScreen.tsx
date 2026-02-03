
import React from 'react';
import { motion } from 'framer-motion';

const SplashScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut",
          staggerChildren: 0.3
        }}
        className="text-center"
      >
        <motion.h1 
          className="text-4xl md:text-7xl font-serif-imperial text-gold-gradient font-black tracking-[0.2em] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          LUAN HÉRCULES
        </motion.h1>
        
        <motion.div 
          className="h-[1px] bg-gold-gradient w-0 mx-auto mb-4"
          animate={{ w: "100%" }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{ maxWidth: '300px' }}
        />

        <motion.p 
          className="text-gray-500 uppercase tracking-[0.6em] text-xs md:text-sm font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          TATTOO STUDIO
        </motion.p>
      </motion.div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute inset-0 z-[-1] opacity-20"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 3 }}
      >
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#D4AF37_0%,_transparent_70%)] opacity-20"></div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
