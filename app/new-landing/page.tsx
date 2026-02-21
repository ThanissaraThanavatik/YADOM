import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Mail, MapPin, Phone, Facebook, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NewLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-8 py-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-semibold text-[#009689]">Yadom</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              <Link href="/" className="text-base font-medium text-[#009689]">
                หน้าเเรก
              </Link>
              <Link href="#features" className="text-base font-medium text-[#4a5565] hover:text-[#009689] transition-colors">
                จุดเด่น
              </Link>
              <Link href="#products" className="text-base font-medium text-[#4a5565] hover:text-[#009689] transition-colors">
                รีวิว
              </Link>
              <Link href="#contact" className="text-base font-medium text-[#4a5565] hover:text-[#009689] transition-colors">
                ติดต่อเรา
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-[#009689] hover:bg-[#00897d] text-white font-medium rounded-2xl px-4 py-2">
                สั่งซ์้อสินค้า
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-[1440/860]">
          {/* Gradient Background */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 23.5%, rgba(0,150,137,1) 100%)'
            }}
          />

          {/* Background Image */}
          <Image
            src="/images/yadom/hero-banner-5024-372.png"
            alt="Yadom Herbal Inhaler Banner"
            fill
            className="object-cover object-center z-10"
            priority
            sizes="100vw"
          />

          {/* Text Content */}
          <div className="absolute inset-0 z-20">
            {/* Line 1: ทำไมเรา */}
            <div
              className="absolute"
              style={{
                left: '115px',
                top: '322px',
              }}
            >
              <h1
                className="text-white font-semibold leading-none"
                style={{
                  fontSize: 'clamp(2rem, 9vw, 128px)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '128px',
                  width: '589px',
                }}
              >
                ทำไมเรา "ติดยาดม"
              </h1>
            </div>

            {/* Line 2: ได้ขนาดนี้? */}
            <div
              className="absolute"
              style={{
                left: '787px',
                top: '450px',
              }}
            >
              <h2
                className="text-white font-semibold leading-none"
                style={{
                  fontSize: 'clamp(2rem, 9vw, 128px)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '128px',
                }}
              >
                ได้ขนาดนี้?
              </h2>
            </div>

            {/* CTA Button */}
            <div
              className="absolute -translate-x-1/2 flex items-center justify-center bg-white px-10 py-4 rounded-2xl shadow-lg"
              style={{
                left: 'calc(50% + 0.5px)',
                top: '658px',
              }}
            >
              <span
                className="font-semibold text-center text-[#009689]"
                style={{
                  fontSize: '48px',
                  lineHeight: '48px',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                สั่งซื้อสินค้า
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="w-full bg-[#f2fbf9] py-24 px-36">
        {/* Title Block */}
        <div className="flex flex-col gap-6 mb-10 text-center">
          <h2
            className="text-[#009689] font-semibold"
            style={{
              fontSize: '60px',
              lineHeight: '60px',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            สินค้าของเรา
          </h2>
          <p
            className="text-[#636e72] font-medium"
            style={{
              fontSize: '24px',
              lineHeight: '32px',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            เลือกยาดมที่เหมาะกับไลฟ์สไตล์ของคุณ
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'ยาดมขวดคลาสสิก', desc: 'กลิ่นหอมสดชื่น สูตรดั้งเดิม', price: '฿59' },
            { name: 'ยาดมขวดคลาสสิก', desc: 'กลิ่นหอมสดชื่น สูตรดั้งเดิม', price: '฿59' },
            { name: 'ยาดมขวดคลาสสิก', desc: 'กลิ่นหอมสดชื่น สูตรดั้งเดิม', price: '฿59' },
            { name: 'ยาดมขวดคลาสสิก', desc: 'กลิ่นหอมสดชื่น สูตรดั้งเดิม', price: '฿59' },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div
                className="relative w-full h-64 overflow-hidden"
                style={{
                  background: 'linear-gradient(136.52deg, rgba(168, 230, 207, 0.2) 0%, rgba(255, 211, 182, 0.2) 100%)'
                }}
              >
                <Image
                  src={`/images/yadom/products/product-${(index % 4) + 1}-classic.png`}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-semibold text-[#2d3436]"
                    style={{ fontSize: '24px', lineHeight: '32px' }}
                  >
                    {product.name}
                  </h3>
                  <p
                    className="text-[#636e72]"
                    style={{ fontSize: '16px', lineHeight: '24px' }}
                  >
                    {product.desc}
                  </p>
                </div>

                {/* Price & Button */}
                <div className="flex items-end justify-between">
                  <span
                    className="font-semibold text-[#009689]"
                    style={{ fontSize: '30px', lineHeight: '36px' }}
                  >
                    {product.price}
                  </span>
                  <button
                    className="flex items-center gap-2 bg-[#009689] hover:bg-[#00897d] text-white px-4 py-2 rounded-2xl transition-colors shadow-md"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    <span className="text-base font-semibold">สั่งซื้อ</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#009689]">
        <div className="max-w-[1440px] mx-auto px-8 py-4">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
            {/* Column 1: Brand (Yadom) */}
            <div>
              <h4 className="text-xl font-semibold text-white leading-7 mb-6">
                Yadom
              </h4>
              <p className="text-base font-medium text-white/80 leading-6">
                ผลิตภัณฑ์ยาดมคุณภาพจากธรรมชาติ<br />
                เพื่อความสดชื่นของคุณทุกเวลา
              </p>
            </div>

            {/* Column 2: Quick Links (ลิงก์ด่วน) */}
            <div>
              <h4 className="text-xl font-semibold text-white leading-7 mb-6">
                ลิงก์ด่วน
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-base text-white/80 hover:text-white transition-colors">
                    หน้าแรก
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="text-base text-white/80 hover:text-white transition-colors">
                    สินค้า
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-base text-white/80 hover:text-white transition-colors">
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-base text-white/80 hover:text-white transition-colors">
                    ติดต่อเรา
                  </Link>
                </li>
                <li>
                  <Link href="#privacy" className="text-base text-white/80 hover:text-white transition-colors">
                    นโยบายความเป็นส่วนตัว
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info (ติดต่อเรา) */}
            <div>
              <h4 className="text-xl font-semibold text-white leading-7 mb-6">
                ติดต่อเรา
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <MapPin className="w-6 h-6 text-white/80 shrink-0 mt-0.5" />
                  <span className="text-base text-white/80">
                    123 ถนนสุขุมวิท<br />
                    แขวงคลองเตย กรุงเทพฯ 10110
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-white/80 shrink-0" />
                  <span className="text-base text-white/80">
                    02-123-4567
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-6 h-6 text-white/80 shrink-0" />
                  <span className="text-base text-white/80">
                    info@yadom.com
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us (ติดตามเรา) */}
            <div>
              <h4 className="text-xl font-semibold text-white leading-7 mb-6">
                ติดตามเรา
              </h4>
              <div className="flex items-center gap-6 mb-6">
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </Link>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-white/80">
                  เปิดให้บริการ จันทร์-ศุกร์
                </p>
                <p className="text-sm text-white/80">
                  เวลา 9:00 - 18:00 น.
                </p>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="pt-6 pb-4 border-t border-white/20 text-center">
            <p className="text-sm text-white/80">
              © 2026 ยาดม สดชื่น. สงวนลิขสิทธิ์.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
