import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-pink-50">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center justify-center gap-6 text-gray-600 text-sm">

        {/* Social icons */}
        <div className="flex gap-6">
          <a
            href="https://instagram.com/fellory"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://facebook.com/fellory"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="mailto:contact@fellory.com"
            className="hover:text-pink-600 transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} <span className="font-semibold text-pink-600" style={{ fontFamily: 'var(--font-playfair)' }}>Fellory</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}