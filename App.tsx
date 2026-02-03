
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Styles from './pages/Styles';
import Contact from './pages/Contact';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant timing for the splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <div key="main-content" className="flex flex-col min-h-screen bg-black selection:bg-[#D4AF37] selection:text-black">
            <Header />
            <main className="flex-grow pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/estilos" element={<Styles />} />
                <Route path="/contato" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
