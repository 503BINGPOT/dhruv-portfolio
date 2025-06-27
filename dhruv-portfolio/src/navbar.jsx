import { FaHome, FaUser, FaGraduationCap, FaTools, FaFolderOpen, FaPhone } from 'react-icons/fa';
import { useState,useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
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


  return (
    <motion.nav
    initial={{ opacity: 0, y: -50, scale: 1 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{duration:1, delay:1}}
    
    className="fixed top-0 left-0 w-full backdrop-blur bg-black/30 text-gray-500 flex items-center justify-between px-10 py-6 shadow-md z-50  h-20">
        <h1 className="text-xl font-bold text-white">Portfolio</h1>
<ul className="hidden md:flex gap-4 text-base font-medium">
    <li onClick={() => scrollToSection('home')}
  className={`flex px-4 py-2 rounded-xl items-center gap-2 cursor-pointer transition-all duration-200 ${
    activeSection === 'home' ? 'bg-gray-700 text-white' : 'hover:bg-gray-900 hover:text-white'
  }`}
     ><FaHome/> Home </li>
    <li onClick={() => scrollToSection('about')}
        className={`flex px-4 py-2 rounded-xl items-center gap-2 cursor-pointer transition-all duration-200 ${
    activeSection === 'about' ? 'bg-gray-700 text-white' : 'hover:bg-gray-900 hover:text-white'
  }`}><FaUser/> About</li>
    <li onClick={() => scrollToSection('education')}
       className={`flex px-4 py-2 rounded-xl items-center gap-2 cursor-pointer transition-all duration-200 ${
    activeSection === 'education' ? 'bg-gray-700 text-white' : 'hover:bg-gray-900 hover:text-white'
  }`}><FaGraduationCap/> Education</li>
    <li onClick={() => scrollToSection('skills')} 
    className={`flex px-4 py-2 rounded-xl items-center gap-2 cursor-pointer transition-all duration-200 ${
    activeSection === 'skills' ? 'bg-gray-700 text-white' : 'hover:bg-gray-900 hover:text-white'
  }`}><FaTools/> Skills</li>
    <li onClick={() => scrollToSection('project')}
    className={`flex px-4 py-2 rounded-xl items-center gap-2 cursor-pointer transition-all duration-200 ${
    activeSection === 'projects' ? 'bg-gray-700 text-white' : 'hover:bg-gray-900 hover:text-white'
  }`}><FaFolderOpen/> Projects</li>
    <li onClick={() => scrollToSection('contact')}
    className={`flex px-4 py-2 rounded-xl items-center gap-2 cursor-pointer transition-all duration-200 ${
    activeSection === 'contact' ? 'bg-gray-700 text-white' : 'hover:bg-gray-900 hover:text-white'
  }`}><FaPhone/> Contact</li>

</ul>
    </motion.nav>
  );
};

export default Navbar