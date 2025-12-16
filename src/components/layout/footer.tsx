import { Instagram, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-pink-100 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 flex flex-col items-center justify-center gap-8 text-stone-700 text-sm">
        {/* Social icons with large touch targets */}
        <div className="flex gap-8">
          <a
            href="https://instagram.com/fellory_official"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 hover:bg-pink-200 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Fellory on Instagram"
          >
            <Instagram size={28} className="text-pink-600" />
          </a>
          <a
            href="https://tiktok.com/@fellory_official"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 hover:bg-pink-200 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Fellory on TikTok"
          >
            <Music size={28} className="text-pink-600" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-medium text-stone-700">
            © {new Date().getFullYear()}
            <span className="font-black text-pink-600 ml-1" style={{ fontFamily: 'var(--font-nunito)' }}>
              FELLORY
            </span>
            . Glow Up Ramah Kantong!
          </p>
          <p className="text-xs text-stone-600 mt-2">Pinky Body Care untuk Semua</p>
        </div>
      </div>
    </footer>
  );
}