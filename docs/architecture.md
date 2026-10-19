# المعمارية التقنية والتصميمية — صفوة النظافة (Architecture)

## ١. البنية الأساسية للمشروع (Tech Stack)
- **Framework:** Next.js (App Router)
- **Language:** TypeScript مع Strict Mode مفعّل
- **Styling:** Tailwind CSS مع نظام Tokens مخصص
- **Icons:** Lucide React و SVG مخصص
- **Rendering Strategy:** Server Components كخيار افتراضي، Client Components فقط عند الحاجة لتفاعلية المستخدم (مثل زر فتح القائمة المتنقلة وأكورديون الأسئلة).

## ٢. هيكل المجلدات والملفات (Directory Structure)
```
clean/
├── docs/                      # توثيق المشروع والتدقيق وخطة السيو
│   ├── reference-audit.md
│   ├── architecture.md
│   ├── seo-plan.md
│   └── launch-checklist.md
├── src/
│   ├── app/                   # مسارات Next.js ومكونات الصفحات
│   │   ├── layout.tsx         # القالب الجذري مع دعم RTL وخط IBM Plex Sans Arabic
│   │   ├── page.tsx           # الصفحة الرئيسية المجمعة مع JSON-LD
│   │   ├── globals.css        # متغيرات التصميم والأنماط الأساسية
│   │   ├── sitemap.ts         # توليد خريطة الموقع XML تلقائياً
│   │   ├── robots.ts          # توليد ملف robots.txt تلقائياً
│   │   ├── not-found.tsx      # صفحة الخطأ 404 المخصصة
│   │   ├── about/page.tsx     # صفحة "من نحن"
│   │   ├── contact/page.tsx   # صفحة "اتصل بنا"
│   │   ├── privacy/page.tsx   # صفحة "سياسة الخصوصية"
│   │   └── services/
│   │       ├── page.tsx       # دليل جميع الخدمات
│   │       └── [slug]/page.tsx# الصفحة المخصصة لكل خدمة (Dynamic Route)
│   ├── components/            # مكونات واجهة المستخدم
│   │   ├── Header.tsx         # الترويسة العلوية المتجاوبة مع زر الاتصال
│   │   ├── Footer.tsx         # التذييل ومعلومات التواصل وروابط الصفحات
│   │   ├── WhatsAppButton.tsx # الزر العائم للتواصل الفوري
│   │   └── sections/          # أقسام الصفحة الرئيسية
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── ValueProposition.tsx
│   │       ├── HowItWorks.tsx
│   │       ├── Coverage.tsx
│   │       ├── FAQ.tsx
│   │       └── FinalCTA.tsx
│   └── config/                # الإعدادات المركزية المنفصلة
│       ├── brand.ts           # بيانات البراند، الأرقام، الألوان، وقائمة الخدمات
│       └── content.ts         # النصوص العربية، محتوى الخدمات، والأسئلة الشائعة
```

## ٣. مبدأ المركزية وسهولة التحديث (Centralized Single Source of Truth)
- جميع بيانات التواصل (رقم الهاتف، رابط الواتساب، النطاق، اسم البراند المؤقت) معرّفة في `src/config/brand.ts`.
- تغيير اسم البراند أو رقم الهاتف يتم في **سطر واحد فقط**، وينعكس تلقائياً في كامل الصفحات، العناوين، الروابط، وأكواد الـ Schema.
- لا توجد أي بيانات أعمال وهمية (لا توجد أرقام سجلات تجارية مزورة، ولا تقييمات عملاء مفبركة).

## ٤. نظام الألوان والهوية (Design Tokens)
- **الأخضر الغابي (Primary):** `#123D32` — يعبر عن النظافة، الوقار، والرسوخ.
- **أوف وايت دافئ (Surface):** `#F8F7F3` — خلفيات مريحة ودافئة للعين.
- **الذهبي المطفأ (Accent):** `#D9B66F` — لمسات راقية لأزرار التحويل والوسوم.
- **النصوص الداكنة (Text):** `#202722` — تباين عالٍ ومريح للقراءة.
