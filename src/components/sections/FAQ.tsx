"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { faqs } from "@/config/content";
import { brand } from "@/config/brand";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section-padding bg-white border-t border-gray-100">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-bold text-emerald-800 mb-4">
            <HelpCircle size={15} />
            <span>إجابات واضحة وشفافة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            الأسئلة الشائعة حول خدماتنا
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            جمعنا لك أكثر الاستفسارات تكراراً من أهالي نجران لتوضيح كل ما تحتاج معرفته قبل طلب الخدمة.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F8FAFB] border-emerald-300 shadow-sm"
                    : "bg-white border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-right focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-bold pe-4 transition-colors ${
                    isOpen ? "text-[#0F3A30]" : "text-gray-900"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-emerald-100 text-emerald-800" : "bg-gray-100 text-gray-500"
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100/60 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Prompt */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-500 mb-3">
            لديك سؤال آخر لم تجد إجابته هنا؟
          </p>
          <a
            href={brand.whatsapp.withMessage("السلام عليكم، لدي استفسار إضافي حول خدمات التنظيف في نجران.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
          >
            <MessageCircle size={15} />
            <span>راسلنا مباشرة عبر واتساب وسنجيبك فوراً</span>
          </a>
        </div>
      </div>
    </section>
  );
}
