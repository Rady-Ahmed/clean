import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ValueProposition from "@/components/sections/ValueProposition";
import HowItWorks from "@/components/sections/HowItWorks";
import Gallery from "@/components/sections/Gallery";
import BeforeAfterShowcase from "@/components/sections/BeforeAfterShowcase";
import Testimonials from "@/components/sections/Testimonials";
import Coverage from "@/components/sections/Coverage";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand } from "@/config/brand";
import { faqs } from "@/config/content";

export default function HomePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "CleaningService"],
        "@id": `${brand.domain}/#organization`,
        name: brand.nameAr,
        alternateName: brand.name,
        description: brand.seo.defaultDescription,
        url: brand.domain,
        telephone: brand.phone.international,
        priceRange: "$$",
        image: `${brand.domain}/images/hero-cleaning.png`,
        logo: `${brand.domain}/favicon.svg`,
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
        areaServed: brand.districtsAr.map((district) => ({
          "@type": "AdministrativeArea",
          name: district,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "نجران",
          },
        })),
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
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "128",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "خدمات التنظيف في نجران",
          itemListElement: brand.services.map((service, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.nameAr,
              description: service.descriptionAr,
              image: `${brand.domain}${service.image}`,
            },
            position: index + 1,
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${brand.domain}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
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
          <Hero />
          <Services />
          <ValueProposition />
          <HowItWorks />
          <Gallery />
          <BeforeAfterShowcase />
          <Testimonials />
          <Coverage />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
