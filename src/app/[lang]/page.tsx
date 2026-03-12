
import Link from "next/link";
import LineOACTA from "@/components/LineOACTA";

const trustSignals = [
  {
    icon: "🏭",
    th: "ผลิตเองในไทย",
    en: "Made in Thailand",
    subTh: "ทุกผืนผลิตเอง ควบคุมคุณภาพทุกขั้นตอน",
    subEn: "Every piece made in-house, quality controlled",
  },
  {
    icon: "📅",
    th: "ประสบการณ์ 15+ ปี",
    en: "15+ Years Experience",
    subTh: "ผู้เชี่ยวชาญผ้าใบ PVC ครบวงจร",
    subEn: "Thailand's tarpaulin specialist",
  },
  {
    icon: "✂️",
    th: "สั่งตัดขนาดได้",
    en: "Custom Cut to Size",
    subTh: "รับตัดตามขนาดที่ต้องการ ทั้งรายย่อยและขายส่ง",
    subEn: "Any size, retail and wholesale",
  },
  {
    icon: "✅",
    th: "รับประกัน 100%",
    en: "100% Guarantee",
    subTh: "COD รับเงินปลายทาง บริการหลังการขายทุกชิ้น",
    subEn: "COD available, full after-sales service",
  },
];

const products = [
  {
    slug: "phaxbai-kansat-eco",
    th: "ผ้าใบกันสาดชักรอก PVC ใยแก้ว Eco",
    en: "PVC Fiberglass Retractable Awning Eco",
    descTh: "ผ้าใบกันสาดคุณภาพสูง ทนทานต่อแดดและฝน เหมาะสำหรับบ้านและธุรกิจ",
    descEn: "High-quality awning tarpaulin, UV and rain resistant for homes and businesses",
    tag: "STAR ⭐",
    sold: "1,000+/เดือน",
  },
  {
    slug: "phaxbai-standard",
    th: "ผ้าใบกันแดดกันฝน PVC Standard",
    en: "PVC Rain & Sun Tarpaulin Standard",
    descTh: "ผ้าใบอเนกประสงค์ กันแดดกันฝนได้ดี ราคาคุ้มค่า ใช้งานได้หลากหลาย",
    descEn: "All-purpose tarpaulin, excellent sun and rain protection, great value",
    tag: "BESTSELLER 🏆",
    sold: "163+/เดือน",
  },
  {
    slug: "tent-pvc",
    th: "ผ้าใบเต็นท์พับ PVC",
    en: "Folding Tent PVC Fabric",
    descTh: "ผ้าใบสำหรับเต็นท์พับ แข็งแรง ทนทาน เหมาะสำหรับงานอีเวนต์และตลาด",
    descEn: "Heavy-duty folding tent fabric, ideal for events and markets",
    tag: "POPULAR",
    sold: "",
  },
  {
    slug: "solarview-mesh",
    th: "SolarView PVC Mesh กรองแสง",
    en: "SolarView PVC Mesh Sun Filter",
    descTh: "ผ้าใบกรองแสง 0–90% ลดความร้อน มองเห็นทิวทัศน์ได้ เหมาะสำหรับระเบียงและสระว่ายน้ำ",
    descEn: "0–90% light filtering, reduces heat, maintains view. Perfect for balconies and pools",
    tag: "PREMIUM",
    sold: "",
  },
];

const faqs = [
  {
    q: { th: "ผ้าใบ PVC ต่างจากผ้าใบทั่วไปอย่างไร?", en: "How is PVC tarpaulin different from regular tarpaulin?" },
    a: {
      th: "ผ้าใบ PVC มีความทนทานสูงกว่า กันน้ำได้ 100% ทนต่อ UV และอายุการใช้งานยาวนานกว่าผ้าใบทั่วไป 3–5 เท่า",
      en: "PVC tarpaulin is more durable, 100% waterproof, UV resistant and lasts 3–5x longer than standard tarpaulin.",
    },
  },
  {
    q: { th: "สามารถสั่งตัดขนาดพิเศษได้ไหม?", en: "Can I order custom sizes?" },
    a: {
      th: "ได้เลยครับ เรารับตัดทุกขนาดตามความต้องการ ทั้งขนาดเล็กสำหรับบ้านและขนาดใหญ่สำหรับโรงงาน",
      en: "Yes, we cut any size to order — from small home use to large industrial applications.",
    },
  },
  {
    q: { th: "มีบริการส่งทั่วประเทศไหม?", en: "Do you ship nationwide?" },
    a: {
      th: "ส่งทั่วประเทศไทย รับชำระเงินปลายทาง (COD) และโอนล่วงหน้า ส่งตรงถึงมือภายใน 3–5 วันทำการ",
      en: "We ship nationwide with COD and bank transfer options. Delivery in 3–5 business days.",
    },
  },
];

export async function generateStaticParams() {
  return [{ lang: "th" }, { lang: "en" }];
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langRaw } = await params;
  const lang = langRaw as "th" | "en";

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-orange-100 text-[#FF8C4A] text-sm font-semibold px-4 py-1 rounded-full mb-4">
            {lang === "th" ? "ผู้เชี่ยวชาญผ้าใบ PVC ครบวงจร" : "Thailand's PVC Tarpaulin Specialist"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {lang === "th" ? (
              <>ผ้าใบคุณภาพสูง<br /><span className="text-[#FF8C4A]">ผลิตเองในไทย</span> กว่า 15 ปี</>
            ) : (
              <>Premium Tarpaulin<br /><span className="text-[#FF8C4A]">Made in Thailand</span> for 15+ Years</>
            )}
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {lang === "th"
              ? "สั่งตัดขนาดได้ รับประกัน 100% บริการหลังการขาย COD ส่งทั่วประเทศ"
              : "Custom cut to size. 100% guarantee. After-sales service. COD available. Nationwide shipping."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <LineOACTA lang={lang} variant="button" />
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-[#FF8C4A] hover:text-[#FF8C4A] transition-colors"
            >
              {lang === "th" ? "ดูสินค้าทั้งหมด" : "View All Products"}
            </Link>
          </div>
          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>⭐ 4.9 / 5</span>
            <span className="text-gray-300">|</span>
            <span>{lang === "th" ? "ลูกค้ากว่า 10,000 ราย" : "10,000+ customers"}</span>
            <span className="text-gray-300">|</span>
            <span>{lang === "th" ? "ส่งแล้วกว่า 50,000 ผืน" : "50,000+ pieces delivered"}</span>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-gray-100 bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustSignals.map((t) => (
            <div key={t.th} className="text-center">
              <div className="text-3xl mb-2">{t.icon}</div>
              <div className="font-semibold text-gray-900 text-sm">{lang === "th" ? t.th : t.en}</div>
              <div className="text-xs text-gray-500 mt-1">{lang === "th" ? t.subTh : t.subEn}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {lang === "th" ? "สินค้าของเรา" : "Our Products"}
            </h2>
            <p className="text-gray-500">
              {lang === "th" ? "ผ้าใบ PVC คุณภาพสูง หลากหลายรุ่นสำหรับทุกการใช้งาน" : "High-quality PVC tarpaulin for every application"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#FF8C4A] hover:shadow-md transition-all group"
              >
                {/* Product image placeholder */}
                <div className="bg-orange-50 rounded-xl h-36 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                  <span className="text-4xl">🏗️</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-[#FF8C4A] bg-orange-50 px-2 py-0.5 rounded-full">
                    {p.tag}
                  </span>
                  {p.sold && (
                    <span className="text-xs text-gray-400">{p.sold}</span>
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-2">
                  {lang === "th" ? p.th : p.en}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {lang === "th" ? p.descTh : p.descEn}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-[#FF8C4A] text-[#FF8C4A] font-semibold px-6 py-3 rounded-full hover:bg-[#FF8C4A] hover:text-white transition-colors"
            >
              {lang === "th" ? "ดูสินค้าทั้งหมด →" : "View All Products →"}
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {lang === "th" ? "ทำไมต้องเลือก คัฟเวอร์เทค?" : "Why Choose Covertech?"}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {lang === "th"
                ? "เราเป็นผู้ผลิตผ้าใบ PVC โดยตรง ไม่ผ่านคนกลาง ทุกผืนผลิตเองในไทยด้วยวัสดุคุณภาพสูง ควบคุมกระบวนการผลิตทุกขั้นตอน เพื่อให้มั่นใจว่าสินค้าที่ถึงมือคุณมีคุณภาพที่ดีที่สุด"
                : "We are a direct PVC tarpaulin manufacturer — no middleman. Every piece is made in Thailand using premium materials, with full production control to ensure you receive the highest quality product."}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {lang === "th"
                ? "ด้วยประสบการณ์กว่า 15 ปีในอุตสาหกรรม เราเข้าใจความต้องการของลูกค้าทั้งรายย่อยและธุรกิจ ตั้งแต่การเลือกผ้าใบให้เหมาะกับการใช้งาน ไปจนถึงการตัดตามขนาดที่ต้องการ"
                : "With 15+ years in the industry, we understand the needs of both retail and business customers — from selecting the right tarpaulin to cutting custom sizes on demand."}
            </p>
          </div>
          <div className="flex-shrink-0 grid grid-cols-2 gap-3">
            {[
              { num: "15+", label: lang === "th" ? "ปีประสบการณ์" : "Years experience" },
              { num: "10K+", label: lang === "th" ? "ลูกค้าทั่วไทย" : "Customers nationwide" },
              { num: "100%", label: lang === "th" ? "ผลิตเองในไทย" : "Made in Thailand" },
              { num: "4.9★", label: lang === "th" ? "คะแนนรีวิว" : "Review score" },
            ].map((s) => (
              <div key={s.num} className="bg-orange-50 rounded-2xl p-4 text-center w-28">
                <div className="text-2xl font-bold text-[#FF8C4A]">{s.num}</div>
                <div className="text-xs text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {lang === "th" ? "คำถามที่พบบ่อย" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q[lang]}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a[lang]}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/faq" className="text-[#FF8C4A] font-semibold hover:underline text-sm">
              {lang === "th" ? "ดูคำถามทั้งหมด →" : "See all FAQs →"}
            </Link>
          </div>
        </div>
      </section>

      {/* LINE CTA Banner */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <LineOACTA lang={lang} variant="banner" />
        </div>
      </section>
    </>
  );
}
