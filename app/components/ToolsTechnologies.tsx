'use client'
import { FaAws } from "react-icons/fa";
import { SiCloudinary } from "react-icons/si";

import { motion } from 'framer-motion'
import { SiSwagger } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { ImNpm } from "react-icons/im";

import {  SiGit, SiGithub, SiPostman, SiDocker } from 'react-icons/si'
import Commoncard from "./Commoncard";

const tools = [
  { name: 'AWS', icon: <FaAws size={32} className="text-yellow-500" /> },
  { name: 'Git', icon: <SiGit size={32} className="text-orange-600" /> },
  { name: 'GitHub', icon: <SiGithub size={32} className="text-black dark:text-white" /> },
  { name: 'Postman', icon: <SiPostman size={32} className="text-orange-400" /> },
  { name: 'Docker', icon: <SiDocker size={32} className="text-blue-400" /> },
  { name: 'Cloudinary', icon: <SiCloudinary size={32} className="text-gray-700 dark:text-white" /> },
  { name: 'Nginx', icon: <SiNginx size={32} className="text-green-600 dark:text-white" /> },
 
  { name: 'Npm', icon: <ImNpm size={32} className="text-red-700 dark:text-white" /> },
  { name: 'Swagger', icon: <SiSwagger size={32} className="text-green-600 dark:text-white" /> }
]

export default function ToolsTechnologies() {
  return (
<>
<Commoncard tag="tools" title="🛠 Tools & Technologies" name="tools">
  <p className="text-gray-400 md:w-7/8">
  I work with a range of essential tools like VS Code, Git, GitHub, Docker, Figma, and Postman that streamline my development workflow and boost productivity.
  </p>
<div className="grid py-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-100 hover:border-gray-200  dark:bg-zinc-800 shadow-md
              shadow-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center transition"
            >
              {tool.icon}
              <p className="mt-2 text-sm font-semibold">{tool.name}</p>
            </motion.div>
          ))}
        </div>
</Commoncard>
</>
  )
}
