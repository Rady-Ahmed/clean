"use client";

import { useState, useEffect } from "react";
import { PhoneCall, MessageCircle } from "lucide-react";
import { brand } from "@/config/brand";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);

  // Optional subtle scroll awareness
  useEffect(() => {
    const handleScroll = () => {
      // Ensure visibility is maintained smoothly across scroll
      setIsVisible(true);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 start-5 z-50 flex flex-col items-start gap-2.5 sm:gap-3 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      aria-label="خيارات التواصل المباشر السريع"
    >
      {/* ── Direct Call Button (اتصال مباشر) ── */}
      <a
        href={brand.phone.link}
        className="group relative flex items-center gap-2.5 bg-gradient-to-r from-[#0F3A30] to-[#165849] hover:from-[#165849] hover:to-[#0F3A30] text-white px-4 py-3 rounded-full shadow-2xl border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label={`اتصال مباشر هاتفياً: ${brand.phone.local}`}
        title={`اتصال مباشر هاتفياً: ${brand.phone.local}`}
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#D4AF37]/30 animate-ping opacity-60 pointer-events-none" />

        <span className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#F3CA65] shrink-0">
          <PhoneCall size={16} className="animate-phone-ring" />
        </span>

        <div className="relative z-10 flex flex-col text-start leading-tight">
          <span className="text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-[#F3CA65] transition-colors">
            اتصال مباشر
          </span>
          <span className="text-[10px] text-emerald-200/80 font-medium hidden sm:inline-block">
            {brand.phone.local}
          </span>
        </div>

        {/* Live indicator dot */}
        <span className="relative z-10 flex h-2 w-2 ms-0.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
      </a>

      {/* ── Direct WhatsApp Button (واتس مباشر) ── */}
      <a
        href={brand.whatsapp.withMessage(
          "السلام عليكم ورحمة الله، أرغب في الاستفسار وحجز خدمة تنظيف في نجران."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/40 border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="تواصل فوري عبر واتساب مباشر"
        title="تواصل فوري عبر واتساب مباشر"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-70 pointer-events-none" />

        <span className="relative z-10 flex items-center justify-center w-6 h-6 shrink-0">
          <MessageCircle size={22} className="relative z-10 fill-white/15" />
        </span>

        <div className="relative z-10 flex flex-col text-start leading-tight">
          <span className="text-xs sm:text-sm font-bold tracking-tight text-white">
            واتس مباشر
          </span>
          <span className="text-[10px] text-emerald-50/90 font-medium hidden sm:inline-block">
            رد فوري سريع
          </span>
        </div>
      </a>
    </div>
  );
}
