"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  BookOpen,
  Star,
  ChevronRight,
  X,
  Trash2,
  CheckCircle,
  Youtube,
  PlayCircle,
  Users,
  Award,
} from "lucide-react";

/* ================== DATA ================== */
const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Fullstack Web Dev + Private YouTube",
    author: "Budi Santoso",
    price: 250000,
    rating: 4.9,
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400",
    description:
      "E-book lengkap disertai akses ke 50+ video tutorial eksklusif di Channel YouTube Private.",
  },
  {
    id: 2,
    title: "Mastering Ads & Video Marketing",
    author: "Siti Aminah",
    price: 199000,
    rating: 4.8,
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
    description:
      "Panduan strategi ads terbaru dengan studi kasus video langsung dari praktisi.",
  },
  {
    id: 3,
    title: "Design System Masterclass",
    author: "Rian Pratama",
    price: 225000,
    rating: 4.9,
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400",
    description:
      "Belajar UI/UX melalui rekaman sesi live coding dan aset desain profesional.",
  },
  {
    id: 4,
    title: "Content Creator Blueprint",
    author: "Dewi Lestari",
    price: 150000,
    rating: 4.7,
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400",
    description:
      "Langkah demi langkah membangun channel YouTube dari 0 hingga monetisasi.",
  },
];

/* ================== PAGE ================== */
export default function Page() {
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: any) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === product.id);
      if (found)
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) =>
    setCart(cart.filter((i) => i.id !== id));

  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const formatIDR = (v: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(v);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ================= NAV ================= */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black text-xl">
            <div className="bg-red-600 p-2 rounded-lg text-white">
              <Youtube size={20} />
            </div>
            EduStream
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 rounded-full hover:bg-slate-100"
          >
            <ShoppingCart />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <header className="relative bg-slate-900 text-white overflow-hidden max-h-[90vh]">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold mb-6">
              <PlayCircle size={16} /> Live Learning 2024
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Kuasai Skill Baru lewat{" "}
              <span className="text-red-500">Video & E-book</span>
            </h1>

            <p className="text-slate-400 max-w-xl mb-8">
              Paket belajar modern: PDF + akses YouTube Private dengan materi
              real & terstruktur.
            </p>

            <div className="flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-xl font-bold flex items-center">
                Lihat Kurikulum <ChevronRight className="ml-2" />
              </button>

              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10">
                <Users size={18} />
                <span className="text-sm text-slate-300">10K+ Alumni</span>
              </div>
            </div>
          </div>

          {/* Video Mockup (FIXED SIZE) */}
          <div className="w-full max-w-xl mx-auto">
            <div className="relative aspect-video max-h-[420px] rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
                  <PlayCircle size={40} className="text-white ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================= PRODUCTS ================= */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-extrabold mb-10">
          Paket Belajar Digital
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS_DATA.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border shadow hover:shadow-xl transition flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  className="w-full h-full object-cover hover:scale-110 transition-transform"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-1 text-amber-500 text-sm mb-2">
                  <Star size={14} fill="currentColor" />
                  <span className="font-bold text-slate-700">{p.rating}</span>
                </div>

                <h3 className="font-bold mb-2">{p.title}</h3>
                <p className="text-slate-500 text-xs mb-4 line-clamp-3">
                  {p.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t">
                  <span className="font-extrabold">
                    {formatIDR(p.price)}
                  </span>
                  <button
                    onClick={() => addToCart(p)}
                    className="bg-slate-900 text-white p-3 rounded-xl hover:bg-red-600"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ================= CART ================= */}
      {cartOpen && (
        <div className="fixed inset-0 bg-black/60 z-[100]">
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl p-6">
            <div className="flex justify-between mb-6">
              <h3 className="font-black text-xl">Keranjang</h3>
              <button onClick={() => setCartOpen(false)}>
                <X />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-slate-400">Belum ada item.</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((i) => (
                    <div key={i.id} className="flex justify-between">
                      <span className="truncate">{i.title}</span>
                      <button
                        onClick={() => removeFromCart(i.id)}
                        className="text-red-600"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="font-black text-lg mb-6">
                  {formatIDR(totalPrice)}
                </div>
                <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold">
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
