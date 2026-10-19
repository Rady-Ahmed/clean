import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand } from "@/config/brand";
import { ArrowLeft, Phone, MessageCircle, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "خدمات التنظيف في نجران",
  description:
    "استعرض خدمات التنظيف المتاحة في نجران: تنظيف المنازل والفلل، الكنب والمجالس، المكيفات، الخزانات، مكافحة الحشرات، وتنظيف المكاتب والشركات.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${brand.domain}/services#webpage`,
        url: `${brand.domain}/services`,
        name: "خدمات التنظيف في نجران | صفوة النظافة",
        description:
          "استعرض خدمات التنظيف المتاحة في نجران: تنظيف المنازل والفلل، الكنب والمجالس، المكيفات، الخزانات، ومكافحة الحشرات.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${brand.domain}/#website`,
          name: brand.nameAr,
          url: brand.domain,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${brand.domain}/services#breadcrumb`,
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
            name: "خدماتنا",
            item: `${brand.domain}/services`,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${brand.domain}/services#itemlist`,
        itemListElement: brand.services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.nameAr,
          url: `${brand.domain}/services/${service.slug}`,
          image: `${brand.domain}${service.image}`,
        })),
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
              <span className="text-white">خدماتنا</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-emerald-300 mb-4">
              <Sparkles size={14} className="text-[#D4AF37]" />
              <span>دليل الخدمات المعتمدة في نجران</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
              خدمات التنظيف الشامل في نجران
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl leading-relaxed">
              نوفر في {brand.nameAr} باقة متكاملة من حلول التنظيف المنزلي والتجاري داخل نجران، باستخدام أحدث الأدوات ومواد تعقيم آمنة ومطابقة لأعلى المواصفات.
            </p>
          </div>
        </section>

        {/* Services Showcase Cards */}
        <section className="section-padding">
          <div className="container-narrow">
            {/* ── Client Reassurance Banner (عشان العميل يطمن) ── */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-100 shadow-md mb-12">
              <div className="text-center md:text-right mb-6">
                <h2 className="text-xl sm:text-2xl font-black text-[#0F3A30]">
                  لماذا تختار خدماتنا وأنت مطمئن البال؟
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  معايير ثابتة نلتزم بها في كل منزل ومقر نخدمه في نجران:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">ضمان فحص النتيجة</h3>
                    <p className="text-gray-600 text-xs">تعاين الشغل معنا خطوة بخطوة، ونعيد أي جزء غير مرضي فوراً وبدون أي تكلفة.</p>
                  </div>
                </div>

                <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0F3A30] text-[#F3CA65] flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">مواد تعقيم آمنة ومصرحة</h3>
                    <p className="text-gray-600 text-xs">منظفات معتمدة بدون روائح نفاذة، آمنة للأطفال وكبار السن والمفروشات.</p>
                  </div>
                </div>

                <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">أمانة والتزام بالمواعيد</h3>
                    <p className="text-gray-600 text-xs">طاقم عمل نظامي ومدرب يتمتع بأعلى درجات الأمانة واحترام خصوصية بيتك.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brand.services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Real Image Header */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                      <Image
                        src={service.image}
                        alt={service.nameAr}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md text-[#0F3A30] text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                        {service.tagAr}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0F3A30] transition-colors">
                        {service.nameAr}
                      </h2>
                      <p className="text-sm text-gray-600 leading-relaxed mb-5">
                        {service.descriptionAr}
                      </p>

                      <ul className="space-y-2 pt-4 border-t border-gray-100">
                        {service.featuresAr.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                            <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-2 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between gap-3">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-700 hover:text-[#0F3A30] transition-colors"
                    >
                      <span>تفاصيل الخدمة</span>
                      <ArrowLeft size={14} />
                    </Link>

                    <a
                      href={brand.whatsapp.withMessage(
                        `السلام عليكم، أود طلب خدمة ${service.nameAr} في نجران.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-emerald text-xs py-2 px-3.5 shadow-sm"
                    >
                      <MessageCircle size={14} />
                      <span>طلب واتساب</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Direct Banner */}
        <section className="bg-white py-16 border-t border-gray-100">
          <div className="container-narrow text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              هل تبحث عن باقة تنظيف خاصة أو استشارة لموقعك؟
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              فريقنا متواجد لخدمتك وتقديم المشورة الملائمة لمساحة موقعك وجدول مواعيدك في نجران.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={brand.whatsapp.withMessage("السلام عليكم، أود استشارة حول خدمات التنظيف المناسبة لموقعي في نجران.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-emerald text-sm py-3 px-6 shadow-md"
              >
                <MessageCircle size={18} />
                <span>محادثة واتساب فورية</span>
              </a>
              <a href={brand.phone.link} className="btn btn-outline-brand text-sm py-3 px-6 font-bold flex items-center gap-2">
                <Phone size={18} />
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
