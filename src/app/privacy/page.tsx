import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | صفوة النظافة نجران",
  description:
    "سياسة الخصوصية وحماية بيانات العملاء لموقع صفوة النظافة لخدمات التنظيف في نجران.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="bg-brand py-12 md:py-16 text-white">
          <div className="container-narrow">
            <nav className="mb-4 text-xs text-white/70" aria-label="مسار التصفح">
              <Link href="/" className="hover:text-accent">
                الرئيسية
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">سياسة الخصوصية</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              سياسة الخصوصية
            </h1>
            <p className="text-sm md:text-base text-white/80 max-w-xl">
              توضيح لكيفية تعامل {brand.nameAr} مع بيانات الزوار والعملاء في نجران.
            </p>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-border space-y-8 text-sm md:text-base text-text leading-relaxed">
              <div>
                <h2 className="text-lg md:text-xl font-bold text-text mb-3">
                  ١. جمع المعلومات
                </h2>
                <p className="text-text-muted">
                  لا نقوم بجمع أي معلومات شخصية تلقائياً من زوار الموقع باستثناء البيانات التقنية المجهولة التي تجمعها خوادم الاستضافة تلقائياً لأغراض تشغيلية وأمنية. عند تواصلك معنا طوعاً عبر الهاتف أو تطبيق واتساب، فإننا نستخدم رقم هاتفك والاسم والموقع الجغرافي فقط لغرض تقديم الخدمة والتنسيق معك.
                </p>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-bold text-text mb-3">
                  ٢. استخدام البيانات
                </h2>
                <p className="text-text-muted">
                  البيانات التي تزودنا بها أثناء التواصل تستخدم حصرًا للأغراض التالية:
                </p>
                <ul className="list-disc list-inside mt-2 text-text-muted space-y-1 pe-4">
                  <li>الرد على الاستفسارات وتقديم التقديرات وتحديد المواعيد.</li>
                  <li>إرسال فريق العمل إلى موقع العميل المتفق عليه في نجران.</li>
                  <li>متابعة جودة الخدمة ورضا العميل بعد انتهاء العمل.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-bold text-text mb-3">
                  ٣. سرية المعلومات وحمايتها
                </h2>
                <p className="text-text-muted">
                  نحن نلتزم بالحفاظ على سرية وخصوصية جميع بيانات العملاء. لا نقوم ببيع أو تأجير أو مشاركة أي بيانات شخصية مع أي جهة خارجية أو أطراف ثالثة لأغراض تسويقية على الإطلاق.
                </p>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-bold text-text mb-3">
                  ٤. الروابط الخارجية
                </h2>
                <p className="text-text-muted">
                  يحتوي موقعنا على روابط خارجية لتطبيق واتساب وخدمات الاتصال الهاتفي. يخضع استخدام هذه التطبيقات لسياسات الخصوصية وشروط الاستخدام الخاصة بالشركات المشغلة لها.
                </p>
              </div>

              <div>
                <h2 className="text-lg md:text-xl font-bold text-text mb-3">
                  ٥. التواصل والاستفسار
                </h2>
                <p className="text-text-muted">
                  إذا كان لديك أي سؤال أو استفسار حول سياسة الخصوصية الخاصة بنا، يمكنك التواصل معنا مباشرة عبر الهاتف: {brand.phone.local}.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
