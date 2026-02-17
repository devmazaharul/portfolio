'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Commoncard from './Commoncard';
import { toast } from 'sonner';
import Link from 'next/link';
import { personalInfo, source } from '@/constant/source';
import {
  Send,
  User,
  Mail,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Clock,
  Globe,
  Phone,
  Zap,
  MousePointerClick,
  Loader2,
  Copy,
  Check,
  MessageCircle,
  Calendar,
  Star,
  Heart,
} from 'lucide-react';
import {
  BsGithub,
  BsLinkedin,
  BsTwitterX,
  BsWhatsapp,
  BsEnvelopeFill,
  BsArrowUpRight,
  BsFacebook,
} from 'react-icons/bs';

// ─── Data Configuration ───
const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    value: 'devmazaharul@gmail.com',
    href: 'mailto:devmazaharul@gmail.com',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Bangladesh',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    gradient: 'from-rose-500 to-pink-600',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: 'Timezone',
    value: 'UTC +6:00 (BDT)',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    label: 'Availability',
    value: 'Open to Work',
    isStatus: true,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

const socialContacts = [
  {
    icon: <BsGithub className="w-4 h-4" />,
    label: 'GitHub',
    href: 'https://github.com/devmazaharul',
    hoverBg: 'hover:bg-gray-900 hover:text-white hover:border-gray-900',
    hoverShadow: 'hover:shadow-gray-300/40',
  },
  {
    icon: <BsLinkedin className="w-4 h-4" />,
    label: 'LinkedIn',
    href: '#',
    hoverBg: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
    hoverShadow: 'hover:shadow-blue-300/40',
  },
  {
    icon: <BsFacebook className="w-4 h-4" />,
    label: 'Facebook',
    href:personalInfo.facebook,
    hoverBg: 'hover:bg-sky-500 hover:text-white hover:border-sky-500',
    hoverShadow: 'hover:shadow-sky-300/40',
  },
  {
    icon: <BsWhatsapp className="w-4 h-4" />,
    label: 'WhatsApp',
    href: 'https://wa.me/8801886575932?text=Hello%20I%20want%20to%20develop%20a%20website',
    hoverBg: 'hover:bg-green-500 hover:text-white hover:border-green-500',
    hoverShadow: 'hover:shadow-green-300/40',
  },
];

const responseFeatures = [
  { icon: <Zap className="w-3.5 h-3.5" />, text: 'Fast Response', color: 'text-amber-500' },
  { icon: <Calendar className="w-3.5 h-3.5" />, text: 'Flexible Schedule', color: 'text-blue-500' },
  { icon: <Star className="w-3.5 h-3.5" />, text: 'Quality Work', color: 'text-purple-500' },
  { icon: <Heart className="w-3.5 h-3.5" />, text: 'Dedicated Support', color: 'text-rose-500' },
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
      opacity: [0.15, 0.35, 0.15],
      scale: [1, 1.3, 1],
    }}
    transition={{ duration: 5, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
);

// ─── Input Field Component ───
const FormField = ({
  label,
  name,
  type = 'text',
  placeholder,
  icon,
  value,
  onChange,
  delay,
  isTextarea = false,
  required = true,
  gradient,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  delay: number;
  isTextarea?: boolean;
  required?: boolean;
  gradient: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative group"
    >
      <label
        htmlFor={name}
        className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-2"
      >
        <span className={`${isFocused ? 'text-blue-500' : 'text-gray-400'} transition-colors duration-300`}>
          {icon}
        </span>
        <span>{label}</span>
        {required && (
          <span className="text-rose-400 text-xs">*</span>
        )}
      </label>

      <div className="relative">
        {/* Focus glow */}
        <motion.div
          className={`absolute -inset-px bg-gradient-to-r ${gradient} rounded-2xl opacity-0 blur-[2px] transition-opacity duration-500 ${
            isFocused ? 'opacity-60' : ''
          }`}
        />

        {isTextarea ? (
          <textarea
            id={name}
            name={name}
            rows={5}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            className={`relative w-full bg-white dark:bg-zinc-800/80 border ${
              isFocused
                ? 'border-blue-200 dark:border-blue-500/30 shadow-lg shadow-blue-100/40 dark:shadow-blue-900/20'
                : 'border-gray-200 dark:border-zinc-700 shadow-2xl shadow-gray-100 '
            } rounded-2xl px-4 py-3.5 text-sm text-gray-700 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none transition-all duration-300 resize-none min-h-[120px] max-h-[200px]`}
          />
        ) : (
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            className={`relative w-full bg-white dark:bg-zinc-800/80 border ${
              isFocused
                ? 'border-blue-200 dark:border-blue-500/30 shadow-lg shadow-blue-100/40 dark:shadow-blue-900/20'
                : 'border-gray-200 dark:border-zinc-700 shadow-2xl shadow-gray-100'
            } rounded-2xl px-4 py-3.5 text-sm text-gray-700 dark:text-gray-300 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none transition-all duration-300`}
          />
        )}

        {/* Character count for textarea */}
        {isTextarea && value.length > 0 && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute bottom-3 right-4 text-[10px] font-bold text-gray-300 dark:text-gray-600"
          >
            {value.length}/500
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.name) {
      toast.error('Please provide name and email', {
        description: new Date().toLocaleTimeString('en-us', {
          timeStyle: 'full',
        }),
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast.success('Message sent successfully! 🎉', {
      description: 'I\'ll get back to you within 24 hours.',
    });

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('devmazaharul@gmail.com');
    setCopiedEmail(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <Commoncard title="Get In Touch" name="contact" tag="contact">
      <div className="space-y-8">
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
            </motion.div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
              Let&apos;s Talk
            </span>
          </div>

          <p className="text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
            Have a project idea, a question, or just want to say hi? Fill out the
            form below and I&apos;ll get back to you{' '}
            <span className="text-gray-800 dark:text-gray-200 font-semibold">
              within 24 hours
            </span>
            . Let&apos;s build something{' '}
            <span className="text-gray-800 dark:text-gray-200 font-semibold">
              amazing together
            </span>
            .
          </p>

          {/* Response features */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {responseFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + idx * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"
              >
                <span className={feature.color}>{feature.icon}</span>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Main Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ═══ LEFT: Contact Form (3 cols) ═══ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative">
              {/* Form card glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-blue-200/20 via-purple-200/20 to-transparent rounded-[26px] opacity-0 group-hover:opacity-100 blur-[1px]" />

              <div className="relative bg-gradient-to-br from-gray-50/80 to-white dark:from-zinc-800/50 dark:to-zinc-900/80 border border-gray-100 dark:border-zinc-800 rounded-[24px] p-6 md:p-8 overflow-hidden">
                {/* Background effects */}
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br from-blue-50/60 to-indigo-50/30 dark:from-blue-900/10 dark:to-transparent blur-2xl" />
                <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-gradient-to-tr from-purple-50/40 to-transparent dark:from-purple-900/10 blur-2xl" />

                {/* Dot pattern */}
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #6366f1 0.5px, transparent 0.5px)',
                    backgroundSize: '22px 22px',
                  }}
                />

                {/* Success State */}
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="relative z-10 flex flex-col items-center justify-center py-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-500/10 dark:to-teal-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center mb-5"
                      >
                        <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        Message Sent! 🎉
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Thanks for reaching out. I&apos;ll respond within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="relative z-10 space-y-5"
                    >
                      {/* Form header */}
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 rounded-full bg-red-400" />
                          <span className="w-3 h-3 rounded-full bg-amber-400" />
                          <span className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex-1 h-px bg-gray-100 dark:bg-zinc-700" />
                        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          Contact Form
                        </span>
                      </div>

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          label="Full Name"
                          name="name"
                          placeholder="John Doe"
                          icon={<User className="w-4 h-4" />}
                          value={formData.name}
                          onChange={handleChange}
                          delay={0.1}
                          gradient="from-blue-500 to-indigo-500"
                        />
                        <FormField
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          icon={<Mail className="w-4 h-4" />}
                          value={formData.email}
                          onChange={handleChange}
                          delay={0.15}
                          gradient="from-purple-500 to-violet-500"
                        />
                      </div>

                      {/* Subject */}
                      <FormField
                        label="Subject"
                        name="subject"
                        placeholder="What's this about?"
                        icon={<Sparkles className="w-4 h-4" />}
                        value={formData.subject}
                        onChange={handleChange}
                        delay={0.2}
                        required={false}
                        gradient="from-amber-500 to-orange-500"
                      />

                      {/* Message */}
                      <FormField
                        label="Message"
                        name="message"
                        placeholder="Tell me about your project, idea, or just say hello..."
                        icon={<MessageSquare className="w-4 h-4" />}
                        value={formData.message}
                        onChange={handleChange}
                        delay={0.25}
                        isTextarea
                        gradient="from-emerald-500 to-teal-500"
                      />

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 pt-2"
                      >
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          className="relative group/btn overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed rounded-2xl"
                        >
                          <div className="absolute cursor-pointer -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover/btn:opacity-60 transition-opacity duration-500" />
                          <div className="relative flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] hover:bg-right rounded-xl text-white text-sm font-bold shadow-lg shadow-blue-200/30 dark:shadow-blue-900/30 border border-white/10 transition-all duration-500">
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                <span>Send Message</span>
                                <motion.div
                                  animate={{ x: [0, 4, 0] }}
                                  transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                  <ArrowUpRight className="w-4 h-4" />
                                </motion.div>
                              </>
                            )}
                          </div>
                        </motion.button>

                        <span className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight">
                          I&apos;ll respond<br />within 24hrs
                        </span>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* ═══ RIGHT: Contact Info (2 cols) ═══ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact Info Cards */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                <span className="text-xs font-black text-gray-400 uppercase tracking-[0.15em]">
                  Contact Info
                </span>
              </div>

              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className={`flex items-center gap-3 bg-white dark:bg-zinc-800/50 border ${info.border} dark:border-zinc-700 rounded-2xl px-4 py-3.5 cursor-default hover:shadow-sm hover:border-gray-200/50 dark:hover:border-zinc-600 transition-all duration-300 group`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${info.bg} dark:bg-zinc-700 border ${info.border} dark:border-zinc-600 flex items-center justify-center ${info.color} dark:text-gray-300 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-gray-100`}
                  >
                    {info.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      {info.label}
                    </p>
                    {info.isStatus ? (
                      <span className="flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        {info.value}
                      </span>
                    ) : info.href ? (
                      <Link
                        href={info.href}
                        className="text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors truncate block"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-sm font-bold text-gray-700 dark:text-gray-300 truncate">
                        {info.value}
                      </p>
                    )}
                  </div>

                  {info.href && (
                    <button
                      onClick={info.label === 'Email' ? copyEmail : undefined}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {info.label === 'Email' ? (
                        copiedEmail ? (
                          <Check className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                        )
                      ) : (
                        <BsArrowUpRight className="w-3 h-3 text-gray-400" />
                      )}
                    </button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-1 w-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                <span className="text-xs font-black text-gray-400 uppercase tracking-[0.15em]">
                  Social Profiles
                </span>
              </div>

              <div className="flex items-center gap-2">
                {socialContacts.map((social, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.5 + idx * 0.08,
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
                      className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-500 ${social.hoverBg} transition-all duration-300 shadow-2xl shadow-gray-100hover:shadow-sm ${social.hoverShadow}`}
                    >
                      {social.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-zinc-800/50 dark:to-zinc-900/80 border border-gray-100 dark:border-zinc-800 rounded-2xl p-5"
            >
              {/* Background */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-100/50 to-transparent dark:from-emerald-900/10 blur-2xl" />

              <FloatingParticle delay={0} x="85%" y="20%" size={3} color="bg-emerald-300/30" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-sm font-bold text-gray-800 dark:text-white">
                    Currently Available
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">
                  I&apos;m open for freelance projects, collaborations, and
                  full-time opportunities. Let&apos;s create something great!
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                    Response time:
                  </span>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 rounded-full px-2.5 py-0.5">
                    ~2 hours
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Preferred Contact */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 bg-blue-50/80 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/15 rounded-2xl px-4 py-3"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                  Preferred Contact
                </p>
                <p className="text-xs font-bold text-blue-700 dark:text-blue-300">
                  Email or Contact Form
                </p>
              </div>
              <Zap className="w-4 h-4 text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Commoncard>
  );
};

export default ContactForm;