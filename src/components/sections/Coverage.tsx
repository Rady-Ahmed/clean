import { MapPin, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { brand } from "@/config/brand";

export default function Coverage() {
  return (
    <section id="coverage" className="section-padding bg-[#F8FAFB]">
      <div className="container-narrow">
        <div className="bg-gradient-to-br from-[#0A2620] via-[#0F3A30] to-[#124539] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden">
          {/* Subtle decorative circles */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-emerald-300">
              <MapPin size={15} />
              <span>نطاق التغطية الجغرافية المؤكدة</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              نغطي كافة أحياء ومخططات مدينة نجران
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/80 leading-relaxed max-w-xl mx-auto">
              فرقنا المتنقلة مجهزة بكافة المعدات والمواد للوصول مباشرة إلى موقعك، سواء كان فيلا، شقة، عمارة، أو مقراً تجارياً.
            </p>

            {/* Districts Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-2.5 max-w-2xl mx-auto">
              {brand.districtsAr.map((district, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-semibold text-white border border-white/15"
                >
                  <CheckCircle size={13} className="text-emerald-400" />
                  <span>{district}</span>
                </span>
              ))}
            </div>

            {/* Quick Action */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={brand.whatsapp.withMessage("السلام عليكم، أرغب في التأكد من إمكانية زيارة موقعي في نجران لتقديم خدمة تنظيف.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold text-sm py-3 px-6 shadow-md"
              >
                <MessageCircle size={16} />
                <span>استفسر عن حيك عبر واتساب</span>
              </a>

              <a
                href={brand.phone.link}
                className="btn btn-outline-white text-sm py-3 px-6 font-bold flex items-center gap-2"
              >
                <Phone size={16} className="text-[#D4AF37]" />
                <span>اتصال هاتفي مباشر</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
