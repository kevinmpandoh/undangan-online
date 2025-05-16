// src/App.jsx
"use client";
import { useRef, useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import EventSection from "@/components/EventSection";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CirclePlay, CircleStop } from "lucide-react";
import QuoteSection from "@/components/QuoteSection";
import UcapanSalamSection from "@/components/UcapanSalamSection";
import InformasiAcaraSection from "@/components/InformasiAcara";
import GaleriFotoSection from "@/components/GaleriFotoSection";
import CountdownSection from "@/components/CountdownSection";
import UcapanDoaSection from "@/components/UcapanDoaSection";
import UcapanTerimaKasihSection from "@/components/UcapanTerimaKasihSection";
import ReservasiSection from "@/components/ReservasiSection";

export default function App() {
  const searchParams = useSearchParams();
  const tamuUndangan = searchParams.get("to");

  const nextSectionRef = useRef<HTMLDivElement | null>(null);
  const [allowScroll, setAllowScroll] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Saat pertama kali halaman dibuka, scroll ke paling atas
    window.scrollTo(0, 0);

    // Kunci scroll bila belum diizinkan
    document.body.style.overflow = allowScroll ? "auto" : "hidden";
  }, [allowScroll]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleOpenInvitation = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    setAllowScroll(true);
    setTimeout(() => {
      nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // delay agar scroll setelah scroll aktif
  };

  return (
    <>
      <HeroSection
        onOpen={handleOpenInvitation}
        tamuUndangan={tamuUndangan ?? "Tamu Undangan"}
      />

      <section
        ref={nextSectionRef}
        className="w-full min-h-screen flex flex-col lg:flex-row relative bg-white"
      >
        {/* Sticky Gambar - Desktop Saja */}
        <div className="hidden lg:block w-full sticky top-0 h-screen">
          <Image
            src="/images/image7.jpg"
            alt="Aurilya"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-95"
            priority
          />
        </div>

        {/* Konten Scroll - Background Card Style */}
        <div className="flex flex-col w-full justify-center items-center ">
          <EventSection />
          <QuoteSection />
          <UcapanSalamSection />
          <InformasiAcaraSection />
          <GaleriFotoSection />
          <CountdownSection />
          <UcapanDoaSection />
          <ReservasiSection />
          <UcapanTerimaKasihSection />
        </div>
      </section>

      <audio ref={audioRef} src="/music/tes.mp3" loop />

      {/* <div
        className="fixed bottom-4 right-4 z-50 p-2 bg-white rounded-full shadow-lg cursor-pointer"
        onClick={toggleMusic}
      >
        <Image
          src={isPlaying ? "/icons/pause.svg" : "/icons/play.svg"}
          alt="Play/Pause"
          width={24}
          height={24}
        />
      </div> */}

      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 p-2 bg-gray-300 rounded-full shadow-lg cursor-pointer"
        // className="px-4 py-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition"
        title={isPlaying ? "Pause Musik" : "Mainkan Musik"}
      >
        {isPlaying ? <CircleStop /> : <CirclePlay />}
      </button>
    </>
  );
}

// <section className="w-full min-h-screen bg-[#FFF5F5] flex flex-col items-center justify-center text-center px-4 py-8 relative">
//   {/* Background image / ornament atas */}
//   <Image
//     src="/images/header-ornament.png"
//     alt="Ornamen Atas"
//     width={300}
//     height={100}
//     className="absolute top-0 left-1/2 transform -translate-x-1/2"
//   />

//   <div className="text-[#7A2D2D] text-sm mb-4">
//     <p>Syalom Salam Sejahtera,</p>
//     <p>
//       Dengan ini kami ingin mengundang kehadiran <br />
//       Saudara/i untuk menghadiri acara ulang tahun <br />
//       anak kami:
//     </p>
//   </div>

//   <div className="relative mb-4">
//     {/* Foto anak */}
//     <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-pink-300 mx-auto relative z-10">
//       <Image
//         src="/images/image-bayi.png"
//         alt="Foto Bayi"
//         fill
//         style={{ objectFit: "cover" }}
//       />
//     </div>

//     {/* Mahkota */}
//     <Image
//       src="/images/crown.png"
//       alt="Mahkota"
//       width={40}
//       height={40}
//       className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
//     />
//   </div>

//   <h2 className="text-2xl font-cursive text-pink-700 mb-2">
//     Aurilya Prinsya Uada
//   </h2>

//   <p className="text-sm text-gray-700 mb-6">
//     Putri tercinta dari <br />
//     <span className="font-semibold text-[#7A2D2D]">
//       Adi Uada &amp; Putri Antoko
//     </span>
//   </p>

//   <Button
//     onClick={onOpen}
//     className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6 py-3 shadow-lg"
//   >
//     Buka Undangan
//   </Button>
// </section>;
