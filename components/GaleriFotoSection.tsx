"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

const images = [
  "https://placehold.co/600x500?text=Foto+1&font=playfair",
  "/images/image4.jpg",
  "https://placehold.co/600x500?text=Foto+3&font=playfair",
  "https://placehold.co/600x700?text=Foto+4&font=playfair",
  "https://placehold.co/600x800?text=Foto+5&font=playfair",
  "https://placehold.co/600x500?text=Foto+6&font=playfair",
];

export default function GaleriFotoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openModal = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const prevPhoto = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
  };

  const nextPhoto = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  return (
    <section className="py-16 bg-amber-50 relative overflow-hidden">
      {/* Hiasan Bunga Dummy */}
      <div className="absolute top-0 left-0 right-0 flex justify-center z-0">
        <div className="w-full max-w-2xl h-32 bg-amber-200 rounded-b-[80%] opacity-50" />
      </div>

      <div className="relative z-10 text-center mt-32">
        <h2 className="text-4xl font-bold text-amber-700 font-[cursive]">
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
            onClick={() => openModal(index)}
            className="w-full rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </motion.div>

      {/* Modal Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            className="absolute p-2 top-4 right-4 text-white text-3xl cursor-pointer hover:bg-white/10 hover:rounded-full"
            onClick={closeModal}
          >
            <X size={36} />
          </button>
          <button
            className="absolute p-2 left-10 text-white text-3xl cursor-pointer hover:bg-white/10 hover:rounded-full"
            onClick={prevPhoto}
          >
            <ChevronLeft size={48} />
          </button>
          <img
            src={images[photoIndex]}
            alt={`Foto ${photoIndex + 1}`}
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
          <button
            className="absolute p-2 right-10 text-white text-3xl cursor-pointer hover:bg-white/10 hover:rounded-full"
            onClick={nextPhoto}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
}
