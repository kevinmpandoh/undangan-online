"use client";
import { Mail, MailOpen, Music, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import bgHero from "../public/images/image1.jpg";

interface HeroSectionProps {
  onOpen: () => void;
  opened: boolean;
  tamuUndangan: string | null;
}

export default function HeroSection({
  onOpen,
  opened,
  tamuUndangan,
}: HeroSectionProps) {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgHero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Konten */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-30 flex flex-col items-center text-center mt-[280px] text-white px-4"
      >
        <h1 className="text-4xl text-amber-300 md:text-4xl font-bold mb-2">
          Hawkins Supit
        </h1>
        <p className="text-xl md:text-2xl mb-1">BIRTHDAY PARTY</p>
        <p className="mt-4 text-md md:text-lg">Dear :</p>
        <p className="text-2xl md:text-3xl font-semibold italic text-amber-300">
          {tamuUndangan}
        </p>
        <p className="text-sm mt-2 italic">
          Mohon Maaf Bila Ada Kesalahan Pada Penulisan Nama/Gelar
        </p>

        <button
          onClick={onOpen}
          className="mt-6 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black rounded-full flex items-center gap-2 shadow-lg transition"
        >
          {opened ? <MailOpen /> : <Mail />}
          BUKA UNDANGAN
        </button>
      </motion.div>
    </section>
  );
}
