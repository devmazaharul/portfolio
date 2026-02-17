'use client';
import { source } from '@/constant/source';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { GiNetworkBars } from 'react-icons/gi';
import { IoFolderOpenOutline } from 'react-icons/io5';
import { MessageSquareShare, Sparkles, ArrowRight, Download, Star, Zap, Code2, ExternalLink } from 'lucide-react';

// ─── Easing Constants (Fix TypeScript error) ───
const EASE_OUT: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// ─── Typing Animation Hook ───
const useTypingEffect = (texts: string[], speed = 100, deleteSpeed = 50, pause = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pause]);

  return displayText;
};

// ─── Floating Orb Component ───
const FloatingOrb = ({
  size,
  color,
  x,
  y,
  delay,
  duration,
}: {
  size: number;
  color: string;
  x: string;
  y: string;
  delay: number;
  duration: number;
}) => (
  <motion.div
    className={`absolute rounded-full ${color} blur-2xl opacity-30`}
    style={{ width: size, height: size, left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, 0],
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// ─── Stat Card Component ───
const StatBadge = ({
  icon,
  value,
  label,
  color,
  delay,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -3, scale: 1.03 }}
    className="relative group cursor-default"
  >
    <div className={`absolute inset-0 ${color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
    <div className="relative flex items-center gap-3 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] dark:border-white/[0.08] rounded-2xl px-4 py-3 hover:border-white/[0.15] transition-all duration-300">
      <div className={`p-2 rounded-xl ${color.replace('bg-', 'bg-')}/10`}>
        {icon}
      </div>
      <div>
        <p className="text-lg font-bold text-gray-900 dark:text-white leading-none">{value}</p>
        <p className="text-[10px] text-gray-500 dark:text-gray-500 uppercase tracking-wider font-medium mt-0.5">{label}</p>
      </div>
    </div>
  </motion.div>
);

const Hero = () => {
  const { title, description } = source;

  const typingText = useTypingEffect(
    ['Full-Stack Developer', 'MERN Stack Expert', 'Problem Solver', 'Tech Enthusiast'],
    80,
    40,
    2500
  );

  // ✅ Fixed: Properly typed variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // ✅ Fixed: Using typed easing constant
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_OUT },
    },
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* ─── Main Container ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        // ✅ Fixed: Using typed easing constant
        transition={{ duration: 0.7, ease: EASE_OUT }}
        className="relative rounded-3xl border border-gray-200/60 dark:border-white/[0.06] overflow-hidden"
      >
        {/* ─── Background Effects ─── */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/80 to-blue-50/50 dark:from-[#0c1222] dark:via-[#111827] dark:to-[#0f1729]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_60%)]" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating Orbs */}
        <FloatingOrb size={120} color="bg-blue-500" x="5%" y="10%" delay={0} duration={6} />
        <FloatingOrb size={80} color="bg-purple-500" x="75%" y="15%" delay={1} duration={5} />
        <FloatingOrb size={60} color="bg-cyan-500" x="85%" y="60%" delay={2} duration={7} />
        <FloatingOrb size={40} color="bg-pink-500" x="15%" y="70%" delay={1.5} duration={4} />

        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        {/* ─── Content ─── */}
        <div className="relative z-10 px-6 md:px-10 py-8 md:py-10">
          {/* ─── Top Badge ─── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200/50 dark:border-blue-500/20 backdrop-blur-sm">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              </motion.div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Welcome to my portfolio
              </span>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </motion.div>

          {/* ─── Main Grid ─── */}
          <div className="md:grid grid-cols-5 gap-8 items-center">
            {/* ─── Left Content (3 cols) ─── */}
            <motion.div
              className="col-span-3 space-y-5"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Title */}
              <motion.div variants={itemVariants}>
                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight text-gray-900 dark:text-white">
                  {title || (
                    <>
                      Hi, I&apos;m{' '}
                      <span className="relative inline-block">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500">
                          Mazaharul
                        </span>
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full blur-sm"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.8, duration: 0.6 }}
                        />
                      </span>{' '}
                      👋
                    </>
                  )}
                </h1>
              </motion.div>

              {/* Typing Effect */}
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-blue-500" />
                <span className="text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  {typingText}
                </span>
                <motion.span
                  className="inline-block w-0.5 h-6 bg-blue-500 rounded-full"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-xl"
              >
                {description ||
                  'Passionate about building scalable web applications with modern technologies. I turn complex problems into elegant, user-friendly solutions.'}
              </motion.p>

              {/* Status Badges */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    Available for hire
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <IoFolderOpenOutline className="text-purple-500 w-4 h-4" />
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                    Open to remote
                  </span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
                {/* Primary Button */}
                <Link href={source.contactLink} target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] hover:bg-right rounded-xl text-white font-semibold text-sm shadow-lg shadow-blue-500/25 border border-white/10 transition-all duration-500">
                      <MessageSquareShare className="w-4 h-4" />
                      <span>Hire Me</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>

                {/* Secondary Button */}
                <Link href="/resume_mazaharul_islam.pdf" target="_blank">
                  <motion.div
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-xl text-gray-700 dark:text-gray-300 font-semibold text-sm hover:bg-white dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 shadow-2xl shadow-gray-100"
                  >
                    <Download className="w-4 h-4" />
                    <span>Resume</span>
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* ─── Right Image (2 cols) ─── */}
            <motion.div
              className="col-span-2 mt-8 md:mt-0"
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              // ✅ Fixed: Using typed easing constant
              transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
            >
              <div className="relative flex items-center justify-center">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/15 to-cyan-500/20 rounded-3xl blur-3xl" />

                {/* Decorative ring */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl border border-dashed border-blue-500/20 dark:border-blue-500/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 dark:border-white/[0.08] bg-white/30 dark:bg-white/[0.02] backdrop-blur-sm p-3">
                  <Image
                    width={500}
                    height={500}
                    alt="Web Development"
                    src="/download (1).png"
                    className="w-full h-[200px] md:h-[220px] object-contain rounded-2xl"
                  />

                  {/* Floating badge on image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: 'spring' }}
                    className="absolute top-5 right-5"
                  >
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full border border-gray-200/60 dark:border-white/10 shadow-lg">
                      <Zap className="w-3.5 h-3.5 text-yellow-500" />
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                        4+ Years
                      </span>
                    </div>
                  </motion.div>

                  {/* Bottom floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, type: 'spring' }}
                    className="absolute bottom-5 left-5"
                  >
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-full border border-gray-200/60 dark:border-white/10 shadow-lg">
                      <Star className="w-3.5 h-3.5 text-blue-500 fill-blue-500" />
                      <span className="text-xs font-bold text-gray-700 dark:text-gray-300">
                        30+ Projects
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-purple-500/40 rounded-br-lg" />
              </div>
            </motion.div>
          </div>

          {/* ─── Bottom Stats Row ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 pt-6 border-t border-gray-200/40 dark:border-white/[0.06]"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatBadge
                icon={<Zap className="w-5 h-5 text-yellow-500" />}
                value="4+"
                label="Years Experience"
                color="bg-yellow-500"
                delay={0.9}
              />
              <StatBadge
                icon={<Code2 className="w-5 h-5 text-blue-500" />}
                value="30+"
                label="Projects Done"
                color="bg-blue-500"
                delay={1.0}
              />
              <StatBadge
                icon={<Star className="w-5 h-5 text-purple-500" />}
                value="35+"
                label="Happy Clients"
                color="bg-purple-500"
                delay={1.1}
              />
              <StatBadge
                icon={<GiNetworkBars className="w-5 h-5 text-emerald-500" />}
                value="99%"
                label="Success Rate"
                color="bg-emerald-500"
                delay={1.2}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;