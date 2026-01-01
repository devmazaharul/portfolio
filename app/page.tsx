"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ToolsTechnologies from "./components/ToolsTechnologies";
import Faq from "./components/Faq";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";

const Page = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gray-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="space-y-4">
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Education/>
      <ToolsTechnologies/>
      <Faq/>
      <ContactForm/>
      <Footer/>
      </div>

   
    
    </div>
  );
};

export default Page;
