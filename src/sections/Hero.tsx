import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [currentDate, setCurrentDate] = useState({ day: '...', month: '...' });

  useEffect(() => {
    const today = new Date();
    setCurrentDate({
      day: today.getDate().toString().padStart(2, '0'),
      month: today.toLocaleString('en-US', { month: 'short' }).toLowerCase() 
    });
  }, []);
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

      <motion.div 
  initial={{ opacity: 0, filter: 'blur(10px)' }}
  animate={{ opacity: 1, filter: 'blur(0px)' }}
  transition={{ duration: 1.5, delay: 0.5 }}
  className="absolute top-[70%] right-0 md:top-auto md:bottom-16 md:right-16 z-50 group cursor-crosshair"
>
  <div className="relative flex items-center justify-end">
    
    {/* Default State */}
    <div className="flex items-center gap-3 md:gap-4 transition-all duration-700 ease-out group-hover:opacity-0 group-hover:blur-md group-hover:translate-x-8 origin-right">
      <span className="text-7xl md:text-8xl font-black tracking-tighter text-white/90 drop-shadow-2xl">
        {currentDate.day}
      </span>
      <div className="flex flex-col justify-center text-left">
        <span className="font-serif italic text-3xl md:text-4xl text-white/80 leading-none mb-1">
          {currentDate.month}
        </span>
        <span className="text-[10px] md:text-[12px] uppercase tracking-widest text-teal-400 leading-none">
          Available for work
        </span>
      </div>
    </div>

    {/* Hover State */}
    <div className="absolute right-0 flex flex-col items-end opacity-0 translate-x-8 transition-all duration-700 ease-out pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 w-max">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl text-white/40 leading-none">☹</span>
        <p className="text-sm md:text-base text-white/90 font-normal tracking-wide">
          It's a fake availability.
        </p>
      </div>
      <p className="text-teal-400 font-normal text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-right">
        Contact me to check actual status
      </p>
    </div>

  </div>
</motion.div>
      <div className="relative z-10 max-w-7xl">
        <motion.p className="font-normal text-teal-400 text-xs md:text-xs mb-8 uppercase tracking-[0.4em] flex items-center gap-4">
                  <span className="w-8 h-px bg-teal-400"></span>
                  Engineering the future
                </motion.p>

        <motion.h1
          className="text-[12vw] sm:text-xl md:text-9xl lg:text-[7rem] font-extrabold leading-[0.9] tracking-tighter select-none mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          INDRA<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white/20">SUTHAR</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-4 md:mt-12 flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8"
        >
          <div className="max-w-md">
            <p className="text-white/60 text-sm md:text-lg leading-relaxed">
              Software Engineer specializing in full-stack development and Generative AI. Bridging the profound gap between <span className="text-white font-bold">Complex Logic</span> and <span className="text-white font-bold">Artistic Interface</span>.
              <br /><span className="text-md"><a className="underline hover:text-teal-400 transition-colors" href="https://github.com/indrasuthar07" target="_blank" rel="noopener noreferrer">@indrasuthar07</a></span>
            </p>
          </div>
          
          {/* Divider */}
          <div className="h-px w-16 md:w-24 bg-white/20 hidden md:block" />
          
          <div className="font-mono text-[9px] md:text-xs uppercase tracking-widest text-white/40">
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
          <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-white/30">Scroll</span>
          <div className="w-px h-8 md:h-12 bg-gradient-to-b from-teal-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;