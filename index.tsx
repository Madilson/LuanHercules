
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import ClientLayout from './components/ClientLayout';

// Importação das páginas do "App Router" para uso na pré-visualização
import Home from './app/page';
import Portfolio from './app/portfolio/page';
import Estilos from './app/estilos/page';
import Sobre from './app/sobre/page';
import Contato from './app/contato/page';

const App = () => {
  const [currentPath, setCurrentPath] = useState('/');

  // Simulação de roteamento para a pré-visualização
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Pequeno hack para interceptar cliques em links do Next.js na prévia
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const path = anchor.getAttribute('href') || '/';
        window.history.pushState({}, '', path);
        setCurrentPath(path);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  // Seleciona o componente baseado na rota
  const renderPage = () => {
    switch (currentPath) {
      case '/portfolio': return <Portfolio />;
      case '/estilos': return <Estilos />;
      case '/sobre': return <Sobre />;
      case '/contato': return <Contato />;
      default: return <Home />;
    }
  };

  return (
    <ClientLayout>
      {renderPage()}
    </ClientLayout>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
