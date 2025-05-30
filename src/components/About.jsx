import React from 'react';
import { motion } from 'framer-motion';
import fotoprofil from '../images/fotoprofil.png';

// Komponen untuk bagian Tentang Saya
const About = () => {
  // Varian animasi untuk kartu
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    pulse: { scale: [1, 1.02, 1], transition: { duration: 3, repeat: Infinity } },
  };

  // Varian animasi untuk foto
  const imageVariants = {
    hover: { scale: 1.05, rotate: 2, transition: { duration: 0.4 } },
  };

  return (
    <section id="about" className="mb-16 sm:mb-20">
      {/* Judul bagian */}
      <h2 className="section-title text-center">Tentang Saya</h2>
      {/* Kartu dengan foto dan deskripsi */}
      <motion.div
        className="card flex flex-col items-center gap-6 sm:gap-8 md:flex-row md:items-start"
        variants={cardVariants}
        initial="hidden"
        animate={['visible', 'pulse']}
        whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(96, 165, 250, 0.4)' }}
      >
        {/* Foto profil */}
        <motion.img
          src={fotoprofil}
          alt="Muhammad Sigit Khumaedi"
          className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-blue-400 shadow-md"
          variants={imageVariants}
          whileHover="hover"
        />
        {/* Deskripsi */}
        <div className="text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 tracking-tight">
            Muhammad Sigit Khumaedi, S.Farm
          </h3>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
            Sebagai calon apoteker dengan gelar Sarjana Farmasi, saya berdedikasi untuk memajukan
            kesehatan pasien melalui keahlian ilmiah dan empati. Saya berkomitmen untuk memastikan
            penggunaan obat yang aman, efektif, dan inovatif, serta mendorong solusi farmasi yang
            meningkatkan kesejahteraan masyarakat.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;