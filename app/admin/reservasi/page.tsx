"use client";

import { supabase } from "@/lib/supabaseClinet";
import { useEffect, useState } from "react";

interface Reservasi {
  id: number;
  nama: string;
  nomor: string;
  kehadiran: string;
  jumlah_hadir: number | null;
  created_at: string;
}

export default function AdminReservasiPage() {
  const [data, setData] = useState<Reservasi[]>([]);
  const [loading, setLoading] = useState(true);

  const [statistik, setStatistik] = useState({
    totalTamu: 0,
    hadir: 0,
    tidakHadir: 0,
    totalOrangHadir: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("reservasi")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(data);
        // Hitung statistik
        const totalTamu = data.length;
        const hadir = data.filter((r) => r.kehadiran === "Hadir").length;
        const tidakHadir = data.filter(
          (r) => r.kehadiran === "Tidak Hadir"
        ).length;
        const totalOrangHadir = data
          .filter((r) => r.kehadiran === "Hadir" && r.jumlah_hadir)
          .reduce((sum, r) => sum + (r.jumlah_hadir || 0), 0);

        setStatistik({ totalTamu, hadir, tidakHadir, totalOrangHadir });
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      {" "}
      {/* Statistik */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center max-w-2xl mx-auto mt-20">
        <div className="bg-purple-100 p-4 rounded-lg shadow">
          <p className="text-sm font-semibold text-purple-600">Total Tamu</p>
          <p className="text-xl font-bold">{statistik.totalTamu}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow">
          <p className="text-sm font-semibold text-green-600">Hadir</p>
          <p className="text-xl font-bold">{statistik.hadir}</p>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow">
          <p className="text-sm font-semibold text-red-600">Tidak Hadir</p>
          <p className="text-xl font-bold">{statistik.tidakHadir}</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg shadow">
          <p className="text-sm font-semibold text-blue-600">
            Total Orang Hadir
          </p>
          <p className="text-xl font-bold">{statistik.totalOrangHadir}</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Data Reservasi Tamu</h1>

        {loading ? (
          <p>Memuat data...</p>
        ) : (
          <div className="space-y-4">
            {data.length === 0 ? (
              <p>Belum ada reservasi.</p>
            ) : (
              data.map((rsv) => (
                <div
                  key={rsv.id}
                  className="border rounded-md p-4 shadow-sm bg-white"
                >
                  <p>
                    <strong>Nama:</strong> {rsv.nama}
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> {rsv.nomor}
                  </p>
                  <p>
                    <strong>Kehadiran:</strong> {rsv.kehadiran}
                  </p>
                  {rsv.kehadiran === "Hadir" && (
                    <p>
                      <strong>Jumlah Hadir:</strong> {rsv.jumlah_hadir}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    <em>
                      Submitted: {new Date(rsv.created_at).toLocaleString()}
                    </em>
                  </p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}
