"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import bgQuote from "../public/images/bg-quote.png";

export default function QuoteSection() {
  return (
    <section className="w-full min-h-screen flex justify-center items-center relative overflow-hidden">
      {/* Background dummy dengan bunga */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgQuote.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Isi konten */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Judul */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#92400e] italic mb-6">
          Kalimat mutiara
        </h2>
        {/* Logo Atas */}
        <Image
          src={"/images/logo-sun.svg"}
          alt="Logo"
          width={160}
          height={160}
          className=" mb-4  w-[120px] md:w-[180px] h-auto"
        />

        {/* Frame Kutipan */}
        <div className="relative bg-[#fef3c7] border-4 border-[#facc15] px-6 py-4 rounded-[30px] w-[85%] lg:w-[60%] shadow-md">
          <p className="text-[#b91c1c] font-medium text-lg lg:text-xl leading-relaxed">
            Sebab malaikat-malaikat-Nya akan diperintahkan-Nya kepadamu untuk
            menjaga engkau di segala jalanmu.
          </p>
        </div>

        {/* Referensi Ayat */}
        <p className="text-[#92400e] text-lg italic mt-4">Mazmur 91:11</p>
      </motion.div>

      {/* Ornamen Luffy dan Zoro */}
      <div className="absolute bottom-0 left-0 w-36 md:w-48">
        <Image
          src={"/images/luffy2.svg"}
          alt="Luffy"
          width={130}
          height={130}
          className="w-[150px] lg:w-[200px] h-auto"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-36 md:w-48">
        <Image
          src={"/images/nami.svg"}
          alt="Nami"
          width={130}
          height={130}
          className="w-[150px] lg:w-[240px] h-auto"
        />
      </div>
    </section>
  );
}
