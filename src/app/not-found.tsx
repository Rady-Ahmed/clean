import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { brand } from "@/config/brand";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFB]">
      <Header />
      <main className="flex-1 flex items-center justify-center section-padding">
        <div className="container-narrow text-center max-w-lg mx-auto bg-white p-10 sm:p-14 rounded-3xl border border-gray-100 shadow-md">
          <span className="text-7xl sm:text-8xl font-black text-[#0F3A30]/15 tracking-widest block mb-2">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
            الصفحة غير موجودة
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
            عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد يكون الرابط قد تغيّر أو تم نقل الصفحة.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="btn btn-emerald text-sm py-3 px-6 shadow-md">
              <Home size={18} />
              <span>العودة للرئيسية</span>
            </Link>
            <Link href="/services" className="btn btn-outline-brand text-sm py-3 px-6">
              <span>استعراض الخدمات</span>
              <ArrowLeft size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
