import React from 'react';
import { motion } from 'framer-motion';

// Component untuk menampilkan proyek farmasi
const Project = () => {
  // Daftar proyek
  const projects = [
    {
      title: 'Skripsi: Formulasi Deo Lotion Antibakteri',
      period: '2020 - Desember 2021',
      description:
        'Merancang dan menguji aktivitas antibakteri sediaan deo lotion berbasis ekstrak etanol rimpang lempuyang wangi (Zingiber zerumbet) terhadap bakteri Staphylococcus hominis.',
      link: 'https://example.com/journal', // Ganti dengan URL jurnal asli
    },
  ];

  // Varian animasi untuk kartu
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    pulse: { scale: [1, 1.02, 1], transition: { duration: 3, repeat: Infinity } },
  };

  // Varian animasi untuk tombol
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section id="project" className="mb-16 sm:mb-24 py-8">
      {/* Judul bagian */}
      <h2 className="section-title text-center">Proyek Farmasi</h2>
      {/* Kontainer untuk kartu, dipusatkan */}
      <div className="flex justify-center">
        <div className="grid gap-6 grid-cols-1 max-w-lg w-full">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="card max-w-md mx-auto border-2 border-transparent"
              variants={cardVariants}
              initial="hidden"
              whileInView={['visible', 'pulse']}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(96, 165, 250, 0.4)' }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{proj.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{proj.period}</p>
              <p className="text-gray-200 mt-4 text-sm sm:text-base leading-relaxed">{proj.description}</p>
              {/* Tombol untuk jurnal */}
              <motion.a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="button mt-6 inline-block text-sm"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Lihat Jurnal
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;