'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { personalInfo, source } from '@/constant/source';
import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsEnvelopeFill,
  BsArrowUpRight,
  BsHeartFill,
  BsFacebook,
} from 'react-icons/bs';
import {
  ArrowUp,
  Code2,
  Coffee,
  MapPin,
  Mail,
  Sparkles,
  ExternalLink,
  Globe,
  Zap,
  Star,
  MousePointerClick,
} from 'lucide-react';

// ─── Data Configuration ───
const socialLinks = [
  {
    icon: <BsGithub className="w-4 h-4" />,
    href: personalInfo.github,
    label: 'GitHub',
    hoverBg: 'hover:bg-gray-900 hover:text-white',
    hoverShadow: 'hover:shadow-gray-300/40',
  },
  {
    icon: <BsLinkedin className="w-4 h-4" />,
    href: personalInfo.linkdine,
    label: 'LinkedIn',
    hoverBg: 'hover:bg-blue-600 hover:text-white',
    hoverShadow: 'hover:shadow-blue-300/40',
  },
  {
    icon: <BsFacebook className="w-4 h-4" />,
    href: personalInfo.facebook,
    label: 'Facebook',
    hoverBg: 'hover:bg-sky-500 hover:text-white',
    hoverShadow: 'hover:shadow-sky-300/40',
  },
  {
    icon: <BsEnvelopeFill className="w-4 h-4" />,
    href:`mailto:${personalInfo.email}`,
    label: 'Email',
    hoverBg: 'hover:bg-rose-500 hover:text-white',
    hoverShadow: 'hover:shadow-rose-300/40',
  },
];

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#project' },
  { label: 'Skills', href: '#skill' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const techStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
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
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.3, 1],
    }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

// ═══════════════════════════════════════════════
//  MAIN FOOTER COMPONENT
// ═══════════════════════════════════════════════

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden mt-10"
    >
      {/* ─── Main Container ─── */}
      <div className="relative rounded-3xl border border-gray-100 dark:border-zinc-800 overflow-hidden">
        {/* ═══ Background Effects ═══ */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-gray-100/50 dark:from-zinc-900 dark:via-zinc-900 dark:to-[#0a0f1e]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.04),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.03),transparent_50%)]" />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #6366f1 0.5px, transparent 0.5px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} x="10%" y="20%" size={5} color="bg-blue-300/30" />
        <FloatingParticle delay={2} x="85%" y="15%" size={4} color="bg-purple-300/25" />
        <FloatingParticle delay={1} x="50%" y="60%" size={3} color="bg-cyan-300/20" />
        <FloatingParticle delay={3} x="75%" y="70%" size={4} color="bg-amber-300/20" />

        {/* Top gradient line */}
        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

        {/* ═══ Content ═══ */}
        <div className="relative z-10 px-6 md:px-10 pt-12 md:pt-16 pb-8">
          {/* ─── Top CTA Section ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-800 border border-blue-100 dark:border-zinc-700 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-blue-500" />
              </motion.div>
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.15em]">
                Let&apos;s Connect
              </span>
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-white mb-3 tracking-tight">
              Have a project in{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                  mind?
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute bottom-0.5 left-0 h-2.5 bg-blue-100/70 dark:bg-blue-500/20 rounded-full z-0"
                />
              </span>
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-6">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-3">
              <Link href={source.contactLink || '#contact'} target="_blank">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group overflow-hidden"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] hover:bg-right rounded-xl text-white text-sm font-bold shadow-lg shadow-blue-200/30 dark:shadow-blue-900/30 border border-white/10 transition-all duration-500">
                    <MousePointerClick className="w-4 h-4" />
                    <span>Start a Project</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <BsArrowUpRight className="w-3 h-3" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>

              <Link href="mailto:dev@example.com">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-zinc-600 hover:shadow-lg shadow-2xl shadow-gray-100 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  <span>Say Hello</span>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* ─── Divider ─── */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-700 to-transparent" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            />
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-700 to-transparent" />
          </div>

          {/* ─── Footer Grid ─── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10">
            {/* Column 1: Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Logo */}
              <div className="flex items-center gap-2.5">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-200/30 dark:shadow-blue-900/20"
                >
                  <Code2 className="w-5 h-5" />
                </motion.div>
                <div>
                  <h4 className="text-base font-extrabold text-gray-800 dark:text-white tracking-tight">
                    {source.name || 'Mazaharul'}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.15em]">
                    {source.role || 'Software Engineer'}
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
                Passionate full-stack developer crafting beautiful, performant
                web experiences with modern technologies.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Bangladesh</span>
                <span className="text-gray-300 dark:text-zinc-600">•</span>
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>UTC +6:00</span>
              </div>

              {/* Status */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Available for hire
                </span>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="h-1 w-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                <h4 className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
                  Quick Links
                </h4>
              </div>

              <ul className="space-y-1">
                {quickLinks.map((link, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 py-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-600 group-hover:bg-blue-500 group-hover:w-2 transition-all duration-300" />
                      <span className="font-medium">{link.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Built With & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {/* Built with */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-1 w-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  <h4 className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
                    Built With
                  </h4>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {techStack.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.06 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="text-[10px] font-bold text-gray-500 dark:text-gray-400 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg px-2.5 py-1.5 cursor-default hover:border-gray-300 dark:hover:border-zinc-600 hover:shadow-2xl hover:shadow-gray-100  transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-1 w-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
                  <h4 className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
                    Connect
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  {socialLinks.map((social, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.4 + idx * 0.08,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -4, scale: 1.12 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={social.href}
                        target="_blank"
                        aria-label={social.label}
                        className={`flex items-center justify-center w-9 h-9 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-500 ${social.hoverBg} transition-all duration-300 shadow-2xl shadow-gray-100  hover:shadow-lg ${social.hoverShadow}`}
                      >
                        {social.icon}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ─── Bottom Bar ─── */}
          <div className="pt-6 border-t border-gray-100 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500"
              >
                <span>© {currentYear}</span>
                <span className="text-gray-300 dark:text-zinc-700">•</span>
                <span className="font-semibold text-gray-500 dark:text-gray-400">
                  {source.name || 'Mazaharul Islam'}
                </span>
                <span className="text-gray-300 dark:text-zinc-700">•</span>
                <span>All rights reserved</span>
              </motion.div>

              {/* Made with love */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500"
              >
                <span>Crafted with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <BsHeartFill className="w-3 h-3 text-rose-400" />
                </motion.div>
                <span>&</span>
                <Coffee className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-gray-300 dark:text-zinc-700">•</span>
                <span className="flex items-center gap-1">
                  Powered by
                  <span className="font-semibold text-gray-500 dark:text-gray-400">
                    Next.js
                  </span>
                  <Zap className="w-3 h-3 text-blue-400" />
                </span>
              </motion.div>

              {/* Star on GitHub */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link
                  href="https://github.com/devmazaharul"
                  target="_blank"
                  className="group inline-flex items-center gap-1.5 text-[10px] font-bold text-gray-400 dark:text-gray-500 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-3 py-1.5 hover:border-gray-300 dark:hover:border-zinc-600 hover:shadow-2xl hover:shadow-gray-100  transition-all"
                >
                  <Star className="w-3 h-3 text-amber-400 group-hover:text-amber-500 transition-colors" />
                  <span>Star on GitHub</span>
                  <BsArrowUpRight className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-purple-300/20 to-transparent" />
      </div>

      {/* ─── Scroll to Top Button ─── */}
     
    </motion.footer>
  );
};

export default Footer;