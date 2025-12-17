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
    description: 'Lotion body yang bikin kulit glowing dan halus seperti bayi. Cocok untuk semua jenis kulit, apalagi yang kering dan sensitive!',
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
      <section className="relative overflow-hidden bg-linear-to-b from-pink-50 to-white pt-20 pb-16 px-4 sm:pt-32 sm:pb-24 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Kulit Cerah, Pinky Merona!
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Glow Up Ramah Kantong - Body Care Viral Aman BPOM
          </p>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <button className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full duration-200 text-lg gap-2 w-full">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-white'><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" /></svg>
              <span className=''>
                @fellory.id
              </span>
            </button>
            <button className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full duration-200 text-lg gap-2 w-full">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-white'><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
              <span className=''>
                @felloryofficial
              </span>
            </button>
            <button className="inline-flex items-center justify-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full duration-200 text-lg gap-2 w-full">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 fill-white'><title>Shopee</title><path d="M15.9414 17.9633c.229-1.879-.981-3.077-4.1758-4.0969-1.548-.528-2.277-1.22-2.26-2.1719.065-1.056 1.048-1.825 2.352-1.85a5.2898 5.2898 0 0 1 2.8838.89c.116.072.197.06.263-.039.09-.145.315-.494.39-.62.051-.081.061-.187-.068-.281-.185-.1369-.704-.4149-.983-.5319a6.4697 6.4697 0 0 0-2.5118-.514c-1.909.008-3.4129 1.215-3.5389 2.826-.082 1.1629.494 2.1078 1.73 2.8278.262.152 1.6799.716 2.2438.892 1.774.552 2.695 1.5419 2.478 2.6969-.197 1.047-1.299 1.7239-2.818 1.7439-1.2039-.046-2.2878-.537-3.1278-1.19l-.141-.11c-.104-.08-.218-.075-.287.03-.05.077-.376.547-.458.67-.077.108-.035.168.045.234.35.293.817.613 1.134.775a6.7097 6.7097 0 0 0 2.8289.727 4.9048 4.9048 0 0 0 2.0759-.354c1.095-.465 1.8029-1.394 1.9449-2.554zM11.9986 1.4009c-2.068 0-3.7539 1.95-3.8329 4.3899h7.6657c-.08-2.44-1.765-4.3899-3.8328-4.3899zm7.8516 22.5981-.08.001-15.7843-.002c-1.074-.04-1.863-.91-1.971-1.991l-.01-.195L1.298 6.2858a.459.459 0 0 1 .45-.494h4.9748C6.8448 2.568 9.1607 0 11.9996 0c2.8388 0 5.1537 2.5689 5.2757 5.7898h4.9678a.459.459 0 0 1 .458.483l-.773 15.5883-.007.131c-.094 1.094-.979 1.9769-2.0709 2.0059z" /></svg>
              <span className=''>
                @tttatttt_aaaa
              </span>
            </button>
          </div>
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
                      className="flex-1 flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded-full transition-colors duration-200 text-sm sm:text-base"
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
