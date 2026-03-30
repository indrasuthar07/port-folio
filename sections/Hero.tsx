
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-16 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[80vw] h-[80vw] border-[0.5px] border-white/5 rounded-full opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,212,191,0.03),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mono text-teal-400 text-[10px] sm:text-xs mb-4 md:mb-6 uppercase tracking-[0.3em]"
        >
          Engineering the Future
        </motion.p>

        <motion.h1 
          className="text-[12vw] sm:text-xl md:text-9xl lg:text-[7rem] font-extrabold leading-[0.9] tracking-tighter select-none mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          NAZAM<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white/20">SHIRAZ</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 md:mt-12 flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8"
        >
          <div className="max-w-md">
            <p className="text-white/60 text-sm md:text-lg leading-relaxed">
              Full-Stack Engineer crafting high-performance digital narratives. 
              Bridging the profound gap between <span className="text-white font-bold">Complex Logic</span> and <span className="text-white font-bold">Artistic Interface</span>.
              <br /><span className="text-md">Visit Studio - <a className="underline" href="https://nsstudio.space/">nsstudio.space</a></span>
            </p>
          </div>
          <div className="h-px w-16 md:w-24 bg-white/20 hidden md:block" />
          <div className="mono text-[9px] md:text-xs uppercase tracking-widest text-white/40">
            Available for worldwide collaborations
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="mono text-[8px] md:text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
          <div className="w-px h-8 md:h-12 bg-gradient-to-b from-teal-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
