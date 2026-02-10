
import React, { useState, useEffect, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import ClientLayout from './components/ClientLayout.tsx';

// Importações diretas para garantir funcionamento no preview
import Home from './app/page.tsx';
import Portfolio from './app/portfolio/page.tsx';
import Estilos from './app/estilos/page.tsx';
import Sobre from './app/sobre/page.tsx';
import Contato from './app/contato/page.tsx';
import Admin from './app/admin/page.tsx';

const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href && anchor.href.startsWith(window.location.origin)) {
        const url = new URL(anchor.href);
        const path = url.pathname;
        
        if (path !== window.location.pathname) {
          e.preventDefault();
          window.history.pushState({}, '', path);
          handleLocationChange();
        }
      }
    };

    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/portfolio': return <Portfolio />;
      case '/estilos': return <Estilos />;
      case '/sobre': return <Sobre />;
      case '/contato': return <Contato />;
      case '/admin': return <Admin />;
      default: return <Home />;
    }
  };

  return (
    <ClientLayout>
      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        {renderPage()}
      </Suspense>
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
