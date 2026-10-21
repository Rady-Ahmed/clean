/**
 * Brand Configuration — صفوة النظافة
 * --------------------------------------------------
 * Central single source of truth for the brand.
 * Updated with photographic assets and refined luxury tokens.
 */

export interface ServiceItem {
  id: string;
  slug: string;
  nameAr: string;
  descriptionAr: string;
  icon: string;
  image: string;
  tagAr: string;
  featuresAr: string[];
  keywords: string[];
}

export interface BrandConfig {
  name: string;
  nameAr: string;
  descriptor: string;
  descriptorAr: string;
  phone: {
    local: string;
    international: string;
    link: string;
  };
  whatsapp: {
    link: string;
    withMessage: (message: string) => string;
  };
  domain: string;
  locale: string;
  direction: "rtl" | "ltr";
  colors: {
    primary: string;
    primaryLight: string;
    accent: string;
    gold: string;
    background: string;
    text: string;
    white: string;
  };
  serviceAreas: string[];
  districtsAr: string[];
  services: ServiceItem[];
  seo: {
    titleTemplate: string;
    defaultDescription: string;
  };
  verified: {
    address: string | null;
    hours: string | null;
    crNumber: string | null;
    socialProfiles: Record<string, string>;
  };
}

export const brand: BrandConfig = {
  name: "Safwat Al-Nazafa",
  nameAr: "صفوة النظافة",
  descriptor: "Professional Cleaning Services in Najran",
  descriptorAr: "خدمات التنظيف الشامل في نجران",

  phone: {
    local: "0561632615",
    international: "+966561632615",
    link: "tel:+966561632615",
  },

  whatsapp: {
    link: "https://wa.me/966561632615",
    withMessage: (message: string) =>
      `https://wa.me/966561632615?text=${encodeURIComponent(message)}`,
  },

  domain: "https://cleannajran.vercel.app",
  locale: "ar-SA",
  direction: "rtl",

  colors: {
    primary: "#0F3A30",
    primaryLight: "#165849",
    accent: "#10B981",
    gold: "#D4AF37",
    background: "#F8FAFB",
    text: "#111827",
    white: "#FFFFFF",
  },

  serviceAreas: ["نجران"],
  districtsAr: [
    "حي الفهد",
    "حي الخالدية",
    "حي الفيصلية",
    "حي أبا السعود",
    "حي العريسة",
    "حي المخيم",
    "حي الضباط",
    "حي الجربة",
  ],

  services: [
    {
      id: "home-cleaning",
      slug: "home-cleaning",
      nameAr: "تنظيف المنازل والشقق",
      descriptionAr:
        "تنظيف شامل وعميق للفلل، المنازل، والشقق السكنية يشمل الغرف، المجالس، المطابخ، ودورات المياه بأحدث الأدوات.",
      icon: "Home",
      image: "/images/home-cleaning.jpg",
      tagAr: "الأكثر طلباً",
      featuresAr: [
        "تلميع وجلي كافة أنواع الأرضيات والرخام",
        "تعقيم المطابخ وإزالة الدهون المستعصية",
        "تنظيف النوافذ والواجهات والمداخل",
      ],
      keywords: [
        "تنظيف المنازل في نجران",
        "شركة تنظيف شقق بنجران",
        "تنظيف فلل نجران",
      ],
    },
    {
      id: "sofa-cleaning",
      slug: "sofa-cleaning",
      nameAr: "تنظيف الكنب والمجالس",
      descriptionAr:
        "غسيل وتنظيف الكنب والمجالس العربية والسجاد بالبخار والمواد المتخصصة مع الحفاظ التام على ألوان وأنسجة الأقمشة.",
      icon: "Sofa",
      image: "/images/sofa-cleaning.jpg",
      tagAr: "تنظيف بالبخار",
      featuresAr: [
        "إزالة البقع الصعبة والرواسب دون بهتان الأقمشة",
        "تعقيم عميق ضد البكتيريا وحشرات الفراش",
        "تجفيف سريع للمفروشات والكنب",
      ],
      keywords: [
        "تنظيف كنب في نجران",
        "غسيل مجالس نجران",
        "تنظيف سجاد وموكيت بنجران",
      ],
    },
    {
      id: "ac-cleaning",
      slug: "ac-cleaning",
      nameAr: "تنظيف وغسيل المكيفات",
      descriptionAr:
        "غسيل وصيانة دورية للمكيفات السبليت والشباك لإزالة الغبار والعفن وتحسين كفاءة التبريد ونقاء الهواء داخل المكان.",
      icon: "Wind",
      image: "/images/ac-cleaning.jpg",
      tagAr: "كفاءة تبريد عالية",
      featuresAr: [
        "غسيل الفلاتر والمبخر والمكثف الخارجي والداخلي",
        "تسليك مجرى صرف المياه لمنع التسريب",
        "فحص أداء التبريد وضغط الفريون",
      ],
      keywords: [
        "تنظيف مكيفات سبليت نجران",
        "غسيل مكيفات نجران",
        "صيانة مكيفات بنجران",
      ],
    },
    {
      id: "water-tank-cleaning",
      slug: "water-tank-cleaning",
      nameAr: "تنظيف وتعقيم الخزانات",
      descriptionAr:
        "تنظيف شامل وتعقيم دقيق لخزانات المياه الأرضية والعلوية لضمان خلوها من الرواسب والطحالب وسلامة مياه الشرب.",
      icon: "Droplets",
      image: "/images/water-tank-cleaning.jpg",
      tagAr: "صحة ونقاء",
      featuresAr: [
        "تفريغ الخزان وسحب الرواسب والشوائب الصلبة",
        "تعقيم الجدران والأرضيات بمواد مصرحة ومأمونة",
        "فحص سلامة العزل الداخلي لمنع التلوث",
      ],
      keywords: [
        "تنظيف خزانات نجران",
        "غسيل خزانات مياه بنجران",
        "تعقيم خزانات نجران",
      ],
    },
    {
      id: "pest-control",
      slug: "pest-control",
      nameAr: "مكافحة الحشرات ورش المبيدات",
      descriptionAr:
        "حلول آمنة ومتطورة لإبادة الحشرات المنزلية والزاحفة وبق الفراش والقوارض باستخدام مبيدات مصرحة وبدون روائح مزعجة.",
      icon: "Bug",
      image: "/images/pest-control.jpg",
      tagAr: "حماية ممتدة",
      featuresAr: [
        "القضاء الفوري على الصراصير والنمل وبق الفراش",
        "رش مبيدات آمنة مصرحة من الهيئة العامة للغذاء والدواء",
        "سد ثغرات الدخول وتوفير حماية وقائية دورية",
      ],
      keywords: [
        "مكافحة حشرات نجران",
        "رش مبيدات بنجران",
        "إبادة الصراصير نجران",
      ],
    },
    {
      id: "office-cleaning",
      slug: "office-cleaning",
      nameAr: "تنظيف المكاتب والشركات",
      descriptionAr:
        "باقات تنظيف مخصصة للمقرات التجارية والمكاتب والشركات في نجران لتهيئة بيئة عمل احترافية ونظيفة تليق بعملك.",
      icon: "Building2",
      image: "/images/office-cleaning.jpg",
      tagAr: "خدمات تجارية",
      featuresAr: [
        "تنظيف وتعقيم المكاتب وقاعات الاجتماعات والأجهزة",
        "جلي الأرضيات وصيانة الواجهات الزجاجية",
        "جداول عمل مرنة تناسب أوقات العمل الرسمية",
      ],
      keywords: [
        "تنظيف مكاتب نجران",
        "نظافة شركات بنجران",
        "تنظيف منشآت تجارية نجران",
      ],
    },
  ],

  seo: {
    titleTemplate: "%s | صفوة النظافة — نجران",
    defaultDescription:
      "صفوة النظافة — الشركة الرائدة لخدمات التنظيف الشامل في نجران. تنظيف فلل ومنازل، غسيل كنب ومجالس، تنظيف مكيفات، تعقيم خزانات، ومكافحة حشرات. تواصل معنا الآن: 0561632615.",
  },

  verified: {
    address: null,
    hours: "نستقبل اتصالاتكم ورسائلكم يومياً من ٨:٠٠ ص حتى ١٠:٠٠ م",
    crNumber: null,
    socialProfiles: {},
  },
};

export const navigation = [
  { href: "/", labelAr: "الرئيسية" },
  { href: "/services", labelAr: "خدماتنا" },
  { href: "/#why-us", labelAr: "لماذا تختارنا" },
  { href: "/#before-after", labelAr: "قبل وبعد" },
  { href: "/#testimonials", labelAr: "آراء العملاء" },
  { href: "/#gallery", labelAr: "أعمالنا" },
  { href: "/about", labelAr: "من نحن" },
  { href: "/contact", labelAr: "اتصل بنا" },
] as const;

export type NavigationItem = (typeof navigation)[number];
