import React from "react";
import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  iconOnly?: boolean;
}

export default function Logo({
  className = "",
  variant = "dark",
  iconOnly = false,
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}
      aria-label={brand.nameAr}
    >
      {/* ── Official Luxury Brand Emblem ── */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0F3A30] via-[#144D40] to-[#0A2620] p-1 shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0 border border-[#D4AF37]/40 overflow-hidden">
        <Image
          src="/images/logo-emblem.png"
          alt="شعار صفوة النظافة"
          width={48}
          height={48}
          className="w-full h-full object-contain rounded-xl"
          priority
        />
      </div>

      {/* ── Brand Typography ── */}
      {!iconOnly && (
        <div className="flex flex-col text-right">
          <div className="flex items-center gap-1.5">
            <span
              className={`text-xl sm:text-2xl font-black tracking-tight leading-tight transition-colors ${
                isLight ? "text-white" : "text-[#0F3A30]"
              }`}
            >
              {brand.nameAr}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          </div>
          <span
            className={`text-[11px] sm:text-xs font-bold -mt-0.5 tracking-normal ${
              isLight ? "text-emerald-300" : "text-emerald-800"
            }`}
          >
            {brand.descriptorAr}
          </span>
        </div>
      )}
    </Link>
  );
}
