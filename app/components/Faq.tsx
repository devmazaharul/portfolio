'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in MERN Stack, Next.js, Tailwind CSS, PostgreSQL, Prisma, and modern web tools like Docker and GitHub Actions.',
  },
  {
    question: 'Do you have experience with full-stack development?',
    answer:
      'Yes, I work on both frontend and backend, including building REST APIs, database management, authentication, and deployment.',
  },
  {
    question: 'Can you work with custom UI/UX designs?',
    answer:
      'Absolutely! I can work from Figma files or design custom components using Tailwind and ShadCN.',
  },
  {
    question: 'Are your projects mobile responsive?',
    answer:
      'Yes, I always build responsive layouts that work seamlessly on all screen sizes using Tailwind CSS and responsive best practices.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-14 px-6 shadow-2xl shadow-gray-100 border border-gray-100 rounded-2xl dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">❓Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
              className=" dark:border-zinc-700 rounded-2xl overflow-hidden  border border-gray-100  not-last-of-type:"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full cursor-pointer  flex justify-between items-center p-5 text-left  dark:bg-zinc-800  dark:hover:bg-zinc-700 transition"
              >
                <span className="font-medium ">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
  {openIndex === index && (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="px-5 pb-5 pt-2 text-sm leading-relaxed text-gray-500 dark:bg-zinc-900"
    >
      {faq.answer}
    </motion.div>
  )}
</AnimatePresence>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
