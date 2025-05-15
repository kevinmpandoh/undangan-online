// src/App.jsx
"use client";
import { useRef, useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import EventSection from "@/components/EventSection";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { CirclePlay, CircleStop } from "lucide-react";
import QuoteSection from "@/components/QuoteSection";

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
            src="/images/image4.jpg"
            alt="Aurilya"
            fill
            style={{ objectFit: "cover" }}
            className="brightness-95"
            priority
          />
        </div>

        {/* Konten Scroll - Background Card Style */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
          <EventSection />
          <QuoteSection />
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
