
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  { id: 1, url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600', title: 'Blackwork Imperial', category: 'Realismo' },
  { id: 2, url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=600', title: 'Grey Wash Soul', category: 'Sombreado' },
  { id: 3, url: 'https://images.unsplash.com/photo-1590201841344-38f176c5b057?auto=format&fit=crop&q=80&w=600', title: 'Geometric Order', category: 'Geométrico' },
  { id: 4, url: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&q=80&w=600', title: 'Dark Surrealism', category: 'Surrealismo' },
  { id: 5, url: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=600', title: 'Lion Heart', category: 'Realismo' },
  { id: 6, url: 'https://images.unsplash.com/photo-1542332606-b4dce867966b?auto=format&fit=crop&q=80&w=600', title: 'Ancient Symbols', category: 'Trabalho Fino' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Realismo', 'Sombreado', 'Geométrico', 'Surrealismo'];

  const filteredItems = filter === 'Todos' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-serif-imperial mb-4 text-gold-gradient">PORTFÓLIO</h1>
        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-widest transition-all ${filter === cat ? 'text-[#D4AF37] border-b border-[#D4AF37]' : 'text-gray-500 hover:text-white'}`}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={item.id}
            className="group relative h-[450px] overflow-hidden cursor-pointer"
          >
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 border-2 border-transparent group-hover:border-[#D4AF37]/50">
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] mb-2">{item.category}</span>
              <h3 className="text-2xl font-serif-imperial text-white">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
