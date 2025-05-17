"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {
  const targetDate = new Date("2025-05-29T15:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    // <section className="relative bg-[#f5f2e6] py-16 px-4 text-center">
    //   <div className="absolute top-0 bottom-0 right-0 md:right-12 w-20 md:w-24 z-10">
    //     <Image
    //       src={"/images/countDownCard.svg"}
    //       alt="Luffy"
    //       width={250}
    //       height={250}
    //     />
    //   </div>
    //   {/* Karakter Luffy atas */}
    //   <div className="absolute top-0 right-4 md:right-12 w-20 md:w-24 z-10">
    //     <Image
    //       src={"/images/luffy3.svg"}
    //       alt="Luffy"
    //       width={120}
    //       height={120}
    //     />
    //   </div>

    //   {/* Judul */}
    //   <motion.h2
    //     className="text-3xl md:text-4xl font-black tracking-wide mb-2"
    //     initial={{ opacity: 0, y: 20 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.6 }}
    //     viewport={{ once: true }}
    //   >
    //     BIRTHDAY PARTY
    //   </motion.h2>

    //   <p className="text-xl font-semibold text-gray-700 mb-1">
    //     Kamis <span className="text-red-600 font-bold">29</span> Mei
    //   </p>

    //   <p className="text-gray-600 mt-2 mb-6 leading-relaxed">
    //     Ditunggu kehadirannya ya... <br />
    //     <span className="font-medium">Tuhan Yesus Memberkati</span>
    //   </p>

    //   {/* Countdown */}
    //   <div className="flex justify-center items-center gap-3 flex-wrap max-w-md mx-auto">
    //     <CountdownBox label="Hari" value={timeLeft.days} />
    //     <CountdownBox label="Jam" value={timeLeft.hours} />
    //     <CountdownBox label="Menit" value={timeLeft.minutes} />
    //     <CountdownBox label="Detik" value={timeLeft.seconds} />
    //   </div>

    //   {/* Robin di kiri bawah */}
    //   <div className="absolute bottom-2 left-2 md:left-8 w-24 md:w-28 z-10">
    //     <Image src={"/images/robin.svg"} alt="Robin" width={120} height={120} />
    //   </div>
    // </section>
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#fffff1] px-4 py-16 overflow-hidden">
      {/* <div className="absolute top-0 right-0 left-0 md:right-12 w-20 md:w-24 z-10">
        <Image
          src={"/images/countDownCard.svg"}
          alt="Luffy"
          width={250}
          height={250}
          // className="w-full h-full object-cover"
        />
      </div> */}
      {/* Karakter Luffy atas */}
      <div className="absolute top-2 lg:top-13 right-10 md:right-12 w-20 md:w-48 z-10">
        <Image
          src={"/images/luffy3.svg"}
          alt="Luffy"
          width={120}
          height={120}
        />
      </div>
      <div className="max-w-md w-full p-6 border-3 border-[#bd9f51] rounded-[40px] shadow-xl relative bg-gradient-to-br from-amber-50 via-white to-amber-100">
        <h2 className="text-4xl text-center font-bold text-amber-700 mb-4 tracking-wide">
          HAWKINS
        </h2>

        <div className="flex flex-col justify-center items-center mb-4  overflow-hidden ">
          <Image
            src={"/images/imageCountdown.svg"}
            alt="Foto"
            width={80}
            height={80}
            className="w-48 h-auto "
          />
          <p className="text-xl font-medium text-amber-700 my-2 tracking-wide">
            BIRTHDAY PARTY
          </p>
          <p className="text-sm font-medium text-gray-500">
            KAMIS, 29 MEI 2025
          </p>

          <p className="mt-4 text-amber-700 font-semibold">
            Ditunggu kehadirannya yah...
          </p>
          <p className="text-amber-700 italic mb-6">Tuhan Yesus Memberkati</p>
        </div>

        <div className="flex justify-center gap-3">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#c8a650] z-30 text-white w-14 h-16 md:w-16 lg:h-18 rounded-lg flex flex-col justify-center items-center text-sm font-semibold shadow"
            >
              <div className="text-xl md:text-2xl">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs lg:text-sm mt-1 font-normal">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-10 lg:bottom-30 -left-8 md:left-4 w-36 md:w-56 z-10">
        <Image src={"/images/robin.svg"} alt="Robin" width={180} height={180} />
      </div>
    </section>
  );
}

function CountdownBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-[#c8a650] text-white px-4 py-2 rounded-xl shadow-md min-w-[70px]">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm">{label}</div>
    </div>
  );
}
