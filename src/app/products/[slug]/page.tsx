"use client";

import { notFound } from "next/navigation";
import { useLang } from "@/context/LangContext";
import LineOACTA from "@/components/LineOACTA";

const productData: Record<string, {
  th: string; en: string;
  descTh: string; descEn: string;
  tag: string; price: string;
  specsTh: string[]; specsEn: string[];
  usesTh: string[]; usesEn: string[];
  faqs: { q: { th: string; en: string }; a: { th: string; en: string } }[];
}> = {
  "phaxbai-kansat-eco": {
    th: "ผ้าใบกันสาดชักรอก PVC ใยแก้ว Eco",
    en: "PVC Fiberglass Retractable Awning Eco",
    descTh: "ผ้าใบกันสาดคุณภาพสูง ผลิตจาก PVC ใยแก้วเกรดพรีเมียม ทนทานต่อแดดและฝน ติดตั้งง่ายด้วยระบบชักรอก เหมาะสำหรับบ้านพักอาศัยและธุรกิจ",
    descEn: "High-quality retractable awning made from premium PVC fiberglass. UV and rain resistant. Easy installation with pulley system. Ideal for homes and businesses.",
    tag: "STAR ⭐ — 1,000+/เดือน",
    price: "฿227",
    specsTh: ["วัสดุ: PVC ใยแก้วเกรดพรีเมียม", "กันน้ำ 100%", "ทนทานต่อ UV", "มีหลายสี", "สั่งตัดขนาดได้", "อายุการใช้งาน 5–8 ปี"],
    specsEn: ["Material: Premium PVC fiberglass", "100% waterproof", "UV resistant", "Multiple colors available", "Custom cut to size", "Lifespan 5–8 years"],
    usesTh: ["บ้านพักอาศัย", "ร้านค้าและธุรกิจ", "ลานจอดรถ", "ระเบียงและเฉลียง", "โกดังสินค้า"],
    usesEn: ["Residential homes", "Shops and businesses", "Car parks", "Balconies and verandas", "Warehouses"],
    faqs: [
      { q: { th: "ผ้าใบชักรอกทนแดดได้นานแค่ไหน?", en: "How long does the retractable awning last in the sun?" }, a: { th: "ด้วยวัสดุ PVC ใยแก้วคุณภาพสูง อายุการใช้งานประมาณ 5–8 ปี ขึ้นอยู่กับการดูแลรักษา", en: "With premium PVC fiberglass material, the lifespan is approximately 5–8 years depending on maintenance." } },
      { q: { th: "สามารถสั่งขนาดพิเศษได้ไหม?", en: "Can I order a custom size?" }, a: { th: "ได้เลย เรารับตัดทุกขนาดตามความต้องการ ติดต่อเราผ่าน LINE เพื่อรับใบเสนอราคา", en: "Yes, we cut any size to order. Contact us via LINE for a custom quote." } },
      { q: { th: "ระบบชักรอกติดตั้งง่ายไหม?", en: "Is the pulley system easy to install?" }, a: { th: "ติดตั้งง่าย มาพร้อมชุดอุปกรณ์ติดตั้ง และทีมงานพร้อมให้คำแนะนำทาง LINE", en: "Easy installation with included hardware kit. Our team is available via LINE for guidance." } },
      { q: { th: "มีบริการติดตั้งไหม?", en: "Do you offer installation service?" }, a: { th: "เราจำหน่ายสินค้าพร้อมชุดติดตั้ง สำหรับการติดตั้งในพื้นที่กรุงเทพฯ ติดต่อเราเพื่อสอบถามเพิ่มเติม", en: "We supply products with installation kits. For Bangkok-area installation services, contact us for details." } },
      { q: { th: "มีสีให้เลือกกี่สี?", en: "How many colors are available?" }, a: { th: "มีหลายสีให้เลือก เช่น เขียว น้ำเงิน เทา ส้ม และอื่นๆ ติดต่อเราเพื่อดูตัวอย่างสี", en: "Multiple colors available including green, blue, grey, orange and more. Contact us to see color samples." } },
    ],
  },
  "phaxbai-standard": {
    th: "ผ้าใบกันแดดกันฝน PVC Standard",
    en: "PVC Rain & Sun Tarpaulin Standard",
    descTh: "ผ้าใบอเนกประสงค์คุณภาพสูง กันแดดกันฝนได้ดีเยี่ยม ราคาคุ้มค่า น้ำหนักเบา ใช้งานได้หลากหลาย เหมาะสำหรับทั้งในบ้านและกลางแจ้ง",
    descEn: "High-quality all-purpose tarpaulin. Excellent sun and rain protection, lightweight and great value. Suitable for indoor and outdoor use.",
    tag: "BESTSELLER 🏆 — 163+/เดือน",
    price: "฿285",
    specsTh: ["วัสดุ: PVC คุณภาพสูง", "กันน้ำ 100%", "น้ำหนักเบา พกพาสะดวก", "ทนทานต่อ UV", "สั่งตัดขนาดได้", "ราคาประหยัด"],
    specsEn: ["Material: High-quality PVC", "100% waterproof", "Lightweight and portable", "UV resistant", "Custom cut to size", "Budget-friendly"],
    usesTh: ["คลุมสินค้าและวัสดุ", "งานเกษตร", "กิจกรรมกลางแจ้ง", "ป้องกันฝุ่นและฝน", "งานก่อสร้าง"],
    usesEn: ["Covering goods and materials", "Agriculture", "Outdoor activities", "Dust and rain protection", "Construction"],
    faqs: [
      { q: { th: "ผ้าใบ Standard ต่างจาก Premium อย่างไร?", en: "How does Standard differ from Premium?" }, a: { th: "Standard เหมาะสำหรับการใช้งานทั่วไปที่ต้องการความคุ้มค่า ส่วน Premium มีความหนาและทนทานกว่าสำหรับการใช้งานระยะยาว", en: "Standard is ideal for general use at a great price point. Premium offers greater thickness and durability for long-term use." } },
      { q: { th: "น้ำหนักผ้าใบเท่าไหร่?", en: "What is the tarpaulin weight?" }, a: { th: "น้ำหนักประมาณ 280–320 g/m² ขึ้นอยู่กับขนาดที่สั่ง", en: "Approximately 280–320 g/m² depending on the size ordered." } },
      { q: { th: "ทนต่อลมแรงได้ไหม?", en: "Is it wind resistant?" }, a: { th: "ทนทานต่อลมในระดับปกติ สำหรับพื้นที่ที่มีลมแรงแนะนำรุ่น Premium หรือ Eco ที่มีใยแก้วเสริม", en: "Wind resistant for normal conditions. For high-wind areas, we recommend the Premium or Eco fiberglass-reinforced models." } },
      { q: { th: "ซักและทำความสะอาดได้ไหม?", en: "Can it be washed and cleaned?" }, a: { th: "ได้เลย ใช้น้ำและสบู่ล้างจานได้ปกติ ไม่ควรใช้สารเคมีรุนแรง", en: "Yes, clean with water and mild dish soap. Avoid harsh chemicals." } },
      { q: { th: "รับประกันสินค้านานเท่าไหร่?", en: "What is the warranty period?" }, a: { th: "รับประกันสินค้า 100% หากได้รับสินค้าไม่ตรงตามที่สั่งหรือมีความเสียหายจากการผลิต", en: "100% guarantee. If the product doesn't match your order or has manufacturing defects, we will replace it." } },
    ],
  },
  "tent-pvc": {
    th: "ผ้าใบเต็นท์พับ PVC",
    en: "Folding Tent PVC Fabric",
    descTh: "ผ้าใบ PVC คุณภาพสูงสำหรับเต็นท์พับ แข็งแรง ทนทาน กันน้ำ 100% เหมาะสำหรับงานอีเวนต์ ตลาดนัด และกิจกรรมกลางแจ้งทุกประเภท",
    descEn: "High-quality PVC fabric for folding tents. Heavy-duty, 100% waterproof. Ideal for events, markets and all outdoor activities.",
    tag: "POPULAR",
    price: "฿412",
    specsTh: ["วัสดุ: PVC เกรดสูง", "กันน้ำ 100%", "แข็งแรงทนทาน", "น้ำหนักเบา", "สั่งตัดขนาดได้", "ใช้ซ้ำได้หลายครั้ง"],
    specsEn: ["Material: High-grade PVC", "100% waterproof", "Heavy-duty and durable", "Lightweight", "Custom cut to size", "Reusable"],
    usesTh: ["งานอีเวนต์และนิทรรศการ", "ตลาดนัดและตลาดสด", "งานบุญและประเพณี", "กิจกรรมกลางแจ้ง", "ร้านอาหารกลางแจ้ง"],
    usesEn: ["Events and exhibitions", "Markets and fairs", "Festivals and ceremonies", "Outdoor activities", "Outdoor restaurants"],
    faqs: [
      { q: { th: "ผ้าใบเต็นท์พับเหมาะกับขนาดเต็นท์เท่าไหร่?", en: "What tent sizes is this fabric suitable for?" }, a: { th: "เหมาะสำหรับเต็นท์ขนาด 2x2 เมตร ถึง 6x12 เมตร รับสั่งตัดตามขนาดเต็นท์ที่มีอยู่", en: "Suitable for tents from 2x2m to 6x12m. Custom cut to fit your existing tent frame." } },
      { q: { th: "ผ้าใบสำหรับเต็นท์กันฝนหนักได้ไหม?", en: "Can tent fabric handle heavy rain?" }, a: { th: "ได้ครับ วัสดุ PVC กันน้ำ 100% รองรับฝนหนักได้ดี แนะนำให้มีความลาดเอียงในการติดตั้งเพื่อระบายน้ำ", en: "Yes, 100% waterproof PVC handles heavy rain well. We recommend installing with a slight slope for water drainage." } },
      { q: { th: "ซื้อผ้าใบอย่างเดียวโดยไม่มีโครงได้ไหม?", en: "Can I buy fabric only without the frame?" }, a: { th: "ได้เลย เราจำหน่ายผ้าใบแยก รับตัดตามขนาดโครงเต็นท์ที่มีอยู่", en: "Yes, we sell fabric separately and cut to fit your existing tent frame." } },
      { q: { th: "ผ้าใบเก็บใส่ถุงได้ไหมเมื่อไม่ใช้?", en: "Can the fabric be packed away when not in use?" }, a: { th: "ได้ ผ้าใบ PVC พับเก็บได้ง่าย น้ำหนักเบา เหมาะสำหรับการขนย้าย", en: "Yes, PVC fabric folds easily and is lightweight for easy transport and storage." } },
      { q: { th: "มีสีอะไรบ้างสำหรับผ้าใบเต็นท์?", en: "What colors are available for tent fabric?" }, a: { th: "มีให้เลือกหลายสี เช่น ขาว น้ำเงิน เขียว แดง และสีพิเศษตามสั่ง ติดต่อเราเพื่อดูตัวเลือกสี", en: "Available in white, blue, green, red and custom colors. Contact us to see full color options." } },
    ],
  },
  "solarview-mesh": {
    th: "SolarView PVC Mesh กรองแสง",
    en: "SolarView PVC Mesh Sun Filter",
    descTh: "ผ้าใบกรองแสงสุดพรีเมียม กรองแสงได้ 0–90% ลดความร้อนได้อย่างมีประสิทธิภาพ ยังคงมองเห็นทิวทัศน์ได้ เหมาะสำหรับระเบียง สระว่ายน้ำ สวน และพื้นที่เชิงพาณิชย์",
    descEn: "Premium light-filtering mesh. 0–90% light filtration with effective heat reduction while maintaining your view. Ideal for balconies, pools, gardens and commercial spaces.",
    tag: "PREMIUM",
    price: "ติดต่อเรา",
    specsTh: ["วัสดุ: PVC Mesh คุณภาพสูง", "กรองแสง 0–90%", "ลดความร้อนได้มาก", "ระบายอากาศได้ดี", "ทนทานต่อ UV", "สั่งตัดขนาดได้"],
    specsEn: ["Material: High-quality PVC mesh", "0–90% light filtration", "Significant heat reduction", "Good ventilation", "UV resistant", "Custom cut to size"],
    usesTh: ["ระเบียงและเฉลียง", "สระว่ายน้ำ", "สวนและพื้นที่สีเขียว", "ร้านอาหารกลางแจ้ง", "โรงงานและคลังสินค้า"],
    usesEn: ["Balconies and verandas", "Swimming pools", "Gardens and green spaces", "Outdoor restaurants", "Factories and warehouses"],
    faqs: [
      { q: { th: "กรองแสง 90% หมายความว่าอย่างไร?", en: "What does 90% light filtration mean?" }, a: { th: "กรองแสงแดด 90% ทำให้พื้นที่ด้านในเย็นขึ้นอย่างเห็นได้ชัด ยังมีแสงผ่านเข้ามา 10% เพื่อไม่ให้มืดจนเกินไป", en: "Filters 90% of sunlight, significantly cooling the area underneath while allowing 10% light through to avoid complete darkness." } },
      { q: { th: "SolarView ระบายอากาศได้ไหม?", en: "Does SolarView allow air circulation?" }, a: { th: "ได้ครับ วัสดุ Mesh ช่วยให้อากาศระบายได้ดี ต่างจากผ้าใบทึบทั่วไป ทำให้รู้สึกเย็นสบายกว่า", en: "Yes, the mesh material allows excellent air circulation, unlike solid tarpaulin, creating a cooler feel." } },
      { q: { th: "มีระดับการกรองแสงให้เลือกไหม?", en: "Are there different filtration levels to choose from?" }, a: { th: "มีให้เลือกหลายระดับตั้งแต่ 30% ถึง 90% ขึ้นอยู่กับความต้องการใช้งาน ติดต่อเราเพื่อรับคำแนะนำ", en: "Yes, multiple levels from 30% to 90%. Contact us for recommendations based on your specific needs." } },
      { q: { th: "ติดตั้ง SolarView อย่างไร?", en: "How is SolarView installed?" }, a: { th: "ติดตั้งได้หลายรูปแบบ เช่น ขึงด้วยเชือก ติดด้วยตาไก่ หรือใช้ระบบรางเลื่อน ทีมงานพร้อมให้คำแนะนำ", en: "Multiple installation methods: rope tensioning, eyelet fixing or sliding rail systems. Our team will advise on the best approach." } },
      { q: { th: "ราคา SolarView คำนวณอย่างไร?", en: "How is SolarView pricing calculated?" }, a: { th: "ราคาขึ้นอยู่กับขนาด ระดับการกรองแสง และปริมาณที่สั่ง ติดต่อเราผ่าน LINE เพื่อรับใบเสนอราคาที่แม่นยำ", en: "Pricing depends on size, filtration level and order quantity. Contact us via LINE for an accurate quote." } },
    ],
  },
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { lang } = useLang();
  const product = productData[params.slug];

  if (!product) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-14 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-start">
          {/* Image */}
          <div className="bg-orange-100 rounded-2xl w-full md:w-80 h-64 flex items-center justify-center shrink-0">
            <span className="text-7xl">🏗️</span>
          </div>
          {/* Info */}
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold text-[#FF8C4A] bg-orange-50 px-3 py-1 rounded-full mb-3">
              {product.tag}
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
              {lang === "th" ? product.th : product.en}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              {lang === "th" ? product.descTh : product.descEn}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-[#FF8C4A]">{product.price}</span>
              <span className="text-xs text-gray-400">{lang === "th" ? "ราคาเริ่มต้น" : "Starting price"}</span>
            </div>
            <LineOACTA lang={lang} variant="button" />
          </div>
        </div>
      </section>

      {/* Specs + Uses */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {lang === "th" ? "คุณสมบัติสินค้า" : "Product Specifications"}
            </h2>
            <ul className="space-y-2">
              {(lang === "th" ? product.specsTh : product.specsEn).map((s) => (
                <li key={s} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="text-[#FF8C4A] mt-0.5">✓</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {lang === "th" ? "เหมาะสำหรับ" : "Suitable For"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {(lang === "th" ? product.usesTh : product.usesEn).map((u) => (
                <span key={u} className="bg-orange-50 text-[#FF8C4A] text-sm px-3 py-1.5 rounded-full border border-orange-100">
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {lang === "th" ? "คำถามที่พบบ่อย" : "Frequently Asked Questions"}
          </h2>
          <div className="space-y-4">
            {product.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q[lang]}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a[lang]}</p>
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
