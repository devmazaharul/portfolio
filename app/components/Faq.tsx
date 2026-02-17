'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  MessageCircleQuestion,
  Lightbulb,
  Code2,
  Palette,
  Smartphone,
  Zap,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
  MousePointerClick,
  Search,
} from 'lucide-react';

// ─── Data Configuration ───
const faqCategories = [
  { label: 'All', value: 'all', icon: <HelpCircle className="w-3.5 h-3.5" /> },
  { label: 'Technical', value: 'technical', icon: <Code2 className="w-3.5 h-3.5" /> },
  { label: 'Design', value: 'design', icon: <Palette className="w-3.5 h-3.5" /> },
  { label: 'General', value: 'general', icon: <Lightbulb className="w-3.5 h-3.5" /> },
];

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in MERN Stack, Next.js, Tailwind CSS, PostgreSQL, Prisma, and modern web tools like Docker and GitHub Actions. I stay up-to-date with the latest frameworks and best practices to deliver cutting-edge solutions.',
    icon: <Code2 className="w-5 h-5" />,
    category: 'technical',
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600',
    lightGradient: 'from-blue-50 to-indigo-50/50',
    borderColor: 'border-blue-100',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    accentColor: '#2563eb',
    tags: ['MERN', 'Next.js', 'Docker'],
  },
  {
    question: 'Do you have experience with full-stack development?',
    answer:
      'Yes, I work on both frontend and backend, including building REST APIs, database management, authentication, and deployment. I handle everything from UI design to server configuration and CI/CD pipelines.',
    icon: <Zap className="w-5 h-5" />,
    category: 'technical',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    lightGradient: 'from-emerald-50 to-teal-50/50',
    borderColor: 'border-emerald-100',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accentColor: '#059669',
    tags: ['Full-Stack', 'APIs', 'DevOps'],
  },
  {
    question: 'Can you work with custom UI/UX designs?',
    answer:
      'Absolutely! I can work from Figma files or design custom components using Tailwind and ShadCN. I focus on creating pixel-perfect, accessible, and visually stunning interfaces that enhance user experience.',
    icon: <Palette className="w-5 h-5" />,
    category: 'design',
    color: 'purple',
    gradient: 'from-purple-500 to-violet-600',
    lightGradient: 'from-purple-50 to-violet-50/50',
    borderColor: 'border-purple-100',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    accentColor: '#7c3aed',
    tags: ['Figma', 'Tailwind', 'ShadCN'],
  },
  {
    question: 'Are your projects mobile responsive?',
    answer:
      'Yes, I always build responsive layouts that work seamlessly on all screen sizes using Tailwind CSS and responsive best practices. Every project is tested across multiple devices and browsers.',
    icon: <Smartphone className="w-5 h-5" />,
    category: 'design',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    lightGradient: 'from-amber-50 to-orange-50/50',
    borderColor: 'border-amber-100',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    accentColor: '#d97706',
    tags: ['Responsive', 'Mobile-First', 'Cross-Browser'],
  },
  {
    question: 'How do you handle project communication?',
    answer:
      'I believe in transparent and regular communication. I use tools like Slack, Discord, or email for updates, and provide weekly progress reports. I\'m flexible with time zones and always available for scheduled meetings.',
    icon: <MessageCircleQuestion className="w-5 h-5" />,
    category: 'general',
    color: 'rose',
    gradient: 'from-rose-500 to-pink-600',
    lightGradient: 'from-rose-50 to-pink-50/50',
    borderColor: 'border-rose-100',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    accentColor: '#e11d48',
    tags: ['Slack', 'Weekly Updates', 'Flexible'],
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines depend on complexity and scope. A typical landing page takes 3-5 days, while a full SaaS application may take 4-8 weeks. I always provide a detailed timeline estimate before starting any project.',
    icon: <Lightbulb className="w-5 h-5" />,
    category: 'general',
    color: 'cyan',
    gradient: 'from-cyan-500 to-sky-600',
    lightGradient: 'from-cyan-50 to-sky-50/50',
    borderColor: 'border-cyan-100',
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
    accentColor: '#0891b2',
    tags: ['3-5 Days', '4-8 Weeks', 'Custom'],
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
      y: [0, -8, 0],
      opacity: [0.15, 0.35, 0.15],
      scale: [1, 1.3, 1],
    }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

// ─── FAQ Item Component ───
const FaqItem = ({
  faq,
  idx,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  idx: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: idx * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Outer glow when open */}
      <motion.div
        className={`absolute -inset-px bg-gradient-to-r ${faq.gradient} rounded-[20px] transition-opacity duration-700 blur-[1px] ${
          isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
        }`}
      />

      <div
        className={`relative overflow-hidden bg-white dark:bg-zinc-900 border ${
          isOpen
            ? `${faq.borderColor} dark:border-zinc-700 shadow-xl ${`shadow-${faq.color}-100/40`}`
            : 'border-gray-100 dark:border-zinc-800 hover:border-gray-200 dark:hover:border-zinc-700 shadow-2xl shadow-gray-100 hover:shadow-md'
        } rounded-[20px] transition-all duration-500`}
      >
        {/* Background effects */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${faq.lightGradient} opacity-0 ${
            isOpen ? 'opacity-100' : 'group-hover:opacity-50'
          } transition-opacity duration-500`}
        />

        {/* Dot pattern */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isOpen ? 'opacity-[0.03]' : 'opacity-0'
          }`}
          style={{
            backgroundImage:
              'radial-gradient(circle, currentColor 0.5px, transparent 0.5px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Corner blob */}
        <motion.div
          className={`absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br ${faq.gradient} transition-all duration-700 ${
            isOpen
              ? 'opacity-[0.06] scale-100'
              : 'opacity-[0.02] scale-75 group-hover:opacity-[0.04]'
          }`}
        />

        {/* ─── Question Button ─── */}
        <button
          onClick={onToggle}
          className="relative z-10 w-full flex items-center gap-4 p-5 md:p-6 text-left cursor-pointer transition-colors duration-300"
        >
          {/* Number */}
          <motion.span
            className={`hidden sm:flex items-center justify-center w-8 h-8 rounded-xl text-xs font-black transition-all duration-500 ${
              isOpen
                ? `bg-gradient-to-br ${faq.gradient} text-white shadow-lg`
                : `${faq.iconBg} ${faq.iconColor} dark:bg-zinc-800 dark:text-gray-400`
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {String(idx + 1).padStart(2, '0')}
          </motion.span>

          {/* Icon */}
          <motion.div
            className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-500 ${
              isOpen
                ? `bg-gradient-to-br ${faq.gradient} text-white shadow-lg`
                : `${faq.iconBg} ${faq.iconColor} dark:bg-zinc-800 dark:text-gray-400`
            }`}
            whileHover={{ scale: 1.08 }}
            animate={isOpen ? { rotate: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            {faq.icon}
          </motion.div>

          {/* Question text */}
          <div className="flex-1 min-w-0">
            <h3
              className={`font-bold text-sm md:text-base transition-colors duration-300 ${
                isOpen
                  ? 'text-gray-900 dark:text-white'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              {faq.question}
            </h3>

            {/* Tags preview (visible when closed) */}
            {!isOpen && (
              <div className="flex items-center gap-1.5 mt-1.5">
                {faq.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className={`text-[9px] font-bold uppercase tracking-wider ${faq.iconColor} dark:text-gray-500 ${faq.iconBg} dark:bg-zinc-800 border ${faq.borderColor} dark:border-zinc-700 rounded-full px-2 py-0.5`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Chevron */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-500 ${
              isOpen
                ? `${faq.iconBg} ${faq.iconColor}`
                : 'bg-gray-50 dark:bg-zinc-800 text-gray-400'
            }`}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        {/* ─── Answer Panel ─── */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                opacity: { duration: 0.3, delay: 0.1 },
              }}
              className="overflow-hidden"
            >
              <div className="relative z-10 px-5 md:px-6 pb-6">
                {/* Divider */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex-1 h-px bg-gradient-to-r from-gray-200 dark:from-zinc-700 via-transparent to-transparent`}
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 ${faq.iconColor}`}
                    />
                  </motion.div>
                  <div
                    className={`flex-1 h-px bg-gradient-to-l from-gray-200 dark:from-zinc-700 via-transparent to-transparent`}
                  />
                </div>

                {/* Answer content */}
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="sm:pl-12"
                >
                  {/* Answer card */}
                  <div
                    className={`relative bg-gradient-to-br ${faq.lightGradient} dark:from-zinc-800/50 dark:to-zinc-800/30 border ${faq.borderColor} dark:border-zinc-700 rounded-2xl p-5 overflow-hidden`}
                  >
                    {/* Inner floating particle */}
                    <FloatingParticle
                      delay={0}
                      x="90%"
                      y="10%"
                      size={4}
                      color={`bg-${faq.color}-300`}
                    />

                    <p className="text-sm md:text-[15px] leading-[1.8] text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-gray-100 dark:border-zinc-700/50">
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mr-1">
                        Related:
                      </span>
                      {faq.tags.map((tag, tIdx) => (
                        <motion.span
                          key={tIdx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + tIdx * 0.08 }}
                          className={`text-[10px] font-bold ${faq.iconColor} dark:text-gray-400 ${faq.iconBg} dark:bg-zinc-700 border ${faq.borderColor} dark:border-zinc-600 rounded-full px-2.5 py-1 hover:shadow-2xl shadow-gray-100 transition-shadow cursor-default`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom accent line when open */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isOpen ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className={`h-full bg-gradient-to-r ${faq.gradient} rounded-full`}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeFilter === 'all' || faq.category === activeFilter;
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative rounded-3xl border border-gray-100 dark:border-zinc-800 overflow-hidden"
      >
        {/* ─── Background ─── */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.04),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.03),transparent_50%)]" />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #6366f1 0.5px, transparent 0.5px)',
            backgroundSize: '30px 30px',
          }}
        />

        {/* Top gradient line */}
        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

        {/* ─── Content ─── */}
        <div className="relative z-10 px-6 md:px-10 py-10 md:py-14">
          {/* ─── Header ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-800 border border-blue-100 dark:border-zinc-700 mb-5"
            >
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <MessageCircleQuestion className="w-4 h-4 text-blue-500" />
              </motion.div>
              <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.15em]">
                Got Questions?
              </span>
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
              Frequently Asked{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
                  Questions
                </span>
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute bottom-1 left-0 h-3 bg-blue-100/70 dark:bg-blue-500/20 rounded-full z-0"
                />
              </span>
            </h2>

            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-lg mx-auto leading-relaxed">
              Everything you need to know about my skills, process, and how I
              can help bring your project to life.
            </p>

            {/* Decorative dots */}
            <div className="flex items-center justify-center gap-1.5 mt-5">
              {faqs.slice(0, 4).map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                  viewport={{ once: true }}
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${faq.gradient}`}
                />
              ))}
            </div>
          </motion.div>

          {/* ─── Search Bar ─── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-6"
          >
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm text-gray-700 dark:text-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-blue-300 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 dark:focus:ring-blue-500/10 transition-all duration-300 shadow-2xl shadow-gray-100"
              />
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400 bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 rounded-lg px-2 py-1 transition-colors"
                >
                  Clear
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* ─── Filter Tabs ─── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-1 scrollbar-hide"
          >
            {faqCategories.map((cat, idx) => (
              <motion.button
                key={idx}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(cat.value)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap border ${
                  activeFilter === cat.value
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white shadow-lg shadow-gray-200/50 dark:shadow-zinc-700/50'
                    : 'bg-white dark:bg-zinc-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-zinc-700 hover:border-gray-300 dark:hover:border-zinc-600 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {cat.icon}
                {cat.label}
              </motion.button>
            ))}

            {/* Count badge */}
            <motion.span
              key={activeFilter + searchQuery}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[10px] font-bold text-gray-400 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-full px-3 py-1.5 ml-2"
            >
              {filteredFaqs.length} {filteredFaqs.length === 1 ? 'question' : 'questions'}
            </motion.span>
          </motion.div>

          {/* ─── FAQ Items ─── */}
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter + searchQuery}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <FaqItem
                      key={index}
                      faq={faq}
                      idx={index}
                      isOpen={openIndex === index}
                      onToggle={() => toggleFAQ(index)}
                    />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 flex items-center justify-center mx-auto mb-4">
                      <Search className="w-6 h-6 text-gray-300 dark:text-gray-600" />
                    </div>
                    <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mb-1">
                      No questions found
                    </p>
                    <p className="text-xs text-gray-300 dark:text-gray-600">
                      Try adjusting your search or filter
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── Bottom CTA ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-10"
          >
            <div className="relative group">
              <div className="absolute -inset-px bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-5 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-2xl px-7 py-6 overflow-hidden">
                {/* Background */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-700 dark:to-zinc-700 rounded-xl border border-blue-100 dark:border-zinc-600 shadow-2xl shadow-gray-100">
                    <MessageCircleQuestion className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 dark:text-white mb-0.5">
                      Still have questions?
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Feel free to reach out — I&apos;d love to{' '}
                      <span className="text-gray-600 dark:text-gray-300 font-semibold">
                        hear from you
                      </span>
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative cursor-pointer z-10 group/btn overflow-hidden flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-2 text-sm font-bold text-white dark:text-gray-900 dark:group-hover/btn:text-white px-6 py-3 rounded-xl transition-colors duration-500">
                    <MousePointerClick className="w-4 h-4" />
                    <span>Contact Me</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-purple-300/20 to-transparent" />
      </motion.div>
    </section>
  );
}