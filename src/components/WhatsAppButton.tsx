"use client";

import { MessageCircle } from "lucide-react";
import { brand } from "@/config/brand";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 start-6 z-40 flex items-center gap-3">
      <a
        href={brand.whatsapp.withMessage(
          "السلام عليكم ورحمة الله، أرغب في الاستفسار عن خدمات التنظيف في نجران."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
        aria-label="تواصل فوري عبر واتساب نجران"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-60 pointer-events-none" />

        <MessageCircle size={24} className="relative z-10 shrink-0" />
        <span className="relative z-10 text-xs font-bold hidden sm:inline-block">
          تواصل عبر واتساب
        </span>
      </a>
    </div>
  );
}
