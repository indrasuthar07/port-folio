import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';

const About: React.FC = () => {
  const [isSpotifymode, setisSpotifymode] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="story" className="relative min-h-screen py-24 px-8 md:px-16 transition-colors duration-1000 overflow-hidden flex items-center"
      style={{ backgroundColor: isSpotifymode ? '#fafaf9' : '#0a0a0a' }}>

      <AnimatePresence>
        {isSpotifymode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-100 grayscale"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <motion.h2
            className={`text-5xl md:text-7xl font-bold mb-8 leading-[1.1] ${isSpotifymode ? 'text-stone-900' : 'text-white'}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Code &<br />Creativity
          </motion.h2>

          <div className={`space-y-6 text-base md:text-lg leading-relaxed ${isSpotifymode ? 'text-black' : 'text-white/60'}`}>
            <p>
              Software engineer specializing in full-stack development and Generative AI. I build scalable applications, from real-time communication platforms to LLM-driven evaluation systems.
            </p>
            <p>
              Currently studying Computer Science at IIIT Bhagalpur, I combine a strong foundation in algorithmic logic—recognized as a LeetCode Knight and 3-Star CodeChef programmer—with production-ready technologies like React, Node.js, and LangChain.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-4">
              <span className={`mono text-[10px] uppercase tracking-widest ${isSpotifymode ? 'text-stone-400' : 'text-white/40'}`}>Digital Footprint</span>
              <button
                onClick={() => setisSpotifymode(!isSpotifymode)}
                className={`w-14 h-7 rounded-full relative transition-colors duration-300 interactive accent-hover ${isSpotifymode ? 'bg-orange-500' : 'bg-white/10'}`}
              >
                <motion.div
                  className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-lg"
                  animate={{ x: isSpotifymode ? 28 : 0 }}
                />
              </button>
              <span className={`mono text-[10px] uppercase tracking-widest ${isSpotifymode ? 'text-orange-600 font-bold' : 'text-white/40'}`}>Sonic Influence</span>
            </div>

            {isSpotifymode && (
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
          <div className={`absolute inset-0 border-[0.5px] rotate-3 transition-colors ${isSpotifymode ? 'border-white/20' : 'border-white/10'}`} />
          <div className={`absolute inset-0 border-[0.5px] -rotate-6 transition-colors ${isSpotifymode ? 'border-stone-900/10' : 'border-teal-400/20'}`} />

          <div className="relative w-full h-full overflow-hidden bg-[] transition-all duration-700 rounded-3xl">
            <AnimatePresence mode="wait">
              {!isSpotifymode ? (
                <motion.div
                  key="github-stats"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full h-full p-6 md:p-8 flex flex-col justify-between bg-black/50 rounded-3xl border border-white/5 shadow-2xl overflow-hidden"
                >
                  {/* Avatar */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://avatars.githubusercontent.com/u/182353910?v=4"
                        alt="Indra Suthar"
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-teal-400/30"
                      />
                      <div className="flex flex-col text-left">
                        <h3 className="text-white text-lg md:text-xl font-bold tracking-tight">IndraSuthar07</h3>
                        <h3 className="text-gray-400 text-sm md:text-sm font-bold tracking-tight">@indrasuthar07</h3>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-white font-black leading-[0.95] tracking-tighter mb-1"
                      style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
                      Logic in
                    </h3>
                    <h3 className="font-black leading-[0.95] tracking-tighter text-teal-400"
                      style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
                      every pixel.
                    </h3>
                  </div>

                  {/* Heatmap */}
                  <div className="flex-1 flex items-center justify-center github-calendar-container py-4">
                    <GitHubCalendar
                      username="indrasuthar07"
                      blockSize={11}
                      blockMargin={4}
                      fontSize={12}
                      theme={{
                        light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                        dark: ['#161b22', '#004d40', '#00796b', '#00bfa5', '#2dd4bf'],
                      }}
                      style={{ color: '#ffffff' }}
                      hideColorLegend
                      hideTotalCount
                    />
                  </div>

                  {/* Footer Stats */}
                  <div className="pt-6 border-t border-white/5 flex justify-between items-center font-mono text-[12px] text-white/60 uppercase tracking-widest">
                    <span>LATEST_PUSH: {new Date().toLocaleDateString()}</span>
                    <span>Open Source Contributor</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="spotify"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full h-full rounded-3xl overflow-hidden relative flex flex-col"
                  style={{ background: '#060d08' }}
                >
                  <div className="absolute inset-0 z-0" style={{ background: '#060d08' }} />
                  {/* ── Top bar ── */}
                  <div className="relative z-10 flex items-center justify-between px-6 pt-6 pb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#1db954] flex items-center justify-center shadow-lg shadow-[#1db954]/30">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#060d08">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                      </div>
                      <span className="font-mono text-[10px] text-white/50 uppercase tracking-[0.3em]">Spotify</span>
                    </div>
                  </div>

                  {/* ── Headline ── */}
                  <div className="relative z-10 px-6 pb-5">

                    <h3 className="text-white font-black leading-[0.95] tracking-tighter mb-1"
                      style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
                      Music shapes
                    </h3>
                    <h3 className="font-black leading-[0.95] tracking-tighter text-[#1db954]"
                      style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}>
                      how I think.
                    </h3>
                    <div className="flex items-end gap-[2.5px] shrink-0 right-0" style={{ height: '28px' }}>
                      {[0.5, 0.8, 0.4, 1, 0.6, 0.9, 0.3, 0.7, 0.5, 0.85, 0.4, 0.7].map((h, i) => (
                        <motion.div
                          key={i}
                          className="w-[2.5px] rounded-full bg-[#1db954]"
                          animate={{ scaleY: [h, h * 0.25, h * 1.15, h * 0.5, h] }}
                          transition={{ duration: 1 + i * 0.11, repeat: Infinity, ease: 'easeInOut', delay: i * 0.08 }}
                          style={{ height: '100%', originY: 1, opacity: 0.35 + h * 0.65 }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* ── Iframe ── */}
                  <div className="relative z-10 flex-1 px-5 pb-5 min-h-0">
                    <div className="w-full h-full rounded-2xl overflow-hidden ring-1 ring-white/5 shadow-2xl shadow-black/80">
                      <iframe
                        style={{ borderRadius: '16px', display: 'block' }}
                        src="https://open.spotify.com/embed/playlist/37i9dQZF1E4ANtHWm6KA1P?utm_source=generator&theme=0"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Spotify Playlist Embed"
                        className="w-full h-full"
                      />
                    </div>
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