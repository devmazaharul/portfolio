'use client';

import { Briefcase,  Newspaper, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="w-8 h-8 text-green-600 dark:text-gray-300" />,
    title: 'SaaS Web App Development',
    color:"bg-green-50",
    description:
      'Scalable, secure SaaS apps with Next.js, PostgreSQL, Prisma, and full auth system. Perfect for startup MVPs.',
  },
  {
    icon: (
      <Server className="w-8 h-8 text-blue-400 dark:text-purple-300" />
    ),
    title: 'Secure API Development',
    color:"bg-blue-50",
    description:
      'Complete online store with cart, product CRUD, Cloudinary, and secure Express backend.',
  },
  {
    icon: <Newspaper className="w-8 h-8 text-gray-600 dark:text-gray-300" />,
    title: 'CMS-based Business Website',
    color:"bg-gray-50",
    description:
      'Dynamic website with custom CMS, blog system, image uploads, and SEO-friendly content.',
  },
  {
    icon: (
      <ShieldCheck className="w-8 h-8 text-yellow-600 dark:text-gray-400" />
    ),
    title: 'Custom Admin Dashboard',
    color:"bg-yellow-50",
    description:
      'Role-based dashboards with JWT auth, Prisma API, data filtering, and modern UI using ShadCN and others.',
  },
]

export default function Servicecard() {
  return (
    <div className="w-full mx-auto px-4 py-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, idx) => (
        <motion.div
        key={idx}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        viewport={{ once: true }}


          className={`${service?.color} dark:bg-zinc-900 shadow-4xl shadow-gray-100 dark:shadow-zinc-700  dark:border-zinc-800 rounded-2xl p-5   dark:hover:border-zinc-600 transition duration-300`}
        >
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-lg font-semibold mb-2 text-gray-600 dark:text-white">
            {service.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
