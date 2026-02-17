"use client";

import React from "react";
import Hero from "./components/Hero";
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
      <div className="space-y-4">
      <Hero/>
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
