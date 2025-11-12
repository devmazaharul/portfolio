import { source } from "@/constant/source";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GiNetworkBars } from "react-icons/gi";
import { IoFolderOpenOutline } from "react-icons/io5";
import { CiBookmarkPlus } from "react-icons/ci";
import { MessageSquareShare } from 'lucide-react';
import { SiReaddotcv } from "react-icons/si";

const Hero = () => {
  const { title, description } = source;

  return (

    <div className="shadow-2xl py-4 px-6 shadow-gray-100 rounded-2xl border border-gray-100 w-full dark:bg-zinc-900 dark:border-zinc-800">
        <div className='rounded-full mb-3 text-gray-600 gap-2 px-2 py-1 shadow-2xl shadow-gray-100 border border-gray-200 w-fit flex items-center'>
        <CiBookmarkPlus/> Introduce
      </div>
      <div className="md:grid grid-cols-3 gap-4 space-y-6 md:space-y-0">
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl font-bold capitalize  text-gray-900 dark:text-white">
            {title}
          </h1>
          <p className="text-gray-400 text-justify dark:text-gray-400 py-2">{description}</p>

        <div className="pb-1 py-2 flex items-center gap-3">
          <div className="flex items-center gap-1 text-gray-400"><GiNetworkBars className="text-emerald-400"/> <p>Available</p></div>
          <div className="flex items-center gap-1 text-gray-400"><IoFolderOpenOutline size={18} className="text-purple-500"/> <p>Open to remote job</p></div>
   
         
        </div>

        <div className="my-1 flex items-center gap-2">

          <Link  href={source.contactLink} target="_blank" className="gap-1 btn btn-primary rounded-bl-xl rounded-tr-xl w-fit">
          <MessageSquareShare size={18} />Hire me
          </Link>
             <Link href={"/resume_mazaharul_islam.pdf"} target='_blank' className='btn  hover:bg-gray-100 flex gap-2 items-center  w-fit  border border-gray-200'><SiReaddotcv/>Resume</Link>
      
        </div>
       
        </motion.div>

        {/* Right side image with motion */}
        <motion.div
          className="col-span-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            width={500}
            height={500}
            alt="Web Development"
            src="/download (1).png"
            className="w-full h-[190px] md:h-[200px] object-contain "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
