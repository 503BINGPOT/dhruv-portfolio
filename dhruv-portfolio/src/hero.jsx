import React from 'react';
import { useState,useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
      const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth', 
      block: 'start',     
    });
  }
};

const [activeSection, setActiveSection] = useState("home");

useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "about", "education", "skills", "projects", "contact"];

    for (let id of sections) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
          break;
        }
      }
    }
  };
    window.addEventListener("scroll", handleScroll);
  handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    return(
        <section 
        id="home"
        className='relative min-h-screen snap-start  bg-gradient-to-br from-gray-900/80 to-black/80 text-white flex flex-col justify-center items-center text-center px-4 animate-fade-in'>
            <motion.h1 
  initial={{ opacity: 0, y: 100, scale: 0.5, }}
  animate={{ opacity: 1, y: 0, scale: 1,}}
  transition={{
    duration: 1.2,
    delay: 0.2,
    ease: [0.175, 0.885, 0.32, 1.275] 
  }}
            className=' text-4xl md:text-6xl font-bold mb-4'>
                Hi, I'm <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500'>Dhruv Mantri</span>
            </motion.h1>
            <motion.p
  initial={{ opacity: 0, y: 80, scale: 0.8 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1,
    delay: 0.6,
    ease: "easeOut"
  }}
            className='text-lg md:text-xl text-gray-400 max-w-xl'>
                A Pre-final year student 
            </motion.p>    
            <motion.div 
    initial={{ opacity: 0, y: 60, scale: 0.7 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1,
    delay: 1.2,
    ease: [0.175, 0.885, 0.32, 1.275],
  }}
            className='flex gap-4 mt-8'>
                <button onClick={() => scrollToSection('project')}
                className=' transition-all duration-300 bg-gradient-to-r from-gray-700 to-gray-800  bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-gray-800/25 border border-gray-600'> 
                    View my work
                </button>
                <button onClick={() => scrollToSection('contact')}
                className='border border-gray-500 hover:bg-gray-800 px-6 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-gray-800/25 transition-all duration-300'>
                    Get In Touch
                </button>
            </motion.div>
            <motion.a
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{duration:1, delay:1}}
            href="#about" className='absolute bottom-6'>
                <div className='w-6 h-10 border-2 border-gray-500 rounded-full fels justify-center items-start p-1 flex gap-2 animate-pulse'>
                    <div className='w-2 h-2 bg-gray-500 rounded-full animate-bounce '></div>
                </div>
            </motion.a>
        </section>
    );
}

export default Hero;