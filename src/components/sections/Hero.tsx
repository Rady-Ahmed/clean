import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Sparkles, CheckCircle2, ShieldCheck, Clock, MapPin, ArrowLeft } from "lucide-react";
import { brand } from "@/config/brand";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071F1A] text-white pt-10 pb-20 md:pt-16 md:pb-28">
      {/* ── Background Subtle Atmospheric Glows ── */}
      <div className="absolute top-0 right-1/4 w-[36rem] h-[36rem] bg-emerald-500/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-narrow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ── Right Column: Text & Conversion Actions (7 cols) ── */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7 text-center lg:text-right">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/90 border border-emerald-400/50 text-xs sm:text-sm font-extrabold text-emerald-100 shadow-lg backdrop-blur-md">
              <Sparkles size={16} className="text-[#F3CA65] shrink-0" />
              <span>الخيار الأول لخدمات النظافة المعتمدة في منطقة نجران</span>
            </div>

            {/* Ultra-Crisp High-Contrast Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-white leading-[1.25] tracking-tight">
              <span className="block text-white drop-shadow-md">
                نظافة فائقة وعناية متكاملة
              </span>
              <span className="block mt-2 text-[#F3CA65] drop-shadow-md">
                لمنزلك ومقرك في نجران
              </span>
            </h1>

            {/* High-Contrast Clear Description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              نوفر في <strong className="text-white font-black">{brand.nameAr}</strong> باقة احترافية شاملة لتنظيف الفلل والمنازل، غسيل الكنب والمجالس بالبخار، صيانة وغسيل المكيفات، تعقيم الخزانات، ومكافحة الحشرات بمعدات حديثة ومواد آمنة تماماً.
            </p>

            {/* ── Direct Action Buttons (No raw digits exposed, pure intuitive action icons) ── */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* WhatsApp Action Button */}
              <a
                href={brand.whatsapp.withMessage("السلام عليكم، أود حجز موعد لخدمات التنظيف في نجران.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold text-base py-4 px-7 shadow-2xl font-black flex items-center justify-center gap-3 transition-transform hover:-translate-y-0.5 active:translate-y-0"
                aria-label="محادثة واتساب فورية"
              >
                <div className="w-7 h-7 rounded-full bg-[#071F1A]/15 flex items-center justify-center">
                  <MessageCircle size={18} className="text-[#071F1A]" />
                </div>
                <span>حجز سريع عبر واتساب</span>
              </a>

              {/* Direct Call Button (With Phone Icon, No Exposed Phone Digits) */}
              <a
                href={brand.phone.link}
                className="btn btn-outline-white text-base py-4 px-6 font-bold flex items-center justify-center gap-3 transition-transform hover:-translate-y-0.5 active:translate-y-0 bg-white/5 hover:bg-white/15 border-white/30"
                aria-label="اتصال هاتفي مباشر"
              >
                <div className="w-7 h-7 rounded-full bg-[#F3CA65]/20 flex items-center justify-center">
                  <Phone size={17} className="text-[#F3CA65]" />
                </div>
                <span>اتصال هاتفي مباشر</span>
              </a>

              {/* View Services link */}
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-emerald-200 hover:text-white underline underline-offset-8 transition-colors py-2 px-3"
              >
                <span>استعراض الخدمات</span>
                <ArrowLeft size={16} />
              </Link>
            </div>

            {/* ── High-Contrast Feature Badges ── */}
            <div className="pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div className="bg-emerald-950/70 backdrop-blur-md border border-emerald-500/30 rounded-2xl py-3 px-3.5 flex items-center justify-center lg:justify-start gap-2.5 text-white shadow-sm">
                <CheckCircle2 size={19} className="text-emerald-400 shrink-0" />
                <span className="font-bold text-slate-100">استجابة وتنسيق سريع</span>
              </div>
              <div className="bg-emerald-950/70 backdrop-blur-md border border-emerald-500/30 rounded-2xl py-3 px-3.5 flex items-center justify-center lg:justify-start gap-2.5 text-white shadow-sm">
                <ShieldCheck size={19} className="text-[#F3CA65] shrink-0" />
                <span className="font-bold text-slate-100">مواد آمنة ومصرحة</span>
              </div>
              <div className="bg-emerald-950/70 backdrop-blur-md border border-emerald-500/30 rounded-2xl py-3 px-3.5 flex items-center justify-center lg:justify-start gap-2.5 text-white shadow-sm">
                <MapPin size={19} className="text-emerald-400 shrink-0" />
                <span className="font-bold text-slate-100">تغطية كافة أحياء نجران</span>
              </div>
            </div>
          </div>

          {/* ── Left Column: Photography Showcase Frame (5 cols) ── */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glowing frame */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-tr from-emerald-500/40 via-white/25 to-[#D4AF37]/50 shadow-2xl backdrop-blur-md border border-white/30">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full bg-slate-900 shadow-inner">
                  <Image
                    src="/images/hero-cleaning.png"
                    alt="خدمات التنظيف الاحترافية في نجران — صفوة النظافة"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle inner dark gradient for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Inner overlay info banner */}
                  <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/30 text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Sparkles size={16} className="text-[#F3CA65]" />
                        <span className="font-black text-sm text-white">{brand.nameAr}</span>
                      </div>
                      <span className="text-xs text-emerald-300 font-extrabold bg-emerald-950/90 px-3 py-1 rounded-full border border-emerald-400/50">
                        خدمة متنقلة 📍
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top-Right Floating Trust Card */}
              <div className="absolute -top-4 -right-3 sm:-right-6 bg-white text-[#0F3A30] py-2.5 px-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-2.5 z-20">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500">جودة معتمدة</p>
                  <p className="text-xs font-black text-[#0F3A30]">دقة في المواعيد والتنفيذ</p>
                </div>
              </div>

              {/* Bottom-Left Floating Metric Card */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white text-[#0F3A30] py-3 px-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-[#0F3A30] text-[#F3CA65] flex items-center justify-center shadow-sm">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500">حجز سريع</p>
                  <p className="text-xs font-black text-[#0F3A30]">تنسيق فوري للموعد</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
