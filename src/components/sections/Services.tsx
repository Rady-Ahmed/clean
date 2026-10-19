import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, Award, RotateCcw, HeartHandshake } from "lucide-react";
import { brand } from "@/config/brand";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#F8FAFB]">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-emerald-900 mb-4 shadow-xs">
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span>خدماتنا المتخصصة والميدانية في نجران</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            خدمات تنظيف احترافية تمنحك راحة البال
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            نعتمد على طاقم مدرب ومعدات حديثة ومواد تعقيم مصرحة لضمان أعلى معايير النظافة والخصوصية لبيتك ومقرك في كافة أحياء نجران.
          </p>
        </div>

        {/* ── Client Reassurance & Peace-of-Mind Strip (عشان العميل يطمن) ── */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-md mb-14">
          <div className="text-center md:text-right mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-[#0F3A30] flex items-center justify-center md:justify-start gap-2.5">
              <ShieldCheck className="text-emerald-600" size={26} />
              <span>ماذا نضمن لك في كل زيارة؟ (راحة بالك أولويتنا)</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              التزامنا الصريح تجاه كل أسرة ومقر نخدمه في مدينة نجران:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-emerald-50/50 rounded-2xl p-4.5 border border-emerald-100/70 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <RotateCcw size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">ضمان الرضا التام</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  معاينة النتيجة معك خطوة بخطوة، وإعادة العمل فوراً إذا كان لديك أي ملاحظة.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/50 rounded-2xl p-4.5 border border-emerald-100/70 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0F3A30] text-[#F3CA65] flex items-center justify-center shrink-0 shadow-xs">
                <Award size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">مواد مصرحة وآمنة</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  منظفات ومعقمات معتمدة خالية من الروائح الخانقة، آمنة للأطفال وكبار السن.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/50 rounded-2xl p-4.5 border border-emerald-100/70 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <HeartHandshake size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">أمانة وخصوصية كاملة</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  طاقم عمل نظامي ومدرب يتمتع بأعلى درجات الأمانة والاحترام لخصوصية منزلك.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/50 rounded-2xl p-4.5 border border-emerald-100/70 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#0F3A30] text-[#F3CA65] flex items-center justify-center shrink-0 shadow-xs">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900 mb-1">معدات بخار حديثة</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  أحدث أجهزة الحقن والشفط وجلي الرخام لضمان نتائج عميقة تدوم طويلاً.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Services 3-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brand.services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Thumbnail */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.nameAr}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Category Tag Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md text-[#0F3A30] text-[11px] font-black px-3.5 py-1.5 rounded-full shadow-lg border border-gray-100">
                    {service.tagAr}
                  </div>

                  {/* Guaranteed badge bottom right */}
                  <div className="absolute bottom-3 right-3 bg-black/65 backdrop-blur-md text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#F3CA65]" />
                    <span>ضمان الجودة ✓</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2.5 group-hover:text-[#0F3A30] transition-colors">
                    {service.nameAr}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {service.descriptionAr}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold text-gray-400 mb-2.5">ما تشمله الزيارة:</p>
                    <ul className="space-y-2.5">
                      {service.featuresAr.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 leading-normal">
                          <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-6 pt-3 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between gap-3">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-700 hover:text-[#0F3A30] transition-colors"
                >
                  <span>شرح التفاصيل</span>
                  <ArrowLeft size={14} />
                </Link>

                <a
                  href={brand.whatsapp.withMessage(
                    `السلام عليكم، أود حجز أو الاستفسار عن خدمة ${service.nameAr} في نجران.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-emerald text-xs sm:text-sm py-2.5 px-4 shadow-sm font-bold flex items-center gap-2"
                  aria-label={`طلب ${service.nameAr} عبر واتساب`}
                >
                  <MessageCircle size={15} />
                  <span>احجز عبر واتساب</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
