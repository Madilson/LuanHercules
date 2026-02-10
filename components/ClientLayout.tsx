
"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SplashScreen from './SplashScreen';
import Header from './Header';
import Footer from './Footer';

export default function ClientLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tenta carregar o estado do splash do sessionStorage com fallback para evitar loops
    let hasShownSplash = false;
    try {
      hasShownSplash = sessionStorage.getItem('luan-hercules-splash') === 'true';
    } catch (e) {
      console.warn("SessionStorage not available");
    }
    
    // Tempo reduzido para melhorar a percepção de performance
    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem('luan-hercules-splash', 'true');
      } catch (e) {}
    }, hasShownSplash ? 800 : 2200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div 
            key="main-content" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen selection:bg-[#D4AF37] selection:text-black"
          >
            <Header />
            <main className="flex-grow pt-20 md:pt-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={typeof window !== 'undefined' ? window.location.pathname : 'static'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
