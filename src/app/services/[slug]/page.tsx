import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand } from "@/config/brand";
import { servicePages } from "@/config/content";
import { CheckCircle2, HelpCircle, Phone, MessageCircle, ArrowLeft, Sparkles, MapPin } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.titleAr,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.titleAr} | ${brand.nameAr}`,
      description: service.metaDescription,
      url: `${brand.domain}/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicePages.find((s) => s.slug === slug);
  if (!service) {
    return notFound();
  }

  const brandService = brand.services.find((s) => s.slug === slug);
  const serviceImage = brandService?.image || "/images/hero-cleaning.png";

  const related = brand.services.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${brand.domain}/services/${slug}#service`,
        name: service.titleAr,
        description: service.metaDescription,
        provider: {
          "@type": ["LocalBusiness", "CleaningService"],
          name: brand.nameAr,
          telephone: brand.phone.international,
          url: brand.domain,
          address: {
            "@type": "PostalAddress",
            addressLocality: "نجران",
            addressRegion: "منطقة نجران",
            addressCountry: "SA",
          },
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "نجران",
        },
        image: `${brand.domain}${serviceImage}`,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${brand.domain}/services/${slug}#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: service.titleAr,
            item: `${brand.domain}/services/${slug}`,
          },
        ],
      },
      ...(service.questionsAr && service.questionsAr.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${brand.domain}/services/${slug}#faq`,
              mainEntity: service.questionsAr.map((qa) => ({
                "@type": "Question",
                name: qa.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: qa.a,
                },
              })),
            },
          ]
        : []),
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
          {/* Hero Header with Split Visuals */}
          <section className="bg-gradient-to-b from-[#0A2620] via-[#0F3A30] to-[#0A2620] py-14 md:py-22 text-white border-b border-white/10">
            <div className="container-narrow">
              <nav className="mb-6 text-xs text-emerald-200/70" aria-label="مسار التصفح">
                <Link href="/" className="hover:text-white transition-colors">
                  الرئيسية
                </Link>
                <span className="mx-2">/</span>
                <Link href="/services" className="hover:text-white transition-colors">
                  خدماتنا
                </Link>
                <span className="mx-2">/</span>
                <span className="text-white">{service.titleAr}</span>
              </nav>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Text Side (7 cols) */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-emerald-300">
                    <Sparkles size={14} className="text-[#D4AF37]" />
                    <span>خدمة متخصصة ومعتمدة في نجران</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                    {service.titleAr}
                  </h1>

                  <p className="text-base sm:text-lg text-emerald-100/80 max-w-2xl leading-relaxed">
                    {service.introAr}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3.5">
                    <a
                      href={brand.whatsapp.withMessage(
                        `السلام عليكم، أود حجز أو الاستفسار عن خدمة ${service.titleAr} في نجران.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold text-sm py-3 px-6 shadow-lg"
                    >
                      <MessageCircle size={18} />
                      <span>حجز موعد عبر واتساب</span>
                    </a>

                    <a href={brand.phone.link} className="btn btn-outline-white text-sm py-3 px-6 font-bold flex items-center gap-2">
                      <Phone size={17} className="text-[#D4AF37]" />
                      <span>اتصال هاتفي مباشر</span>
                    </a>
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-xs text-emerald-200/80">
                    <MapPin size={15} className="text-emerald-400 shrink-0" />
                    <span>خدمة متنقلة تغطي جميع أحياء ومخططات نجران</span>
                  </div>
                </div>

                {/* Photo Side (5 cols) */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900">
                    <Image
                      src={serviceImage}
                      alt={service.titleAr}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Inclusions */}
          <section className="section-padding bg-white border-b border-gray-100">
            <div className="container-narrow">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
                    ماذا تشمل هذه الخدمة؟
                  </h2>
                  <p className="text-sm text-gray-600">
                    نقدم خطة عمل دقيقة ومفصلة لضمان تنظيف كافة الأجزاء بجودة تامة.
                  </p>
                </div>

                <div className="bg-[#F8FAFB] rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
                  <ul className="space-y-4">
                    {service.includesAr.map((item, index) => (
                      <li key={index} className="flex items-start gap-3.5 bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                        <CheckCircle2
                          size={22}
                          className="text-emerald-600 shrink-0 mt-0.5"
                        />
                        <span className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Service Questions / FAQ */}
          <section className="section-padding bg-[#F8FAFB]">
            <div className="container-narrow">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
                    أسئلة شائعة حول {brandService?.nameAr}
                  </h2>
                  <p className="text-sm text-gray-600">
                    إجابات عن أهم النقاط التي تهم عملاءنا في نجران قبل التنفيذ.
                  </p>
                </div>

                <div className="space-y-4">
                  {service.questionsAr.map((q, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200/80 p-6 bg-white shadow-xs"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2.5 mb-2.5">
                        <HelpCircle size={20} className="text-[#D4AF37] shrink-0" />
                        <span>{q.q}</span>
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed pe-7">
                        {q.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Related Services */}
          {related.length > 0 && (
            <section className="section-padding bg-white border-t border-gray-100">
              <div className="container-narrow">
                <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
                  خدمات أخرى قد تهمك في نجران
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {related.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/services/${rel.slug}`}
                      className="bg-[#F8FAFB] p-5 rounded-2xl border border-gray-100 hover:border-emerald-300 hover:bg-white hover:shadow-lg transition-all group flex items-center justify-between gap-4"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-gray-200">
                        <Image
                          src={rel.image}
                          alt={rel.nameAr}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0F3A30] transition-colors">
                          {rel.nameAr}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-1 mt-1">
                          {rel.descriptionAr}
                        </p>
                      </div>
                      <ArrowLeft
                        size={18}
                        className="text-gray-400 group-hover:text-[#0F3A30] group-hover:-translate-x-1 transition-all shrink-0"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Direct CTA */}
          <section className="bg-gradient-to-br from-[#0A2620] via-[#0F3A30] to-[#0A2620] text-white py-16">
            <div className="container-narrow text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black">
                احصل على استشارة أو حجز فوري في نجران
              </h2>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                تواصل معنا الآن وسيقوم فريق {brand.nameAr} بترتيب الزيارة والإجابة عن كافة تفاصيل الأسعار والمواعيد.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
                <a
                  href={brand.whatsapp.withMessage(
                    `السلام عليكم، أود حجز خدمة ${service.titleAr} في نجران.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold text-sm py-3 px-6 shadow-lg"
                >
                  <MessageCircle size={18} />
                  <span>تواصل عبر واتساب</span>
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
