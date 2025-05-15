"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="w-full h-[900px] py-16 flex justify-center items-center bg-blue-50 relative overflow-hidden">
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
        className="relative z-10 bg-white/90 max-w-xl w-[80%] px-6 py-10 rounded-3xl shadow-lg border border-blue-200 text-center backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Dummy carousel image */}
        <div className="w-20 h-20 mx-auto mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Carousel Icon"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 tracking-wide">
          Kalimat Mutiara
        </h2>

        <p className="text-lg italic text-gray-700 mb-3 leading-relaxed">
          "Hai anakku, janganlah engkau melupakan ajaranku, dan biarlah hatimu
          memelihara perintahku, karena panjang umur dan lanjut usia serta
          sejahtera akan ditambahkannya kepadamu."
        </p>

        <p className="text-md font-medium text-blue-600 mt-4">— Amsal 3:1-2</p>
      </motion.div>
    </section>
  );
}
