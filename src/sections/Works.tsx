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
      longDescription: 'A secure full-stack payment platform enabling QR-based and account-to-account transfers, processing 100+ transactions per day. Features dynamic QR code generation, real-time transaction dashboards, and scalable RESTful APIs handling concurrent requests from 20+ active users.',
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
      longDescription: 'A FHIR R4–compliant terminology micro-service bridging India\'s NAMASTE codes and WHO ICD-11 (TM2 + Biomedicine) for Ayush EMR systems. Features auto-complete diagnosis lookup, NAMASTE↔TM2 translation, dual-coding FHIR Bundle upload, and OAuth 2.0 via ABHA tokens — built to India\'s 2016 EHR Standards.',
      tech: ['SIH-25', 'Node.js', 'ICD-11 API', 'OAuth 2.0'],
      image: medname,
      link: 'https://github.com/indrasuthar07/MedNama-SIH25',
      github: 'https://github.com/indrasuthar07/MedNama-SIH25',
    },
    {
      title: 'QUIZ GEN',
      year: '2025',
      longDescription: 'A Generative AI–powered quiz system that ingests user-uploaded PDFs (100+ pages) and auto-generates 50+ MCQs with real-time evaluation. Built with LangChain and OpenAI APIs delivering ~80% context-aware answer relevance, with session-based state management and accuracy metrics.',
      tech: ['Python', 'OpenAI', 'LangChain', 'Streamlit'],
      image: quiz,
      link: 'https://github.com/indrasuthar07/MCQ_GEN-GenAI-',
      github: 'https://github.com/indrasuthar07/MCQ_GEN-GenAI-',
    },
    {
      title: 'NexTask',
      year: '2026',
      longDescription: 'A high-performance project management UI with fully synchronized Kanban, List, and Timeline views. Features custom pointer-event drag-and-drop (no library), virtual scrolling for 500+ tasks, URL-synced filters with browser history support, and simulated live collaboration presence — all state managed via Zustand.',
      tech: ['React 19', 'TypeScript', 'Tailwind CSS'],
      image: nextask,
      link: 'https://multiview-project-tracker-alpha.vercel.app/',
      github: 'https://github.com/indrasuthar07/NexTask',
    },
    {
      title: 'Lockr',
      year: '2024',
      longDescription: 'A full-stack MERN password manager with encrypted credential storage, JWT-based authentication, and a clean responsive UI. Supports secure register/login flows, one-click clipboard copy, and seamless frontend-backend communication via RESTful APIs — built for speed with Vite.',
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
        <p className="mono text-teal-400 text-sm mb-4 uppercase tracking-widest">
          Work
        </p>
        <h2 className="text-4xl md:text-7xl font-bold text-white">
          Featured Projects.
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
                {/* Back to original container layout, relying purely on the image scaling to zoom */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 mb-6 bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    // ADDED: scale-125 zooms the image in by default. group-hover:scale-[1.5] boosts it further on hover.
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

                      <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100">
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">
                          {project.longDescription}
                        </p>
                        <div className="flex gap-6">
                          <a href={project.link} target="_blank" rel="noreferrer" className="mono text-[10px] uppercase tracking-[0.2em] text-white hover:text-teal-400 transition-colors flex items-center gap-2">
                            View Project <span className="text-xs">↗</span>
                          </a>
                          <a href={project.github} target="_blank" rel="noreferrer" className="mono text-[10px] uppercase tracking-[0.2em] text-white hover:text-teal-400 transition-colors flex items-center gap-2">
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