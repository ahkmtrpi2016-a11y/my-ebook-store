import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-24">

        {/* ================= HERO ================= */}
        <section className="grid items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Kuasai Skill Baru lewat Video & E-Book
            </h1>

            <p className="text-gray-300 max-w-xl">
              Platform pembelajaran digital berisi video eksklusif dan e-book
              terstruktur untuk bantu kamu upgrade skill lebih cepat.
            </p>

            <div className="flex gap-4">
              <button className="rounded-lg bg-indigo-600 px-6 py-3 font-medium hover:bg-indigo-500 transition">
                Lihat Produk
              </button>
              <button className="rounded-lg border border-white/20 px-6 py-3 hover:bg-white/10 transition">
                Preview
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-md aspect-square">
            <Image
              src="/hero.png"
              alt="E-Book Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Materi Terstruktur",
              desc: "Belajar step-by-step tanpa bingung."
            },
            {
              title: "Akses Selamanya",
              desc: "Sekali beli, akses kapan saja."
            },
            {
              title: "Praktis & Relevan",
              desc: "Langsung bisa dipraktikkan."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <h3 className="mb-2 text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-center">
            Paket Belajar Digital
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <h3 className="mb-2 text-lg font-semibold">
                  E-Book Premium #{item}
                </h3>
                <p className="mb-4 text-sm text-gray-400">
                  Panduan lengkap dan praktis untuk meningkatkan skill.
                </p>
                <button className="w-full rounded-lg bg-indigo-600 py-2 hover:bg-indigo-500 transition">
                  Beli Sekarang
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="rounded-2xl bg-indigo-600 p-10 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Mulai Belajar Hari Ini
          </h2>
          <p className="mb-6 text-indigo-100">
            Upgrade skill kamu dan buka peluang baru.
          </p>
          <button className="rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 hover:bg-indigo-100 transition">
            Mulai Sekarang
          </button>
        </section>

      </div>
    </main>
  );
}
