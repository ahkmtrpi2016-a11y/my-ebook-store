import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {/* --- HEADER / NAVBAR --- */}
      <nav className="flex justify-between items-center p-6 bg-slate-800/50 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          EduStream
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-purple-400 transition">Beranda</a>
          <a href="#" className="hover:text-purple-400 transition">E-Book</a>
          <a href="#" className="hover:text-purple-400 transition">Video Kursus</a>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full font-medium transition">
          Mulai Belajar
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Kuasai Skill Baru via <br />
          <span className="text-purple-500">Video & E-book</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg mb-10">
          Tingkatkan kemampuanmu dengan koleksi e-book eksklusif dan video tutorial dari para ahli di bidangnya. Belajar kapan saja, di mana saja.
        </p>
        <div className="flex gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg shadow-purple-500/20">
            Lihat Katalog
          </button>
          <button className="border border-gray-600 hover:bg-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition">
            Testimoni
          </button>
        </div>
      </section>

      {/* --- DAFTAR E-BOOK (CARD) --- */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">E-book Terpopuler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition group">
            <div className="h-48 bg-purple-900/30 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
               <span className="text-5xl group-hover:scale-110 transition">📘</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Mastering Next.js</h3>
            <p className="text-gray-400 text-sm mb-4">Belajar framework paling populer dari nol sampai mahir.</p>
            <div className="flex justify-between items-center">
              <span className="text-purple-400 font-bold">Rp 99.000</span>
              <button className="text-sm bg-slate-700 px-3 py-1 rounded-lg hover:bg-purple-600 transition">Beli</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition group">
            <div className="h-48 bg-pink-900/30 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
               <span className="text-5xl group-hover:scale-110 transition">🎨</span>
            </div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-400 text-sm mb-4">Panduan membuat tampilan website yang memanjakan mata.</p>
            <div className="flex justify-between items-center">
              <span className="text-purple-400 font-bold">Rp 75.000</span>
              <button className="text-sm bg-slate-700 px-3 py-1 rounded-lg hover:bg-purple-600 transition">Beli</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-purple-500 transition group">
            <div className="h-48 bg-blue-900/30 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
               <span className="text-5xl group-hover:scale-110 transition">🚀</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
            <p className="text-gray-400 text-sm mb-4">Strategi jitu meningkatkan penjualan produk kamu.</p>
            <div className="flex justify-between items-center">
              <span className="text-purple-400 font-bold">Rp 89.000</span>
              <button className="text-sm bg-slate-700 px-3 py-1 rounded-lg hover:bg-purple-600 transition">Beli</button>
            </div>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-800 py-10 text-center text-gray-500 text-sm">
        © 2024 EduStream Store. Dibuat dengan Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}