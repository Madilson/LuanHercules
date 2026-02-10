
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoldButton from '../../components/GoldButton';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [config, setConfig] = useState({
    showBanner: true,
    heroImage: 'https://images.unsplash.com/photo-1590201841344-38f176c5b057?auto=format&fit=crop&q=80&w=2000',
    heroTitle: 'LUAN HÉRCULES',
    heroSubtitle: 'A imortalidade gravada na pele através do realismo de elite'
  });

  const [portfolio, setPortfolio] = useState([]);
  const [newArt, setNewArt] = useState({ url: '', title: '', category: 'Realismo' });

  useEffect(() => {
    // Carregar Configurações
    const savedConfig = localStorage.getItem('lht_config');
    if (savedConfig) setConfig(JSON.parse(savedConfig));
    
    // Carregar Portfólio
    const savedPortfolio = localStorage.getItem('lht_portfolio');
    if (savedPortfolio) {
      setPortfolio(JSON.parse(savedPortfolio));
    } else {
      // Itens iniciais caso esteja vazio
      const initial = [
        { id: 1, url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600', title: 'Blackwork Imperial', category: 'Realismo' },
        { id: 2, url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&q=80&w=600', title: 'Grey Wash Soul', category: 'Sombreado' },
      ];
      setPortfolio(initial);
      localStorage.setItem('lht_portfolio', JSON.stringify(initial));
    }

    const auth = sessionStorage.getItem('lht_auth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'luanadmin' && password === 'imperial2024') {
      setIsAuthenticated(true);
      sessionStorage.setItem('lht_auth', 'true');
    } else {
      alert('Credenciais Inválidas');
    }
  };

  const saveConfig = () => {
    localStorage.setItem('lht_config', JSON.stringify(config));
    alert('Configurações do Banner salvas!');
  };

  const addArt = () => {
    if (!newArt.url || !newArt.title) return alert('Preencha os campos da arte');
    const updated = [...portfolio, { ...newArt, id: Date.now() }];
    setPortfolio(updated);
    localStorage.setItem('lht_portfolio', JSON.stringify(updated));
    setNewArt({ url: '', title: '', category: 'Realismo' });
    alert('Arte adicionada ao portfólio!');
  };

  const removeArt = (id) => {
    const updated = portfolio.filter(item => item.id !== id);
    setPortfolio(updated);
    localStorage.setItem('lht_portfolio', JSON.stringify(updated));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md border border-gold-primary/20 p-12 bg-neutral-950 text-center shadow-2xl"
        >
          <div className="mb-8">
             <h1 className="text-2xl font-cinzel text-gold-gradient tracking-[0.3em]">ACESSO IMPERIAL</h1>
             <p className="text-[8px] text-gray-500 uppercase tracking-widest mt-2">Painel de Controle Restrito</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="USUÁRIO"
                className="w-full bg-black/50 border border-white/5 py-4 px-4 text-center outline-none focus:border-gold-primary/50 transition-all text-xs tracking-widest text-gold-primary uppercase"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="SENHA"
                className="w-full bg-black/50 border border-white/5 py-4 px-4 text-center outline-none focus:border-gold-primary/50 transition-all text-xs tracking-widest text-gold-primary uppercase"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <GoldButton type="submit" className="w-full">Entrar no Sistema</GoldButton>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-6 font-inter">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-gold-primary/10 pb-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-cinzel text-gold-gradient tracking-widest">DASHBOARD</h1>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-2">Logado como: {username}</p>
          </div>
          <button 
            onClick={() => {
              sessionStorage.removeItem('lht_auth');
              setIsAuthenticated(false);
            }}
            className="text-[10px] uppercase tracking-[0.3em] text-red-500/60 hover:text-red-500 transition-colors border-b border-red-500/20 pb-1"
          >
            Encerrar Sessão
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Configuração do Banner */}
          <div className="bg-neutral-950/40 border border-white/5 p-8 rounded-sm">
            <h2 className="text-lg font-cinzel text-gold-primary mb-8 border-l-4 border-gold-primary pl-4 tracking-widest">HERO & BANNER</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-black/40 border border-white/5">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">Ativar Banner</span>
                <button 
                  onClick={() => setConfig({...config, showBanner: !config.showBanner})}
                  className={`w-12 h-5 rounded-full transition-all relative ${config.showBanner ? 'bg-gold-primary shadow-[0_0_10px_rgba(212,175,55,0.4)]' : 'bg-neutral-800'}`}
                >
                  <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${config.showBanner ? 'left-8' : 'left-1'}`} />
                </button>
              </div>

              <div>
                <label className="text-[9px] uppercase tracking-widest text-gray-600 block mb-2">Imagem de Fundo (URL)</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-white/10 p-4 text-[11px] text-gray-400 focus:border-gold-primary outline-none"
                  value={config.heroImage}
                  onChange={(e) => setConfig({...config, heroImage: e.target.value})}
                />
              </div>

              <div>
                <label className="text-[9px] uppercase tracking-widest text-gray-600 block mb-2">Título Imperial</label>
                <input 
                  type="text" 
                  className="w-full bg-black border border-white/10 p-4 text-[11px] text-gray-400 focus:border-gold-primary outline-none"
                  value={config.heroTitle}
                  onChange={(e) => setConfig({...config, heroTitle: e.target.value})}
                />
              </div>

              <GoldButton onClick={saveConfig} className="w-full text-[10px]">Salvar Configurações</GoldButton>
            </div>
          </div>

          {/* Upload de Portfólio */}
          <div className="bg-neutral-950/40 border border-white/5 p-8 rounded-sm">
            <h2 className="text-lg font-cinzel text-gold-primary mb-8 border-l-4 border-gold-primary pl-4 tracking-widest">GERENCIAR ARTES</h2>
            
            <div className="space-y-6">
              <div className="grid gap-4">
                <input 
                  type="text" 
                  placeholder="URL DA IMAGEM"
                  className="w-full bg-black border border-white/10 p-4 text-[11px] text-gray-400 outline-none"
                  value={newArt.url}
                  onChange={(e) => setNewArt({...newArt, url: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="TÍTULO DA OBRA"
                  className="w-full bg-black border border-white/10 p-4 text-[11px] text-gray-400 outline-none"
                  value={newArt.title}
                  onChange={(e) => setNewArt({...newArt, title: e.target.value})}
                />
                <select 
                  className="w-full bg-black border border-white/10 p-4 text-[11px] text-gray-400 outline-none"
                  value={newArt.category}
                  onChange={(e) => setNewArt({...newArt, category: e.target.value})}
                >
                  <option>Realismo</option>
                  <option>Sombreado</option>
                  <option>Geométrico</option>
                  <option>Surrealismo</option>
                  <option>Trabalho Fino</option>
                </select>
              </div>
              <GoldButton onClick={addArt} className="w-full text-[10px]">Adicionar ao Portfólio</GoldButton>
            </div>

            <div className="mt-8 border-t border-white/5 pt-8 max-h-[300px] overflow-y-auto custom-scrollbar">
              <h3 className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">Lista de Artes ({portfolio.length})</h3>
              <div className="space-y-3">
                {portfolio.map(art => (
                  <div key={art.id} className="flex items-center justify-between p-3 bg-black/40 border border-white/5 group">
                    <div className="flex items-center space-x-3">
                      <img src={art.url} className="w-10 h-10 object-cover grayscale group-hover:grayscale-0 transition-all" alt="" />
                      <div>
                        <p className="text-[10px] text-white uppercase tracking-wider">{art.title}</p>
                        <p className="text-[8px] text-gold-primary/60 uppercase">{art.category}</p>
                      </div>
                    </div>
                    <button onClick={() => removeArt(art.id)} className="text-red-900 hover:text-red-500 text-[10px] transition-colors">Remover</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
