
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo.tsx';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <header 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-4 group">
          <div className="w-12 h-12 md:w-16 md:h-16">
            <Logo />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-cinzel text-gold-gradient font-bold tracking-widest leading-none">
              LUAN HÉRCULES
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-gray-500 font-bold">Imperial Studio</span>
          </div>
        </a>

        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-all duration-300 relative group ${
                currentPath === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold-primary transition-all duration-500 ${
                currentPath === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-6 h-5 relative flex flex-col justify-between items-end">
            <span className={`h-0.5 bg-white transition-all w-6 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 bg-white transition-all w-4 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 bg-white transition-all w-5 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[65] flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-cinzel tracking-widest text-white hover:text-gold-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
