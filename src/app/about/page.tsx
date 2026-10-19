import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand } from "@/config/brand";
import { aboutContent } from "@/config/content";
import { ShieldCheck, Sparkles, Clock, CheckCircle2, Phone, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن | صفوة النظافة نجران",
  description:
    "تعرف على صفوة النظافة — خدمات تنظيف احترافية وموثوقة للمنازل والمكاتب في نجران، نركز على الدقة واستخدام مواد متخصصة.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${brand.domain}/about#webpage`,
        url: `${brand.domain}/about`,
        name: "من نحن | صفوة النظافة نجران",
        description:
          "تعرف على صفوة النظافة — خدمات تنظيف احترافية وموثوقة للمنازل والمكاتب في نجران.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${brand.domain}/#website`,
          name: brand.nameAr,
          url: brand.domain,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${brand.domain}/about#breadcrumb`,
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
            name: "من نحن",
            item: `${brand.domain}/about`,
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
        {/* Page Hero Header */}
        <section className="bg-gradient-to-b from-[#0A2620] to-[#0F3A30] py-16 md:py-24 text-white border-b border-white/10">
          <div className="container-narrow">
            <nav className="mb-4 text-xs text-emerald-200/70" aria-label="مسار التصفح">
              <Link href="/" className="hover:text-white transition-colors">
                الرئيسية
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">من نحن</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-emerald-300 mb-4">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span>نبذة عن صفوة النظافة</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
              من نحن — {brand.nameAr}
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl leading-relaxed">
              {aboutContent.description}
            </p>
          </div>
        </section>

        {/* Story & Philosophy Section */}
        <section className="section-padding bg-white border-b border-gray-100">
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full">
                  رؤيتنا في خدمة المجتمع المحلي
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
                  نضع راحة وصحة أسرتك في صدارة أولوياتنا
                </h2>

                <p className="text-base text-gray-600 leading-relaxed">
                  تأسست خدماتنا لتلبي تطلعات الأسر والمنشآت في منطقة نجران الباحثة عن مستوى نظافة يفوق الطرق التقليدية. نجمع بين التقنيات المتطورة لغسيل الأقمشة بالبخار، جلي وتطهير الأرضيات، وتطهير خزانات المياه بأعلى درجات الأمان.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 bg-[#F8FAFB] p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-gray-800">
                      احترام كامل لخصوصية المنازل والعوائل وسرية الممتلكات.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 bg-[#F8FAFB] p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-gray-800">
                      استخدام مواد تنظيف وتعقيم مأمونة ومصرحة رسمياً.
                    </p>
                  </div>

                  <div className="flex items-start gap-3 bg-[#F8FAFB] p-3.5 rounded-xl border border-gray-100">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-gray-800">
                      التزام دقيق بالمواعيد والحرص على تسليم العمل بأعلى معايير الإتقان.
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo Frame */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-gray-100">
                  <Image
                    src="/images/home-cleaning.jpg"
                    alt="طاقم صفوة النظافة أثناء تنظيف الفلل في نجران"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 right-4 text-white">
                    <p className="text-xs font-bold text-emerald-300">خدمات متكاملة</p>
                    <p className="text-sm font-black">نجران والمناطق المجاورة 📍</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles Cards */}
        <section className="section-padding bg-[#F8FAFB]">
          <div className="container-narrow">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
                مبادئ العمل الأساسية
              </h2>
              <p className="text-sm text-gray-600">
                قواعد ثابتة تحكم كل عملية تنظيف ننجزها في نجران.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center">
                <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-5">
                  <Sparkles size={24} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">الدقة والعناية</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  الاهتمام بأدق التفاصيل والزوايا غير المرئية لتوفير بيئة نظيفة وصحية تدوم طويلاً لأسرتك.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center">
                <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-5">
                  <ShieldCheck size={24} className="text-emerald-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">مواد آمنة ومعتمدة</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  استخدام منظفات ومعقمات مخصصة ومطابقة للمعايير لحماية الأسطح والأقمشة دون أي انبعاثات ضارة.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm text-center">
                <div className="w-13 h-13 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-5">
                  <Clock size={24} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">التزام بالوقت</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  تنسيق دقيق للمواعيد واحترام وقت العميل لضمان إنجاز العمل بالسرعة المطلوبة دون تأخير.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-br from-[#0A2620] via-[#0F3A30] to-[#0A2620] text-white py-16">
          <div className="container-narrow text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black">
              يسعدنا خدمتك في نجران اليوم
            </h2>
            <p className="text-emerald-100/80 text-sm leading-relaxed">
              تواصل معنا للاستفسار عن أي خدمة تنظيف أو لتنسيق زيارة فريق العمل لموقعك.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={brand.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold text-sm py-3 px-6 shadow-lg"
              >
                <MessageCircle size={18} />
                <span>واتساب مباشر</span>
              </a>
              <a href={brand.phone.link} className="btn btn-outline-white text-sm py-3 px-6 font-bold flex items-center gap-2">
                <Phone size={17} className="text-[#D4AF37]" />
                <span>اتصال هاتفي مباشر</span>
              </a>
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
