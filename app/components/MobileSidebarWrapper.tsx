// app/components/MobileSidebarWrapper.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, ChevronRight } from 'lucide-react';
import Sidebar from './Sidebar';
import Image from 'next/image';
import { source } from '@/constant/source';

const MobileSidebarWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on route change or escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    // Prevent body scroll when sidebar is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* ─── Mobile Top Bar ─── */}
      <div className="lg:hidden sticky top-0 z-30 -mx-3 sm:-mx-4 px-3 sm:px-4 py-3">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-gray-200/60 dark:border-zinc-800 rounded-2xl px-4 py-2.5 shadow-lg shadow-gray-200/30"
        >
          {/* Left: Profile mini */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Image
                src="/Image_mw970imw970imw97.png"
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full border-2 border-white shadow-sm object-cover"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-800 dark:text-white leading-tight">
                {source.name || 'Mazaharul'}
              </h1>
              <p className="text-[10px] text-gray-400 font-medium">
                {source.role || 'Software Engineer'}
              </p>
            </div>
          </div>

          {/* Right: Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-3 py-2 bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-4 h-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-4 h-4" />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="text-[10px] font-bold uppercase tracking-wider">
              {isOpen ? 'Close' : 'Menu'}
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* ─── Mobile Sidebar Overlay ─── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
                mass: 0.8,
              }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-[320px] max-w-[85vw] z-50 overflow-y-auto scrollbar-hide"
            >
              <Sidebar />

              {/* Close hint at bottom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="sticky bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-gray-100/90 dark:from-zinc-900/90 to-transparent"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl text-xs font-bold text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-colors shadow-sm"
                >
                  <ChevronRight className="w-3.5 h-3.5 rotate-180" />
                  Close Sidebar
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileSidebarWrapper;