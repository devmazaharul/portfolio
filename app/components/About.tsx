"use client"
import React, { useEffect } from 'react';
import Commoncard from './Commoncard';
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { Briefcase, FolderKanban, Star, Rocket } from "lucide-react";

const About = () => {
  const expCount = useMotionValue(0);
  const projectCount = useMotionValue(0);
  const reviewCount = useMotionValue(0);
  const runningCount = useMotionValue(0);

  const roundedExp = useTransform(() => Math.round(expCount.get()));
  const roundedProject = useTransform(() => Math.round(projectCount.get()));
  const roundedReview = useTransform(() => Math.round(reviewCount.get()));
  const roundedRunning = useTransform(() => Math.round(runningCount.get()));

  useEffect(() => {
    const controls = [
      animate(expCount, 5, { duration: 3 }),
      animate(projectCount, 67, { duration: 3 }),
      animate(reviewCount, 59, { duration: 3 }),
      animate(runningCount, 4, { duration: 3 }),
    ];
    return () => controls.forEach(control => control.stop());
  }, [expCount,roundedProject,roundedReview,runningCount,projectCount,reviewCount]);

  const stats = [
    { label: "Years+ Experience", value: roundedExp, icon: <Briefcase className="text-gray-600 w-6 h-6" /> },
    { label: "Total Projects", value: roundedProject, icon: <FolderKanban className="text-blue-400 w-6 h-6" /> },
    { label: "5 Star Reviews", value: roundedReview, icon: <Star className="text-yellow-500 w-6 h-6" /> },
    { label: "Running Projects", value: roundedRunning, icon: <Rocket className="text-purple-600 w-6 h-6" /> },
  ];

  return (
    <Commoncard name='about' title="About me" tag="about">
      <p className='text-gray-400 leading-7 md:w-11/12'>
        I am Mazaharul Islam, a dedicated web developer with a passion for crafting dynamic and user-friendly websites.
        I specialize in creating seamless digital experiences using Next.js, React.js and Node.js. My goal is to turn ideas into reality with clean, efficient code.
        I also have experience with YAML, Docker, AWS, Swagger/OpenAPI, and have strong English communication skills.
      </p>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-8'>
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className='flex flex-col items-center p-4 rounded-2xl shadow-2xl shadow-gray-50 border hover:border-gray-200 border-gray-100 bg-white'
          >
            <div className="mb-2">{stat.icon}</div>
            <motion.div className='text-4xl font-bold text-gray-800'>{stat.value}</motion.div>
            <span className='text-sm text-gray-500'>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </Commoncard>
  );
};

export default About;
