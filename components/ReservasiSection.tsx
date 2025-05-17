"use client";

import { supabase } from "@/lib/supabaseClinet";
import { useState } from "react";
import Image from "next/image";
import bgReservasi from "@/public/images/reservasiBg.png"; // file gambar karakter one piece

export default function ReservasiSection() {
  const [form, setForm] = useState({
    nama: "",
    nomor: "",
    kehadiran: "",
    jumlah_hadir: 1,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("reservasi").insert([
      {
        ...form,
        jumlah_hadir: form.kehadiran === "Hadir" ? form.jumlah_hadir : null,
      },
    ]);

    if (error) {
      console.log(error, "ERROR");
      alert("Gagal kirim reservasi");
    } else {
      alert("Reservasi berhasil dikirim!");
      setForm({ nama: "", nomor: "", kehadiran: "", jumlah_hadir: 1 });
      setSubmitted(true);
    }

    setLoading(false);
  };

  return (
    <section className="relative w-full py-20 bg-amber-50 overflow-hidden">
      {/* Background karakter */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgReservasi.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.5",
        }}
      />

      <div className="max-w-md w-[80%] mx-auto bg-[#bc8653]/30  rounded-xl px-6 py-10 shadow-lg text-center border border-yellow-200 relative z-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-brown-700 font-[Georgia]">
          Konfirmasi Kehadiran
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            required
            className="w-full rounded-full bg-yellow-100 px-4 py-3 text-sm focus:outline-none border border-yellow-200"
          />

          <input
            type="tel"
            placeholder="No. Wa"
            value={form.nomor}
            onChange={(e) => setForm({ ...form, nomor: e.target.value })}
            className="w-full rounded-full bg-yellow-100 px-4 py-3 text-sm focus:outline-none border border-yellow-200"
          />

          <select
            value={form.kehadiran}
            onChange={(e) => setForm({ ...form, kehadiran: e.target.value })}
            required
            className="w-full rounded-full bg-yellow-100 px-4 py-3 text-sm focus:outline-none border border-yellow-200"
          >
            <option value="">- Konfirmasi Kehadiran -</option>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>

          {form.kehadiran === "Hadir" && (
            <div className="text-sm">
              <p className="mb-2">Jumlah yang akan hadir:</p>
              <div className="flex gap-4">
                {[1, 2, 3].map((jumlah) => (
                  <label key={jumlah} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="jumlah_hadir"
                      value={jumlah}
                      checked={form.jumlah_hadir === jumlah}
                      onChange={() =>
                        setForm({ ...form, jumlah_hadir: jumlah })
                      }
                      className="accent-yellow-500"
                    />
                    {jumlah} Orang
                  </label>
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-600 cursor-pointer text-black font-noraml py-2 rounded-full transition-all"
          >
            {loading ? "Mengirim..." : "Kirim Reservasi"}
          </button>
        </form>
      </div>
    </section>
  );
}
