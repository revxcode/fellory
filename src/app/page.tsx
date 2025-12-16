'use client';

import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { ShoppingBag, MessageCircle, Shield, Heart, Tag } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  url: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Fellory Pinky Body Lotion',
    description: 'Lotion body premium yang bikin kulit glowing dan halus seperti bayi. Cocok untuk semua jenis kulit, apalagi yang kering dan sensitive!',
    image: '/images/fellory-body-lotion-nobg.avif',
    price: 59500,
    originalPrice: 88000,
    url: "https://shopee.co.id/Fellory-Pinky-Bright-Body-Lotion-i.391174738.26739529635?extraParams=%7B%22display_model_id%22%3A234399270854%7D"
  },
  {
    id: 2,
    name: 'Miss V Spray Bubble Gum',
    description: 'Spray perawatan area sensitif dengan aroma bubble gum yang lembut dan menyegarkan. Teruji dermatologi dan BPOM resmi!',
    image: '/images/fellory-missv-spray-nobg.avif',
    price: 45000,
    url: "https://shopee.co.id/Feminine-Care-Fellory-Miss-V-Spray-i.391174738.43862945162?extraParams=%7B%22display_model_id%22%3A301082496210%7D"
  },
  {
    id: 3,
    name: 'Pinky Bright Bar Soap',
    description: 'Sabun bar lembut yang memutihkan dan menutrisi kulit secara bersamaan. Ramah untuk bumil dan busui, dijamin aman!',
    image: '/images/fellory-bar-soap-nobg.avif',
    price: 35000,
    originalPrice: 45000,
    url: "https://shopee.co.id/Fellory-Pinky-Bright-Bar-Soap-45gr-i.391174738.40112540830?extraParams=%7B%22display_model_id%22%3A301050291187%7D"
  },
];

const trustBadges = [
  {
    icon: Shield,
    title: 'BPOM Resmi',
    description: 'Teruji dermatologi dan aman',
  },
  {
    icon: Heart,
    title: 'Aman Bumil/Busui',
    description: 'Aman untuk ibu hamil dan menyusui',
  },
  {
    icon: Tag,
    title: 'Harga Pelajar',
    description: 'Terjangkau tanpa mengorbankan kualitas',
  },
];

export default function Home() {
  const handleShopee = (url: string) => {
    window.open(url, '_blank');
  };

  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(
      `Hi Kak Fellory! Aku tertarik sama ${productName}. Bisa tanya-tanya dulu? 🥰`
    );
    window.open(`https://wa.me/6283856335287?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-['Nunito',sans-serif]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 to-white pt-20 pb-16 px-4 sm:pt-32 sm:pb-24 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Kulit Cerah, Pinky Merona!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Glow Up Ramah Kantong - Body Care Viral Aman BPOM
          </p>
          <button className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200 text-lg">
            Cek Keranjang Kuning
          </button>
        </div>
      </section>

      {/* Product Catalog Section - MAIN HERO */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
            Pilihan Bestie Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-pink-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative w-full h-64 sm:h-72 bg-pink-50 flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full p-4"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* Price Display */}
                  <div className="mb-6 flex items-center gap-3">
                    {product.originalPrice ? (
                      <>
                        <span className="text-gray-400 line-through text-sm sm:text-base">
                          Rp {product.originalPrice.toLocaleString('id-ID')}
                        </span>
                        <span className="text-2xl sm:text-3xl font-bold text-pink-600">
                          Rp {product.price.toLocaleString('id-ID')}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl sm:text-3xl font-bold text-pink-600">
                        Rp {product.price.toLocaleString('id-ID')}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 flex-col sm:flex-row">
                    <button
                      onClick={() => handleShopee(product.url)}
                      className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-full transition-colors duration-200 text-sm sm:text-base"
                    >
                      <ShoppingBag size={20} />
                      Beli di Shopee
                    </button>
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition-colors duration-200 text-sm sm:text-base"
                    >
                      <MessageCircle size={20} />
                      Tanya Admin
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12 sm:mb-16">
            Kenapa Pilih Fellory?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 text-center hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                      <IconComponent size={32} className="text-pink-600" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {badge.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {badge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 text-lg sm:text-xl">
            ✨ Produk Berkualitas BPOM ✨
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
