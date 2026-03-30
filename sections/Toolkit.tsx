
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const TiltCard = ({ color, category, name, exp }: { color: string, category: string, name: string, exp: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative p-4 md:p-6 bg-neutral-900/50 border border-white/5 rounded-xl flex flex-col justify-end interactive group overflow-hidden"
    >
      <div 
        className={`absolute -inset-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none ${color}`} 
      />
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <div className="mono text-[8px] md:text-[10px] text-white/30 uppercase tracking-tighter mb-1 md:mb-2 group-hover:text-teal-400 transition-colors">
          {category}
        </div>
        <div className="text-sm md:text-xl font-bold text-white mb-0.5 md:mb-1 leading-tight">{name}</div>
        <div className="mono text-[8px] md:text-[9px] text-white/20 uppercase">{exp} Exp.</div>
      </div>
    </motion.div>
  );
};

const Toolkit: React.FC = () => {
  const tools = [
    { name: 'JavaScript', category: 'Core', exp: '5y', color: 'bg-blue-500' },
    { name: 'React', category: 'Frontend', exp: '4y', color: 'bg-cyan-500' },
    { name: 'Node.js', category: 'Backend', exp: '4y', color: 'bg-green-500' },
    { name: 'MongoDB', category: 'Data', exp: '3y', color: 'bg-indigo-500' },
    { name: 'Next.js', category: 'Frontend', exp: '3y', color: 'bg-white' },
    { name: 'Docker', category: 'DevOps', exp: '2y', color: 'bg-blue-600' },
    { name: 'AWS', category: 'Cloud', exp: '2y', color: 'bg-orange-500' },
    { name: 'Tailwind', category: 'Design', exp: '4y', color: 'bg-teal-500' },
  ];

  return (
    <section id="arsenal" className="min-h-screen py-24 px-8 md:px-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mono text-teal-400 text-xs md:text-sm mb-4 uppercase tracking-widest"
          >
            The Arsenal
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white leading-tight"
          >
            A curated stack<br className="hidden md:block" /> for heavy lifting.
          </motion.h2>
        </div>

        {/* Improved grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[10rem] md:auto-rows-[14rem]">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="col-span-2 md:row-span-2 bg-neutral-900 border border-white/5 p-6 md:p-10 flex flex-col justify-between interactive transition-colors hover:border-teal-400/30 relative overflow-hidden rounded-2xl"
          >
            <div className="relative z-10">
              <div className="mono text-teal-400 text-[10px] md:text-xs mb-3 md:mb-4">01 / PHILOSOPHY</div>
              <div className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">Efficiency is an Art form.</div>
              <p className="text-white/40 leading-relaxed text-sm md:text-lg">
                I believe in tools that scale and code that documents itself. Each brick in this stack is chosen for its architectural integrity.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-teal-400/5 blur-[60px] md:blur-[100px] pointer-events-none" />
          </motion.div>

          {tools.map((tool) => (
            <TiltCard 
              key={tool.name}
              name={tool.name}
              category={tool.category}
              exp={tool.exp}
              color={tool.color}
            />
          ))}

          <motion.div 
            className="col-span-2 bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-400/20 p-6 md:p-8 flex items-center justify-between interactive accent-hover rounded-2xl"
            whileHover={{ scale: 1.02 }}
          >
             <div className="text-lg md:text-2xl font-bold text-white italic">"Engineered to perfection."</div>
             <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-400 flex items-center justify-center group">
                <svg className="group-hover:rotate-45 transition-transform" width="20" height="20" md-width="24" md-height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
