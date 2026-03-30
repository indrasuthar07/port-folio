import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "nazamshiraz4@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="min-h-screen pt-32 pb-12 px-8 md:px-16 bg-[#0a0a0a] relative overflow-hidden flex flex-col justify-between">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <p className="mono text-teal-400 text-sm mb-6 uppercase tracking-[0.4em]">Get in Touch</p>
              <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-none">
                LET'S<br />CREATE.
              </h2>
              
              <div className="relative inline-block group">
                <button 
                  onClick={copyEmail}
                  className="text-xl md:text-4xl font-bold text-white/60 hover:text-white transition-colors interactive accent-hover flex items-center space-x-4 break-all text-left"
                >
                  <span>{email}</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0"><path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                </button>
                <AnimatePresence>
                  {copied && (
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-12 left-0 mono text-[10px] bg-teal-400 text-black px-3 py-1 rounded"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <div className="space-y-12">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="mono text-[10px] uppercase tracking-widest text-white/30 mb-4">Location</p>
                  <p className="text-white/60">Lucknow,India / Worldwide</p>
                </div>
                <div>
                  <p className="mono text-[10px] uppercase tracking-widest text-white/30 mb-4">Proof of Work</p>
                  <div className="flex flex-col space-y-2">
                    <a href="#works" className="text-white/60 hover:text-teal-400 transition-colors interactive">Case Studies</a>
                    <a href="https://github.com/nzmshrxz" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-teal-400 transition-colors interactive">Open Source</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-neutral-900/30 p-8 md:p-12 border border-white/5 rounded-3xl"
          >
            <form
              className="space-y-12"
              action="https://formspree.io/f/mykwbqbr" // Replace 'your-form-id' with your actual Formspree form ID
              method="POST"
            >
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-teal-400 transition-colors text-white peer"
                  required
                />
                <label className="absolute left-0 top-4 text-white/20 mono text-xs uppercase transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-teal-400 peer-valid:-top-4">
                  Name
                </label>
              </div>
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-teal-400 transition-colors text-white peer"
                  required
                />
                <label className="absolute left-0 top-4 text-white/20 mono text-xs uppercase transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-teal-400 peer-valid:-top-4">
                  Email
                </label>
              </div>
              <div className="relative group">
                <textarea
                  name="message"
                  className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-teal-400 transition-colors text-white peer h-32 resize-none"
                  required
                ></textarea>
                <label className="absolute left-0 top-4 text-white/20 mono text-xs uppercase transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-teal-400 peer-valid:-top-4">
                  Briefly tell me about your project
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-6 bg-white text-black font-bold uppercase tracking-[0.2em] rounded-full interactive hover:bg-teal-400 transition-colors"
              >
                Initialize Connection
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="mt-32 border-t border-white/5 pt-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
          <div className="mono text-[10px] text-white/20 uppercase tracking-widest">© 2024 Nazam shiraz</div>
          
          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 mono text-[10px] text-teal-400 hover:text-white transition-colors interactive accent-hover uppercase tracking-widest"
          >
            <span>Back to top</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </button>

          <div className="flex space-x-12 mono text-[10px] text-white/40">
             <a href="https://github.com/nzmshrxz" target="_blank" className="hover:text-teal-400 interactive transition-colors uppercase">GITHUB</a>
             <a href="https://in.linkedin.com/in/nazam-shiraz-76081425a" target="_blank" className="hover:text-teal-400 interactive transition-colors uppercase">LINKEDIN</a>
             <a href="https://x.com/nazamshiraz_/" target="_blank" className="hover:text-teal-400 interactive transition-colors uppercase">TWITTER</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
