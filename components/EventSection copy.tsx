"use client";

import { motion } from "framer-motion";

export default function EventSection() {
  return (
    <>
      <motion.div
        className="relative w-full max-w-md h-[900px] rounded-xl overflow-hidden bg-white"
        style={{
          backgroundImage: `url('https://placehold.co/480x960/png?text=Event+Background')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="p-6 text-center bg-white/80 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-blue-600 mb-3 tracking-wide">
            AURILYA
          </h2>

          <div className="relative w-40 h-52 mx-auto mb-4 rounded-full border-4 border-blue-300 overflow-hidden shadow-lg">
            <img
              src={"https://placehold.co/160x160/png?text"}
              alt="Foto Anak"
              // fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <p className="text-md text-gray-700 mb-1">Birthday Party</p>
          <p className="text-lg font-semibold text-blue-500">Kamis, 29 Mei</p>
        </div>
      </motion.div>
    </>
  );
}
