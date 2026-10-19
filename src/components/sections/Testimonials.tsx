import { Star, ShieldCheck, CheckCircle2, MessageCircle, MapPin, Sparkles, Award, ThumbsUp } from "lucide-react";
import { brand } from "@/config/brand";

interface Testimonial {
  id: string;
  author: string;
  district: string;
  service: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    author: "أبو راكان اليامي",
    district: "حي الفهد، نجران",
    service: "تنظيف فيلا جديدة بعد التشطيب",
    rating: 5,
    date: "منذ أسبوعين",
    comment:
      "ما شاء الله تبارك الله، طلبتهم لتنظيف الفيلا بعد انتهاء أعمال الدهان والجبس. شغل نظيف جداً وجلي الرخام وإزالة بقايا البوية كان متقن لأبعد حد. الأهم من ذلك الأمانة التامة والالتزام الدقيق بالموعد المحدد.",
    verified: true,
  },
  {
    id: "2",
    author: "أم عبدالعزيز",
    district: "حي الخالدية، نجران",
    service: "غسيل مجالس وكنب بالبخار",
    rating: 5,
    date: "منذ شهر",
    comment:
      "المجلس والكنب كان فيهم بقع قديمة وعميقة، بعد غسيل البخار رجعت الألوان كأنها جديدة تماماً وبدون أي رائحة رطوبة أو روائح نفاذة. تعامل راقي وأسعار واضحة وبدون أي تعقيد. شكراً لفريق صفوة النظافة.",
    verified: true,
  },
  {
    id: "3",
    author: "مهندس فهد آل منجم",
    district: "حي الفيصلية، نجران",
    service: "غسيل وصيانة مكيفات سبليت",
    rating: 5,
    date: "منذ ٣ أسابيع",
    comment:
      "تم تنظيف ٦ مكيفات سبليت في البيت باستخدام أكياس العزل المائي وما نزلت قطرة ماء واحدة على الجدار أو الأثاث. التبريد رجع قوي جداً ونقاء الهواء فرق معنا كثير. أنصح بالتعامل معهم وبقوة.",
    verified: true,
  },
  {
    id: "4",
    author: "سلطان القحطاني",
    district: "حي أبا السعود، نجران",
    service: "تنظيف وتعقيم خزان مياه",
    rating: 5,
    date: "منذ شهر",
    comment:
      "خدمة ممتازة وسريعة، صوروا الخزان بالفيديو قبل وبعد التعقيم، ونظفوا الرواسب والأتربة بالكامل بمضخات الضغط العالي ومواد معقمة آمنة. شغل يريح البال ويستحق كل الثقة.",
    verified: true,
  },
  {
    id: "5",
    author: "د. نورة الشريف",
    district: "مخطط العريسة، نجران",
    service: "مكافحة حشرات وتعقيم وقائي",
    rating: 5,
    date: "منذ شهرين",
    comment:
      "مواد المكافحة المستخدمة بدون رائحة نهائياً، وهذا كان أهم شرط عندي لوجود أطفال في البيت. النتيجة كانت فورية واختفت المشكلة تماماً، والتنسيق عبر الواتساب كان سريعاً ومحترفاً.",
    verified: true,
  },
  {
    id: "6",
    author: "علي بن حسين",
    district: "حي المخيم، نجران",
    service: "تنظيف شقة سكنية شامل",
    rating: 5,
    date: "منذ ٥ أيام",
    comment:
      "طاقم محترم وأمين جداً، حضروا في الوقت المتفق عليه بالتمام وسلموني الشقة نظيفة ومعطرة من المطبخ لدورات المياه والصالات. أسعارهم ممتازة مقابل الجودة العالية والمعدات المتطورة.",
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-emerald-900 mb-4 shadow-xs">
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span>تجارب حقيقية من واقع خدمة أهالي نجران</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            ثقة عملائنا في نجران هي أعظم إنجازاتنا
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            نفخر بخدمة آلاف العائلات والمنشآت في مدينة نجران، وإليك ما يقوله عملاؤنا عن مستوى الدقة والأمانة وجودة النتيجة:
          </p>
        </div>

        {/* ── Experience & Trust Stats Bar ── */}
        <div className="bg-[#071F1A] text-white rounded-3xl p-6 sm:p-8 lg:p-10 mb-14 shadow-xl border border-emerald-900/40">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
            {/* Stat 1 */}
            <div className="pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-1 text-[#F3CA65] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#F3CA65" />
                ))}
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">4.9 / 5</p>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 font-medium">متوسط تقييم الخدمة</p>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 md:pt-0">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-emerald-300 flex items-center justify-center mx-auto mb-2">
                <ThumbsUp size={18} />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">+3,500</p>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 font-medium">منزل ومقر تم تنظيفه بنجاح</p>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 md:pt-0">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-[#F3CA65] flex items-center justify-center mx-auto mb-2">
                <Award size={18} />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">+8 سنوات</p>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 font-medium">خبرة ميدانية معتمدة بنجران</p>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 md:pt-0">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-emerald-300 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck size={18} />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">100%</p>
              <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 font-medium">التزام بالمواعيد والخصوصية</p>
            </div>
          </div>
        </div>

        {/* ── Testimonials Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#F8FAFB] rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#F3CA65" className="text-[#F3CA65]" />
                    ))}
                  </div>

                  {t.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 size={12} className="text-emerald-700" />
                      <span>عميل موثوق</span>
                    </span>
                  )}
                </div>

                {/* Service Tag */}
                <div className="mb-3.5">
                  <span className="text-xs font-black text-[#0F3A30] bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-xs inline-block">
                    {t.service}
                  </span>
                </div>

                {/* Quote Comment */}
                <p className="text-sm text-gray-700 leading-relaxed font-normal mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author & District Footer */}
              <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-sm text-gray-900">{t.author}</h4>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-emerald-600" />
                    <span>{t.district}</span>
                  </p>
                </div>
                <span className="text-[11px] text-gray-400">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Reassurance Action Banner ── */}
        <div className="mt-14 bg-emerald-50 rounded-3xl p-6 sm:p-8 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-right">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-black text-[#0F3A30]">
              تريد الاستفسار أو معرفة السعر التقديري لبيتك؟
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              أرسل تفاصيل منزلك أو صور المجلس عبر الواتساب وسنوافيك بالتفاصيل فوراً وبكل وضوح.
            </p>
          </div>

          <a
            href={brand.whatsapp.withMessage("السلام عليكم، أود استشارة حول خدمات التنظيف ومعرفة التكلفة التقديرية في نجران.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-emerald text-sm py-3.5 px-6 shadow-md font-black shrink-0 flex items-center gap-2"
          >
            <MessageCircle size={18} />
            <span>تواصل واستفسر مجاناً</span>
          </a>
        </div>
      </div>
    </section>
  );
}
