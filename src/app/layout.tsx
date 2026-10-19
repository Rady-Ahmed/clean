import type { Metadata } from "next";
import { brand } from "@/config/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${brand.nameAr} — ${brand.descriptorAr}`,
    template: brand.seo.titleTemplate,
  },
  description: brand.seo.defaultDescription,
  metadataBase: new URL(brand.domain),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${brand.nameAr} — ${brand.descriptorAr}`,
    description: brand.seo.defaultDescription,
    siteName: brand.nameAr,
    locale: brand.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.nameAr} — ${brand.descriptorAr}`,
    description: brand.seo.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "شركة تنظيف بنجران",
    "تنظيف منازل نجران",
    "غسيل كنب نجران",
    "تنظيف مجالس بالبخار نجران",
    "غسيل مكيفات سبليت نجران",
    "تنظيف خزانات مياه نجران",
    "مكافحة حشرات نجران",
    "صفوة النظافة نجران",
    "تنظيف شقق وفلل نجران",
  ],
  category: "Home & Commercial Cleaning Services",
  other: {
    "format-detection": "telephone=no",
    "geo.region": "SA-10",
    "geo.placename": "نجران, نجران, المملكة العربية السعودية",
    "geo.position": "17.4924;44.1277",
    "ICBM": "17.4924, 44.1277",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-text antialiased">
        {children}
      </body>
    </html>
  );
}
