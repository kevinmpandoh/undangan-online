"use client";

import { CalendarIcon, HomeIcon, MapPin, MapPinIcon } from "lucide-react";
import { motion } from "framer-motion";
import bgEvent from "../public/images/informasiAcaraBg.png";

export default function InformasiAcaraSection() {
  return (
    <section className="w-full h-screen py-16  flex justify-center items-center relative">
      {/* Background ornamen tipis */}
      <div
        // className="absolute inset-0 z-0 bg-center bg-cover"
        className="relative w-full min-h-screen flex items-center justify-center bg-center bg-no-repeat 
             bg-cover sm:bg-contain sm:bg-top"
        style={{
          backgroundImage: `url(${bgEvent.src})`,
        }}
      />

      {/* <motion.div
        className="relative z-10 bg-white/80 max-w-lg w-[80%] rounded-3xl p-8 md:p-10 text-center shadow-lg border border-blue-200 backdrop-blur-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
          Birthday Party
        </h2> */}

      {/* Tanggal & Waktu */}
      {/* <div className="mb-6">
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
            <CalendarIcon className="w-5 h-5" />
            <span className="font-semibold">Kamis</span>
          </div>
          <p className="text-md text-gray-700">29 Mei 2025</p>
          <p className="text-md text-gray-700">15.00 - Selesai</p>
        </div> */}

      {/* Lokasi */}
      {/* <div className="mb-6">
          <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
            <HomeIcon className="w-5 h-5" />
            <span className="font-semibold">Lokasi Acara</span>
          </div>
          <p className="text-lg font-semibold text-blue-700">
            Kel. Supit - Kairupan
          </p>

          <p className="text-sm text-gray-800">
            Lorong Kulo, Jaga 1 Desa Parepei
          </p>
        </div> */}

      {/* Tombol Maps */}
      {/* <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          //   className="inline-flex items-center gap-2 px-6 py-2 bg-blue-300  text-black rounded-full shadow-md transition"
          className="max-w-xs bg-blue-500 flex items-center justify-center gap-2 px-2 py-2 text-white rounded-full shadow-md transition hover:bg-blue-600"
        >
          <MapPin size={18} />
          OPEN GOOGLE MAPS
        </a> */}
      {/* </motion.div> */}
    </section>
  );
}
