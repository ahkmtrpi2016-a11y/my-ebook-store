import "./globals.css";

export const metadata = {
  title: "Digital Product",
  description: "Landing page produk digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-white">
        
        {/* ================= NAVBAR ================= */}
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <h1 className="text-lg font-bold">MyBrand</h1>
            <nav className="flex gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#" className="hover:text-white">Produk</a>
              <a href="#" className="hover:text-white">Kontak</a>
            </nav>
          </div>
        </header>

        {/* ================= CONTENT ================= */}
        {children}

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-white/10 mt-24">
          <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} MyBrand. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
