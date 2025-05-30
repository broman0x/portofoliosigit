import React from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Philosophy from './components/Philosophy.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

// Komponen utama aplikasi
const App = () => {
  // Varian animasi untuk kontainer utama
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Varian animasi untuk setiap bagian
  const sectionVariants = {
    hidden: { opacity: 0, y: -30, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  // Varian animasi untuk ikon media sosial
  const iconVariants = {
    hover: { scale: 1.2, color: '#60a5fa', transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-[#4682b4]">
      {/* Header */}
      <Header />
      {/* Konten utama dengan animasi */}
      <motion.main
        className="container py-12 sm:py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={sectionVariants}>
          <About />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Experience />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Project />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Philosophy />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Skills />
        </motion.div>
        <motion.div variants={sectionVariants}>
          <Contact />
        </motion.div>
      </motion.main>
      {/* Footer dengan logo Twitter */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6">
        <div className="container">
          <p className="text-sm mb-3">© 2025 Mksigyt. Hak cipta dilindungi.</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://x.com/mksigyt"
              className="footer-link"
              aria-label="Kunjungi profil Twitter Mksigyt"
              variants={iconVariants}
              whileHover="hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-xl sm:text-2xl" />
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;