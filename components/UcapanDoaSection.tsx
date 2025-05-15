"use client";

import { supabase } from "@/lib/supabaseClinet";
import { useEffect, useState } from "react";

interface ucapan {
  nama: string;
  pesan: string;
}

export async function fetchUcapan() {
  const { data, error } = await supabase
    .from("ucapan")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) console.log(error, "ERROR");
  return data;
}

function InitialAvatar({ name }: { name: string }) {
  const getInitial = (str: string) =>
    str
      ?.trim()
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

  return (
    <div className="w-8 h-8 rounded-full bg-purple-300 flex items-center justify-center text-white font-semibold text-sm shadow">
      {getInitial(name)}
    </div>
  );
}

export default function UcapanDoaSection() {
  const [form, setForm] = useState({ nama: "", pesan: "" });
  // const [ucapanList, setUcapanList] = useState([
  //   {
  //     nama: "Alena dan Anaya",
  //     pesan: "Selamat ulang tahun Aurilya. Tuhan Yesus memberkati 😇🙏🎉🎂",
  //   },
  //   {
  //     nama: "Demithree",
  //     pesan: "Hapyyy birthdayyyy Aurilya cantikkkkk👑",
  //   },
  //   {
  //     nama: "Waraney, Annmarie & Rosemary",
  //     pesan: "Happy Birthday Aurilya Cantik 🥰.",
  //   },
  // ]);

  const [ucapanList, setUcapanList] = useState<any>([]);

  useEffect(() => {
    fetchUcapan().then(setUcapanList);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // if (!form.nama || !form.pesan) return;
    // setUcapanList((prev) => [form, ...prev]);
    // setForm({ nama: "", pesan: "" });
    const { error } = await supabase
      .from("ucapan")
      .insert([{ nama: form.nama, pesan: form.pesan }]);
    if (error) {
      console.log(error, "ERROR");
      alert("Gagal kirim ucapan");
    } else {
      alert("Berhasil!");
      setForm({ nama: "", pesan: "" });
      const updated = await fetchUcapan(); // refresh data
      setUcapanList(updated);
    }
  };

  return (
    <section className="py-16 px-8 bg-blue-50 min-h-screen w-full">
      <div className="w-full mx-auto">
        <h2 className="text-center text-3xl font-bold text-blue-700 mb-8">
          Ucapan & Doa
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
          <input
            type="text"
            placeholder="Tulis Nama"
            value={form.nama}
            onChange={(e) => setForm({ ...form, nama: e.target.value })}
            className="w-full rounded-lg border border-blue-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            rows={3}
            placeholder="Sampaikan Pesan dan Ucapan"
            value={form.pesan}
            onChange={(e) => setForm({ ...form, pesan: e.target.value })}
            className="w-full rounded-lg border border-blue-300 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            KIRIM UCAPAN
          </button>
        </form>

        <div className="max-h-64 overflow-y-auto space-y-4">
          {ucapanList.map((ucapan: ucapan, index: number) => (
            <div
              key={index}
              className="bg-white border border-blue-200 shadow rounded-lg px-4 py-3 flex gap-3 items-start"
            >
              <InitialAvatar name={ucapan.nama} />
              <div>
                <p className="font-semibold text-blue-700">{ucapan.nama}</p>
                <p className="text-sm text-gray-800 whitespace-pre-wrap">
                  {ucapan.pesan}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
