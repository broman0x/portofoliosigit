import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="mb-16 sm:mb-20">
      <h2 className="section-title text-center">Filosofi & Tujuan Profesional</h2>
      <motion.div
        className="card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Filosofi Saya</h3>
        <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
          Saya percaya profesi apoteker menggabungkan ilmu dan empati untuk menciptakan solusi farmasi yang aman dan personal. Dengan integritas dan kolaborasi, saya berdedikasi untuk memajukan kesehatan masyarakat.
        </p>
        <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Tujuan Karier</h3>
        <ul className="list-disc list-inside text-gray-200 space-y-1.5 text-sm sm:text-base">
          <li>Meraih lisensi apoteker untuk perawatan klinis yang berdampak.</li>
          <li>Mendorong inovasi farmasi melalui penelitian terapan.</li>
          <li>Mengadvokasi akses obat di komunitas kurang terlayani.</li>
          <li>Menjaga keunggulan melalui pembelajaran berkelanjutan.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Philosophy;