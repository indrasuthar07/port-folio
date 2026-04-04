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
    "UX/UI   DESIGN", "FRONT - END", "BACK - END", "Generative AI",
    "REAL   TIME   COLLABORATION",
    "STARTUPS", "Open Source", "Tech  Talks", "music",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/indar-suthar",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/indrasuthar07",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/indrasuthar07",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-3.765-1.465c-1.282 0-2.622.485-3.603 1.484l-4.326 4.38a5.27 5.27 0 0 0-1.455 3.753c0 1.464.526 2.804 1.455 3.765l4.332 4.363c.961.961 2.302 1.485 3.765 1.485s2.804-.524 3.765-1.485l2.697-2.607c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.9-.039zM20.811 13.01H10.666a.702.702 0 0 0-.702.703c0 .388.314.702.702.702h10.145c.388 0 .702-.314.702-.702a.702.702 0 0 0-.702-.703z" />
        </svg>
      )
    },
    {
      name: "Gmail",
      href: "mailto:indrasuthar14@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com/indar.exe",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "https://twitter.com/INDAR_X07",
      icon: (
       <svg
  viewBox="0 0 24 24"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
  className="w-7 h-7"
>
  <path d="M18.244 2H21.5l-7.65 8.74L23 22h-7.406l-5.8-7.59L3.5 22H.244l8.2-9.37L1 2h7.594l5.2 6.87L18.244 2zm-2.6 18h2.06L7.35 4H5.16l10.484 16z"/>
</svg>
      )
    }
  ];

  return (
    <footer id="contact" className="min-h-screen pt-12 pb-12 px-8 md:px-16 bg-[#0a0a0a] relative overflow-hidden flex flex-col justify-between z-0">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-1 relative flex-grow"
      >
        <div className="col-span-1 self-start pt-12 lg:pr-12">
          <motion.p variants={itemVariants} className="font-normal text-teal-400 text-xs md:text-sm mb-8 uppercase tracking-[0.4em] flex items-center gap-4">
            <span className="w-8 h-px bg-teal-400"></span>
            Get in Touch
          </motion.p>
          <motion.h1 
            variants={itemVariants}
            className="text-stone-100 text-[4rem] md:text-8xl lg:text-[10rem] font-bold leading-[0.9] whitespace-nowrap tracking-tighter"
          >
            LET&apos;S
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white/80">
              CONNECT.
            </span>
          </motion.h1>

          {/*SOCIAL ICONS */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 ml-2 mt-[16px] items-center md:gap-20 md:ml-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/40 hover:text-teal-400 transition-colors duration-300"
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="col-span-1 flex flex-col lg:items-end text-left lg:text-right relative mt-12 lg:mt-0">
          {/* Tag Cluster */}
          <motion.div variants={itemVariants} className="relative pt-12 max-w-xl flex flex-col lg:items-end">
            <p className="text-white/50 text-xs mb-8 font-normal uppercase tracking-[0.3em]">
              I&apos;m Always Interested About
            </p>
            <div className="flex flex-wrap gap-2.5 md:gap-3 lg:justify-end">
              {tags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: "rgba(45, 212, 191, 0.5)",
                    color: "#2dd4bf"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white/80 rounded-full px-4 py-2 md:px-6 md:py-3 font-normal text-[10px] sm:text-xs uppercase leading-none cursor-pointer transition-colors duration-300 backdrop-blur-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-28 max-w-xl lg:text-end w-full flex flex-col lg:items-end">
            <p className="text-white/50 text-xs mb-8 font-normal uppercase tracking-[0.3em] mr-8 ml-8">
              Have a Project in Mind?
            </p>
            
            <motion.a
              ref={buttonRef}
              href="mailto:indrasuthar14@gmail.com"
              rel="noreferrer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x, y }}
              className="group relative inline-flex items-center justify-center py-4 md:py-6 px-14 overflow-visible rounded-full border border-white/10 text-white/80 bg-transparent transition-all duration-700 ease-out hover:border-teal-400 hover:text-white"
            >
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

              {/* Button */}
              <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-lg flex items-center gap-3 font-normal">
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

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 border-t border-white/5 pt-1 pb-1 relative z-10 flex justify-center"
      >
            <button 
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-3 mono text-[9px] text-teal-400/60 hover:text-teal-400 transition-all duration-500 uppercase tracking-[0.3em]"
            >
              <div className="w-10 h-10 rounded-full border border-teal-400/20 flex items-center justify-center group-hover:border-teal-400 group-hover:-translate-y-2 transition-all duration-500 ease-[0.22,1,0.36,1]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-normal">Back to top</span>
            </button>
      </motion.div>
    </footer>
  );
};

export default Contact;