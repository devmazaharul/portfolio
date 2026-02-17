'use client';

import React from 'react';
import Commoncard from './Commoncard';
import { motion } from 'framer-motion';
import {
  FaUniversity,
  FaBookOpen,
} from 'react-icons/fa';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Award,
  TrendingUp,
  Sparkles,
  ChevronRight,
  MapPin,
  Star,
  Target,
  Zap,
  CheckCircle2,
  Trophy,
} from 'lucide-react';

// ─── Data Configuration ───
const educationData = [
  {
    title: 'Higher Secondary Certificate',
    shortTitle: 'HSC',
    institute: 'Rupdia Shahid Smrity College',
    location: 'Jashore, Bangladesh',
    year: '2023',
    gpa: '4.90',
    maxGpa: '5.00',
    percentage: 98,
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    lightGradient: 'from-purple-50/80 to-violet-50/40',
    borderColor: 'border-purple-100',
    hoverBorder: 'hover:border-purple-200',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    accentColor: '#7c3aed',
    glowColor: 'shadow-purple-100/60',
    tag: 'bg-purple-50 text-purple-600 border-purple-100',
    barColor: 'bg-gradient-to-r from-purple-500 to-violet-500',
    group: 'Science',
    board: 'Jashore Board',
    status: 'Completed',
    highlights: ['Science Group', 'Top Scorer', 'Board Exam'],
  },
  {
    title: 'Secondary School Certificate',
    shortTitle: 'SSC',
    institute: 'Rupdia Welfare Academy',
    location: 'Jashore, Bangladesh',
    year: '2021',
    gpa: '4.42',
    maxGpa: '5.00',
    percentage: 88,
    icon: <BookOpen className="w-6 h-6" />,
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    lightGradient: 'from-emerald-50/80 to-teal-50/40',
    borderColor: 'border-emerald-100',
    hoverBorder: 'hover:border-emerald-200',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accentColor: '#059669',
    glowColor: 'shadow-emerald-100/60',
    tag: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    barColor: 'bg-gradient-to-r from-emerald-500 to-teal-500',
    group: 'Science',
    board: 'Jashore Board',
    status: 'Completed',
    highlights: ['Science Group', 'Merit Position', 'Board Exam'],
  },
];

const achievements = [
  { icon: <Trophy className="w-4 h-4" />, text: 'Science Background', color: 'text-amber-500' },
  { icon: <Star className="w-4 h-4" />, text: 'High GPA Scorer', color: 'text-blue-500' },
  { icon: <Target className="w-4 h-4" />, text: 'Self-taught Developer', color: 'text-emerald-500' },
  { icon: <Zap className="w-4 h-4" />, text: 'Continuous Learner', color: 'text-purple-500' },
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

// ─── Animated GPA Bar ───
const GpaBar = ({
  percentage,
  barColor,
  delay,
}: {
  percentage: number;
  barColor: string;
  delay: number;
}) => (
  <div className="w-full">
    <div className="w-full h-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
      <motion.div
        className={`h-full ${barColor} rounded-full relative`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, delay: delay + 1.2, repeat: Infinity, repeatDelay: 3 }}
        />
      </motion.div>
    </div>
  </div>
);

// ─── Education Card ───
const EducationCard = ({
  edu,
  idx,
}: {
  edu: (typeof educationData)[0];
  idx: number;
}) => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: idx * 0.2,
        type: 'spring',
        stiffness: 100,
      }}
      viewport={{ once: true }}

      className="relative group h-full"
    >
      {/* Outer glow */}
      <motion.div
        className={`absolute -inset-px bg-gradient-to-b ${edu.gradient} rounded-[22px] opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-700`}
      />

      <div
        className={`relative h-full bg-gradient-to-br ${edu.lightGradient} bg-white dark:from-zinc-900 dark:to-zinc-900/80 border ${edu.borderColor} dark:border-zinc-800 ${edu.hoverBorder} dark:hover:border-zinc-600 rounded-[22px] overflow-hidden transition-all duration-500 group-hover:shadow-2xl ${edu.glowColor}`}
      >
        {/* ─── Background Effects ─── */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.9),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02),transparent_70%)]" />

        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700"
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />

        {/* Corner blobs */}
        <motion.div
          className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${edu.gradient} opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700`}
        />
        <motion.div
          className={`absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-gradient-to-tr ${edu.gradient} opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-700`}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} x="85%" y="15%" size={4} color={`bg-${edu.color}-400`} />
        <FloatingParticle delay={1.5} x="10%" y="70%" size={3} color={`bg-${edu.color}-300`} />

        {/* ─── Content ─── */}
        <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
          {/* Top row: Year badge + Status */}
          <div className="flex items-center justify-between mb-5">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              viewport={{ once: true }}
              className={`inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] ${edu.tag} border rounded-full px-3 py-1.5`}
            >
              <Calendar className="w-3 h-3" />
              {edu.year}
            </motion.span>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + idx * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              className="flex items-center gap-1.5"
            >
              <CheckCircle2 className={`w-3.5 h-3.5 ${edu.iconColor}`} />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {edu.status}
              </span>
            </motion.div>
          </div>

          {/* Icon + Short title */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.15 }}
              className={`w-14 h-14 rounded-2xl ${edu.iconBg} dark:bg-zinc-800 border ${edu.borderColor} dark:border-zinc-700 flex items-center justify-center ${edu.iconColor} dark:text-gray-300 group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-gray-100 flex-shrink-0`}
            >
              {edu.icon}
            </motion.div>

            <div className="min-w-0 flex-1">
              {/* Short title badge */}
              <motion.span
                className={`inline-block text-[40px] font-black leading-none select-none text-gray-100 dark:text-zinc-800 group-hover:text-gray-200 dark:group-hover:text-zinc-700 transition-colors duration-500`}
              >
                {edu.shortTitle}
              </motion.span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2 leading-tight">
            {edu.title}
          </h3>

          {/* Institute & Location */}
          <div className="space-y-1.5 mb-5">
            <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <FaUniversity className={`flex-shrink-0 ${edu.iconColor} text-xs`} />
              <span className="font-medium">{edu.institute}</span>
            </p>
            <p className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span>{edu.location}</span>
            </p>
          </div>

          {/* Highlight chips */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {edu.highlights.map((h, hIdx) => (
              <motion.span
                key={hIdx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + hIdx * 0.08 }}
                viewport={{ once: true }}
                className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-2.5 py-1"
              >
                {h}
              </motion.span>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-700 to-transparent mb-5" />

          {/* GPA Section */}
          <div className="space-y-3 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className={`w-4 h-4 ${edu.iconColor}`} />
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Grade Point
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <motion.span
                  className="text-2xl font-black text-gray-800 dark:text-white tracking-tight"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.2, type: 'spring' }}
                  viewport={{ once: true }}
                >
                  {edu.gpa}
                </motion.span>
                <span className="text-xs text-gray-400 font-medium">
                  / {edu.maxGpa}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <GpaBar
              percentage={edu.percentage}
              barColor={edu.barColor}
              delay={0.5 + idx * 0.2}
            />

            {/* Percentage label */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-medium">
                {edu.board}
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 + idx * 0.2 }}
                viewport={{ once: true }}
                className={`text-[10px] font-bold ${edu.iconColor}`}
              >
                {edu.percentage}% Score
              </motion.span>
            </div>
          </div>
        </div>

        {/* Bottom gradient bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 + idx * 0.15 }}
          viewport={{ once: true }}
        >
          <div
            className={`h-full bg-gradient-to-r ${edu.gradient} rounded-full`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};



// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════

const Education = () => {
  return (
    <Commoncard title="My Education" name="education" tag="education">
      <div className="space-y-8">
        {/* ─── Header Description ─── */}
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
                Academic Background
              </span>
            </div>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Strong foundation in{' '}
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                science and technology
              </span>
              , with a relentless passion for learning and problem-solving —
              shaping my journey as a{' '}
              <span className="text-gray-800 dark:text-gray-200 font-semibold">
                self-taught developer
              </span>
              .
            </p>
          </div>

          {/* GPA summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-zinc-800 dark:to-zinc-800 border border-purple-100 dark:border-zinc-700 rounded-xl">
              <Award className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                4.90
              </span>
              <span className="text-xs text-gray-400">Best GPA</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-zinc-800 dark:to-zinc-800 border border-emerald-100 dark:border-zinc-700 rounded-xl">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Science
              </span>
              <span className="text-xs text-gray-400">Group</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Education Timeline Visual ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide"
        >
          {educationData.map((edu, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                whileHover={{ y: -2, scale: 1.03 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${edu.borderColor} ${edu.iconBg} dark:bg-zinc-800 dark:border-zinc-700 whitespace-nowrap cursor-default transition-all duration-300 shadow-2xl shadow-gray-100 `}
              >
                <span className={`${edu.iconColor} text-sm`}>{edu.icon}</span>
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                  {edu.shortTitle}
                </span>
                <span className="text-[10px] text-gray-400">({edu.year})</span>
              </motion.div>

              {idx < educationData.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="hidden sm:block w-12 h-px bg-gradient-to-r from-purple-300 to-emerald-300 dark:from-purple-500/30 dark:to-emerald-500/30 flex-shrink-0"
                  style={{ transformOrigin: 'left' }}
                />
              )}
            </React.Fragment>
          ))}

          <div className="flex-1" />

          {/* Learning badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-zinc-800 border border-amber-100 dark:border-zinc-700 whitespace-nowrap"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3 text-amber-500" />
            </motion.div>
            <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              Always Learning
            </span>
          </motion.div>
        </motion.div>

        {/* ─── Education Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {educationData.map((edu, idx) => (
            <EducationCard key={idx} edu={edu} idx={idx} />
          ))}
        </div>

        {/* ─── Achievements Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-px bg-gradient-to-r from-amber-200/30 via-purple-200/30 to-emerald-200/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

          <div className="relative bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl px-7 py-6 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Section label */}
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em]">
                  Key Highlights
                </span>
                <div className="flex-1 h-px bg-gray-100 dark:bg-zinc-800" />
              </div>

              {/* Achievement chips */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {achievements.map((ach, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className="flex items-center gap-2.5 bg-white dark:bg-zinc-800 border border-gray-100 dark:border-zinc-700 rounded-xl px-3.5 py-3 cursor-default hover:shadow-2xl hover:border-gray-300 dark:hover:border-zinc-600 transition-all duration-300 group/ach"
                  >
                    <span className={`${ach.color} group-hover/ach:scale-110 transition-transform duration-300`}>
                      {ach.icon}
                    </span>
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                      {ach.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Bottom CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl px-6 py-4 shadow-2xl shadow-gray-100"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 dark:bg-zinc-800 rounded-lg border border-blue-100 dark:border-zinc-700">
              <FaBookOpen className="text-blue-500 text-sm" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300">
                Currently self-learning
              </p>
              <p className="text-[10px] text-gray-400">
                Computer Science & Software Engineering
              </p>
            </div>
          </div>

          <motion.div
            className="flex items-center gap-2"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
              In Progress
            </span>
            <ChevronRight className="w-3 h-3 text-blue-400" />
          </motion.div>
        </motion.div>
      </div>
    </Commoncard>
  );
};

export default Education;