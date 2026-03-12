"use client";

import { useLang } from "@/context/LangContext";
import LineOACTA from "@/components/LineOACTA";

const pillars = [
  { icon: "🏆", th: "ผู้เชี่ยวชาญในอุตสาหกรรม กว่า 15 ปี", en: "15+ Years Industry Expertise" },
  { icon: "🇹🇭", th: "ผลิตเองในไทย ทุกผืน", en: "Made in Thailand — Every Piece" },
  { icon: "✂️", th: "สั่งตัดขนาดได้ทุกรูปแบบ", en: "Custom Cut Any Size" },
  { icon: "🤝", th: "บริการหลังการขายทุกชิ้น", en: "After-Sales Service on Every Order" },
  { icon: "💎", th: "คุณภาพที่คัดมาเพื่อคุณ", en: "Quality Curated for You" },
  { icon: "🔬", th: "ผู้เชี่ยวชาญเฉพาะด้านผ้าใบ PVC", en: "PVC Tarpaulin Specialist" },
];

export default function AboutPage() {
  const { lang } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {lang === "th" ? "เกี่ยวกับคัฟเวอร์เทค" : "About Covertech"}
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          {lang === "th"
            ? "ผู้ผลิตผ้าใบ PVC ครบวงจร ผลิตเองในไทย ด้วยประสบการณ์กว่า 15 ปี"
            : "Thailand's complete PVC tarpaulin manufacturer, made in-house for 15+ years."}
        </p>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {lang === "th" ? "เรื่องราวของเรา" : "Our Story"}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {lang === "th"
                  ? "คัฟเวอร์เทคเริ่มต้นจากความเชี่ยวชาญในอุตสาหกรรมผ้าใบและวัสดุกันสาดในประเทศไทย ด้วยประสบการณ์กว่า 15 ปี เราเติบโตจากผู้ผลิตรายเล็กสู่หนึ่งในผู้เชี่ยวชาญผ้าใบ PVC ที่ลูกค้าไว้วางใจมากที่สุดในไทย"
                  : "Covertech started from deep expertise in the tarpaulin and awning material industry in Thailand. With 15+ years of experience, we've grown from a small manufacturer to one of Thailand's most trusted PVC tarpaulin specialists."}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {lang === "th"
                  ? "เราเชื่อว่าการควบคุมกระบวนการผลิตเองตั้งแต่ต้นจนจบ คือหัวใจสำคัญในการส่งมอบคุณภาพที่สม่ำเสมอให้กับลูกค้า ทุกผืนที่ออกจากโรงงานของเราผ่านการตรวจสอบคุณภาพอย่างเข้มงวด"
                  : "We believe that controlling the full production process from start to finish is the key to delivering consistent quality to our customers. Every piece that leaves our factory goes through strict quality inspection."}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {lang === "th"
                  ? "ปัจจุบันเราให้บริการลูกค้ากว่า 10,000 รายทั่วประเทศไทย ตั้งแต่เจ้าของบ้านรายย่อยไปจนถึงธุรกิจขนาดใหญ่และโรงงานอุตสาหกรรม"
                  : "Today we serve over 10,000 customers nationwide — from individual homeowners to large businesses and industrial factories."}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "15+", label: lang === "th" ? "ปีประสบการณ์" : "Years experience" },
                { num: "10K+", label: lang === "th" ? "ลูกค้าทั่วไทย" : "Customers nationwide" },
                { num: "50K+", label: lang === "th" ? "ผืนที่ส่งมอบ" : "Pieces delivered" },
                { num: "4.9★", label: lang === "th" ? "คะแนนรีวิว" : "Review score" },
              ].map((s) => (
                <div key={s.num} className="bg-orange-50 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold text-[#FF8C4A]">{s.num}</div>
                  <div className="text-sm text-gray-600 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            {lang === "th" ? "ทำไมเรื่องผ้าใบ.. ต้อง 'เรา'" : "Why Covertech?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p) => (
              <div key={p.th} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-gray-900">
                  {lang === "th" ? p.th : p.en}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <LineOACTA lang={lang} variant="banner" />
        </div>
      </section>
    </>
  );
}
