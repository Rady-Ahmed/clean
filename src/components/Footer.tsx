import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { brand, navigation } from "@/config/brand";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-[#071F1A] text-white border-t border-white/10 pt-16 pb-10">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />

            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed max-w-sm">
              الخيار الموثوق في نجران لخدمات تنظيف الفلل، الشقق، الكنب، المكيفات، الخزانات، ومكافحة الحشرات بمعدات حديثة ومواد آمنة تضمن رضاك التام.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={brand.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
                aria-label="واتساب"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href={brand.phone.link}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
                aria-label="اتصال"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              خدماتنا في نجران
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/75">
              {brand.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#D4AF37] transition-colors inline-block"
                  >
                    {service.nameAr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/75">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#D4AF37] transition-colors inline-block"
                  >
                    {item.labelAr}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#D4AF37] transition-colors inline-block"
                >
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              التواصل المباشر
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-emerald-100/75">
              <li>
                <a
                  href={brand.phone.link}
                  className="flex items-center gap-2.5 hover:text-white transition-colors text-emerald-300 font-semibold"
                >
                  <Phone size={16} className="text-[#D4AF37] shrink-0" />
                  <span>اتصال هاتفي مباشر</span>
                </a>
              </li>
              <li>
                <a
                  href={brand.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <MessageCircle size={16} className="text-emerald-400 shrink-0" />
                  <span>محادثة واتساب سريعة</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span>مدينة نجران والمناطق المجاورة (خدمة متنقلة)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{brand.verified.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/50">
          <p>
            © 2026 {brand.nameAr} — خدمات التنظيف في نجران. جميع الحقوق محفوظة.
          </p>
          <p className="text-[11px] text-emerald-100/40">
            موقع تجاري مخصص لخدمات النظافة المنزلية والتجارية في المملكة العربية السعودية.
          </p>
        </div>

        {/* Developer Credit */}
        <div className="pt-5 border-t border-white/5 flex justify-center">
          <a
            href="https://radyahmed.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[11px] text-emerald-100/30 hover:text-emerald-300 transition-all duration-300"
            aria-label="تصميم وتطوير: رادي أحمد"
          >
            <span>⚡</span>
            <span>
              تصميم وتطوير بواسطة{" "}
              <span className="font-semibold text-emerald-100/50 group-hover:text-emerald-300 transition-colors duration-300 underline decoration-dotted underline-offset-2">
                Rady Ahmed
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
