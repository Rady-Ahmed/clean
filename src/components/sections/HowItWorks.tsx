import { PhoneCall, CalendarCheck2, Sparkles, MessageCircle } from "lucide-react";
import { brand } from "@/config/brand";

export default function HowItWorks() {
  const steps = [
    {
      num: "٠١",
      title: "تواصل وحدد الخدمة",
      description: "راسلنا عبر واتساب أو اتصل هاتفياً، واشرح نوع الخدمة التي تحتاجها وموقعك داخل نجران.",
      icon: <PhoneCall size={26} className="text-emerald-600" />
    },
    {
      num: "٠٢",
      title: "تأكيد الموعد والتفاصيل",
      description: "نتفق معك بشفافية تامة على تفاصيل العمل والموعد الأنسب لجدولك دون أي تعقيد أو تأخير.",
      icon: <CalendarCheck2 size={26} className="text-[#D4AF37]" />
    },
    {
      num: "٠٣",
      title: "تنفيذ متقن وتسليم فوري",
      description: "يصل فريقنا المتخصص مع كامل المعدات والمواد لإنجاز التنظيف بأعلى معايير الدقة والاتقان.",
      icon: <Sparkles size={26} className="text-emerald-600" />
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-[#F8FAFB]">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-bold text-emerald-800 mb-4">
            <span>خطوات بسيطة ومريحة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            كيف تطلب خدمتك مع صفوة النظافة؟
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            ثلاث خطوات فقط تفصلك عن بيئة نظيفة وصحية لمنزلك أو مقرك في نجران.
          </p>
        </div>

        {/* 3 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center justify-between"
            >
              {/* Step Number Watermark */}
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-[#0F3A30] font-black text-xl flex items-center justify-center mb-6 shadow-sm border border-emerald-100/60">
                {step.num}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                {step.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Action */}
        <div className="mt-12 text-center">
          <a
            href={brand.whatsapp.withMessage("السلام عليكم، أود طلب خدمة تنظيف في نجران.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-emerald text-sm py-3 px-6 shadow-md"
          >
            <MessageCircle size={18} />
            <span>ابدأ بطلب خدمتك الآن عبر واتساب</span>
          </a>
        </div>
      </div>
    </section>
  );
}
