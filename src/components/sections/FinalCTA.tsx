import { Phone, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";
import { brand } from "@/config/brand";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-gradient-to-br from-[#0A2620] via-[#0F3A30] to-[#0A2620] text-white py-18 md:py-24 border-t border-emerald-900/40">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-narrow relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-emerald-300">
          <Sparkles size={15} className="text-[#D4AF37]" />
          <span>تواصل سريع ومباشر في نجران</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
          جاهز لتجربة نظافة تفوق توقعاتك؟
        </h2>

        <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed max-w-2xl mx-auto">
          لا تتردد في طلب استشارتك أو حجز موعدك اليوم. فريق {brand.nameAr} في نجران بانتظار اتصالك لترتيب زيارة فورية متكاملة.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={brand.whatsapp.withMessage("السلام عليكم، أرغب في حجز خدمة تنظيف في نجران.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold w-full sm:w-auto text-base py-4 px-8 shadow-xl"
          >
            <MessageCircle size={20} />
            <span>احجز عبر واتساب الآن</span>
          </a>

          <a
            href={brand.phone.link}
            className="btn btn-outline-white w-full sm:w-auto text-base py-4 px-7 font-bold flex items-center justify-center gap-2"
          >
            <Phone size={18} className="text-[#D4AF37]" />
            <span>اتصال هاتفي مباشر</span>
          </a>
        </div>

        {/* Reassurance Footer Text */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200/70">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>معاينة وتنسيق واضح</span>
          </div>
          <span>•</span>
          <span>خدمة متنقلة تغطي نجران</span>
          <span>•</span>
          <span>مواعيد مرنة طوال الأسبوع</span>
        </div>
      </div>
    </section>
  );
}
