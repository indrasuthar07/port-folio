import React, { useState,useRef } from 'react';
import { motion } from 'framer-motion';
import foodie from '../src/assets/foodiemock.png';
import bulletin from '../src/assets/bulletinmock.png';
import forever from '../src/assets/forevermock.png';
import nsstudio from '../src/assets/nsstudio.png';

const Works: React.FC = () => {
  const projects = [
    {
      title: 'FOODIE',
      year: '2024',
      image: foodie,
      link: 'https://foodiepiee.netlify.app/',
    },
    {
      title: 'BULLETIN(NEWS)',
      year: '2023',
      image: bulletin,
      link: 'https://bulletin-news-4s4o.vercel.app/',
    },
    {
      title: 'FOREVER',
      year: '2023',
      image: forever,
      link: 'https://foreverbynazam.netlify.app/',
    },
    {
      title: 'NS STUDIO',
      year: '2025',
      image: nsstudio,
      link: 'https://nsstudio.space/',
    },
  ];

  const displayProjects = [...projects, ...projects, ...projects, ...projects];

  // ✅ NEW STATE
  const [xPosition, setXPosition] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const SLIDE_AMOUNT = typeof window !== 'undefined' && window.innerWidth >= 768 ? 480 : 280;

  // ✅ arrow movement amount
const slideLeft = () => {
  setAutoScroll(false);

  setXPosition(prev => {
    const trackWidth = trackRef.current?.scrollWidth || 0;
    const halfWidth = trackWidth / 2;

    let next = prev + SLIDE_AMOUNT;

    // seamless forward wrap
    if (next >= 0) {
      next = -halfWidth + SLIDE_AMOUNT;
    }

    return next;
  });
};

const slideRight = () => {
  setAutoScroll(false);

  setXPosition(prev => {
    const trackWidth = trackRef.current?.scrollWidth || 0;
    const halfWidth = trackWidth / 2;

    let next = prev - SLIDE_AMOUNT;

    // seamless backward wrap
    if (Math.abs(next) >= halfWidth) {
      next = -SLIDE_AMOUNT;
    }

    return next;
  });
};


  return (
    <section id="works" className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="px-8 md:px-16 mb-16 max-w-7xl mx-auto">
        <p className="mono text-teal-400 text-sm mb-4 uppercase tracking-widest">
          Selected Works
        </p>
        <h2 className="text-4xl md:text-7xl font-bold text-white">
          Infinite Proof.
        </h2>
      </div>

      {/* ✅ ARROWS */}
      <div className="relative">
        <button
          onClick={slideLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-3 rounded-full text-white"
        >
          ←
        </button>

        <button
          onClick={slideRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur px-4 py-3 rounded-full text-white"
        >
          →
        </button>

        <div className="relative flex overflow-hidden">
          <motion.div
          ref={trackRef}
            className="flex space-x-6 md:space-x-8 px-4"
            animate={
              autoScroll
                ? { x: ['0%', '-50%'] }
                : { x: xPosition }
            }
            transition={
              autoScroll
                ? {
                    x: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 35,
                      ease: 'linear',
                    },
                  }
                : {
                    type: 'spring',
                    stiffness: 60,
                    damping: 20,
                  }
            }
            whileHover={{ animationPlayState: 'paused' }}
          >
            {displayProjects.map((project, idx) => (
              <motion.div
                key={`${project.title}-${idx}`}
                className="flex-shrink-0 w-[260px] md:w-[450px] group interactive accent-hover"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 mb-6 bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="mono text-xs uppercase tracking-widest text-white border border-white/20 px-6 py-2 rounded-full backdrop-blur-sm">
                        Visit
                      </span>
                    </div>
                  </div>
                </a>

                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-teal-400 transition-colors uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mono text-[9px] md:text-[10px] text-white/30 uppercase tracking-widest">
                      Engineering / 0{(idx % projects.length) + 1}
                    </p>
                  </div>
                  <div className="mono text-[10px] md:text-xs text-white/20">
                    {project.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-20 px-8 md:px-16 text-center">
        <div className="h-px w-full bg-white/5 max-w-7xl mx-auto" />
      </div>
    </section>
  );
};

export default Works;