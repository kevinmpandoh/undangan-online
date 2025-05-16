import React from "react";

const UcapanTerimaKasihSection = () => {
  return (
    <section className="text-center py-16 px-4 bg-amber-50 ">
      <p className="text-lg md:text-xl font-medium text-gray-800 mb-4">
        Atas Doa dan Kehadiran dari Teman – Teman
      </p>
      <p className="text-lg md:text-xl font-medium text-gray-800 mb-10">
        Kami ucapkan banyak terima kasih
      </p>

      <p className="text-base text-gray-600 mb-2">Kami Yang Mengundang,</p>
      <h3 className="text-2xl font-cursive text-amber-700">Hawkins & Family</h3>

      {/* Logo dan footer */}
      <div className="mt-12 flex flex-col items-center gap-2">
        <div className="w-20 h-20 rounded-full border-2 border-amber-400 flex items-center justify-center">
          {/* <img
            src="/logo-kondangankuy.png"
            alt="Logo Kondangankuy"
            className="w-10 h-10"
          /> */}
        </div>
        <p className="text-sm text-amber-700 mt-2">Website Invitation</p>
        <p className="text-sm text-amber-700">by Kevin & Sashi</p>
      </div>
    </section>
  );
};

export default UcapanTerimaKasihSection;
