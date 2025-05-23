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
        <p className="text-[#92400e] text-xl md:text-xl font-medium leading-relaxed mb-4">
          Syalom Salam Sejahtera, <br />
          Dengan ini kami ingin mengundang kehadiran Saudara/i <br />
          untuk menghadiri acara Ulang Tahun anak kami:
        </p>

        {/* Balon + Bayi */}
        <div className="relative -top-20 xl:-top-25 mt-4 mb-6">
          {/* Balon */}

          {/* Bayi */}
          <Image
            src={"/images/salamImg.svg"} // ganti dengan foto bayi
            alt="Baby"
            width={350}
            height={350}
            className="relative z-10 rounded-full py-10 lg:py-5 "
          />
          {/* Nama Anak */}
          <h2 className="text-3xl md:text-3xl font-semibold text-[#92400e] mb-5">
            Gabrian Hawkins Supit
          </h2>

          {/* Nama Orang Tua */}
          <div className="text-amber-600 text-md md:text-lg font-light mt-2 space-y-4">
            <span className="text-sm text-gray-900">Putra Tercinta dari:</span>{" "}
            <br />
            <div className="text-center text-xl">
              Alandhika Supit <br /> & <br /> Intan Kairupan
            </div>
          </div>
        </div>
      </motion.div>

      {/* Karakter One Piece */}
      <div className="absolute bottom-0 left-2 w-46 md:w-48">
        <Image
          src={"/images/ussop.svg"}
          alt="Usopp"
          width={80}
          height={80}
          className="w-[120px] xl:w-[130px] h-auto"
        />
      </div>
      <div className="absolute -bottom-8 -right-15 xl:-right-5 w-56 md:w-48">
        <Image
          src={"/images/chopper.svg"}
          alt="Chopper"
          width={180}
          height={180}
          className="w-[300px] md:w-[300px] h-auto"
        />
      </div>
    </section>
  );
}
