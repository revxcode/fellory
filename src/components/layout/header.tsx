'use client';

import { MessageCircle } from 'lucide-react';

export default function Header() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/6283856335287', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100/50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1
          className="text-2xl md:text-3xl font-black text-pink-600"
          style={{ fontFamily: 'var(--font-nunito)' }}
        >
          FELLORY
        </h1>

        {/* Chat Bestie Button */}
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
          aria-label="Chat with admin via WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Chat Bestie</span>
        </button>
      </div>
    </header>
  );
}