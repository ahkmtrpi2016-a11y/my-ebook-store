import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f172a] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">

        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-2 items-center">
          
          {/* Text */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Kuasai Skill Baru lewat Video & E-Book
            </h1>

            <p className="text-gray-300">
              Paket belajar digital terstruktur, rapi, dan nyaman dibaca.
            </p>

            <button className="rounded-lg bg-indigo-600 px-6 py-3 hover:bg-indigo-500">
              Lihat Produk
            </button>
          </div>

          {/* Image */}
          <div className="relative w-full max-w-md mx-auto aspect-square">
            <Image
              src="/hero.png"
              alt="E-Book Preview"
              fill
              className="object-contain"
              priority
            />
          </div>

        </section>
      </div>
    </main>
  );
}
