"use client";

import { useEffect, useState } from "react";

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
    <section className="py-16 bg-white flex flex-col items-center text-center px-4">
      <div className="max-w-md w-full p-6 border-4 border-amber-300 rounded-[40px] shadow-xl relative bg-gradient-to-br from-amber-50 via-white to-amber-100">
        <h2 className="text-4xl font-bold text-amber-700 mb-4 tracking-wide">
          HAWKINS
        </h2>

        <div className="w-40 h-52 mx-auto mb-4 rounded-[40px] overflow-hidden border-4 border-amber-200">
          <img
            src="https://placehold.co/300x400?text=Hawkins&font=playfair"
            alt="Hawkins"
            className="object-cover w-full h-full"
          />
        </div>

        <p className="text-xl font-medium text-amber-700 mb-2 tracking-wide">
          BIRTHDAY PARTY
        </p>
        <p className="text-sm font-medium text-gray-500">KAMIS, 29 MEI 2025</p>

        <p className="mt-4 text-amber-700 font-semibold">
          Ditunggu kehadirannya yah...
        </p>
        <p className="text-amber-700 italic mb-6">Tuhan Yesus Memberkati</p>

        <div className="flex justify-center gap-3">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-amber-400 text-white w-14 h-16 rounded-lg flex flex-col justify-center items-center text-sm font-semibold shadow"
            >
              <div className="text-xl">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
