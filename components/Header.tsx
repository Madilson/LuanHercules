
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // No Next.js isso funciona nativamente. Na prévia, pegamos do window.
  let pathname = '/';
  try {
    pathname = usePathname() || window.location.pathname;
  } catch (e) {
    if (typeof window !== 'undefined') pathname = window.location.pathname;
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Estilos', path: '/estilos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 relative overflow-hidden">
            <img 
              src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/tattoo-logo-placeholder.png" 
              alt="Luan Hércules Logo" 
              className="w-full h-full object-contain filter brightness-110 contrast-125 group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://cdn-icons-png.flaticon.com/512/2150/2150179.png';
              }}
            />
          </div>
          <span className="text-xl md:text-2xl font-serif-imperial text-gold-gradient font-bold tracking-widest hidden sm:block">
            LUAN HÉRCULES
          </span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm tracking-[0.2em] uppercase transition-colors hover:text-[#D4AF37] ${pathname === link.path ? 'text-[#D4AF37]' : 'text-gray-400'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <div className="w-24 h-24 mb-4">
               <img src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/tattoo-logo-placeholder.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-serif-imperial text-white hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <button 
              className="mt-8 text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              FECHAR
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
