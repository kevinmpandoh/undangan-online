// components/ReservasiSection.tsx
"use client";

import { supabase } from "@/lib/supabaseClinet";
import { useState } from "react";

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
      alert("Gagal kirim ucapan");
    } else {
      alert("Berhasil!");
      setForm({ nama: "", nomor: "", kehadiran: "", jumlah_hadir: 0 });
      setSubmitted(true);
    }

    setLoading(false);
  };

  return (
    <section className="py-16 px-8 bg-blue-50 min-h-[80vh] w-full">
      <div className="px-4 py-8  bg-white/70 rounded-lg shadow-md mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Konfirmasi Kehadiran</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            required
            className="w-full rounded-lg border border-blue-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <input
            type="tel"
            placeholder="Nomor WhatsApp"
            value={form.nomor}
            onChange={(e) => setForm({ ...form, nomor: e.target.value })}
            className="w-full rounded-lg border border-blue-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <select
            value={form.kehadiran}
            onChange={(e) => setForm({ ...form, kehadiran: e.target.value })}
            required
            className="w-full rounded-lg border border-blue-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">- Konfirmasi Kehadiran -</option>
            <option value="Hadir">Hadir</option>
            <option value="Tidak Hadir">Tidak Hadir</option>
          </select>

          {form.kehadiran === "Hadir" && (
            <div>
              <p className="mb-2 font-medium">Jumlah yang akan hadir:</p>
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
                      className="accent-pink-600"
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
            className="w-full bg-pink-600 text-white font-semibold py-2 rounded hover:bg-pink-700"
          >
            {loading ? "Mengirim..." : "Kirim Reservasi"}
          </button>
        </form>
      </div>
    </section>
  );
}
