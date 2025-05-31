import React from 'react';
import { motion } from 'framer-motion';

// Daftar pengalaman profesional
const Experience = () => {
  const experienceList = [
    {
      title: 'Magang Apoteker',
      company: 'PT Bio Farma',
      period: '2013',
      description:
        'Melakukan pengemasan produk dengan standar tinggi, memastikan kualitas, keamanan, dan efektivitas obat sesuai prosedur ketat untuk distribusi yang andal.',
    },
    {
      title: 'Asisten Apoteker',
      company: 'Apotek Jalupang Farma',
      period: '2021 - 2025',
      description:
        'Menyediakan pelayanan farmasi yang berfokus pada kebutuhan pasien, termasuk konseling obat, pengelolaan resep, dan edukasi kesehatan untuk meningkatkan kepatuhan pengobatan.',
    },
  ];

  // Varian animasi untuk kartu
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    pulse: { scale: [1, 1.02, 1], transition: { duration: 4, repeat: Infinity } },
  };

  return (
    <section id="experience" className="mb-16 sm:mb-20">
      {/* Judul bagian */}
      <h2 className="section-title text-center">Pengalaman Kerja</h2>
      {/* Kontainer grid untuk kartu, dipusatkan */}
      <div className="flex justify-center">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-4xl w-full">
          {experienceList.map((exp, index) => (
            <motion.div
              key={index}
              className="card max-w-md mx-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView={['visible', 'pulse']}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, translateY: -5, boxShadow: '0 0 25px rgba(96, 165, 250, 0.4)' }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{exp.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                {exp.company} | {exp.period}
              </p>
              <p className="text-gray-200 mt-3 text-sm sm:text-base">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
