import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function Gallery() {
  const photos = [
    {
      src: "/images/home-cleaning.jpg",
      title: "جلي وتلميع أرضيات الرخام للفلل",
      category: "فلل ومنازل نجران",
    },
    {
      src: "/images/sofa-cleaning.jpg",
      title: "غسيل الكنب والمجالس بالبخار الحار",
      category: "كنب ومجالس",
    },
    {
      src: "/images/ac-cleaning.jpg",
      title: "غسيل وصيانة المكيفات بعازل مائي",
      category: "أجهزة ومكيفات",
    },
    {
      src: "/images/water-tank-cleaning.jpg",
      title: "تعقيم وتطهير خزانات مياه الشرب",
      category: "خزانات مياه",
    },
    {
      src: "/images/pest-control.jpg",
      title: "مكافحة الآفات بمبيدات آمنة مصرحة",
      category: "مكافحة حشرات",
    },
    {
      src: "/images/office-cleaning.jpg",
      title: "نظافة المقرات والمنشآت التجارية",
      category: "مكاتب وشركات",
    },
  ];

  return (
    <section id="gallery" className="section-padding bg-white border-t border-gray-100">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-bold text-emerald-800 mb-4">
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span>معايير النقاء والإتقان</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            نماذج من جودة واهتمام فريقنا
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            نحرص على أن تظهر كل زاوية في منزلك ومقرك في نجران بقمة النظافة والانتعاش والترتيب.
          </p>
        </div>

        {/* 6-Image Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 bg-gray-50 aspect-[4/3]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-4 right-4 left-4 text-white">
                <span className="text-[11px] font-bold text-emerald-300 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full inline-block mb-1.5">
                  {item.category}
                </span>
                <h3 className="text-base font-bold leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto text-center sm:text-right">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={22} className="text-emerald-700 shrink-0" />
            <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
              جميع الأعمال تنفذ بزي موحد، معدات متكاملة، ومواد مصرحة تضمن سلامة أثاثك وأرضياتك.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
