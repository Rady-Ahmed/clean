"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { brand } from "@/config/brand";

interface ComparisonCase {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  image: string;
  beforeStats: string;
  afterStats: string;
  features: string[];
  whatsappMessage: string;
}

const comparisonCases: ComparisonCase[] = [
  {
    id: "sofa",
    tabLabel: "غسيل الكنب والمجالس",
    title: "تنظيف وتعقيم مجالس وكنب بالبخار",
    subtitle: "إزالة أصعب البقع العميقة واستعادة رونق ونعومة الأقمشة الأصلية بنجران",
    image: "/images/sofa-cleaning.jpg",
    beforeStats: "بقع عصير وزيوت متراكمة، بهتان بالألوان، ورواسب أتربة عميقة",
    afterStats: "تعقيم فائق بالبخار 140°م، لمعان النسيج، تجفيف سريع ورائحة منعشة",
    features: [
      "إزالة بقع القهوة والدهون بنسبة تصل إلى 98%",
      "قتل 99.9% من الجراثيم وحشرات الفراش بالبخار الساخن",
      "مواد صديقة للأقمشة تحافظ على تماسك الألياف والألوان",
    ],
    whatsappMessage: "السلام عليكم، اطلعت على نتائج قبل وبعد لغسيل الكنب والمجالس، وأرغب في حجز موعد لتنظيف المجلس في نجران.",
  },
  {
    id: "marble",
    tabLabel: "جلي وتلميع الرخام",
    title: "جلي وتلميع أرضيات الرخام والفلل",
    subtitle: "إعادة لمعان المرآة للرخام والبلاط بتقنية الكريستال الإيطالي الحديثة",
    image: "/images/home-cleaning.jpg",
    beforeStats: "خدوش سطحية، طبقة كلسية باهتة، وفواصل متسخة بالأسمنت والأتربة",
    afterStats: "لمعان بلوري عاكس كالمرايا، فواصل موحدة ومعالجة بمواد مخصصة",
    features: [
      "صنفرة ماسية متعددة المراحل لإخفاء الخدوش وفروق الارتفاع",
      "تلميع نهائي بمادة الكريستال لإضفاء لمعان فاخر يدوم طويلاً",
      "طبقة حماية عازلة لمنع تشرب السوائل والبقع مستقبلاً",
    ],
    whatsappMessage: "السلام عليكم، رأيت نتائج جلي الرخام والأرضيات في الموقع، وأرغب بمعاينة وسعر لجلي أرضيات فيلتي بنجران.",
  },
  {
    id: "ac",
    tabLabel: "غسيل المكيفات",
    title: "غسيل وصيانة مكيفات سبليت",
    subtitle: "تنظيف عميق للمبخر الداخلي والفلاتر مع حماية الجدران والأثاث بالكامل",
    image: "/images/ac-cleaning.jpg",
    beforeStats: "تراكم كثيف للأتربة على زعانف التبريد، ضعف ضخ الهواء، ورائحة رطوبة",
    afterStats: "تبريد فائق السرعة، هواء نقي صحي خالي من البكتيريا، واستهلاك كهرباء أقل",
    features: [
      "استخدام غطاء العزل المائي الشامل لحماية الجدار والفرش من رذاذ الماء",
      "مضخة ضغط مائي مخصصة لغسيل أعمق الأجزاء دون إتلاف الزعانف",
      "تسليك مجرى الصرف وفحص ضغط الفريون لضمان أعلى برودة",
    ],
    whatsappMessage: "السلام عليكم، أحتاج غسيل وصيانة لمكيفات سبليت في نجران، كم التكلفة والموعد المتاح؟",
  },
  {
    id: "tanks",
    tabLabel: "تعقيم الخزانات",
    title: "غسيل وتعقيم خزانات المياه الأرضية والعلوية",
    subtitle: "تطهير شامل لضمان مياه نقية وصحية ومطابقة لأعلى الاشتراطات الصحية",
    image: "/images/water-tank-cleaning.jpg",
    beforeStats: "طين ورواسب قاعية متكلسة، بكتيريا وطحالب على الجدران الخرسانية",
    afterStats: "جدران وأرضيات معقمة ولامعة، ماء نقي وصحي 100% صالح للاستخدام",
    features: [
      "سحب كامل للرواسب والمياه الملوثة بمضخات غاطسة قوية",
      "غسيل بفرش ومواد مخصصة مصرحة من هيئة الغذاء والدواء",
      "تعقيم نهائي بالكلور الموزون ونقاء مضمون لمياه منزلك",
    ],
    whatsappMessage: "السلام عليكم، أرغب بحجز خدمة غسيل وتعقيم خزان مياه لمنزلي في نجران.",
  },
];

export default function BeforeAfterShowcase() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCase = comparisonCases[activeTab];

  // Handle position update from client coordinate
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    // Calculate percentage from right to left because Arabic is RTL
    // or standard left to right percentage:
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updatePosition(e.clientX);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) {
        updatePosition(e.touches[0].clientX);
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isDragging, updatePosition]);

  return (
    <section id="before-after" className="section-padding bg-gradient-to-b from-[#F8FAFB] via-white to-[#F8FAFB] relative overflow-hidden border-t border-gray-100">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-bold text-emerald-900 mb-4 shadow-xs">
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span>شاهد الفرق بعينك — نتائج ملموسة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            معرض المقارنة التفاعلي: قبل وبعد التنظيف
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            حرّك المؤشر يميناً ويساراً لترى التحول الحقيقي الذي نصنعه في منازل ومقرات عملائنا في نجران.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
          {comparisonCases.map((item, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(idx);
                  setSliderPos(50);
                }}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black transition-all flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#0F3A30] text-white border-[#0F3A30] shadow-md shadow-[#0F3A30]/20 scale-[1.02]"
                    : "bg-white text-gray-700 hover:text-gray-900 border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/40"
                }`}
              >
                <span>{item.tabLabel}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#F3CA65] animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-7 shadow-xl border border-gray-100">
          {/* Active Case Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-gray-100">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                {currentCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {currentCase.subtitle}
              </p>
            </div>

            {/* Instruction Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] sm:text-xs font-bold text-amber-900 self-start sm:self-auto shrink-0">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-700">
                <polyline points="7 10 2 15 7 20" />
                <polyline points="17 4 22 9 17 14" />
                <line x1="2" y1="15" x2="14" y2="15" />
                <line x1="10" y1="9" x2="22" y2="9" />
              </svg>
              <span>اسحب الخط للمقارنة</span>
            </div>
          </div>

          {/* Slider Container */}
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-md border border-gray-200 group"
          >
            {/* 1) AFTER IMAGE LAYER (Full Width Base Layer) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={currentCase.image}
                alt={`بعد ${currentCase.title}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-center filter saturate-110 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* AFTER Floating Label */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600/90 text-white text-xs font-black shadow-lg backdrop-blur-md border border-emerald-400/50">
                  <Sparkles size={13} className="text-[#F3CA65]" />
                  <span>بعد التنظيف ✨</span>
                </span>
              </div>
            </div>

            {/* 2) BEFORE IMAGE LAYER (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                width: `${sliderPos}%`,
              }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  // Keep the inner image full size of the container regardless of clip
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={currentCase.image}
                  alt={`قبل ${currentCase.title}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  style={{
                    filter: "grayscale(45%) brightness(0.85) contrast(0.9) sepia(0.25)",
                  }}
                  className="object-cover object-center"
                />
                {/* Dust & grime overlay simulation */}
                <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* BEFORE Floating Label */}
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 text-slate-100 text-xs font-black shadow-lg backdrop-blur-md border border-white/20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                    <span>قبل التنظيف</span>
                  </span>
                </div>
              </div>
            </div>

            {/* 3) DIVIDER HANDLE BAR */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{
                left: `${sliderPos}%`,
                transform: "translateX(-50%)",
              }}
            >
              {/* Vertical line */}
              <div className="w-1 h-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)]" />

              {/* Center circular knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#0F3A30] shadow-2xl border-2 border-emerald-500 flex items-center justify-center transition-transform group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#0F3A30]">
                  <polyline points="8 7 3 12 8 17" />
                  <polyline points="16 7 21 12 16 17" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Click Adjusters */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-[11px] text-gray-400 font-semibold me-1">عرض سريع:</span>
            {[
              { label: "قبل فقط", pos: 90 },
              { label: "النصف 50%", pos: 50 },
              { label: "بعد فقط", pos: 10 },
            ].map((btn, i) => (
              <button
                key={i}
                onClick={() => setSliderPos(btn.pos)}
                className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                  Math.abs(sliderPos - btn.pos) < 10
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Detailed Diagnosis & Features Breakdown */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Before Analysis */}
            <div className="bg-rose-50/50 border border-rose-100 rounded-2xl p-4.5">
              <div className="flex items-center gap-2 mb-2 text-rose-800 font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>حالة المكان قبل الزيارة:</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                {currentCase.beforeStats}
              </p>
            </div>

            {/* After Result */}
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4.5">
              <div className="flex items-center gap-2 mb-2 text-emerald-800 font-bold text-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>النتيجة المسلمة للعميل:</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-bold">
                {currentCase.afterStats}
              </p>
            </div>
          </div>

          {/* Execution Specs List */}
          <div className="mt-5 p-4 rounded-2xl bg-gray-50/80 border border-gray-100">
            <h4 className="text-xs font-bold text-gray-900 mb-2.5">
              معايير التنفيذ المعتمدة في هذه الخدمة بنجران:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-gray-700">
              {currentCase.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct CTA Bar */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#0F3A30] to-[#165849] text-white">
            <div>
              <p className="text-sm sm:text-base font-black">
                تريد نفس النتيجة الفائقة لمنزلك؟
              </p>
              <p className="text-xs text-emerald-100/80 mt-0.5">
                تواصل معنا الآن، وسيرسل لك فريقنا في نجران في الموعد الأنسب لك.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={brand.whatsapp.withMessage(currentCase.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold text-xs sm:text-sm py-3 px-5 w-full sm:w-auto shadow-lg font-black flex items-center justify-center gap-2"
              >
                <MessageCircle size={17} />
                <span>طلب نفس النتيجة عبر واتساب</span>
              </a>

              <a
                href={brand.phone.link}
                className="btn btn-outline-white text-xs sm:text-sm py-3 px-4 shrink-0 font-bold hidden sm:inline-flex"
                aria-label="اتصال مباشر"
              >
                <Phone size={16} className="text-[#F3CA65]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
