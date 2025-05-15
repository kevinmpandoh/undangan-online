"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UcapanSalamSection() {
  return (
    <section className="w-full py-16 flex justify-center items-center bg-blue-100 relative overflow-hidden">
      {/* Background bunga halus */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1000&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      <motion.div
        className="relative z-10 bg-white/80 px-8 py-12 max-w-xl w-[80%] rounded-3xl shadow-lg text-center backdrop-blur-md border border-blue-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 leading-relaxed">
          Shalom, Salam Sejahtera
        </h2>

        <p className="text-md md:text-lg text-gray-800 mb-8">
          Dengan ini kami ingin mengundang kehadiran Saudara/i untuk menghadiri
          acara ulang tahun anak kami:
        </p>

        {/* Foto anak */}
        <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-300 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1503457574464-0ec6bfaa8998?auto=format&fit=crop&w=400&q=80"
            alt="Foto Anak"
            width={160}
            height={160}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Nama anak */}
        <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2">
          Gabrian Hawkins Supit
        </h3>

        {/* Nama orang tua */}
        <p className="text-sm md:text-md text-gray-700">
          Putra tercinta dari <br />
          <span className="font-semibold text-blue-700">Alandhika & Intan</span>
        </p>
      </motion.div>
    </section>
  );
}
