"use client";

import { useLang } from "@/context/LangContext";
import LineOACTA from "@/components/LineOACTA";

const upcomingTopics = [
  { th: "เลือกผ้าใบยังไง ให้ใช้งานได้ยาวนาน", en: "How to choose a tarpaulin that lasts" },
  { th: "ผ้าใบ PVC vs ผ้าใบทั่วไป ต่างกันอย่างไร?", en: "PVC vs standard tarpaulin — what's the difference?" },
  { th: "ดูแลผ้าใบกันฝน ฉบับบ้านๆ ใน 3 ขั้นตอน", en: "3-step tarpaulin care guide for homeowners" },
  { th: "ผ้าใบกันสาดเลือกแบบไหนดีสำหรับบ้าน", en: "Which awning tarpaulin is right for your home?" },
  { th: "SolarView Mesh คืออะไร และเหมาะกับใคร?", en: "What is SolarView Mesh and who is it for?" },
];

export default function BlogPage() {
  const { lang } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {lang === "th" ? "บทความและความรู้" : "Articles & Knowledge"}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          {lang === "th"
            ? "คลังความรู้เรื่องผ้าใบ PVC จากผู้เชี่ยวชาญ 15 ปี เลือกสินค้าให้ถูกต้อง ดูแลให้ใช้งานได้นาน"
            : "PVC tarpaulin knowledge from 15+ year specialists. Choose the right product and make it last."}
        </p>
      </section>

      {/* Coming soon */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-[#FF8C4A] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              {lang === "th" ? "🔜 บทความกำลังมา" : "🔜 Articles coming soon"}
            </div>
            <p className="text-gray-500">
              {lang === "th"
                ? "ทีมงานกำลังเตรียมบทความคุณภาพสำหรับคุณ ในระหว่างนี้สามารถสอบถามผู้เชี่ยวชาญได้โดยตรง"
                : "Our team is preparing quality articles for you. In the meantime, ask our experts directly."}
            </p>
          </div>

          {/* Upcoming topics */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-700 mb-4 text-sm">
              {lang === "th" ? "หัวข้อที่กำลังจะมา:" : "Topics coming soon:"}
            </h3>
            <ul className="space-y-3">
              {upcomingTopics.map((t) => (
                <li key={t.th} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-[#FF8C4A] mt-0.5">→</span>
                  {lang === "th" ? t.th : t.en}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <LineOACTA lang={lang} variant="banner" />
        </div>
      </section>
    </>
  );
}
