import { useState } from "react";

export default function HitungGajiForm() {
  const [gaji, setGaji] = useState("");
  const pajak = 0.11;
  const totalGaji = gaji - gaji * pajak;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-5 p-5 bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100">
      <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-6 rounded-3xl shadow-md w-96 border border-pink-100">
        <h2 className="text-2xl font-bold text-center mb-5 text-rose-700">
          💸 Hitung Gaji Bersih 💖
        </h2>

        <div className="mb-4">
          <label className="block text-rose-600 font-medium mb-2">
            💼 Gaji Pokok
          </label>
          <input
            type="number"
            placeholder="Masukkan jumlah gaji ✨"
            className="w-full p-3 border border-pink-200 rounded-xl bg-white/80 text-rose-700 placeholder:text-rose-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition"
            onChange={(e) => setGaji(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-rose-600 font-medium mb-1">
            🧾 Pajak: <b className="text-pink-500">11%</b>
          </label>
        </div>

        {!gaji ? (
          <div className="mt-4 p-4 bg-gradient-to-r from-rose-100 via-pink-50 to-fuchsia-100 border-l-4 border-pink-300 text-rose-700 rounded-xl shadow-sm">
            <p className="font-semibold">
              ⚠️ Silakan masukkan gaji yang valid yaa 💕
              <br />
              <span className="text-sm font-normal">
                (tidak boleh kosong atau negatif)
              </span>
            </p>
          </div>
        ) : (
          <div className="mt-4 p-4 bg-gradient-to-r from-rose-100 via-pink-50 to-fuchsia-100 border-l-4 border-pink-400 text-rose-700 rounded-xl shadow-sm">
            <p className="font-semibold">
              💰 Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}
            </p>
          </div>
        )}

        <div className="mt-4 p-4 bg-gradient-to-r from-rose-100 via-pink-50 to-fuchsia-100 border-l-4 border-pink-300 text-rose-700 rounded-xl shadow-sm">
          <p className="font-semibold">
            💰 Total Take Home Pay (THP): Rp {totalGaji.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
