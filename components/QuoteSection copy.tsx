"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import carouselImage from "@/public/images/carousel.png"; // gambar kuda carousel
import bgQuote from "@/public/images/bg-quote.jpg"; // gambar background quote

export default function QuoteSection() {
  return (
    <section className="w-full py-16 flex justify-center items-center bg-pink-50 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgQuote.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />

      <motion.div
        className="relative z-10 bg-white/90 max-w-xl w-full px-6 py-10 rounded-3xl shadow-lg border border-pink-200 text-center backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-20 h-20 mx-auto mb-4">
          <Image
            src={carouselImage}
            alt="Carousel Icon"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-pink-700 mb-6 tracking-wide">
          Kalimat Mutiara
        </h2>

        <p className="text-lg italic text-gray-700 mb-3 leading-relaxed">
          "Hai anakku, janganlah engkau melupakan ajaranku, dan biarlah hatimu
          memelihara perintahku, karena panjang umur dan lanjut usia serta
          sejahtera akan ditambahkannya kepadamu."
        </p>

        <p className="text-md font-medium text-pink-600 mt-4">— Amsal 3:1-2</p>
      </motion.div>
    </section>
  );
}
