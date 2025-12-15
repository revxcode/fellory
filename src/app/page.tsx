import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Image from "next/image";
import { Award, Truck, ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Body Lotion',
      price: 'Rp 125.000',
      image: '/images/fellory-body-lotion-nobg.avif',
      description: 'Melembabkan kulit dengan formula premium'
    },
    {
      id: 2,
      name: 'Miss V Spray',
      price: 'Rp 95.000',
      image: '/images/fellory-missv-spray-nobg.avif',
      description: 'Perawatan khusus area sensitif'
    },
    {
      id: 3,
      name: 'Bar Soap',
      price: 'Rp 45.000',
      image: '/images/fellory-bar-soap-nobg.avif',
      description: 'Sabun batang dengan formula lembut'
    },
    {
      id: 4,
      name: 'Premium Set',
      price: 'Rp 250.000',
      image: '/images/fellory-3-product.avif',
      description: 'Paket lengkap perawatan tubuh'
    }
  ];

  return (
    <main className="relative w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Perawatan Tubuh Premium
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Rasakan pengalaman perawatan tubuh terbaik dengan produk premium dari Fellory.
                Formulasi khusus untuk kulit Indonesia yang sehat dan bercahaya.
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Belanja Sekarang
              </button>
            </div>
            <div className="flex-1 relative w-full max-w-md lg:max-w-lg">
              <div className="relative w-full aspect-square">
                <Image
                  src="/images/fellory-body-lotion-nobg.avif"
                  alt="Fellory Body Lotion"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Original Local Brand</h3>
              <p className="text-sm text-gray-600">Produk asli buatan Indonesia dengan kualitas terjamin</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-sm text-gray-600">Bahan berkualitas tinggi dan teruji dermatologi</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pengiriman Cepat</h3>
              <p className="text-sm text-gray-600">Gratis ongkir untuk pembelian di atas Rp 200.000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="w-full bg-gradient-to-br from-white to-pink-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Produk Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pilihan produk perawatan tubuh terbaik untuk kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative w-full aspect-square bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p
                    className="text-2xl font-bold text-pink-500"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {product.price}
                  </p>
                  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl transition-colors duration-300">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Tentang Fellory
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Fellory adalah brand perawatan tubuh lokal Indonesia yang berkomitmen untuk menghadirkan
                produk berkualitas premium dengan bahan-bahan pilihan. Kami percaya bahwa setiap orang
                berhak mendapatkan perawatan terbaik untuk kulit mereka.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dengan formulasi khusus yang disesuaikan untuk iklim tropis dan karakteristik kulit
                Indonesia, produk Fellory memberikan hasil maksimal yang dapat Anda rasakan sejak
                pemakaian pertama.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">100% Original</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">BPOM Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Halal</span>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-pink-200 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-pink-100 to-white rounded-3xl p-8 shadow-xl">
                  <Image
                    src="/images/fellory-logo-without-backgeound.avif"
                    alt="Fellory Logo"
                    width={400}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="w-full bg-gradient-to-br from-pink-500 to-pink-600 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Siap Memulai Perawatan Premium?
          </h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Dapatkan penawaran spesial untuk pembelian pertama Anda.
            Hubungi kami sekarang untuk konsultasi gratis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Hubungi Kami
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-500 transition-colors duration-300">
              Lihat Katalog
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white">
            <a href="tel:+62123456789" className="flex items-center gap-2 hover:underline">
              <Phone className="w-5 h-5" />
              +62 123 456 789
            </a>
            <a href="mailto:hello@fellory.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-5 h-5" />
              hello@fellory.com
            </a>
            <a href="#" className="flex items-center gap-2 hover:underline">
              <MapPin className="w-5 h-5" />
              Jakarta, Indonesia
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
