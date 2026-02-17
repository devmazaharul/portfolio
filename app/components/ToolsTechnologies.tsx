'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAws } from 'react-icons/fa';
import { SiCloudinary, SiSwagger, SiNginx, SiGit, SiGithub, SiPostman, SiDocker } from 'react-icons/si';
import { ImNpm } from 'react-icons/im';
import {
  Sparkles,
  ArrowUpRight,
  ExternalLink,
  Wrench,
  CheckCircle2,
  Zap,
  TrendingUp,
  Star,
} from 'lucide-react';
import Commoncard from './Commoncard';

// ─── Data Configuration ───
const toolCategories = [
  { label: 'All', value: 'all', icon: <Wrench className="w-3.5 h-3.5" /> },
  { label: 'DevOps', value: 'devops', icon: <Zap className="w-3.5 h-3.5" /> },
  { label: 'Version Control', value: 'vcs', icon: <SiGit className="w-3.5 h-3.5" /> },
  { label: 'Testing', value: 'testing', icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
];

const tools = [
  {
    name: 'AWS',
    icon: <FaAws className="w-8 h-8" />,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    hoverBorder: 'hover:border-amber-200',
    shadow: 'hover:shadow-amber-100/60',
    gradient: 'from-amber-500 to-orange-600',
    lightGradient: 'from-amber-50/80 to-orange-50/40',
    description: 'Cloud Infrastructure',
    category: 'devops',
    proficiency: 75,
    tag: 'Cloud',
  },
  {
    name: 'Git',
    icon: <SiGit className="w-8 h-8" />,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    hoverBorder: 'hover:border-orange-200',
    shadow: 'hover:shadow-orange-100/60',
    gradient: 'from-orange-500 to-red-600',
    lightGradient: 'from-orange-50/80 to-red-50/40',
    description: 'Version Control',
    category: 'vcs',
    proficiency: 95,
    tag: 'Essential',
  },
  {
    name: 'GitHub',
    icon: <SiGithub className="w-8 h-8" />,
    color: 'text-gray-800 dark:text-gray-200',
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    hoverBorder: 'hover:border-gray-300',
    shadow: 'hover:shadow-gray-200/60',
    gradient: 'from-gray-700 to-gray-900',
    lightGradient: 'from-gray-50/80 to-slate-50/40',
    description: 'Code Hosting & CI/CD',
    category: 'vcs',
    proficiency: 92,
    tag: 'Daily Use',
  },
  {
    name: 'Postman',
    icon: <SiPostman className="w-8 h-8" />,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    hoverBorder: 'hover:border-orange-200',
    shadow: 'hover:shadow-orange-100/60',
    gradient: 'from-orange-500 to-amber-600',
    lightGradient: 'from-orange-50/80 to-amber-50/40',
    description: 'API Testing',
    category: 'testing',
    proficiency: 90,
    tag: 'API Tool',
  },
  {
    name: 'Docker',
    icon: <SiDocker className="w-8 h-8" />,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    hoverBorder: 'hover:border-blue-200',
    shadow: 'hover:shadow-blue-100/60',
    gradient: 'from-blue-500 to-cyan-600',
    lightGradient: 'from-blue-50/80 to-cyan-50/40',
    description: 'Containerization',
    category: 'devops',
    proficiency: 80,
    tag: 'DevOps',
  },
  {
    name: 'Cloudinary',
    icon: <SiCloudinary className="w-8 h-8" />,
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    hoverBorder: 'hover:border-indigo-200',
    shadow: 'hover:shadow-indigo-100/60',
    gradient: 'from-indigo-500 to-blue-600',
    lightGradient: 'from-indigo-50/80 to-blue-50/40',
    description: 'Media Management',
    category: 'devops',
    proficiency: 85,
    tag: 'Media',
  },
  {
    name: 'Nginx',
    icon: <SiNginx className="w-8 h-8" />,
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50',
    border: 'border-green-100',
    hoverBorder: 'hover:border-green-200',
    shadow: 'hover:shadow-green-100/60',
    gradient: 'from-green-500 to-emerald-600',
    lightGradient: 'from-green-50/80 to-emerald-50/40',
    description: 'Web Server & Proxy',
    category: 'devops',
    proficiency: 70,
    tag: 'Server',
  },
  {
    name: 'NPM',
    icon: <ImNpm className="w-8 h-8" />,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50',
    border: 'border-red-100',
    hoverBorder: 'hover:border-red-200',
    shadow: 'hover:shadow-red-100/60',
    gradient: 'from-red-500 to-rose-600',
    lightGradient: 'from-red-50/80 to-rose-50/40',
    description: 'Package Manager',
    category: 'devops',
    proficiency: 95,
    tag: 'Essential',
  },
  {
    name: 'Swagger',
    icon: <SiSwagger className="w-8 h-8" />,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    hoverBorder: 'hover:border-emerald-200',
    shadow: 'hover:shadow-emerald-100/60',
    gradient: 'from-emerald-500 to-green-600',
    lightGradient: 'from-emerald-50/80 to-green-50/40',
    description: 'API Documentation',
    category: 'testing',
    proficiency: 88,
    tag: 'API Docs',
  },
];

// ─── Floating Particle ───
const FloatingParticle = ({
  delay,
  x,
  y,
  size,
  color,
}: {
  delay: number;
  x: string;
  y: string;
  size: number;
  color: string;
}) => (
  <motion.div
    className={`absolute rounded-full ${color} blur-sm pointer-events-none`}
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -10, 0],
      opacity: [0.15, 0.4, 0.15],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// ─── Proficiency Bar ───
const ProficiencyBar = ({
  percentage,
  gradient,
  delay,
}: {
  percentage: number;
  gradient: string;
  delay: number;
}) => (
  <div className="w-full">
    <div className="w-full h-1.5 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${gradient} rounded-full relative`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{
            duration: 2.5,
            delay: delay + 1,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />
      </motion.div>
    </div>
  </div>
);

// ─── Tool Card Component ───
const ToolCard = ({
  tool,
  idx,
}: {
  tool: (typeof tools)[0];
  idx: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: idx * 0.07,
        type: 'spring',
        stiffness: 100,
      }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group h-full"
    >
      {/* Outer glow on hover */}
      <motion.div
        className={`absolute -inset-px bg-gradient-to-b ${tool.gradient} rounded-[20px] opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-700`}
      />

      <div
        className={`relative h-full bg-gradient-to-br ${tool.lightGradient} bg-white dark:from-zinc-900 dark:to-zinc-900/80 border ${tool.border} dark:border-zinc-800 ${tool.hoverBorder} dark:hover:border-zinc-600 rounded-[20px] overflow-hidden transition-all duration-500 group-hover:shadow-2xl ${tool.shadow}`}
      >
        {/* ─── Background Effects ─── */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.9),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02),transparent_70%)]" />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700"
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 0.5px, transparent 0.5px)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* Corner blob */}
        <motion.div
          className={`absolute -top-14 -right-14 w-32 h-32 rounded-full bg-gradient-to-br ${tool.gradient} opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700`}
        />

        {/* Floating particles */}
        <FloatingParticle delay={idx * 0.3} x="80%" y="15%" size={3} color={`${tool.bg.replace('bg-', 'bg-')}`} />

        {/* ─── Content ─── */}
        <div className="relative z-10 p-5 flex flex-col items-center h-full">
          {/* Tag badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.05 }}
            viewport={{ once: true }}
            className="self-end mb-3"
          >
            <span
              className={`text-[8px] font-bold uppercase tracking-[0.15em] ${tool.color} ${tool.bg} border ${tool.border} rounded-full px-2 py-0.5`}
            >
              {tool.tag}
            </span>
          </motion.div>

          {/* Icon */}
          <motion.div
            className={`w-16 h-16 rounded-2xl ${tool.bg} dark:bg-zinc-800 border ${tool.border} dark:border-zinc-700 flex items-center justify-center ${tool.color} mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-gray-100 group-hover:shadow-lg ${tool.shadow}`}
            whileHover={{ rotate: 10, scale: 1.2 }}
          >
            {tool.icon}
          </motion.div>

          {/* Name */}
          <h3 className="text-base font-bold text-gray-800 dark:text-white mb-1 text-center">
            {tool.name}
          </h3>

          {/* Description */}
          <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mb-4 font-medium">
            {tool.description}
          </p>

          {/* Proficiency section */}
          <div className="w-full mt-auto space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">
                Proficiency
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 + idx * 0.07 }}
                viewport={{ once: true }}
                className={`text-[10px] font-bold ${tool.color}`}
              >
                {tool.proficiency}%
              </motion.span>
            </div>
            <ProficiencyBar
              percentage={tool.proficiency}
              gradient={tool.gradient}
              delay={0.4 + idx * 0.07}
            />
          </div>

          {/* Hover arrow */}
          <motion.div
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            animate={isHovered ? { x: [0, 3, 0], y: [0, -3, 0] } : {}}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUpRight className={`w-4 h-4 ${tool.color}`} />
          </motion.div>
        </div>

        {/* Bottom gradient bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 + idx * 0.08 }}
          viewport={{ once: true }}
        >
          <div className={`h-full bg-gradient-to-r ${tool.gradient} rounded-full`} />
        </motion.div>
      </div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════

export default function ToolsTechnologies() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTools =
    activeFilter === 'all'
      ? tools
      : tools.filter((tool) => tool.category === activeFilter);

  return (
    <Commoncard tag="tools" title="Tools & Technologies" name="Tools">
      <div className="space-y-8">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-5"
        >
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
              </motion.div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                My Toolkit
              </span>
            </div>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              I work with a range of essential tools like{' '}
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                Git, Docker, AWS
              </span>
              , and{' '}
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                Postman
              </span>{' '}
              that streamline my development workflow and boost productivity.
            </p>
          </div>

          {/* Stats badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-zinc-800 dark:to-zinc-800 border border-amber-100 dark:border-zinc-700 rounded-xl">
              <Wrench className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                {tools.length}+
              </span>
              <span className="text-xs text-gray-400">Tools</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-zinc-800 dark:to-zinc-800 border border-emerald-100 dark:border-zinc-700 rounded-xl">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Daily
              </span>
              <span className="text-xs text-gray-400">Usage</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Filter Tabs ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide"
        >
          {toolCategories.map((cat, idx) => (
            <motion.button
              key={idx}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat.value)}
              className={`flex items-center gap-1.5 cursor-pointer px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap border ${
                activeFilter === cat.value
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white shadow-lg shadow-gray-200/50 dark:shadow-zinc-700/50'
                  : 'bg-white dark:bg-zinc-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {cat.icon}
              {cat.label}
            </motion.button>
          ))}

          <div className="flex-1" />

          {/* Tool count */}
          <motion.span
            key={activeFilter}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden md:flex items-center gap-1.5 text-[10px] font-bold text-gray-400 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-3 py-1.5"
          >
            <Star className="w-3 h-3 text-amber-400" />
            {filteredTools.length} tools
          </motion.span>
        </motion.div>

        {/* ─── Tools Grid ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {filteredTools.map((tool, idx) => (
              <ToolCard key={tool.name} tool={tool} idx={idx} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ─── Bottom Summary Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-px bg-gradient-to-r from-amber-200/30 via-blue-200/30 to-emerald-200/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

          <div className="relative bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl px-7 py-6 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-zinc-800 dark:to-zinc-800 rounded-xl border border-amber-100 dark:border-zinc-700">
                  <Wrench className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 dark:text-white">
                    Always exploring new tools
                  </p>
                  <p className="text-xs text-gray-400">
                    Continuously learning to optimize my{' '}
                    <span className="text-gray-600 dark:text-gray-300 font-semibold">
                      development workflow
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Quick tool icons */}
                <div className="hidden md:flex items-center -space-x-2">
                  {tools.slice(0, 4).map((tool, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.08, type: 'spring' }}
                      viewport={{ once: true }}
                      className={`w-8 h-8 rounded-lg ${tool.bg} border-2 border-white dark:border-zinc-900 flex items-center justify-center ${tool.color} shadow-2xl shadow-gray-100`}
                    >
                      {React.cloneElement(tool.icon as any, {
                        className: 'w-4 h-4',
                      })}
                    </motion.div>
                  ))}
                  <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-zinc-800 border-2 border-white dark:border-zinc-900 flex items-center justify-center text-[9px] font-bold text-gray-500 shadow-2xl shadow-gray-100">
                    +{tools.length - 4}
                  </div>
                </div>

                <motion.div
                  className="flex items-center gap-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    Growing
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Commoncard>
  );
}