'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { source } from '@/constant/source';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const Sidebar = () => {

  const iconArr=[
<BiLogoTypescript className='text-blue-400'/>,
  <RiNextjsFill className='text-gray-700'/>,
  <FaReact className='text-blue-500'/>,
  <IoLogoNodejs className='text-green-500'/>,
  <SiExpress className='text-gray-800'/>,
  <SiMongodb className='text-green-500'/>,
  <SiPrisma className='text-gray-500'/>,
    <RiTailwindCssFill className='text-blue-300'/>
  ]


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
        <div className='border-t capitalize leading-9 py-2 border-gray-200'>

        <div className='flex text-gray-600 items-center justify-between overflow-hidden'>
            <p>Github:</p>
            <Link target='_blank' href={"https://github.com/devmazaharul"} className='text-2xl'><FaGithub/></Link>
          </div>

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
          <h1 className='text-lg font-semibold pb-1 capitalize'>main Skills</h1>




         <div className='grid grid-cols-3 md:grid-cols-1 lg:grid-cols-2'>
             {source.main_skills.slice(0,8).map((item,idx)=>
            <motion.div   key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }} className='  m-1 ease-in-out text-center border text-gray-500 border-gray-200 rounded-md px-1 flex items-center gap-1'>{iconArr[idx]} {item.title}</motion.div>)}
         </div>
          
        </div>
         <Link href={"/mazaharul_resume.pdf"} target='_blank' className='btn btn-primary w-full text-gray-100  font-semibold'>Resume</Link>
      
      </motion.div>

    </motion.aside>
   </div>
  );
};

export default Sidebar;
