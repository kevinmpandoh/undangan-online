"use client";

import { motion } from "framer-motion";

export default function EventSection() {
  return (
    <section className="w-full h-[900px] flex justify-center items-center bg-pink-100 relative overflow-hidden">
      {/* Background dummy dengan bunga */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=1000&q=80)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />

      <motion.div
        className="relative z-10  w-[80%] px-6 py-10  text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-3 tracking-wide">
          AURILYA
        </h2>

        <div className="relative w-40 h-52 mx-auto mb-4 rounded-full border-4 border-pink-300 overflow-hidden shadow-lg">
          <img
            src={"https://placehold.co/160x160/png?text"}
            alt="Foto Anak"
            // fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <p className="text-md text-gray-700 mb-1">Birthday Party</p>
        <p className="text-lg font-semibold text-pink-500">Kamis, 29 Mei</p>
      </motion.div>
    </section>
  );
}
