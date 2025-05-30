import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="header-gradient sticky top-0 z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container flex justify-between items-center py-4">
        <h1 className="text-lg sm:text-xl font-semibold text-white tracking-tight">Muhammad Sigit Khumaedi</h1>
        <div className="sm:hidden">
          <div className="hamburger flex flex-col space-y-1.5" onClick={toggleMenu}>
            <span className={`hamburger-line ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </div>
        <motion.nav
          className={`nav-menu ${isOpen ? 'block' : 'hidden sm:flex'}`}
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 mt-4 sm:mt-0">
            <motion.li variants={linkVariants}><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>Tentang</a></motion.li>
            <motion.li variants={linkVariants}><a href="#experience" className="nav-link" onClick={() => setIsOpen(false)}>Pengalaman</a></motion.li>
            <motion.li variants={linkVariants}><a href="#project" className="nav-link" onClick={() => setIsOpen(false)}>Proyek</a></motion.li>
            <motion.li variants={linkVariants}><a href="#philosophy" className="nav-link" onClick={() => setIsOpen(false)}>Filosofi</a></motion.li>
            <motion.li variants={linkVariants}><a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Keahlian</a></motion.li>
            <motion.li variants={linkVariants}><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Kontak</a></motion.li>
          </ul>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;