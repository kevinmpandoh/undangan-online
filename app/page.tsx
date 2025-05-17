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

  const fadeInAudio = () => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0;
    audioRef.current.play();

    let currentVolume = 0;
    const targetVolume = 0.5;
    const step = 0.01;
    const interval = 150; // in milliseconds

    const fadeInInterval = setInterval(() => {
      if (!audioRef.current) {
        clearInterval(fadeInInterval);
        return;
      }

      currentVolume += step;
      if (currentVolume >= targetVolume) {
        audioRef.current.volume = targetVolume;
        clearInterval(fadeInInterval);
      } else {
        audioRef.current.volume = currentVolume;
      }
    }, interval);
  };

  const fadeOutAudio = () => {
    if (!audioRef.current) return;

    let currentVolume = audioRef.current.volume;
    const step = 0.01;
    const interval = 10;

    const fadeOutInterval = setInterval(() => {
      if (!audioRef.current) {
        clearInterval(fadeOutInterval);
        return;
      }

      currentVolume -= step;
      if (currentVolume <= 0) {
        audioRef.current.volume = 0;
        audioRef.current.pause();
        clearInterval(fadeOutInterval);
      } else {
        audioRef.current.volume = currentVolume;
      }
    }, interval);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      fadeOutAudio();
      setIsPlaying(false);
    } else {
      fadeInAudio();
      setIsPlaying(true);
    }
  };

  const handleOpenInvitation = () => {
    if (audioRef.current) {
      fadeInAudio();
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
        opened={allowScroll}
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
            className="brightness-80"
            priority
          />
        </div>

        {/* Konten Scroll - Background Card Style */}
        <div className="flex flex-col w-full max-w-xl justify-center items-center ">
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

      <audio ref={audioRef} src="/music/HappyBirthday.mp3" loop />

      {allowScroll && (
        <button
          onClick={toggleMusic}
          className="fixed bottom-4 right-4 z-50 p-2  bg-amber-300 rounded-full shadow-lg cursor-pointer"
          // className="px-4 py-3 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition"
          title={isPlaying ? "Pause Musik" : "Mainkan Musik"}
        >
          {isPlaying ? (
            <CircleStop className="text-gray-800" />
          ) : (
            <CirclePlay className="text-gray-800" />
          )}
        </button>
      )}
    </>
  );
}
