"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import LineOACTA from "@/components/LineOACTA";

const products = [
  {
    slug: "phaxbai-kansat-eco",
    th: "ผ้าใบกันสาดชักรอก PVC ใยแก้ว Eco",
    en: "PVC Fiberglass Retractable Awning Eco",
    descTh: "ผ้าใบกันสาดคุณภาพสูง ทนทานต่อแดดและฝน เหมาะสำหรับบ้านและธุรกิจ ติดตั้งง่ายด้วยระบบชักรอก",
    descEn: "High-quality awning tarpaulin, UV and rain resistant. Easy retractable installation for homes and businesses.",
    tag: "STAR ⭐",
    sold: "1,000+/เดือน",
    price: "฿227",
    use: ["บ้านพักอาศัย", "ร้านค้า", "ลานจอดรถ"],
  },
  {
    slug: "phaxbai-standard",
    th: "ผ้าใบกันแดดกันฝน PVC Standard",
    en: "PVC Rain & Sun Tarpaulin Standard",
    descTh: "ผ้าใบอเนกประสงค์ กันแดดกันฝนได้ดี ราคาคุ้มค่า เหมาะกับทุกการใช้งาน",
    descEn: "All-purpose tarpaulin. Excellent sun and rain protection at a great price point.",
    tag: "BESTSELLER 🏆",
    sold: "163+/เดือน",
    price: "฿285",
    use: ["กลางแจ้ง", "คลุมสินค้า", "งานเกษตร"],
  },
  {
    slug: "tent-pvc",
    th: "ผ้าใบเต็นท์พับ PVC",
    en: "Folding Tent PVC Fabric",
    descTh: "ผ้าใบสำหรับเต็นท์พับ แข็งแรง ทนทาน กันน้ำ เหมาะสำหรับงานอีเวนต์ ตลาด และกิจกรรมกลางแจ้ง",
    descEn: "Heavy-duty waterproof folding tent fabric. Ideal for events, markets and outdoor activities.",
    tag: "POPULAR",
    sold: "",
    price: "฿412",
    use: ["งานอีเวนต์", "ตลาดนัด", "กิจกรรมกลางแจ้ง"],
  },
  {
    slug: "solarview-mesh",
    th: "SolarView PVC Mesh กรองแสง",
    en: "SolarView PVC Mesh Sun Filter",
    descTh: "ผ้าใบกรองแสง 0–90% ลดความร้อน ยังคงมองเห็นทิวทัศน์ได้ เหมาะสำหรับระเบียง สระว่ายน้ำ และสวน",
    descEn: "0–90% light filtering mesh. Reduces heat while maintaining your view. Perfect for balconies, pools and gardens.",
    tag: "PREMIUM",
    sold: "",
    price: "ติดต่อเรา",
    use: ["ระเบียง", "สระว่ายน้ำ", "สวน"],
  },
];

export default function ProductsPage() {
  const { lang } = useLang();

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          {lang === "th" ? "สินค้าของเรา" : "Our Products"}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          {lang === "th"
            ? "ผ้าใบ PVC คุณภาพสูง ผลิตเองในไทย หลากหลายรุ่นสำหรับทุกการใช้งาน"
            : "High-quality PVC tarpaulin made in Thailand. Multiple models for every application."}
        </p>
      </section>

      {/* Product Grid */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="bg-white rounded-2xl border border-gray-100 hover:border-[#FF8C4A] hover:shadow-lg transition-all group overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="bg-orange-50 h-48 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                <span className="text-6xl">🏗️</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#FF8C4A] bg-orange-50 px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                  {p.sold && <span className="text-xs text-gray-400">{p.sold}</span>}
                </div>
                <h2 className="font-bold text-gray-900 mb-2 leading-snug">
                  {lang === "th" ? p.th : p.en}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {lang === "th" ? p.descTh : p.descEn}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {p.use.map((u) => (
                      <span key={u} className="text-xs bg-gray-50 text-gray-500 px-2 py-1 rounded-full border border-gray-100">
                        {u}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#FF8C4A] font-bold text-sm ml-2 shrink-0">{p.price}</span>
                </div>
              </div>
            </Link>
          ))}
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
