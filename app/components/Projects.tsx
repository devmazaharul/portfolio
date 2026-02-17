'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Commoncard from './Commoncard';
import Link from 'next/link';
import {
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Eye,
  Star,
  Layers,
  Code2,
  Zap,
  LayoutGrid,
  List,
  ChevronRight,
  Globe,
  Folder,
  MousePointerClick,
  TrendingUp,
} from 'lucide-react';
import { source } from '@/constant/source';
import { FiGithub } from 'react-icons/fi';

// ─── Data Configuration ───
const categories = [
  { label: 'All', value: 'all', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
  { label: 'SaaS', value: 'saas', icon: <Zap className="w-3.5 h-3.5" /> },
  { label: 'E-Commerce', value: 'ecommerce', icon: <Globe className="w-3.5 h-3.5" /> },
  { label: 'Dashboard', value: 'dashboard', icon: <Layers className="w-3.5 h-3.5" /> },
];

const colorPalettes = [
  {
    gradient: 'from-blue-500 to-indigo-600',
    lightGradient: 'from-blue-50/80 to-indigo-50/40',
    border: 'border-blue-100',
    hoverBorder: 'hover:border-blue-200',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    dotColor: 'bg-blue-500',
    glow: 'shadow-blue-100/50',
    tag: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    gradient: 'from-emerald-500 to-teal-600',
    lightGradient: 'from-emerald-50/80 to-teal-50/40',
    border: 'border-emerald-100',
    hoverBorder: 'hover:border-emerald-200',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    dotColor: 'bg-emerald-500',
    glow: 'shadow-emerald-100/50',
    tag: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
  {
    gradient: 'from-violet-500 to-purple-600',
    lightGradient: 'from-violet-50/80 to-purple-50/40',
    border: 'border-violet-100',
    hoverBorder: 'hover:border-violet-200',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    dotColor: 'bg-violet-500',
    glow: 'shadow-violet-100/50',
    tag: 'bg-violet-50 text-violet-600 border-violet-100',
  },
  {
    gradient: 'from-amber-500 to-orange-600',
    lightGradient: 'from-amber-50/80 to-orange-50/40',
    border: 'border-amber-100',
    hoverBorder: 'hover:border-amber-200',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    dotColor: 'bg-amber-500',
    glow: 'shadow-amber-100/50',
    tag: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    gradient: 'from-pink-500 to-rose-600',
    lightGradient: 'from-pink-50/80 to-rose-50/40',
    border: 'border-pink-100',
    hoverBorder: 'hover:border-pink-200',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
    dotColor: 'bg-pink-500',
    glow: 'shadow-pink-100/50',
    tag: 'bg-pink-50 text-pink-600 border-pink-100',
  },
  {
    gradient: 'from-cyan-500 to-sky-600',
    lightGradient: 'from-cyan-50/80 to-sky-50/40',
    border: 'border-cyan-100',
    hoverBorder: 'hover:border-cyan-200',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    dotColor: 'bg-cyan-500',
    glow: 'shadow-cyan-100/50',
    tag: 'bg-cyan-50 text-cyan-600 border-cyan-100',
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

// ─── Project Card Component ───
const ProjectCard = ({
  project,
  idx,
  palette,
}: {
  project: {
    name:string;
    description:string;
    liveLink:string;
    githubLink:string;
    techStack?:string[]
  };
  idx: number;
  palette: (typeof colorPalettes)[0];
}) => {


  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{
        duration: 0.5,
        delay: idx * 0.08,
        type: 'spring',
        stiffness: 100,
      }}
      viewport={{ once: true }}

      className="relative group h-full"
    >
      {/* Outer glow on hover */}
      <motion.div
        className={`absolute -inset-px bg-gradient-to-b ${palette.gradient} rounded-[22px] opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-700`}
      />

      <div
        className={`relative h-full bg-gradient-to-br ${palette.lightGradient} bg-white dark:from-zinc-900 dark:to-zinc-900/80 border ${palette.border} dark:border-zinc-800 ${palette.hoverBorder} dark:hover:border-zinc-600 rounded-[22px] overflow-hidden transition-all duration-500 group-hover:shadow-2xl ${palette.glow}`}
      >
        {/* ─── Background Effects ─── */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.9),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02),transparent_70%)]" />

        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700"
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Corner decoration */}
        <motion.div
          className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${palette.gradient} opacity-[0.03] group-hover:opacity-[0.07] group-hover:scale-125 transition-all duration-700`}
        />
        <motion.div
          className={`absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-gradient-to-tr ${palette.gradient} opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700`}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} x="88%" y="15%" size={4} color={palette.dotColor} />
        <FloatingParticle delay={1.5} x="8%" y="75%" size={3} color={palette.dotColor} />

        {/* ─── Content ─── */}
        <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
          {/* Top Row: Number + Status */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span
                className={`text-[40px] font-black leading-none select-none text-gray-100 dark:text-zinc-800 group-hover:text-gray-200 dark:group-hover:text-zinc-700 transition-colors duration-500`}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Status dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              className="flex items-center gap-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full ${palette.dotColor} opacity-75`}
                />
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${palette.dotColor}`}
                />
              </span>
              <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Live
              </span>
            </motion.div>
          </div>

          {/* Icon & Folder */}
          <motion.div
            className={`w-12 h-12 rounded-2xl ${palette.iconBg} dark:bg-zinc-800 border ${palette.border} dark:border-zinc-700 flex items-center justify-center mb-4 ${palette.iconColor} dark:text-gray-300 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-gray-100`}
            whileHover={{ rotate: 10, scale: 1.15 }}
          >
            <Folder className="w-6 h-6" />
          </motion.div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 leading-tight group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack Tags */}
          {project.techStack && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.techStack?.slice(0, 4).map((tech: string, tIdx: number) => (
                <motion.span
                  key={tIdx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + tIdx * 0.05 }}
                  viewport={{ once: true }}
                  className={`text-[10px] font-bold uppercase tracking-wider ${palette.tag} border rounded-full px-2.5 py-1`}
                >
                  {tech}
                </motion.span>
              ))}
              {project.techStack?.length > 4 && (
                <span className="text-[10px] font-bold text-gray-400 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-2.5 py-1">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-700 to-transparent mb-4" />

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Live Site Button */}
            <Link
              href={project.liveLink}
              target="_blank"
              className="flex-1"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative group/btn overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${palette.gradient} rounded-xl`}
                />
                <div className="relative flex items-center justify-center gap-2 px-4 py-2.5 text-white text-xs font-bold rounded-xl">
                  <Eye className="w-3.5 h-3.5" />
                  <span> Preview</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>

            {/* GitHub Button */}
            <Link href={project.githubLink} target="_blank">
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border ${palette.border} dark:border-zinc-700 ${palette.iconColor} dark:text-gray-300 hover:shadow-md transition-all duration-300`}
              >
                <FiGithub className="w-4 h-4" />
              </motion.div>
            </Link>

            {/* External Link Button */}
            <Link href={project.liveLink} target="_blank">
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border ${palette.border} dark:border-zinc-700 ${palette.iconColor} dark:text-gray-300 hover:shadow-md transition-all duration-300`}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </Link>
          </div>
        </div>

        {/* Bottom gradient bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
          viewport={{ once: true }}
        >
          <div
            className={`h-full bg-gradient-to-r ${palette.gradient} rounded-full`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Main Projects Component ───
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? source.projects
    : source.projects.slice(0, 6);

  return (
    <Commoncard
      title="End-to-End Web Development"
      tag="project"
      name="Projects"
    >
      <div className="space-y-8">
        {/* ─── Description Section ─── */}
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
                Featured Work
              </span>
            </div>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              I build scalable, modern web solutions from idea to deployment —
              SaaS platforms, e-commerce systems, admin dashboards, and more.
              Each project is crafted with{' '}
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                clean architecture
              </span>{' '}
              and{' '}
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                production-ready code
              </span>
              .
            </p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-800 border border-blue-100 dark:border-zinc-700 rounded-xl">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                {source.projects.length}
              </span>
              <span className="text-xs text-gray-400">Projects</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-zinc-800 dark:to-zinc-800 border border-emerald-100 dark:border-zinc-700 rounded-xl">
              <Star className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                100%
              </span>
              <span className="text-xs text-gray-400">Success</span>
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
          {categories.map((cat, idx) => (
            <motion.button
              key={idx}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat.value)}
              className={`flex items-center cursor-pointer gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap border ${
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

          {/* View toggle */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100 dark:bg-zinc-800 rounded-lg p-1">
            <button className="p-1.5 rounded-md bg-white dark:bg-zinc-700 shadow-2xl shadow-gray-100">
              <LayoutGrid className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
            </button>
            <button className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* ─── Projects Grid ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {displayedProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                idx={idx}
                palette={colorPalettes[idx % colorPalettes.length]}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ─── Show More / Less ─── */}
        {source.projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="group flex items-center cursor-pointer gap-2 px-6 py-3 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-zinc-600 hover:shadow-lg shadow-2xl shadow-gray-100 transition-all duration-300"
            >
              <Layers className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
              {showAll ? 'Show Less' : `View All ${source.projects.length} Projects`}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}

        {/* ─── Bottom CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-px bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-emerald-200/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl px-7 py-6 overflow-hidden">
            {/* Background */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-800 rounded-xl border border-violet-100 dark:border-zinc-700">
                <Code2 className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 dark:text-white mb-0.5">
                  Have a project in mind?
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Let&apos;s collaborate and build something{' '}
                  <span className="text-gray-600 dark:text-gray-300 font-semibold">
                    extraordinary
                  </span>
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-3">
              <Link
                href="https://github.com/devmazaharul"
                target="_blank"
                className="hidden md:flex items-center gap-1.5 text-[10px] font-bold text-gray-600 dark:text-gray-400 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-3 py-1.5 hover:border-gray-300 dark:hover:border-zinc-600 transition-colors"
              >
                <FiGithub className="w-3 h-3" />
                View GitHub
              </Link>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group/btn overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-2 text-sm font-bold text-white dark:text-gray-900 dark:group-hover/btn:text-white px-6 py-3 rounded-xl transition-colors duration-500">
                  <MousePointerClick className="w-4 h-4" />
                  <span>Start Project</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </Commoncard>
  );
};

export default Projects;