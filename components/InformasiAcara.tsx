"use client";

import { CalendarDays, MapPin, MapPinned } from "lucide-react";
import { motion } from "framer-motion";
import backgroundImage from "../public/images/infoAcaraBg.png"; // bisa gunakan background dengan corak emasimport Image from "next/image";
import Image from "next/image";

export default function InformasiAcaraSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#fff] px-4 py-16 overflow-hidden">
      {/* Background Dekoratif */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      />

      {/* Konten Utama */}
      <motion.div
        className="relative z-10 bg-[#e6b05a] border-2 border-[#caa030] rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-lg "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Judul */}
        <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800 tracking-wide mb-4">
          BIRTHDAY PARTY
        </h2>

        {/* Ikon Kalender */}
        <div className="flex items-center justify-center gap-2 text-gray-700 mb-2">
          <div className="w-20 h-1 border-b-2"></div>
          <span className="text-lg">
            <CalendarDays size={18} />
          </span>
          <div className="w-20 h-1 border-b-2"></div>
        </div>
        <div className="text-md lg:text-lg">
          <span className="text-md text-gray-800 mb-1">Kamis</span>
          <p className="text-md text-gray-800 mb-1">29 Mei 2025</p>
          <p className="text-md text-gray-800 mb-4">15.00 - Selesai</p>
        </div>

        {/* Ikon Lokasi */}
        <div className="flex items-center justify-center gap-2 text-gray-700 mb-2 mt-4">
          <div className="w-20 h-1 border-b-2"></div>
          <span className="text-lg">
            <MapPin size={18} />
          </span>
          <div className="w-20 h-1 border-b-2 "></div>
        </div>
        <p className="text-sm lg:text-lg text-gray-800 leading-relaxed mb-4">
          Kel. Supit - Kairupan <br />
          Lorong Kulo, Jaga 1, Desa Parepei <br />
          Kec. Remboken, Minahasa
        </p>

        {/* Tombol Google Maps */}
        <a
          href="https://maps.app.goo.gl/VvJw16GRmEEPwZZy5?g_st=ac" // ganti link sesuai koordinat
          target="_blank"
          rel="noopener noreferrer"
          className=" flex justify-center items-center gap-2 mt-2 border-2 text-black hover:text-amber-800 text-sm font-light px-2 py-2 rounded-full hover:border-amber-800 transition"
        >
          <MapPinned size={18} /> <span>OPEN GOOGLE MAPS</span>
        </a>
      </motion.div>

      {/* Kapal di kanan bawah */}
      <div className="absolute z-20 bottom-4 -right-15 lg:-right-10 ">
        <Image
          src={"/images/ship.svg"}
          alt="Ship"
          width={150}
          height={150}
          className="w-48 md:w-48 h-auto"
        />
      </div>
    </section>
  );
}
