
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PortfolioPage() {
  const [filter, setFilter] = useState('Todos');
  const [items, setItems] = useState([]);
  
  const categories = ['Todos', 'Realismo', 'Sombreado', 'Geométrico', 'Surrealismo', 'Trabalho Fino'];

  useEffect(() => {
    const saved = localStorage.getItem('lht_portfolio');
    if (saved) {
      setItems(JSON.parse(saved));
    } else {
      // Fallback inicial
      const initial = [
        { id: 1, url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fm=webp&fit=crop&q=80&w=800', title: 'Blackwork Imperial', category: 'Realismo' },
        { id: 2, url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fm=webp&fit=crop&q=80&w=800', title: 'Grey Wash Soul', category: 'Sombreado' },
        { id: 3, url: 'https://images.unsplash.com/photo-1590201841344-38f176c5b057?auto=format&fm=webp&fit=crop&q=80&w=800', title: 'Geometric Order', category: 'Geométrico' },
        { id: 4, url: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fm=webp&fit=crop&q=80&w=800', title: 'Dark Surrealism', category: 'Surrealismo' },
        { id: 5, url: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fm=webp&fit=crop&q=80&w=800', title: 'Lion Heart', category: 'Realismo' },
        { id: 6, url: 'https://images.unsplash.com/photo-1542332606-b4dce867966b?auto=format&fm=webp&fit=crop&q=80&w=800', title: 'Ancient Symbols', category: 'Trabalho Fino' },
      ];
      setItems(initial);
    }
  }, []);

  const filteredItems = filter === 'Todos' ? items : items.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-cinzel mb-4 text-gold-gradient tracking-widest font-black">PORTFÓLIO</h1>
        <div className="w-24 h-[1px] bg-gold-primary/30 mx-auto mb-8"></div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${filter === cat ? 'text-gold-primary border-b border-gold-primary pb-1' : 'text-gray-500 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredItems.map((item) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            key={item.id}
            className="group relative h-[500px] overflow-hidden cursor-pointer bg-neutral-900 border border-white/5"
          >
            <img 
              src={item.url} 
              alt={item.title} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 border border-transparent group-hover:border-gold-primary/20">
              <span className="text-gold-primary text-[10px] uppercase tracking-[0.4em] mb-3">{item.category}</span>
              <h3 className="text-2xl font-cinzel text-white tracking-widest">{item.title}</h3>
            </div>
          </motion.div>
        ))}
        
        {filteredItems.length === 0 && (
          <div className="col-span-full py-40 text-center">
             <p className="text-gray-600 font-cinzel tracking-widest uppercase">Nenhuma obra nesta categoria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
