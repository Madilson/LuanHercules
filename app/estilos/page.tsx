
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const styles = [
  {
    title: 'Realismo Black & Grey',
    desc: 'O domínio das sombras e luzes. Retratos e imagens que saltam da pele com profundidade fotográfica.',
    icon: '⚜️'
  },
  {
    title: 'Fineline de Luxo',
    desc: 'Traços milimétricos, elegância extrema. A arte do minimalismo executada com precisão absoluta.',
    icon: '🖋️'
  },
  {
    title: 'Geometria Sacra',
    desc: 'Simetria, padrões ancestrais e matemática aplicada à estética corporal.',
    icon: '💠'
  },
  {
    title: 'Surrealismo Dark',
    desc: 'O onírico encontra o sombrio. Criações exclusivas que desafiam a lógica e exploram o subconsciente.',
    icon: '🎭'
  }
];

export default function StylesPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-serif-imperial mb-4 text-gold-gradient">ESPECIALIDADES</h1>
        <p className="text-gray-500 max-w-xl mx-auto uppercase tracking-widest text-sm">Elevando padrões técnicos e estéticos</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {styles.map((style, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 border border-white/5 bg-[#080808] hover:border-[#D4AF37]/50 transition-all group"
          >
            <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">{style.icon}</div>
            <h3 className="text-2xl font-serif-imperial mb-4 text-white group-hover:text-gold-gradient transition-colors">{style.title}</h3>
            <p className="text-gray-400 leading-relaxed font-light">{style.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-gold-gradient text-black text-center">
        <h2 className="text-3xl font-serif-imperial mb-4">CRIAÇÕES EXCLUSIVAS</h2>
        <p className="max-w-2xl mx-auto font-medium mb-8">
          Não copiamos artes. Desenvolvemos projetos únicos baseados na anatomia e nos desejos de cada cliente.
        </p>
        <button className="px-10 py-3 border-2 border-black font-bold uppercase tracking-tighter hover:bg-black hover:text-[#D4AF37] transition-all">
          Solicitar Orçamento Personalizado
        </button>
      </div>
    </div>
  );
}
