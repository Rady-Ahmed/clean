import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand } from "@/config/brand";
import { Phone, MessageCircle, MapPin, Clock, Info, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "اتصل بنا | صفوة النظافة نجران",
  description:
    "تواصل مع صفوة النظافة للاستفسار أو طلب خدمات التنظيف في نجران عبر الاتصال الهاتفي المباشر 0561632615 أو تطبيق واتساب.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${brand.domain}/contact#webpage`,
        url: `${brand.domain}/contact`,
        name: "اتصل بنا | صفوة النظافة نجران",
        description:
          "تواصل مع صفوة النظافة للاستفسار أو طلب خدمات التنظيف في نجران عبر الاتصال الهاتفي المباشر 0561632615 أو تطبيق واتساب.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${brand.domain}/#website`,
          name: brand.nameAr,
          url: brand.domain,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${brand.domain}/contact#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: brand.domain,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "تواصل معنا",
            item: `${brand.domain}/contact`,
          },
        ],
      },
      {
        "@type": ["LocalBusiness", "CleaningService"],
        "@id": `${brand.domain}/#organization`,
        name: brand.nameAr,
        telephone: brand.phone.international,
        url: brand.domain,
        address: {
          "@type": "PostalAddress",
          addressLocality: "نجران",
          addressRegion: "منطقة نجران",
          addressCountry: "SA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "17.4924",
          longitude: "44.1277",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "08:00",
            closes: "22:00",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <div className="flex min-h-screen flex-col bg-[#F8FAFB]">
      <Header />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-b from-[#0A2620] to-[#0F3A30] py-16 md:py-24 text-white border-b border-white/10">
          <div className="container-narrow">
            <nav className="mb-4 text-xs text-emerald-200/70" aria-label="مسار التصفح">
              <Link href="/" className="hover:text-white transition-colors">
                الرئيسية
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">تواصل معنا</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-emerald-300 mb-4">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span>قنوات الاتصال المباشرة</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
              تواصل معنا — {brand.nameAr}
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/80 max-w-xl leading-relaxed">
              يسعدنا تلقي استفساراتكم وحجوزاتكم عبر قنوات التواصل المباشرة في منطقة نجران.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding">
          <div className="container-narrow">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
                    <MessageCircle size={34} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 mb-3">
                    المحادثة عبر واتساب
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-8">
                    أسرع وسيلة للاستفسار وتحديد نوع الخدمة المطلوبة ومشاركة الصور أو اللوكيشن للفيلا أو الشقة في نجران.
                  </p>
                </div>
                <a
                  href={brand.whatsapp.withMessage(
                    "السلام عليكم ورحمة الله، أود الاستفسار عن خدمات التنظيف المتاحة في نجران."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-emerald w-full text-center py-4 text-base shadow-lg"
                >
                  <MessageCircle size={20} />
                  <span>بدء محادثة واتساب فورية</span>
                </a>
              </div>

              {/* Direct Call Card */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#0F3A30]/5 text-[#0F3A30] flex items-center justify-center mb-6 shadow-sm border border-[#0F3A30]/10">
                    <Phone size={34} className="text-[#D4AF37]" />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900 mb-3">
                    الاتصال الهاتفي المباشر
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-8">
                    تواصل مباشرة مع خدمة العملاء لترتيب المواعيد الفورية ومناقشة تفاصيل باقات النظافة.
                  </p>
                </div>
                <a
                  href={brand.phone.link}
                  className="btn btn-outline-brand w-full text-center py-4 text-base font-bold flex items-center justify-center gap-2"
                >
                  <Phone size={20} className="text-[#0F3A30]" />
                  <span>بدء اتصال هاتفي مباشر</span>
                </a>
              </div>
            </div>

            {/* Business Info Grid */}
            <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">
                    نطاق الخدمة
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    مدينة نجران والمناطق المجاورة لها (خدمة متنقلة تصل مباشرة لموقع العميل).
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-1">
                    ساعات الاستقبال
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {brand.verified.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Transparent Note */}
            <div className="max-w-4xl mx-auto mt-8 bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 flex items-start gap-3.5">
              <Info size={22} className="text-amber-800 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                ملاحظة: هذا الموقع يمثل قناة تواصل واستفسار مباشرة. لا نجمع أي بيانات شخصية غير ضرورية، ويتم الاتفاق على كافة تفاصيل الخدمة والأسعار بشفافية تامة مباشرة عبر الهاتف أو تطبيق واتساب.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
    </>
  );
}
