"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bgSalam from "../public/images/bg-salam.png";

export default function UcapanSalamSection() {
  return (
    <section className="w-full h-screen py-16 flex justify-center items-start relative overflow-hidden">
      {/* Background bunga halus */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgSalam.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-lg px-10 w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Ucapan Salam */}
        <p className="text-[#92400e] text-md md:text-xl font-medium leading-relaxed mb-4">
          Syalom Salam Sejahtera, <br />
          Dengan ini kami ingin mengundang kehadiran Saudara/i <br />
          untuk menghadiri acara Ulang Tahun anak kami:
        </p>

        {/* Balon + Bayi */}
        <div className="relative -top-20 lg:-top-10 mt-4 mb-6">
          {/* Balon */}

          {/* Bayi */}
          <Image
            src={"/images/salamImg.svg"} // ganti dengan foto bayi
            alt="Baby"
            width={280}
            height={280}
            className="relative z-10 rounded-full lg:mb-10"
          />
          {/* Nama Anak */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#92400e] mb-1">
            Gabrian Hawkins Supit
          </h2>

          {/* Nama Orang Tua */}
          <p className="text-amber-600 text-md md:text-lg font-light mt-2">
            <span className="text-sm text-gray-900">Putra Tercinta dari:</span>{" "}
            <br />
            Alandhika Supit <br /> & <br /> Intan Kairupan
          </p>
        </div>
      </motion.div>

      {/* Karakter One Piece */}
      <div className="absolute bottom-0 left-4 w-36 md:w-48">
        <Image
          src={"/images/ussop.svg"}
          alt="Usopp"
          width={80}
          height={80}
          className="w-[100px] lg:w-[150px] h-auto"
        />
      </div>
      <div className="absolute -bottom-8 -right-15 lg:-right-5 w-48 md:w-48">
        <Image
          src={"/images/chopper.svg"}
          alt="Chopper"
          width={180}
          height={180}
          className="w-[200px] md:w-[300px] h-auto"
        />
      </div>
    </section>
  );
}
