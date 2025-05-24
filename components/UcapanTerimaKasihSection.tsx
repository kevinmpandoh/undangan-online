import Image from "next/image";
import React from "react";
import bgOnePiece from "@/public/images/bg2.png"; // Gambar yang kamu upload
// import logoBundar from "@/public/images/logo-kondangankuy.png"; // Logo bundar di tengah bawah (optional)

const UcapanTerimaKasihSection = () => {
  return (
    <section className="relative w-full min-h-screen text-center bg-[#f2f2ed] overflow-hidden">
      <div
        className="absolute bottom-0 inset-0 z-0 object-bottom h-screen"
        style={{
          backgroundImage: `url(${bgOnePiece.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.5",
        }}
      />

      {/* Card utama */}
      <div className="max-w-lg w-[80%] mt-10 mx-auto bg-[#fffff1]/80 backdrop-blur-md border-2 border-[#e1cda3] rounded-xl px-6 py-5 shadow-md relative z-10">
        <p className="text-lg md:text-xl font-semibold text-amber-900 my-2">
          Atas Doa dan Kehadiran dari Teman–Teman
        </p>
        <p className="text-lg md:text-xl font-semibold text-amber-900 mb-5">
          Kami Ucapkan Banyak Terima Kasih
        </p>

        <p className="text-base text-amber-700 mb-4">Kami Yang Mengundang,</p>
        <h3 className="text-4xl md:text-4xl font-bold text-amber-700 font-[Georgia] mb-5">
          Hawkins <br /> & <br /> Family
        </h3>

        {/* Logo bundar */}
        <div className="w-48 h-48 mx-auto flex items-center justify-center overflow-hidden">
          <Image
            src={"/images/bg-kevin.svg"}
            alt="Logo Kondangankuy"
            width={100}
            height={100}
            className=" object-cover"
          />
        </div>

        <div className="flex flex-col">
          <a
            href="https://www.instagram.com/kevin_pandoh?igsh=d3dkNmlidTA2NWt5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#874f0f] font-[cursive] cursor-pointer hover:underline"
          >
            @kevin_pandoh
          </a>
          <a
            href="https://www.instagram.com/_shin1331_?igsh=MXB6eGpmYXJ3MGJmcg=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#874f0f] font-[cursive] cursor-pointer hover:underline"
          >
            @_shin1331_
          </a>
        </div>
      </div>
    </section>
  );
};

export default UcapanTerimaKasihSection;
