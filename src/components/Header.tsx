"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, MapPin, Clock } from "lucide-react";
import { brand, navigation } from "@/config/brand";
import Logo from "@/components/Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* ── Top Bar (Desktop Only) ── */}
      <div className="hidden lg:block bg-[#071F1A] text-white/90 text-xs py-2 border-b border-white/10">
        <div className="container-narrow flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-100 font-medium">خدمة متنقلة تغطي كافة أحياء ومخططات نجران</span>
            </span>
            <span className="text-white/30">|</span>
            <span className="inline-flex items-center gap-1.5 text-emerald-200/80">
              <Clock size={13} className="text-[#F3CA65]" />
              <span>استقبال الاتصالات ٨:٠٠ ص — ١٠:٠٠ م</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            {/* Phone link without raw phone number text */}
            <a
              href={brand.phone.link}
              className="inline-flex items-center gap-1.5 text-white hover:text-[#F3CA65] font-semibold transition-colors"
              aria-label="اتصل بنا هاتفياً"
            >
              <Phone size={13} className="text-[#F3CA65]" />
              <span>اتصل بنا الآن</span>
            </a>
            <span className="text-white/30">•</span>
            {/* WhatsApp link */}
            <a
              href={brand.whatsapp.withMessage("السلام عليكم، أود الاستفسار عن خدمات التنظيف في نجران.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
              aria-label="تواصل واتساب"
            >
              <MessageCircle size={14} />
              <span>واتساب مباشر</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <div
        className={`w-full bg-white/98 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "shadow-md border-b border-gray-100 py-3" : "border-b border-gray-100 py-4"
        }`}
      >
        <div className="container-narrow flex items-center justify-between">
          {/* Custom Brand Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="التنقل الرئيسي">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-bold text-gray-700 hover:text-[#0F3A30] hover:bg-emerald-50/80 rounded-xl transition-all"
              >
                {item.labelAr}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs (Hiding raw phone digits behind sleek icon + action text) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={brand.whatsapp.withMessage("السلام عليكم، أود حجز موعد تنظيف في نجران.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-emerald text-sm py-2.5 px-4.5 shadow-sm font-bold"
              aria-label="تواصل عبر واتساب"
            >
              <MessageCircle size={17} />
              <span>واتساب</span>
            </a>

            <a
              href={brand.phone.link}
              className="btn btn-outline-brand text-sm py-2.5 px-4 font-bold flex items-center gap-2"
              aria-label="اتصال هاتفي مباشر"
            >
              <Phone size={17} className="text-[#0F3A30]" />
              <span>اتصال مباشر</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2.5 text-gray-700 hover:text-[#0F3A30] hover:bg-gray-100 rounded-xl transition-colors focus:outline-none"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Navigation Drawer ── */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] sm:top-[77px] z-50 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border-b border-gray-200 shadow-2xl max-h-[calc(100vh-77px)] overflow-y-auto">
            <div className="container-narrow py-6 space-y-6">
              {/* Navigation Links */}
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold text-gray-800 hover:bg-emerald-50 hover:text-[#0F3A30] transition-colors"
                  >
                    <span>{item.labelAr}</span>
                    <span className="text-gray-400 text-sm">←</span>
                  </Link>
                ))}
              </nav>

              {/* Service Areas Badge */}
              <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3">
                <MapPin size={20} className="text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-emerald-950">
                    نغطي جميع أحياء نجران
                  </p>
                  <p className="text-[11px] text-emerald-800 mt-0.5 font-medium">
                    الفهد، الخالدية، الفيصلية، أبا السعود، العريسة، وكافة المخططات
                  </p>
                </div>
              </div>

              {/* Mobile Direct Action Buttons */}
              <div className="space-y-2.5 pt-2 border-t border-gray-100">
                <a
                  href={brand.whatsapp.withMessage("السلام عليكم، أود الاستفسار عن خدمات التنظيف في نجران.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-emerald w-full text-center py-3.5 font-bold shadow-md"
                >
                  <MessageCircle size={19} />
                  <span>تواصل فوري عبر واتساب</span>
                </a>

                <a
                  href={brand.phone.link}
                  className="btn btn-outline-brand w-full text-center py-3.5 font-bold"
                >
                  <Phone size={19} />
                  <span>اتصال هاتفي مباشر</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
