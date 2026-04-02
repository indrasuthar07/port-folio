import React, { useRef, useState, useMemo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Contact: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const customEase = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: customEase },
    },
  };
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 20, mass: 0.2 };
  const x = useSpring(mX, springConfig);
  const y = useSpring(mY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const distanceX = e.clientX - (rect.left + rect.width / 2);
      const distanceY = e.clientY - (rect.top + rect.height / 2);
      mX.set(distanceX * 0.35); 
      mY.set(distanceY * 0.35);
    }
  };

  const handleMouseLeave = () => {
    mX.set(0);
    mY.set(0);
  };

  const particles = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      x: Math.random() * 800 - 400, 
      y: Math.random() * 800 - 400, 
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      size: Math.random() * 3 + 1,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
  }, []);

  const tags = [
    "UX/UI DESIGN", "FRONTEND", "BACKEND", "Generative AI",
    "REAL TIME COLLABORATION",
    "STARTUPS", "Open Source", "Tech Talks", "music", "Coke",
  ];

  return (
    <footer id="contact" className="min-h-screen pt-32 pb-12 px-8 md:px-16 bg-[#0a0a0a] relative overflow-hidden flex flex-col justify-between z-0">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-1 relative flex-grow"
      >
        {/* LEFT COLUMN: Headline text block */}
        <div className="col-span-1 self-start pt-12 lg:pr-12">
          <motion.p variants={itemVariants} className="mono text-teal-400 text-sm mb-8 uppercase tracking-[0.4em] flex items-center gap-4">
            <span className="w-8 h-px bg-teal-400"></span>
            Get in Touch
          </motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-stone-100 text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] whitespace-nowrap tracking-tighter"
          >
            LET&apos;S
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white/80">
              CONNECT.
            </span>
          </motion.h1>
        </div>

        {/* RIGHT COLUMN: Clustered details */}
        <div className="col-span-1 flex flex-col lg:items-end text-left lg:text-right relative mt-12 lg:mt-0">
          
          {/* Tag Cluster */}
          <motion.div variants={itemVariants} className="relative pt-12 max-w-xl flex flex-col lg:items-end">
            <p className="text-white/50 text-xs mb-8 font-normal uppercase tracking-[0.3em]">
              I&apos;m Always Interested About
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: "rgba(45, 212, 191, 0.5)",
                    color: "#2dd4bf"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white/80 rounded-full px-6 py-3 mono text-[10px] sm:text-xs uppercase tracking-widest leading-none cursor-pointer transition-colors duration-300 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Call to Action Container */}
          <motion.div variants={itemVariants} className="mt-28 max-w-xl lg:text-end w-full flex flex-col lg:items-end">
            <p className="text-white/50 text-xs mb-8 font-normal uppercase tracking-[0.3em] mr-8">
              Have a Project in Mind?
            </p>
            
            {/* Simpler, sleeker button with massive particle spread */}
            <motion.a
              ref={buttonRef}
              href="mailto:indrasuthar14@gmail.com"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x, y }}
              className="group relative inline-flex items-center justify-center px-16 py-6 overflow-visible rounded-full border border-white/10 text-white/80 bg-transparent transition-all duration-700 ease-out hover:border-teal-400 hover:text-white"
            >
              {/* Particle Field - Now covers a much wider area smoothly */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    className="absolute bg-teal-400 rounded-full blur-[0.5px]"
                    style={{ 
                      left: p.left, 
                      top: p.top, 
                      width: p.size, 
                      height: p.size 
                    }}
                    animate={{
                      x: [0, p.x, 0],
                      y: [0, p.y, 0],
                      scale: [0, 1.2, 0],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: p.duration,
                      repeat: Infinity,
                      delay: p.delay,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Button Text */}
              <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-lg flex items-center gap-3">
                Contact Me
                <svg 
                  className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

    {/* Footer Bottom Row */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 w-full border-t border-white/5 pt-12 pb-8 relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          
          {/* Copyright - Left on Desktop, First on Mobile */}
          <div className="order-2 md:order-1 mono text-[10px] text-white/30 uppercase tracking-[0.2em] w-full md:w-1/3 text-center md:text-left">
            © 2026 Indra Suthar
          </div>

          {/* Back to Top - Center on Desktop, Last on Mobile */}
          <div className="order-3 md:order-2 w-full md:w-1/3 flex justify-center">
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-3 mono text-[9px] text-teal-400/60 hover:text-teal-400 transition-all duration-500 uppercase tracking-[0.3em]"
            >
              <div className="w-10 h-10 rounded-full border border-teal-400/20 flex items-center justify-center group-hover:border-teal-400 group-hover:-translate-y-2 transition-all duration-500 ease-[0.22,1,0.36,1]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">Back to top</span>
            </button>
          </div>

          {/* Social Links - Right on Desktop, Second on Mobile */}
          <div className="order-1 md:order-3 flex justify-center md:justify-end space-x-6 md:space-x-10 w-full md:w-1/3">
            {['Github', 'Linkedin', 'Twitter'].map((social) => (
              <a 
                key={social}
                href={`https://${social.toLowerCase()}.com`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative group text-[10px] mono text-white/40 hover:text-white transition-colors duration-300 uppercase tracking-widest"
              >
                <span className="relative z-10">{social}</span>
                {/* Magnetic Dot Underline Effect */}
                <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Contact;