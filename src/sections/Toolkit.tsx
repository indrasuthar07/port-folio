import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiOpenai,
  SiGithub
} from "react-icons/si";

const iconMap: { [key: string]: React.ElementType } = {
  'JavaScript': SiJavascript,
  'React.js': SiReact,
  'Node.js': SiNodedotjs,
  'MongoDB': SiMongodb,
  'Express.js': SiExpress,
  'Tailwind': SiTailwindcss,
  'OpenAI/LLMs': SiOpenai,
  'Git/GitHub': SiGithub,
};

const colorMap: { [key: string]: string } = {
  'JavaScript': 'text-black',
  'React.js': 'text-black',
  'Node.js': 'text-black',
  'MongoDB': 'text-black',
  'Express.js': 'text-black',
  'Tailwind': 'text-black',
  'OpenAI/LLMs': 'text-black',
  'Git/GitHub': 'text-black',
};

const TiltCard = ({
  color,
  category,
  name,
  exp,
  url // Added url prop
}: {
  color: string;
  category: string;
  name: string;
  exp: string;
  url: string; // Added url type
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const IconComponent = iconMap[name] || SiJavascript;
  const iconColor = colorMap[name] || "text-white";

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.a // Changed to motion.a for clickable linking
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative p-4 md:p-6 bg-neutral-900/50 border border-white/5 rounded-xl flex flex-col justify-end interactive group overflow-hidden block"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <IconComponent
          size={160}
          className={`${iconColor} transition-all duration-700 ease-out opacity-0 scale-50 
          group-hover:opacity-20 group-hover:scale-[1.4] group-hover:rotate-6`}
        />
      </div>

      {/* Glow Effect */}
      <div
        className={`absolute -inset-2 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none ${color}`}
      />

      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        <div className="mono text-[8px] md:text-[10px] text-white/30 uppercase tracking-tighter mb-1 md:mb-2 group-hover:text-teal-400 transition-colors">
          {category}
        </div>
        <div className="text-sm md:text-xl font-bold text-white mb-0.5 md:mb-1 leading-tight">
          {name}
        </div>
        <div className="mono text-[8px] md:text-[9px] text-white/20 uppercase">
          {exp} Exp.
        </div>
      </div>
    </motion.a>
  );
};

const Toolkit: React.FC = () => {
  const tools = [
    { name: 'JavaScript', category: 'Core', exp: '2y', color: 'bg-yellow-500', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React.js', category: 'Frontend', exp: '2y', color: 'bg-cyan-500', url: 'https://react.dev/' },
    { name: 'Node.js', category: 'Backend', exp: '2y', color: 'bg-green-500', url: 'https://nodejs.org/' },
    { name: 'MongoDB', category: 'Database', exp: '1y', color: 'bg-indigo-500', url: 'https://www.mongodb.com/' },
    { name: 'Express.js', category: 'Backend', exp: '2y', color: 'bg-gray-500', url: 'https://expressjs.com/' },
    { name: 'Tailwind', category: 'Design', exp: '2y', color: 'bg-teal-500', url: 'https://tailwindcss.com/' },
    { name: 'OpenAI/LLMs', category: 'AI', exp: '1y', color: 'bg-purple-500', url: 'https://openai.com/' },
    { name: 'Git/GitHub', category: 'Tools', exp: '2y', color: 'bg-slate-500', url: 'https://github.com/' },
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
            Tech Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white leading-tight"
          >
            Technologies &<br className="hidden md:block" /> Skills Mastery.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[10rem] md:auto-rows-[14rem]">
          
          {/* Hero Card */}
          <motion.div
            whileHover={{ scale: 0.98 }}
            className="col-span-2 md:row-span-2 bg-neutral-900 border border-white/5 p-6 md:p-10 flex flex-col justify-between interactive transition-colors hover:border-teal-400/30 relative overflow-hidden rounded-2xl"
          >
            <div className="relative z-10">
              <div className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                Building Tomorrow's Solutions.
              </div>
              <p className="text-white/40 leading-relaxed text-sm md:text-lg">
                Full-stack expertise spanning frontend, backend, databases, and AI/ML. Proficient in modern frameworks and emerging technologies.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-teal-400/5 blur-[100px] pointer-events-none" />
          </motion.div>

          {/* Skill Cards */}
          {tools.map((tool) => (
            <TiltCard
              key={tool.name}
              name={tool.name}
              category={tool.category}
              exp={tool.exp}
              color={tool.color}
              url={tool.url} 
            />
          ))}

          {/* Quote Card */}
          <motion.div
            className="col-span-2 bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-400/20 p-6 md:p-8 flex items-center justify-between interactive accent-hover rounded-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-lg md:text-2xl font-bold text-white italic">
              "Solving problems through elegant code."
            </div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-400 flex items-center justify-center group">
              <svg
                className="group-hover:rotate-45 transition-transform"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;