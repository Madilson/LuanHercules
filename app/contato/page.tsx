
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GoldButton from '../../components/GoldButton';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif-imperial mb-4 text-gold-gradient">CONTATO</h1>
          <p className="text-gray-500 uppercase tracking-widest text-sm">O primeiro passo para sua próxima obra de arte</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-serif-imperial mb-6 text-white">FALE CONOSCO</h3>
            <p className="text-gray-400 mb-10 leading-relaxed font-light">
              Estamos prontos para ouvir sua ideia. Preencha o formulário ou entre em contato diretamente pelo WhatsApp para um atendimento prioritário.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center text-gold-gradient flex-shrink-0">📍</div>
                <span className="text-gray-300">Rua Comendador José Geraldo da Silva, 266<br/>Jacintinho, Maceió - AL</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center text-gold-gradient flex-shrink-0">📞</div>
                <span className="text-gray-300">+55 82 9953-4698</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center text-gold-gradient flex-shrink-0">✉️</div>
                <span className="text-gray-300">luanherculestattoo@gmail.com</span>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/558299534698" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-green-600/10 text-green-500 border border-green-500/50 px-6 py-3 hover:bg-green-600 hover:text-white transition-all w-full justify-center md:w-auto gold-glow"
              >
                <span>Chamar no WhatsApp</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.128l-.094.479-.405 2.05 2.087-.392.487-.091c.803.489 1.622.747 2.668.747 3.181 0 5.767-2.586 5.767-5.766s-2.586-5.766-5.767-5.766zm3.39 8.162c-.145.409-.85.764-1.151.815-.27.046-.621.082-1.025-.05-.245-.081-.553-.182-.942-.349-1.654-.712-2.731-2.39-2.813-2.501-.082-.112-.667-.887-.667-1.691s.414-1.197.562-1.362c.148-.166.323-.207.43-.207h.306c.108 0 .25.004.364.274.114.27.391.954.425 1.023.034.07.057.152.011.244-.046.092-.07.151-.139.234-.07.082-.148.182-.211.245-.07.069-.142.144-.061.285.082.141.364.601.782.973.539.479 1.002.637 1.151.705.15.069.237.057.324-.041.087-.099.373-.434.473-.583.1-.15.2-.124.337-.074.137.05.867.409.913.434s.074.037.108.096c.034.059.034.343-.111.752z"/></svg>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">Nome Completo</label>
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#D4AF37] outline-none transition-all"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">E-mail</label>
              <input 
                type="email" 
                required
                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#D4AF37] outline-none transition-all"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">Sua Ideia / Estilo</label>
              <textarea 
                rows={4}
                required
                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#D4AF37] outline-none transition-all resize-none"
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
              ></textarea>
            </div>
            <GoldButton type="submit" className="w-full">Enviar Proposta</GoldButton>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
