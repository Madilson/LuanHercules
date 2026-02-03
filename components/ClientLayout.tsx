"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './SplashScreen';
import Header from './Header';
import Footer from './Footer';

// Define the component props with children as optional to avoid strict typing issues in different environments
export default function ClientLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <div key="main-content" className="flex flex-col min-h-screen bg-black selection:bg-[#D4AF37] selection:text-black">
            <Header />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
