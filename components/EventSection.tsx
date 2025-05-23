"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import localFont from "next/font/local";

export default function EventSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#faf2e1] flex items-center justify-center overflow-hidden">
      {/* Background Hiasan Atas */}
      <Image
        src="/images/decor-top.svg" // ganti dengan src sesuai hiasan
        alt="Decor Top"
        width={600}
        height={50}
        className="absolute top-0"
      />

      <motion.div
        className="z-10 flex flex-col items-center text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Nama Anak */}
        <div className="relative z-30 w-full flex justify-center">
          <Image
            src={"/images/nama.svg"}
            width={220}
            height={100}
            alt="Nama"
            className="w-[220px] lg:w-[280px] h-auto absolute top-10"
          />
          <Image
            src="/images/skull.svg" // ganti dengan ikon topi jerami
            alt="Pirate Icon"
            width={150}
            height={150}
            className="absolute -top-40 lg:-top-30"
          />
        </div>

        {/* Foto Anak */}
        <div className="relative mt-4 mb-4">
          <Image
            src="/images/cardEvent.png" // ganti dengan foto anak
            alt="CARD"
            width={250}
            height={250}
            className="rounded-xl h-[450px] lg:h-[480px] w-auto"
          />
          <Image
            src="/images/hawkins.svg" // ganti dengan foto anak
            alt="CARD"
            width={90}
            height={90}
            className="absolute top-1/3 left-1/5 rounded-xl h-[190px] lg:h-[180px] w-auto"
          />
          <div className="absolute bottom-5 text-center w-full">
            {/* BIRTHDAY PARTY */}
            <h2 className="text-3xl  lg:text-2xl mb-1 tracking-wider font-lilita lg:text-stroke-white font-extrabold text-gray-900">
              BIRTHDAY PARTY
            </h2>

            {/* Tanggal */}
            <p className="text-2xl lg:text-3xl font-bold text-white  lg:text-stroke-black">
              KAMIS,{" "}
              <span
                className={`text-[#d60000] text-5xl lg:text-6xl lg:text-stroke-white font-latin `}
              >
                29
              </span>{" "}
              MEI
            </p>
          </div>
        </div>
      </motion.div>

      {/* Balon Kiri */}
      <Image
        src="/images/balloons-left.svg"
        alt="Balloons Left"
        width={100}
        height={300}
        className="absolute h-[240px] lg:h-[300px] w-auto -left-10 lg:left-0 top-1/3 z-40"
      />

      {/* Balon Kanan */}
      <Image
        src="/images/balloons-right.svg"
        alt="Balloons Right"
        width={100}
        height={300}
        className="absolute h-[230px] lg:h-[300px] w-auto -right-10 lg:-right-4 top-1/3 z-40"
      />

      {/* Karakter Kiri (Luffy) */}
      <Image
        src="/images/luffy.svg"
        alt="Luffy"
        width={80}
        height={100}
        className="w-[130px] lg:w-[110px] h-auto absolute bottom-0 left-4"
      />

      {/* Karakter Kanan (Sanji) */}
      <Image
        src="/images/sabo.svg"
        alt="Sabo"
        width={120}
        height={180}
        className="w-[200px] lg:w-[170px] h-auto absolute -bottom-1 -right-4 md:-right-5"
      />
    </section>
  );
}
