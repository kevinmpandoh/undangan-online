"use client";

import { supabase } from "@/lib/supabaseClinet";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Ucapan {
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
    <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center text-white font-semibold text-sm shadow">
      {getInitial(name)}
    </div>
  );
}

export default function UcapanDoaSection() {
  const [form, setForm] = useState({ nama: "", pesan: "" });
  const [ucapanList, setUcapanList] = useState<Ucapan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUcapan().then((res) => {
      if (res) {
        setUcapanList(res);
        setLoading(false);
      }
    });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!form.nama || !form.pesan) return;
    const { error } = await supabase
      .from("ucapan")
      .insert([{ nama: form.nama, pesan: form.pesan }]);
    if (error) {
      alert("Gagal mengirim ucapan");
    } else {
      setForm({ nama: "", pesan: "" });
      const updated = await fetchUcapan();
      setUcapanList(updated || []);
    }
  };

  return (
    <section className="relative min-h-screen py-20 px-4 bg-[#fffff1] overflow-hidden w-full">
      {/* Dekorasi karakter */}
      <Image
        src={"/images/sanji2.svg"}
        alt="Sanji"
        width={120}
        height={120}
        className="absolute top-0 -left-5 w-24"
      />
      <Image
        src={"/images/zoro.svg"}
        alt="Zoro"
        width={120}
        height={120}
        className="absolute bottom-4 z-30 left-0 w-24"
      />
      <Image
        src={"/images/luffy4.svg"}
        alt="Luffy"
        width={120}
        height={120}
        className="absolute bottom-0 z-30 right-0 w-24"
      />
      <Image
        src={"/images/tanah.svg"}
        alt="Luffy"
        width={120}
        height={120}
        className="absolute bottom-0 right-0 left-0 w-full"
      />

      {/* Judul Papan */}
      <div className="flex justify-center relative mb-8">
        <Image
          src={"/images/papan.svg"}
          alt="Ucapan"
          className="w-[260px]"
          width={120}
          height={120}
        />
      </div>

      {/* Form Input */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-[80%] mx-auto space-y-4 text-center"
      >
        <input
          type="text"
          placeholder="Tulis Nama"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          className="w-full rounded-lg border text-gray-800 border-yellow-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <textarea
          rows={3}
          placeholder="Sampaikan Pesan dan Ucapan Kamu"
          value={form.pesan}
          onChange={(e) => setForm({ ...form, pesan: e.target.value })}
          className="w-full rounded-lg border text-gray-800 border-yellow-300 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 cursor-pointer text-gray-800 font-normal py-2 px-6 rounded-full transition"
        >
          KIRIM UCAPAN
        </button>
      </form>

      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <div className="max-h-64 w-[80%] mx-auto overflow-y-auto space-y-4 my-4">
          {ucapanList?.map((ucapan: Ucapan, index: number) => (
            <div
              key={index}
              className="bg-[#f2ece5] rounded-lg px-4 py-3 flex gap-3 items-start"
            >
              <InitialAvatar name={ucapan.nama} />
              <div>
                <p className=" text-amber-600">{ucapan.nama}</p>
                <p className="text-sm text-gray-800 whitespace-pre-wrap">
                  {ucapan.pesan}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
