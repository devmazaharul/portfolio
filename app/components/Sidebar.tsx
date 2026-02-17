'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, source } from '@/constant/source';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io5';
import { SiExpress, SiMongodb, SiPrisma, SiRedux } from 'react-icons/si';
import {
  FaReact, FaUsers, FaPuzzlePiece, FaComments, FaClock,
  FaLightbulb, FaMapMarkerAlt,
} from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoPostgresql } from 'react-icons/bi';
import { IoLogoDocker } from 'react-icons/io5';
import { BsGithub, BsLinkedin, BsEnvelopeFill, BsArrowUpRight, BsFacebook } from 'react-icons/bs';
import { MdAccessTime, MdWorkOutline, MdVerified } from 'react-icons/md';
import { HiSparkles, HiMiniSignal } from 'react-icons/hi2';

// ═══════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════

const profileData = {
  image: '/Image_mw970imw970imw97.png',
  statusMessage: 'Building amazing things 🚀',
  socialLinks: [
    { icon: <BsGithub />, href: 'https://github.com/devmazaharul', label: 'GitHub' },
    { icon: <BsLinkedin />, href: personalInfo.linkdine, label: 'LinkedIn' },
    { icon: <BsFacebook />, href: personalInfo.facebook, label: 'Facebook' },
    { icon: <BsEnvelopeFill />, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ],
};

const infoCards = [
  { icon: <FaGithub className="text-sm" />, label: 'GitHub', value: '@devmazaharul', href: 'https://github.com/devmazaharul', isLink: true },
  { icon: <FaMapMarkerAlt className="text-sm" />, label: 'Residence', value: 'Bangladesh' },
  { icon: <MdAccessTime className="text-sm" />, label: 'Timezone', value: 'UTC +6:00' },
  { icon: <MdWorkOutline className="text-sm" />, label: 'Status', value: 'Open to Work', isStatus: true },
];

const techSkills = [
  { icon: <BiLogoTypescript />, title: 'TypeScript' },
  { icon: <RiNextjsFill />, title: 'Next.js' },
  { icon: <FaReact />, title: 'React' },
  { icon: <IoLogoNodejs />, title: 'Node.js' },
  { icon: <SiExpress />, title: 'Express' },
  { icon: <SiMongodb />, title: 'MongoDB' },
  { icon: <BiLogoPostgresql />, title: 'PostgreSQL' },
  { icon: <RiTailwindCssFill />, title: 'Tailwind' },
  { icon: <IoLogoDocker />, title: 'Docker' },
  { icon: <BsGithub />, title: 'Git' },
  { icon: <SiRedux />, title: 'Redux' },
  { icon: <SiPrisma />, title: 'Prisma' },
];

const softSkills = [
  { icon: <FaUsers />, label: 'Team Collaboration' },
  { icon: <FaPuzzlePiece />, label: 'Problem Solving' },
  { icon: <FaComments />, label: 'Communication' },
  { icon: <FaClock />, label: 'Time Management' },
  { icon: <FaLightbulb />, label: 'Creative Thinking' },
];

// ═══════════════════════════════════════════════
//  SUB-COMPONENTS
// ═══════════════════════════════════════════════

// ─── Light Background (Hero-style) ───
const SidebarBackground = () => (
  <>
    {/* Same feel as Hero: soft white → blue gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/90 to-emerald-50/60" />

    {/* Radial soft glows */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.10),transparent_55%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.08),transparent_55%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_65%)]" />

    {/* Subtle grid like Hero */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,0.10) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(15,23,42,0.10) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />

    {/* Top & bottom light lines */}
    <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
    <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-purple-400/25 to-transparent" />
  </>
);

// ─── Very soft floating glows ───
const SoftGlow = ({ delay, x, y, size }: {
  delay: number; x: string; y: string; size: number;
}) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-br from-emerald-400/10 via-purple-400/10 to-cyan-400/10 blur-3xl"
    style={{ width: size, height: size, left: x, top: y }}
    animate={{
      y: [0, -12, 0],
      opacity: [0.05, 0.18, 0.05],
      scale: [1, 1.15, 1],
    }}
    transition={{ duration: 10, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);




// ─── Divider ───
const LightDivider = () => (
  <div className="w-full flex items-center gap-4 my-2">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300/70 to-transparent" />
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-400"
    />
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300/70 to-transparent" />
  </div>
);

// ─── Section Header ───
const SectionHeader = ({ title, icon }: { title: string; icon: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-3">
    <motion.div
      whileHover={{ rotate: 8, scale: 1.05 }}
      className="w-8 h-8 rounded-xl bg-white/90 border border-gray-200 flex items-center justify-center text-emerald-600 text-xs shadow-2xl shadow-gray-200"
    >
      {icon}
    </motion.div>
    <h2 className="text-[10px] font-semibold text-gray-500 uppercase tracking-[0.3em]">
      {title}
    </h2>
    <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/40 to-transparent" />
  </div>
);

// ═══════════════════════════════════════════════
//  MAIN SIDEBAR
// ═══════════════════════════════════════════════

const Sidebar = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const { role, name } = source;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <motion.aside
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full md:max-w-xs overflow-hidden rounded-[28px] border border-gray-200/80 bg-white/70 backdrop-blur-xl shadow-xl shadow-emerald-100/20"
      >
        {/* Light background like Hero */}
        <SidebarBackground />

        {/* Soft glows (onek halka) */}
        <SoftGlow delay={0} x="10%" y="12%" size={80} />
        <SoftGlow delay={2} x="75%" y="30%" size={60} />
        <SoftGlow delay={3.5} x="15%" y="65%" size={70} />
        <SoftGlow delay={5} x="70%" y="80%" size={60} />

        {/* Inner subtle border */}
        <div className="absolute inset-[1px] rounded-[27px] border border-white/70" />

        {/* CONTENT */}
        <div className="relative z-10 py-9 px-6 flex flex-col items-center gap-7 overflow-y-auto max-h-screen scrollbar-hide">

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15, type: 'spring', stiffness: 90 }}
            className="relative group"
          >
            {/* Soft ring */}
            <motion.div
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-emerald-200/40 via-purple-200/40 to-cyan-200/40 opacity-60"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
            />

            {/* Inner white ring */}
            <div className="absolute -inset-[4px] rounded-full bg-white/90" />

            {/* Hover glow */}
            <div className="absolute -inset-6 rounded-full bg-emerald-200/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <Image
              alt="Profile"
              className="relative rounded-full border-[2.5px] border-white shadow-md shadow-gray-200 object-cover h-[120px] w-[120px] group-hover:scale-[1.02] transition-transform duration-500"
              width={120}
              height={120}
              src={profileData.image}
              priority
            />

            {/* Verified badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-[3px] shadow-2xl shadow-gray-300"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-cyan-400 rounded-full p-[3px]">
                <MdVerified className="text-white text-sm" />
              </div>
            </motion.div>

            {/* Online dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.1, type: 'spring' }}
              className="absolute top-1 -right-1"
            >
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-[2.5px] border-white" />
              </span>
            </motion.div>
          </motion.div>

          {/* NAME & ROLE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center space-y-3"
          >
            <div>
              <h1 className="text-[22px] capitalize font-extrabold text-slate-900 tracking-wide leading-tight">
                {name || 'Mazaharul Islam'}
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '40%' }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto mt-2 rounded-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, type: 'spring' }}
            >
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] px-5 py-1.5 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm shadow-2xl shadow-gray-200">
                <HiSparkles className="text-emerald-500 text-xs" />
                <span className="text-gray-700">
                  {role || 'Software Engineer'}
                </span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="text-[11px] text-gray-500 italic flex items-center justify-center gap-1.5"
            >
              <HiMiniSignal className="text-emerald-500 text-xs" />
              {profileData.statusMessage}
            </motion.p>
          </motion.div>



          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2.5"
          >
            {profileData.socialLinks.map((social, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55 + idx * 0.08, type: 'spring', stiffness: 180 }}
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/90 border border-gray-200 text-gray-500 hover:text-emerald-600 hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-100 transition-all duration-300 text-sm"
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <LightDivider />

          {/* INFO CARDS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="w-full space-y-2"
          >
            {infoCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.65 + idx * 0.08, duration: 0.4 }}
                whileHover={{ x: 4, scale: 1.01 }}
                className="relative flex items-center justify-between bg-white/90 hover:bg-white border border-gray-200 hover:border-emerald-300 rounded-2xl px-4 py-3 backdrop-blur-sm cursor-default transition-all duration-300 group shadow-2xl  shadow-gray-100/60"
              >
                {/* Left accent line */}
                <div className="absolute left-0 top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-emerald-400 via-purple-400 to-emerald-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                <div className="flex items-center gap-3">
                  <span className="text-emerald-500/80 bg-emerald-50 p-2.5 rounded-xl border border-emerald-100 group-hover:border-emerald-300 group-hover:bg-emerald-50/90 transition-all duration-300">
                    {card.icon}
                  </span>
                  <span className="text-gray-500 text-[9px] uppercase tracking-[0.2em] font-semibold group-hover:text-gray-700 transition-colors duration-300">
                    {card.label}
                  </span>
                </div>

                {card.isLink ? (
                  <Link
                    target="_blank"
                    href={card.href!}
                    className="flex items-center gap-1.5 text-emerald-600 text-[11px] font-semibold hover:emerald-emerald-700 transition-colors group/link"
                  >
                    <span>{card.value}</span>
                    <BsArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover/link:opacity-100 transition-all duration-200 translate-y-0.5 group-hover/link:translate-y-0" />
                  </Link>
                ) : card.isStatus ? (
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-600">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    {card.value}
                  </span>
                ) : (
                  <span className="text-gray-800 text-[11px] font-semibold">{card.value}</span>
                )}
              </motion.div>
            ))}

            {/* Live Clock */}
            <AnimatePresence>
              {currentTime && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="flex items-center justify-center gap-2.5 text-[9px] text-gray-500 pt-1.5"
                >
                  <motion.span
                    animate={{ opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="h-1 w-1 rounded-full bg-emerald-500"
                  />
                  <span className="font-mono tracking-[0.15em]">{currentTime}</span>
                  
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <LightDivider />

          {/* TECH STACK */}
          <div className="w-full">
            <SectionHeader title="Tech Stack" icon={<FaReact />} />

            <div className="grid grid-cols-2 gap-2">
              {techSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onHoverStart={() => setHoveredSkill(idx)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group relative bg-white/90 border border-gray-200 hover:border-emerald-300 rounded-xl px-3 py-2.5 flex items-center gap-2.5 cursor-default transition-all duration-300 hover:shadow-md hover:shadow-emerald-100"
                >
                  {/* Light shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-100/40 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.7 }}
                  />

                  <motion.span
                    className="text-emerald-500 text-[17px] relative z-10 group-hover:text-emerald-600 transition-colors duration-300"
                    animate={
                      hoveredSkill === idx
                        ? { rotate: [0, -8, 8, 0], scale: [1, 1.12, 1] }
                        : {}
                    }
                    transition={{ duration: 0.4 }}
                  >
                    {skill.icon}
                  </motion.span>

                  <span className="text-[10px] text-gray-600 font-semibold truncate relative z-10 group-hover:text-gray-900 transition-colors duration-300 tracking-wide">
                    {skill.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <LightDivider />

          {/* SOFT SKILLS */}
          <div className="w-full">
            <SectionHeader title="Soft Skills" icon={<FaLightbulb />} />

            <motion.ul className="space-y-2">
              {softSkills.map((skill, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group flex items-center gap-3 bg-white/90 border border-gray-200 hover:border-emerald-300 rounded-xl px-4 py-3 cursor-default transition-all duration-300 hover:shadow-md hover:shadow-emerald-100 relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <span className="text-emerald-500 text-sm p-2 bg-emerald-50 rounded-xl border border-emerald-100 group-hover:bg-emerald-50/90 group-hover:border-emerald-300 group-hover:text-emerald-600 transition-all duration-300">
                    {skill.icon}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {skill.label}
                  </span>

                  <div className="ml-auto">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-emerald-300/60 group-hover:bg-emerald-500 transition-colors duration-300"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2.5, delay: idx * 0.4, repeat: Infinity }}
                    />
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <LightDivider />

        </div>
      </motion.aside>
    </div>
  );
};

export default Sidebar;