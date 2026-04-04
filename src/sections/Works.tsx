import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import medname from '../assets/mednama.png';
import paywallet from '../assets/paywallet.png';
import nextask from '../assets/nextask.png';
import talksy from '../assets/talksy.png';
import quiz from '../assets/quiz.png';
import lockr from '../assets/lockr.png';

const Works: React.FC = () => {
  const projects = [
    {
      title: 'PAYWALLET',
      year: '2025',
      longDescription: 'I wanted to understand how real payment systems work under the hood — so I built one. PayWallet handles QR-based and account-to-account transfers, generates dynamic payment codes on the fly, and gives every user a live dashboard to track where their money went.',
      tech: ['React', 'Node.js', 'MongoDB', 'Bcrypt'],
      image: paywallet,
      link: 'https://paywalletlive.vercel.app/',
      github: 'https://github.com/indrasuthar07/PAYMENT-SYSTEM',
    },
    {
      title: 'TALKSY',
      year: '2025',
      longDescription: 'A full-stack real-time communication platform supporting group video calls for 10+ concurrent users, screen sharing, and live messaging. Secured with JWT-based authentication protecting 100% of private routes, and built on scalable streaming APIs with a fully responsive, customizable UI.',
      tech: ['React', 'Express.js', 'MongoDB', 'Stream API'],
      image: talksy,
      link: 'https://talksy-chat-app-r5tg.onrender.com/',
      github: 'https://github.com/indrasuthar07/talksy-chat-app',
    },
    {
      title: 'MEDNAMA',
      year: '2025',
      longDescription: 'Built for Smart India Hackathon. A FHIR-compliant bridge mapping India\'s NAMASTE codes to WHO ICD-11 — so Ayush and allopathic systems can finally talk to each other. The most meaningful thing I\'ve shipped so far.',
      tech: ['SIH-25', 'Node.js', 'ICD-11 API', 'OAuth 2.0'],
      image: medname,
      link: 'https://github.com/indrasuthar07/MedNama-SIH25',
      github: 'https://github.com/indrasuthar07/MedNama-SIH25',
    },
    {
      title: 'LLMQuiz Engine',
      year: '2025',
      longDescription: 'Drop in a PDF — any PDF, up to 100+ pages — and this system reads it, understands it, and fires back 50+ MCQs with real-time evaluation. Powered by OpenAI and LangChain. It\'s actually checking if your answers make sense contextually. Hit ~80% relevance accuracy.',
      tech: ['Python', 'OpenAI', 'LangChain', 'Streamlit'],
      image: quiz,
      link: 'https://github.com/indrasuthar07/MCQ_GEN-GenAI-',
      github: 'https://github.com/indrasuthar07/MCQ_GEN-GenAI-',
    },
    {
      title: 'NexTask',
      year: '2026',
      longDescription: 'Most project tools are either too much or not enough. NexTask is just right — Kanban, List, and Timeline in perfect sync, drag-and-drop built from scratch, 500+ tasks with zero lag, and a UI so intuitive you\'ll actually use it. Built with React 19, TypeScript, and Tailwind CSS.',
      tech: ['React 19', 'TypeScript', 'Tailwind CSS'],
      image: nextask,
      link: 'https://multiview-project-tracker-alpha.vercel.app/',
      github: 'https://github.com/indrasuthar07/NexTask',
    },
    {
      title: 'Lockr',
      year: '2024',
      longDescription: 'Passwords in a notes app. We\'ve all done it. Lockr is the proper fix — encrypted storage, JWT auth, one-click copy, and a UI clean enough that you\'ll actually use it. Built with React and Node.js, it securely hashes passwords with bcrypt and stores them in MongoDB.',
      tech: ['React', 'Node.js', 'MongoDB', 'bcrypt'],
      image: lockr,
      link: 'https://pass-manager-lite.vercel.app/',
      github: 'https://github.com/indrasutahr07/PASS-MANAGER',
    },
  ];

  const displayProjects = [...projects, ...projects, ...projects, ...projects];

  const [xPosition, setXPosition] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  const SLIDE_AMOUNT = typeof window !== 'undefined' && window.innerWidth >= 768 ? 480 : 300;

  const slideLeft = () => {
    setAutoScroll(false);
    setXPosition(prev => {
      const trackWidth = trackRef.current?.scrollWidth || 0;
      const halfWidth = trackWidth / 2;
      let next = prev + SLIDE_AMOUNT;
      if (next >= 0) next = -halfWidth + SLIDE_AMOUNT;
      return next;
    });
  };

  const slideRight = () => {
    setAutoScroll(false);

    setXPosition(prev => {
      const trackWidth = trackRef.current?.scrollWidth || 0;
      const halfWidth = trackWidth / 2;

      let next = prev - SLIDE_AMOUNT;

      if (Math.abs(next) >= halfWidth) {
        next = -SLIDE_AMOUNT;
      }

      return next;
    });
  };

  return (
    <section id="works" className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="px-8 md:px-16 mb-16 max-w-7xl mx-auto">
        <motion.p className="font-normal text-teal-400 text-xs md:text-sm mb-8 uppercase tracking-[0.4em] flex items-center gap-4">
          <span className="w-8 h-px bg-teal-400"></span>
          Work
        </motion.p>
        <h2 className="text-4xl md:text-7xl font-bold text-white">
          Things I've built.
        </h2>
      </div>

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
                className="flex-shrink-0 w-[260px] md:w-[500px] group interactive accent-hover"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 mb-6 bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full scale-120 transition-transform duration-700 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="mono text-[10px] px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 text-white/70 rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="mono text-xs text-white/40">{project.year}</span>
                    </div>

                    <div className="mt-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        {project.title}
                      </h3>

                      <div className="max-h-0 group-hover:max-h-40 text-normal overflow-hidden transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                          {project.longDescription}
                        </p>
                        <div className="flex gap-6">
                          <a href={project.link} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] text-white hover:text-teal-400 transition-colors flex items-center gap-2">
                            View Project <span className="text-xs">↗</span>
                          </a>
                          <a href={project.github} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.2em] text-white hover:text-teal-400 transition-colors flex items-center gap-2">
                            Source Code <span className="text-xs">↗</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 border border-teal-500/0 group-hover:border-teal-500/30 transition-colors duration-500 rounded-3xl pointer-events-none" />
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