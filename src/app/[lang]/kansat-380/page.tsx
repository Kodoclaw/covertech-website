import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const LINE_URL = "https://lin.ee/RTwFE2S";

export async function generateStaticParams() {
  return [{ lang: "th" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isTh = lang === "th";

  return {
    title: isTh
      ? "กันสาด PVC ใยแก้ว รุ่น Eco | Covertech — ติดตั้งเองได้ ราคาไม่แพง"
      : "Fiberglass PVC Retractable Awning Eco | Covertech Thailand",
    description: isTh
      ? "กันสาด PVC ใยแก้ว เกรด A หนา 0.38mm กันน้ำ 100% มีอุปกรณ์ครบ ติดตั้งเองได้ ราคาไม่แพง จัดส่งทั่วไทย — Covertech"
      : "Fiberglass PVC awning grade A, 0.38mm thick, 100% waterproof, complete DIY kit, affordable price, nationwide delivery — Covertech",
    openGraph: {
      images: ["/hero-kansat-380.jpg"],
    },
  };
}

const colors = [
  { name: { th: "น้ำตาล", en: "Brown" }, hex: "#8B4513" },
  { name: { th: "ขาว", en: "White" }, hex: "#FFFFFF" },
  { name: { th: "น้ำเงิน", en: "Blue" }, hex: "#00308F" },
  { name: { th: "ขี้ม้า", en: "Dark Brown" }, hex: "#5C4033" },
  { name: { th: "เทา", en: "Gray" }, hex: "#808080" },
  { name: { th: "ดำ", en: "Black" }, hex: "#1a1a1a" },
  { name: { th: "ครีม", en: "Cream" }, hex: "#FFFDD0" },
  { name: { th: "ฟ้าอ่อน", en: "Light Blue" }, hex: "#87CEEB" },
  { name: { th: "เขียว", en: "Green" }, hex: "#228B22" },
];

const sizes = [
  "2×1.5m",
  "3×1.5m",
  "4×1.5m",
  "5×1.5m",
  "2×2m",
  "3×2m",
  "4×2m",
  "5×2m",
];

const specs = {
  th: [
    ["วัสดุ", "PVC ใยแก้ว เกรด A"],
    ["ความหนา", "0.38mm"],
    ["กันน้ำ", "100%"],
    ["อายุการใช้งาน", "2-3 ปี"],
    ["ขนาดที่มี", "2×1.5 ถึง 5×2 เมตร (8 ขนาด)"],
    ["สีที่มี", "9 สี"],
    ["อุปกรณ์รวม", "เชือกไนล่อน, ลูกรอก, สกรู, อุปกรณ์ยึด"],
    ["ไม่รวม", "เหล็ก/ท่อ (ซื้อได้ที่ร้านวัสดุก่อสร้าง)"],
    ["SKU", "LM38"],
  ],
  en: [
    ["Material", "Fiberglass PVC Grade A"],
    ["Thickness", "0.38mm"],
    ["Waterproof", "100%"],
    ["Lifespan", "2-3 years"],
    ["Sizes", "2×1.5 to 5×2 meters (8 sizes)"],
    ["Colors", "9 colors"],
    ["Included", "Nylon rope, pulley, screws, mounting hardware"],
    ["Not included", "Steel pipe (available at hardware stores)"],
    ["SKU", "LM38"],
  ],
};

const reviews = [
  {
    th: "ผ้าใบหนาดีมาก สีสวย คุ้มราคามากครับ ติดตั้งเองได้ไม่ยาก",
    en: "Very thick fabric, nice color, great value. Not hard to install yourself.",
  },
  {
    th: "ราคาไม่แพง จัดส่งรวดเร็ว ของครบตามที่สั่ง แนะนำเลย",
    en: "Affordable, fast delivery, everything as ordered. Highly recommend!",
  },
  {
    th: "ซื้อมาแล้ว 2 ผืน ใช้งานได้ดี กันฝนได้จริง ประทับใจมาก",
    en: "Bought 2 pieces, works great, really blocks rain. Very impressed!",
  },
];

function LineButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-[#00B900] px-8 py-4 text-lg font-semibold text-white hover:bg-[#009900] ${className}`}
    >
      {children}
    </Link>
  );
}

export default async function Kansat380Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isTh = lang === "th";

  return (
    <>
      {/* 1. HERO */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-gray-900">
        <Image
          src="/hero-kansat-380.jpg"
          alt={isTh ? "กันสาด 380 รุ่น Eco by Covertech" : "Awning 380 Eco by Covertech"}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center px-4 py-16 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {isTh
              ? "กันแดด กันฝน ติดตั้งง่าย ด้วยตัวเอง"
              : "Block Sun & Rain — Easy DIY Installation"}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {isTh
              ? "กันสาด PVC ใยแก้ว รุ่น Eco — มีอุปกรณ์ครบ ยกเว้นเหล็ก"
              : "Fiberglass PVC Awning Eco — Complete Kit (Steel Pipe Sold Separately)"}
          </p>
          <LineButton>
            {isTh ? "สอบถามราคา / สั่งซื้อ" : "Ask for Price via LINE"}
          </LineButton>
          <p className="mt-6 text-white/80 text-sm">
            ⭐ 4.9 | 375 {isTh ? "รีวิว" : "reviews"} |{" "}
            {isTh ? "ลูกค้ากว่า 1,000 ราย" : "1,000+ customers"}
          </p>
        </div>
      </section>

      {/* 2. PAIN POINT */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            {isTh ? "เจอปัญหาเหล่านี้ไหม?" : "Facing These Problems?"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                th: "แดดส่องแรง ฝนสาด จนนั่งหน้าบ้านไม่ได้",
                en: "Harsh sun and rain — can't sit outside",
              },
              {
                th: "ช่างแพง นัดยาก กว่าจะติดได้เสียเวลานาน",
                en: "Contractors are expensive and hard to book",
              },
              {
                th: "ผ้าใบทั่วไปขาดง่าย ไม่คุ้มค่า",
                en: "Generic tarps tear easily — not worth it",
              },
            ].map((pain, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <p className="text-gray-700 text-lg">
                  {isTh ? pain.th : pain.en}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xl font-semibold text-[#FF7A00]">
            {isTh ? "Covertech แก้ได้ทุกข้อ" : "Covertech solves all of these"}
          </p>
        </div>
      </section>

      {/* 3. PRODUCT INTRODUCTION */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            {isTh
              ? "กันสาด 380 รุ่น Eco by Covertech"
              : "Awning 380 Eco by Covertech"}
          </h2>
          <p className="text-gray-700 text-lg text-center mb-10 max-w-2xl mx-auto">
            {isTh
              ? "ผ้าใบ PVC ใยแก้ว เกรด A หนา 0.38mm กันน้ำ 100% อายุการใช้งาน 2-3 ปี มาพร้อมชุดอุปกรณ์ติดตั้ง DIY ครบ (ยกเว้นเหล็ก) — ซื้อแล้วติดได้เลย"
              : "Fiberglass PVC Grade A, 0.38mm thick, 100% waterproof, 2-3 year lifespan. Comes with complete DIY installation kit (steel pipe sold separately) — buy and install right away."}
          </p>

          {/* Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              {isTh ? "สีที่มี (9 สี)" : "Available Colors (9)"}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {colors.map((color) => (
                <div key={color.hex} className="flex flex-col items-center gap-1">
                  <div
                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span className="text-xs text-gray-600">
                    {isTh ? color.name.th : color.name.en}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              {isTh ? "ขนาดที่มี" : "Available Sizes"}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {sizes.map((size) => (
                <span
                  key={size}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY BENEFITS */}
      <section className="py-16 px-4 bg-[#FFF7F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            {isTh ? "ทำไมต้องเลือก Covertech?" : "Why Choose Covertech?"}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🛡️",
                title: { th: "กันน้ำ 100%", en: "100% Waterproof" },
                desc: {
                  th: "ใยแก้วเกรด A ไม่ซึม ไม่รั่ว",
                  en: "Grade A fiberglass — no seepage, no leaks",
                },
              },
              {
                icon: "🔧",
                title: { th: "ติดตั้งเองได้", en: "DIY Installation" },
                desc: {
                  th: "มีอุปกรณ์ครบ คู่มือชัดเจน",
                  en: "Complete kit with clear instructions",
                },
              },
              {
                icon: "⚙️",
                title: { th: "ระบบชักรอก", en: "Pulley System" },
                desc: {
                  th: "ยกขึ้น-ลงได้ตามต้องการ",
                  en: "Raise and lower as needed",
                },
              },
              {
                icon: "💪",
                title: { th: "ขอบผ้าแข็งแรง", en: "Reinforced Edges" },
                desc: {
                  th: "เสริมความร้อนจากเครื่องรีดความร้อนที่ทันสมัย",
                  en: "Heat-sealed with modern heat press machine",
                },
              },
              {
                icon: "⏳",
                title: {
                  th: "อายุการใช้งาน 2-3 ปี",
                  en: "2-3 Year Lifespan",
                },
                desc: { th: "", en: "" },
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm ${
                  i === 4 ? "md:col-span-2 md:max-w-md md:mx-auto" : ""
                }`}
              >
                <span className="text-3xl">{benefit.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {isTh ? benefit.title.th : benefit.title.en}
                  </h3>
                  {(isTh ? benefit.desc.th : benefit.desc.en) && (
                    <p className="text-gray-600 mt-1">
                      {isTh ? benefit.desc.th : benefit.desc.en}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            {isTh ? "ตัวอย่างการติดตั้ง" : "Installation Examples"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {[
              {
                src: "/gallery-kansat-terrace.jpg",
                caption: { th: "ระเบียงบ้าน", en: "Home terrace" },
              },
              {
                src: "/gallery-kansat-real-1.jpg",
                caption: {
                  th: "ติดตั้งจริง — กันสาดใต้หลังคา",
                  en: "Real installation — under-roof awning",
                },
              },
              {
                src: "/gallery-kansat-real-2.jpg",
                caption: {
                  th: "ระบบชักรอก + ท่อเหล็ก",
                  en: "Pulley system + steel pipe",
                },
              },
            ].map((img) => (
              <div key={img.src}>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={img.src}
                    alt={isTh ? img.caption.th : img.caption.en}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">
                  {isTh ? img.caption.th : img.caption.en}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center">
            {isTh
              ? "⚠️ รูปบางส่วนแสดงผ้าใบแบบผืน — กันสาด Eco มีระบบชักรอกและซ็อกเก็ตสำหรับสอดท่อเหล็ก"
              : "⚠️ Some photos show flat tarp style — Eco awning includes pulley system and sockets for steel pipe"}
          </p>
        </div>
      </section>

      {/* 6. SPECS TABLE */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            {isTh ? "ข้อมูลสินค้า" : "Product Specifications"}
          </h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <table className="w-full">
              <tbody>
                {(isTh ? specs.th : specs.en).map(([label, value], i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 w-1/3">
                      {label}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            {isTh
              ? "ลูกค้าพูดถึง Covertech"
              : "What Customers Say About Covertech"}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 mb-10">
            <span>⭐ 4.9/5</span>
            <span>|</span>
            <span>375 {isTh ? "รีวิว" : "reviews"}</span>
            <span>|</span>
            <span>1,000+ {isTh ? "ออร์เดอร์" : "orders"}</span>
            <span>|</span>
            <span>❤️ 887 {isTh ? "คนถูกใจ" : "likes"}</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <p className="text-yellow-500 mb-3">★★★★★</p>
                <p className="text-gray-700 mb-4">
                  &ldquo;{isTh ? review.th : review.en}&rdquo;
                </p>
                <p className="text-sm text-gray-500">
                  — {isTh ? "ลูกค้า Shopee" : "Shopee Customer"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-20 px-4 bg-[#FF7A00]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {isTh
              ? "พร้อมติดตั้งกันสาดแล้วหรือยัง?"
              : "Ready to Install Your Awning?"}
          </h2>
          <p className="text-white/90 text-lg mb-8">
            {isTh
              ? "ปรึกษาฟรี บอกขนาดที่ต้องการ — แจ้งราคาทันที"
              : "Free consultation — tell us your size, get an instant quote"}
          </p>
          <LineButton className="text-xl px-10 py-5">
            {isTh ? "LINE สอบถามราคาเลย" : "Ask for Price via LINE"}
          </LineButton>
          <p className="mt-6 text-white/80 text-sm">
            {isTh
              ? "เปิดทุกวัน | ตอบไว | จัดส่งทั่วไทย"
              : "Open daily | Fast response | Nationwide delivery"}
          </p>
        </div>
      </section>
    </>
  );
}
