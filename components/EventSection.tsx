"use client";

import { motion } from "framer-motion";
import bgEvent from "../public/images/bgEvent.png";
import Image from "next/image";

export default function EventSection() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgEvent.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="z-30 flex flex-col items-center text-center  text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative w-full h-full mx-auto mb-4 rounded-full  overflow-hidden shadow-lg">
          <Image
            src={"/images/imageEvent.svg"}
            alt="Foto Anak"
            // fill
            style={{ objectFit: "cover", backgroundPosition: "center" }}
            width={300}
            height={300}
          />
        </div>

        <div className="">
          <Image
            src={"/images/textEvent.svg"}
            alt="Foto Anak"
            // fill
            // style={{ objectFit: "cover" }}
            width={300}
            height={300}
          />
          {/* <p className="text-4xl  text-[#52b3ec] mb-1 font-[egizio] font-bold">
            Birthday Party
          </p>
          <p className="text-2xl font-semibold text-[#52b3ec] font-[egizio]">
            KAMIS, <span className="text-[#d60000] text-4xl">29</span> MEI
          </p> */}
        </div>
      </motion.div>
    </section>
  );
}
