"use client";

import { motion } from "framer-motion";

const images = [
  "https://placehold.co/600x500?text=Foto+1&font=playfair",
  "https://placehold.co/600x800?text=Foto+2&font=playfair",
  "https://placehold.co/600x500?text=Foto+3&font=playfair",
  "https://placehold.co/600x700?text=Foto+4&font=playfair",
  "https://placehold.co/600x800?text=Foto+5&font=playfair",
  "https://placehold.co/600x500?text=Foto+6&font=playfair",
];

export default function GaleriFotoSection() {
  return (
    <section className="py-16 bg-blue-50 relative overflow-hidden">
      {/* Hiasan Bunga Dummy */}
      <div className="absolute top-0 left-0 right-0 flex justify-center z-0">
        <div className="w-full max-w-2xl h-32 bg-blue-200 rounded-b-[80%] opacity-50" />
      </div>

      <div className="relative z-10 text-center mt-32">
        <h2 className="text-4xl font-bold text-blue-700 font-[cursive]">
          Galeri
        </h2>
      </div>

      <motion.div
        className="columns-2 md:columns-3 gap-4 space-y-4 px-4 md:px-16 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Foto ${index + 1}`}
            className="w-full rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        ))}
      </motion.div>
    </section>
  );
}
