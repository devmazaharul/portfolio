'use client';

import {
  Briefcase,
  Newspaper,
  ShieldCheck,
  Server,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Code2,
  Zap,
  MousePointerClick,
} from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import React from 'react';

// ─── Data Configuration ───
const services = [
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: 'SaaS Web App Development',
    shortTitle: 'SaaS Apps',
    description:
      'Scalable, secure SaaS apps with Next.js, PostgreSQL, Prisma, and full auth system. Perfect for startup MVPs.',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-600',
    lightGradient: 'from-emerald-50 to-teal-50/50',
    borderColor: 'border-emerald-100',
    hoverBorder: 'hover:border-emerald-200',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    accentColor: '#059669',
    glowColor: 'shadow-emerald-100/60',
    badgeText: 'Most Popular',
    features: ['Next.js & React', 'PostgreSQL + Prisma', 'JWT Authentication', 'Stripe Integration'],
    tag: 'STARTUP',
  },
  {
    icon: <Server className="w-7 h-7" />,
    title: 'Secure API Development',
    shortTitle: 'REST APIs',
    description:
      'Robust RESTful APIs with Express, MongoDB, rate limiting, validation, and comprehensive documentation.',
    color: 'blue',
    gradient: 'from-blue-500 to-indigo-600',
    lightGradient: 'from-blue-50 to-indigo-50/50',
    borderColor: 'border-blue-100',
    hoverBorder: 'hover:border-blue-200',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    accentColor: '#2563eb',
    glowColor: 'shadow-blue-100/60',
    badgeText: 'Enterprise',
    features: ['Express & Node.js', 'MongoDB & Mongoose', 'Rate Limiting', 'Swagger Docs'],
    tag: 'BACKEND',
  },
  {
    icon: <Newspaper className="w-7 h-7" />,
    title: 'CMS-based Business Website',
    shortTitle: 'CMS Sites',
    description:
      'Dynamic website with custom CMS, blog system, image uploads, and SEO-friendly content management.',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-600',
    lightGradient: 'from-violet-50 to-purple-50/50',
    borderColor: 'border-violet-100',
    hoverBorder: 'hover:border-violet-200',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    accentColor: '#7c3aed',
    glowColor: 'shadow-violet-100/60',
    badgeText: 'Creative',
    features: ['Custom CMS', 'Blog System', 'SEO Optimized', 'Image CDN'],
    tag: 'CONTENT',
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: 'Custom Admin Dashboard',
    shortTitle: 'Dashboards',
    description:
      'Role-based dashboards with JWT auth, Prisma API, data filtering, analytics, and modern UI components.',
    color: 'amber',
    gradient: 'from-amber-500 to-orange-600',
    lightGradient: 'from-amber-50 to-orange-50/50',
    borderColor: 'border-amber-100',
    hoverBorder: 'hover:border-amber-200',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    accentColor: '#d97706',
    glowColor: 'shadow-amber-100/60',
    badgeText: 'Advanced',
    features: ['Role-Based Access', 'Data Analytics', 'Real-time Updates', 'ShadCN UI'],
    tag: 'DASHBOARD',
  },
];

// ─── Tilt Card Wrapper ───
const TiltCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    rotateX.set(-(mouseY / rect.height) * 8);
    rotateY.set((mouseX / rect.width) * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
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
      y: [0, -12, 0],
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.4, 1],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

// ─── Service Card Component ───
const ServiceCard = ({
  service,
  idx,
}: {
  service: (typeof services)[0];
  idx: number;
}) => {


  return (
    <TiltCard>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: idx * 0.15,
          type: 'spring',
          stiffness: 100,
        }}
        viewport={{ once: true }}
        className="relative h-full group"
      >
        {/* Outer glow */}
        <motion.div
          className={`absolute -inset-px bg-gradient-to-b ${service.gradient} rounded-[22px] opacity-0 group-hover:opacity-100 blur-[1px] transition-opacity duration-700`}
        />

        {/* Card body */}
        <div
          className={`relative h-full bg-gradient-to-br ${service.lightGradient} dark:from-zinc-900 dark:to-zinc-900/80 border ${service.borderColor} dark:border-zinc-800 ${service.hoverBorder} dark:hover:border-zinc-600 rounded-[22px] overflow-hidden transition-all duration-500 group-hover:shadow-2xl ${service.glowColor}`}
        >
          {/* ─── Background Effects ─── */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.8),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02),transparent_70%)]" />

          {/* Grid dots pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700"
            style={{
              backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Corner decoration */}
          <motion.div
            className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${service.gradient} opacity-[0.04] group-hover:opacity-[0.08] group-hover:scale-125 transition-all duration-700`}
          />

          {/* Floating particles */}
          <FloatingParticle delay={0} x="85%" y="20%" size={4} color={`bg-${service.color}-400`} />
          <FloatingParticle delay={1.5} x="10%" y="70%" size={3} color={`bg-${service.color}-300`} />

          {/* ─── Content ─── */}
          <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
            {/* Top row: Tag + Number */}
            <div className="flex items-center justify-between mb-5">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
                className={`text-[10px] font-bold tracking-[0.2em] ${service.iconColor} dark:text-gray-400 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-sm border ${service.borderColor} dark:border-zinc-700 rounded-full px-3 py-1`}
              >
                {service.tag}
              </motion.span>
              <span className="text-[40px] font-black text-gray-100 dark:text-zinc-800 leading-none select-none group-hover:text-gray-200 dark:group-hover:text-zinc-700 transition-colors duration-500">
                0{idx + 1}
              </span>
            </div>

            {/* Icon */}
            <motion.div
              className={`w-14 h-14 rounded-2xl ${service.iconBg} dark:bg-zinc-800 border ${service.borderColor} dark:border-zinc-700 flex items-center justify-center mb-5 ${service.iconColor} dark:text-gray-300 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl shadow-gray-100`}
              whileHover={{ rotate: 10, scale: 1.15 }}
            >
              {service.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2.5 leading-tight group-hover:text-gray-900 transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-grow">
              {service.description}
            </p>

            {/* Features list */}
            <motion.div
              className="space-y-2 mb-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.3 + idx * 0.1 },
                },
              }}
            >
              {service.features.map((feature, fIdx) => (
                <motion.div
                  key={fIdx}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2
                    className={`w-3.5 h-3.5 ${service.iconColor} dark:text-gray-500 flex-shrink-0`}
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-zinc-700 to-transparent mb-4" />

            {/* Bottom CTA */}
            <motion.div
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-1.5">
                <Zap
                  className={`w-3.5 h-3.5 ${service.iconColor} dark:text-gray-500`}
                />
                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  {service.badgeText}
                </span>
              </div>

              
            </motion.div>
          </div>

          {/* ─── Bottom Gradient Bar ─── */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + idx * 0.15 }}
            viewport={{ once: true }}
          >
            <div className={`h-full bg-gradient-to-r ${service.gradient} rounded-full`} />
          </motion.div>
        </div>
      </motion.div>
    </TiltCard>
  );
};

// ─── Main Component ───
export default function Servicecard() {
  return (
    <div className="w-full mx-auto px-4 py-12 md:py-16">
      {/* ─── Section Header ─── */}
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
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-800 border border-blue-100 dark:border-zinc-700 mb-5"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Layers className="w-4 h-4 text-blue-500 dark:text-blue-400" />
          </motion.div>
          <span className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-[0.15em]">
            What I Offer
          </span>
        </motion.div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white mb-4 tracking-tight">
          Services that{' '}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700">
              drive results
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
          From concept to deployment — I build production-ready applications
          tailored to your business needs.
        </p>

        {/* Decorative dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
              viewport={{ once: true }}
              className={`w-2 h-2 rounded-full bg-gradient-to-r ${s.gradient}`}
            />
          ))}
        </div>
      </motion.div>

      {/* ─── Cards Grid ─── */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} idx={idx} />
        ))}
      </div>

      {/* ─── Bottom CTA Strip ─── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 relative group"
      >
        <div className="absolute -inset-px bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-emerald-200/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-5 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl px-8 py-6 overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-800 rounded-xl border border-blue-100 dark:border-zinc-700">
              <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800 dark:text-white mb-0.5">
                Need a custom solution?
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Let&apos;s discuss your project requirements and build something{' '}
                <span className="text-gray-600 dark:text-gray-300 font-semibold">
                  amazing together
                </span>
                .
              </p>
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-2">
            {/* Stats pills */}
            <div className="hidden md:flex items-center gap-1">
              <span className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-full px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Available Now
              </span>
             
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative group/btn overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2 text-sm font-bold text-white dark:text-gray-900 dark:group-hover/btn:text-white px-2 py-2 rounded-xl transition-colors duration-500">
                <MousePointerClick className="w-4 h-4" />
                <span>Get Started</span>
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
  );
}