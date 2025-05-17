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
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#faf2e1] px-4 py-16 overflow-hidden">
      {/* <div className="absolute top-20 lg:top-1 -right-10 md:right-12 w-60 md:w-60 z-10">
        <Image
          src={"/images/luffy3.svg"}
          alt="Luffy"
          width={150}
          height={150}
        />
      </div> */}
      <div className="max-w-md w-full  p-6 border-3 border-[#bd9f51] rounded-[40px] shadow-xl relative bg-gradient-to-br from-amber-50 via-white to-amber-100">
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
      <div className="absolute bottom-0 lg:bottom-30 -left-8 md:left-4 w-60 md:w-60 z-10">
        <Image src={"/images/robin.svg"} alt="Robin" width={180} height={180} />
      </div>
    </section>
  );
}
