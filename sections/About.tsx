import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [isTravelMode, setIsTravelMode] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="story" className="relative min-h-screen py-24 px-8 md:px-16 transition-colors duration-1000 overflow-hidden" 
      style={{ backgroundColor: isTravelMode ? '#fafaf9' : '#0a0a0a' }}>
      
      <AnimatePresence>
        {isTravelMode && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10 grayscale"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            className={`text-5xl md:text-7xl font-bold mb-8 leading-[1.1] ${isTravelMode ? 'text-stone-900' : 'text-white'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Atelier<br />of Logic
          </motion.h2>
          
          <div className={`space-y-6 text-base md:text-lg leading-relaxed ${isTravelMode ? 'text-black' : 'text-white/60'}`}>
            <p>
              I view code as architecture and the browser as a canvas. My process begins with the structural integrity of the backend—where data flows and systems breathe—and ends with the delicate precision of user experience.
            </p>
            <p>
              With over 6 years of experience across the full stack, I don't just build features; I architect digital legacies. Every line of code is a brushstroke in a larger narrative of performance, accessibility, and elegance.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
             <div className="flex items-center space-x-4">
               <span className={`mono text-[10px] uppercase tracking-widest ${isTravelMode ? 'text-stone-400' : 'text-white/40'}`}>Digital Engineer</span>
               <button 
                  onClick={() => setIsTravelMode(!isTravelMode)}
                  className={`w-14 h-7 rounded-full relative transition-colors duration-300 interactive accent-hover ${isTravelMode ? 'bg-orange-500' : 'bg-white/10'}`}
               >
                  <motion.div 
                    className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-lg"
                    animate={{ x: isTravelMode ? 28 : 0 }}
                  />
               </button>
               <span className={`mono text-[10px] uppercase tracking-widest ${isTravelMode ? 'text-orange-600 font-bold' : 'text-white/40'}`}>Explore Persona</span>
             </div>
             
             {isTravelMode && (
               <button 
                onClick={scrollToTop}
                className="mono text-[10px] uppercase tracking-widest text-stone-400 hover:text-orange-600 transition-colors flex items-center space-x-2 interactive"
               >
                 <span>↑ Back to top</span>
               </button>
             )}
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
          <div className={`absolute inset-0 border-[0.5px] rotate-3 transition-colors ${isTravelMode ? 'border-orange-500/20' : 'border-white/10'}`} />
          <div className={`absolute inset-0 border-[0.5px] -rotate-6 transition-colors ${isTravelMode ? 'border-stone-900/10' : 'border-teal-400/20'}`} />
          
          <div className="relative w-full h-full overflow-hidden bg-neutral-900 grayscale hover:grayscale-0 transition-all duration-700 rounded-3xl">
            <AnimatePresence mode="wait">
              {!isTravelMode ? (
                <motion.div 
                  key="code"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full h-full p-8 flex items-center justify-center bg-zinc-900"
                >
                  <div className="mono text-[8px] md:text-xs text-teal-400/60 leading-tight select-none">
                    {Array.from({length: 20}).map((_, i) => (
                      <div key={i} className="whitespace-nowrap overflow-hidden">
                        {`function syncArchitecture() { return await buildState(${i}) }`.repeat(2)}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="travel"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full h-full relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000" 
                    alt="Travel context" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 backdrop-blur-[1px]">
                    <h3 className="text-white text-2xl md:text-5xl font-black text-center px-8 uppercase tracking-tighter drop-shadow-2xl leading-none mb-4">
                      Discovery beyond<br/>the digital.
                    </h3>
                    <button 
                      onClick={() => setIsTravelMode(false)}
                      className="px-6 py-2 border border-white/20 text-white mono text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all interactive"
                    >
                      Back to Logic
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
