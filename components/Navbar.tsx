import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Story', 'Arsenal', 'Works', 'Contact'];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuVariants: Variants = {
    closed: {
      clipPath: "circle(0% at 100% 0%)",
      transition: { type: "spring", stiffness: 400, damping: 40 }
    },
    open: {
      clipPath: "circle(150% at 100% 0%)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 }
    }
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5 }
    })
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-8 py-6 md:px-16 mix-blend-difference"
      >
        <div className="text-2xl font-black tracking-tighter">
          <button
            onClick={scrollToTop}
            className="interactive accent-hover text-white"
          >
            NS.
          </button>
        </div>
        
        {/* Desktop Nav - Hidden on Mobile */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item.toLowerCase())}
              className="mono text-xs uppercase tracking-widest text-white/50 hover:text-teal-400 transition-colors interactive"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Hamburger Icon - Visible ONLY on Mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[101] w-10 h-10 flex flex-col justify-center items-center group interactive"
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white mb-1.5"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white mb-1.5"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white"
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[99] bg-[#0a0a0a] flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col space-y-8 items-center">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => {
                    handleScroll(item.toLowerCase());
                    setIsOpen(false);
                  }}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl font-bold text-white hover:text-teal-400 transition-colors tracking-tighter interactive"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
