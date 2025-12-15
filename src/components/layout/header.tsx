export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-pink-500" style={{ fontFamily: 'var(--font-playfair)' }}>Fellory</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#products" className="text-gray-600 hover:text-pink-500 text-base transition-colors">Produk</a>
          <a href="#about" className="text-gray-600 hover:text-pink-500 text-base transition-colors">Tentang</a>
          <a href="#contact" className="text-gray-600 hover:text-pink-500 text-base transition-colors">Kontak</a>
        </nav>
      </div>
    </header>
  );
}