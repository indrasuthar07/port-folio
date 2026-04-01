import React, { useEffect } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Toolkit from './sections/Toolkit';
import Works from './sections/Works';
import Contact from './sections/Contact';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll handling for hash links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen relative selection:bg-teal-400 selection:text-black">
      <Cursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Toolkit />
        <Works />
        <Contact />
      </main>

      {/* Persistent Visual Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default App;
