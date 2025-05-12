'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { source } from '@/constant/source';
import Link from 'next/link';


const Sidebar = () => {

  const {role,name,contactInfo:{country}}=source
  return (
   <div className='w-full '>
     <motion.aside
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="h-full w-full  border border-gray-100 md:max-w-xs  dark:bg-neutral-900   dark:border-neutral-700 rounded-xl shadow-2xl shadow-gray-100 p-4 flex flex-col items-center gap-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          alt="owner image"
          className="rounded-full border-2 border-blue-300 shadow-2xl shadow-gray-400 object-cover"
          width={120}
          height={120}
          src={
            'https://amimazaharul.vercel.app/_next/image?url=%2Fmazaharul-islam.png&w=384&q=75'
          }
        />
      </motion.div>

      <div className="text-center">
        <h1 className="text-2xl capitalize font-bold text-gray-900 dark:text-white">
         {name || " Mazaharul Islam"}
        </h1>
        <p className="text-sm capitalize rounded-sm dark:text-gray-400 text-gray-500 font-medium w-fit mx-auto">
          {role || "Software Engineer"} 
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-4 space-y-3 w-full"
      >
        <div className='border-t capitalize leading-8 py-2 border-gray-200'>

        <div className='flex text-gray-600 items-center justify-between overflow-hidden'>
            <p>Residence:</p>
            <p>{country || "Bangladesh"}</p>
          </div>

          <div className='flex text-gray-600 items-center justify-between'>
            <p>time Zone:</p>
            <p className='flex items-center gap-1 '>UTC +6:00 </p>
          </div>
          
        </div>


        <div  className='border-t leading-8 py-2 border-gray-200'>
          <h1 className='text-lg font-semibold pb-1'>Skills</h1>
            {source.main_skills.slice(0,6).map((item,idx)=>
            <motion.div   key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }} className=' cursor-context-menu p-1 px-2 m-1 hover:scale-105 ease-in-out duration-200 hover:bg-gray-50 hover:font-semibold rounded-md'>{item.title}</motion.div>)}
          
        </div>
         <Link href={"/mazaharul_resume.pdf"} target='_blank' className='btn btn-secondary w-full  font-medium'>Resume</Link>
      
      </motion.div>

    </motion.aside>
   </div>
  );
};

export default Sidebar;
