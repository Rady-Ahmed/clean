import { Sparkles, ShieldCheck, Clock, CheckCircle, ThumbsUp } from "lucide-react";

export default function ValueProposition() {
  const differentiators = [
    {
      title: "أحدث معدات التنظيف والتعقيم",
      description: "نستخدم أجهزة بخار متطورة وماكينات جلي وتطهير مخصصة لكل نوع من الأسطح والأقمشة لضمان أفضل نتيجة.",
      icon: <Sparkles size={26} className="text-[#D4AF37]" />,
      badge: "تقنيات متقدمة"
    },
    {
      title: "أمانة وخصوصية تامة للبيوت",
      description: "ندرك خصوصية المنازل والعوائل في نجران؛ نحرص على أعلى درجات الأمانة والاحترافية وحسن التعامل مع الممتلكات.",
      icon: <ShieldCheck size={26} className="text-emerald-600" />,
      badge: "ثقة وأمان"
    },
    {
      title: "دقة في المواعيد وسرعة استجابة",
      description: "نقدر وقتك الثمين؛ نلتزم بالمواعيد المحددة بدقة ونوفر استجابة سريعة لحالات الطوارئ والمناسبات.",
      icon: <Clock size={26} className="text-[#D4AF37]" />,
      badge: "التزام تام"
    },
    {
      title: "مواد آمنة ومصرحة صحياً",
      description: "منظفات ومعقمات معتمدة ومأمونة تماماً على صحة الأطفال، كبار السن، والحيوانات الأليفة وبدون روائح خانقة.",
      icon: <ThumbsUp size={26} className="text-emerald-600" />,
      badge: "صحة وسلامة"
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white border-y border-gray-100">
      <div className="container-narrow">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-bold text-emerald-800 mb-4">
            <span>مميزات صفوة النظافة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            لماذا يختارنا أهالي نجران؟
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            نجمع بين التقنيات الحديثة، الأمانة العالية، والالتزام الصارم بالمواعيد لنمنحك تجربة خدمة سلسة ونتائج تبهرك.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFB] rounded-2xl p-7 border border-gray-100 hover:border-emerald-300 hover:bg-white hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 bg-white px-2.5 py-1 rounded-full border border-gray-100">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-200/50 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle size={14} />
                <span>معيار أساسي في خدماتنا</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
