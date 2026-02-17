'use client';

import { colorShem } from '@/constant/source';
import React from 'react';
import { motion } from 'framer-motion';
import { MdCleaningServices } from 'react-icons/md';
import { SiHyperskill } from 'react-icons/si';
import { GoProject } from 'react-icons/go';
import { BookText, Sparkles } from 'lucide-react';
import { LiaToolsSolid } from 'react-icons/lia';
import { MdOutlineContactPage } from 'react-icons/md';
import { GrInfo } from 'react-icons/gr';

type TagType = 'about' | 'service' | 'contact' | 'skill' | 'project' | 'education' | 'tools';

// ─── Tag Configuration ───
const tagConfig: Record<
  TagType,
  {
    icon: React.ReactNode;
    gradient: string;
    lightGradient: string;
    borderColor: string;
    iconBg: string;
    iconColor: string;
    dotColor: string;
    accentGradient: string;
    glowColor: string;
  }
> = {
  about: {
    icon: <GrInfo className="w-3.5 h-3.5" />,
    gradient: 'from-blue-500 to-indigo-600',
    lightGradient: 'from-blue-50/60 to-indigo-50/30',
    borderColor: 'border-blue-100',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    dotColor: 'bg-blue-500',
    accentGradient: 'from-blue-500 via-indigo-500 to-blue-600',
    glowColor: 'shadow-blue-100/40',
  },
  service: {
    icon: <MdCleaningServices className="w-3.5 h-3.5" />,
    gradient: 'from-emerald-500 to-teal-600',
    lightGradient: 'from-emerald-50/60 to-teal-50/30',
    borderColor: 'border-emerald-100',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    dotColor: 'bg-emerald-500',
    accentGradient: 'from-emerald-500 via-teal-500 to-emerald-600',
    glowColor: 'shadow-emerald-100/40',
  },
  contact: {
    icon: <MdOutlineContactPage className="w-3.5 h-3.5" />,
    gradient: 'from-rose-500 to-pink-600',
    lightGradient: 'from-rose-50/60 to-pink-50/30',
    borderColor: 'border-rose-100',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    dotColor: 'bg-rose-500',
    accentGradient: 'from-rose-500 via-pink-500 to-rose-600',
    glowColor: 'shadow-rose-100/40',
  },
  skill: {
    icon: <SiHyperskill className="w-3.5 h-3.5" />,
    gradient: 'from-violet-500 to-purple-600',
    lightGradient: 'from-violet-50/60 to-purple-50/30',
    borderColor: 'border-violet-100',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    dotColor: 'bg-violet-500',
    accentGradient: 'from-violet-500 via-purple-500 to-violet-600',
    glowColor: 'shadow-violet-100/40',
  },
  project: {
    icon: <GoProject className="w-3.5 h-3.5" />,
    gradient: 'from-amber-500 to-orange-600',
    lightGradient: 'from-amber-50/60 to-orange-50/30',
    borderColor: 'border-amber-100',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    dotColor: 'bg-amber-500',
    accentGradient: 'from-amber-500 via-orange-500 to-amber-600',
    glowColor: 'shadow-amber-100/40',
  },
  education: {
    icon: <BookText className="w-3.5 h-3.5" />,
    gradient: 'from-cyan-500 to-sky-600',
    lightGradient: 'from-cyan-50/60 to-sky-50/30',
    borderColor: 'border-cyan-100',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    dotColor: 'bg-cyan-500',
    accentGradient: 'from-cyan-500 via-sky-500 to-cyan-600',
    glowColor: 'shadow-cyan-100/40',
  },
  tools: {
    icon: <LiaToolsSolid className="w-3.5 h-3.5" />,
    gradient: 'from-gray-500 to-slate-600',
    lightGradient: 'from-gray-50/60 to-slate-50/30',
    borderColor: 'border-gray-200',
    iconBg: 'bg-gray-50',
    iconColor: 'text-gray-600',
    dotColor: 'bg-gray-500',
    accentGradient: 'from-gray-500 via-slate-500 to-gray-600',
    glowColor: 'shadow-gray-100/40',
  },
};

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
      y: [0, -8, 0],
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.3, 1],
    }}
    transition={{
      duration: 5,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// ═══════════════════════════════════════════════
//  MAIN COMMONCARD COMPONENT
// ═══════════════════════════════════════════════

const Commoncard = ({
  tag,
  name,
  title,
  children,
}: {
  tag: TagType;
  name: string;
  title: string;
  children: React.ReactNode;
}) => {
  const { text_color } = colorShem;
  const config = tagConfig[tag];


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: '-50px' }}

      className="relative w-full group/card"
    >
      {/* ─── Outer Glow on Hover ─── */}
      <motion.div
        className={`absolute -inset-px bg-gradient-to-b ${config.gradient} rounded-[26px] opacity-0 group-hover/card:opacity-60 blur-[2px] transition-opacity duration-1000`}
      />

      {/* ─── Main Card ─── */}
      <div
        className={`relative bg-white dark:bg-zinc-900 rounded-[24px] border border-gray-100 dark:border-zinc-800 overflow-hidden transition-all duration-700 group-hover/card:shadow-2xl ${config.glowColor} group-hover/card:border-gray-200 dark:group-hover/card:border-zinc-700`}
      >
        {/* ═══ Background Effects ═══ */}

        {/* Top corner gradient blob */}
        <div
          className={`absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br ${config.lightGradient} opacity-60 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-1000`}
        />

        {/* Bottom corner gradient blob */}
        <div
          className={`absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-gradient-to-tr ${config.lightGradient} opacity-30 group-hover/card:opacity-60 transition-all duration-1000`}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015] group-hover/card:opacity-[0.03] transition-opacity duration-700"
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 0.5px, transparent 0.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} x="90%" y="8%" size={4} color={config.dotColor} />
        <FloatingParticle delay={2} x="5%" y="85%" size={3} color={config.dotColor} />
        <FloatingParticle delay={1} x="70%" y="90%" size={3.5} color={config.dotColor} />

        {/* ─── Top Accent Line ─── */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <div className={`h-full bg-gradient-to-r ${config.gradient} rounded-full`} />
        </motion.div>

        {/* ═══ Content ═══ */}
        <div className="relative z-10 px-5 md:px-8 py-6 md:py-8">
          {/* ─── Tag Badge ─── */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="mb-5"
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${config.lightGradient} border ${config.borderColor} dark:border-zinc-700 dark:bg-zinc-800/50 backdrop-blur-sm group/badge cursor-default hover:shadow-md transition-all duration-300`}
            >
              {/* Animated icon container */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                className={`w-6 h-6 rounded-lg bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white shadow-sm`}
              >
                {config.icon}
              </motion.div>

              {/* Tag name */}
              <span className="text-xs font-bold text-gray-600 dark:text-gray-300 capitalize tracking-wide">
                {name}
              </span>

              {/* Decorative dot */}
              <span className="flex items-center">
                <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} opacity-40`} />
              </span>
            </div>
          </motion.div>

          {/* ─── Title Section ─── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="flex items-start gap-3">
              {/* Vertical accent bar */}
              <motion.div
                className={`hidden md:block w-1 h-10 rounded-full bg-gradient-to-b ${config.gradient} mt-1 flex-shrink-0`}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                style={{ transformOrigin: 'top' }}
              />

              <div>
                <h1
                  className={`text-2xl md:text-3xl font-extrabold tracking-tight leading-tight ${text_color} dark:text-white`}
                >
                  {title}
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: 'spring' }}
                    viewport={{ once: true }}
                    className="inline-block ml-2"
                  >
                    <Sparkles
                      className={`w-5 h-5 ${config.iconColor} inline-block`}
                    />
                  </motion.span>
                </h1>

                {/* Animated underline */}
                <motion.div
                  className={`h-[3px] rounded-full bg-gradient-to-r ${config.gradient} mt-2`}
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          </motion.div>

          {/* ─── Children Content ─── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
          >
            {children}
          </motion.div>
        </div>

        {/* ─── Bottom Gradient Line ─── */}
        <div className="absolute bottom-0 left-0 right-0 h-px">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-gray-200/50 dark:via-zinc-700/30 to-transparent`}
          />
        </div>

        {/* ─── Corner Decorations ─── */}
        <div
          className={`absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 ${config.borderColor} dark:border-zinc-700 rounded-tr-xl opacity-0 group-hover/card:opacity-30 transition-opacity duration-700`}
        />
        <div
          className={`absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 ${config.borderColor} dark:border-zinc-700 rounded-bl-xl opacity-0 group-hover/card:opacity-30 transition-opacity duration-700`}
        />
      </div>
    </motion.div>
  );
};

export default Commoncard;