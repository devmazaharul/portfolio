import React from "react";
import { motion } from "framer-motion";
import Commoncard from "./Commoncard";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { source } from "@/constant/source";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <>
      <Commoncard
        title="End-to-End Web Development"
        tag="project"
        name="Projects"
      >
        <p className="text-gray-400 dark:text-gray-400   md:w-6/7" >
          I build scalable, modern web solutions from idea to deployment — SaaS
          platforms, e-commerce systems, admin dashboards, and more.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {source.projects.map((project, idx) => (
            <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className=" dark:bg-zinc-900 shadow-2xl shadow-gray-100 dark:shadow-zinc-700 border border-gray-100 dark:border-zinc-800 rounded-2xl p-6 hover:border-gray-200 dark:hover:border-zinc-600 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-gray-400 dark:text-gray-400 mb-4 text-sm">
                {project.description}
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="btn btn-primary flex gap-1 transition text-sm"
                >
                  <ExternalLink size={16} /> Live Site
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                >
                  <FiGithub size={16} /> GitHub
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Commoncard>
    </>
  );
};

export default Projects;
