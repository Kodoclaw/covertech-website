"use client";

import { useLang } from "@/context/LangContext";
import LineOACTA from "@/components/LineOACTA";

const faqs = [
  {
    category: { th: "เกี่ยวกับสินค้า", en: "About Products" },
    items: [
      {
        q: { th: "ผ้าใบ PVC ต่างจากผ้าใบทั่วไปอย่างไร?", en: "How is PVC tarpaulin different from regular tarpaulin?" },
        a: { th: "ผ้าใบ PVC มีความทนทานสูงกว่า กันน้ำได้ 100% ทนต่อ UV และอายุการใช้งานยาวนานกว่าผ้าใบทั่วไป 3–5 เท่า เหมาะสำหรับการใช้งานกลางแจ้งระยะยาว", en: "PVC tarpaulin is more durable, 100% waterproof, UV resistant and lasts 3–5x longer than standard tarpaulin. Ideal for long-term outdoor use." },
      },
      {
        q: { th: "มีผ้าใบกี่ประเภท และแตกต่างกันอย่างไร?", en: "What types of tarpaulin are available and how do they differ?" },
        a: { th: "เรามีผ้าใบหลักๆ 4 ประเภท: (1) กันสาดชักรอก Eco – สำหรับติดตั้งถาวร (2) Standard – อเนกประสงค์ราคาประหยัด (3) เต็นท์พับ PVC – สำหรับงาน event (4) SolarView Mesh – กรองแสง ระบายอากาศ", en: "We have 4 main types: (1) Retractable Awning Eco – for permanent installation (2) Standard – all-purpose budget option (3) Folding Tent PVC – for events (4) SolarView Mesh – light filtering with ventilation." },
      },
      {
        q: { th: "ผ้าใบของคัฟเวอร์เทคกันน้ำได้จริงไหม?", en: "Is Covertech tarpaulin truly waterproof?" },
        a: { th: "ใช่ครับ ผ้าใบทุกรุ่นของเรากันน้ำ 100% ยกเว้นรุ่น SolarView Mesh ที่เป็น Mesh ระบายอากาศ ซึ่งกันน้ำได้บางส่วน", en: "Yes, all our tarpaulin models are 100% waterproof, except the SolarView Mesh which is a breathable mesh and offers partial water resistance." },
      },
    ],
  },
  {
    category: { th: "การสั่งซื้อ", en: "Ordering" },
    items: [
      {
        q: { th: "สามารถสั่งตัดขนาดพิเศษได้ไหม?", en: "Can I order custom sizes?" },
        a: { th: "ได้เลยครับ เรารับตัดทุกขนาดตามความต้องการ ทั้งขนาดเล็กสำหรับบ้านและขนาดใหญ่สำหรับโรงงาน ติดต่อเราผ่าน LINE เพื่อรับใบเสนอราคา", en: "Yes, we cut any size to order — from small home use to large industrial sizes. Contact us via LINE for a custom quote." },
      },
      {
        q: { th: "สั่งขั้นต่ำเท่าไหร่?", en: "What is the minimum order?" },
        a: { th: "ไม่มีขั้นต่ำสำหรับการสั่งซื้อทั่วไป สำหรับราคาขายส่งติดต่อเราเพื่อสอบถามปริมาณขั้นต่ำ", en: "No minimum order for regular purchases. For wholesale pricing, contact us about minimum quantities." },
      },
      {
        q: { th: "ชำระเงินแบบไหนได้บ้าง?", en: "What payment methods are accepted?" },
        a: { th: "รับชำระด้วย COD (เก็บเงินปลายทาง), โอนเงินผ่านธนาคาร และ PromptPay", en: "We accept COD (Cash on Delivery), bank transfer and PromptPay." },
      },
    ],
  },
  {
    category: { th: "การจัดส่ง", en: "Shipping" },
    items: [
      {
        q: { th: "ส่งทั่วประเทศไหม?", en: "Do you ship nationwide?" },
        a: { th: "ส่งทั่วประเทศไทยทุกจังหวัด ใช้เวลา 3–5 วันทำการหลังยืนยันออเดอร์", en: "We ship to all provinces nationwide. Delivery takes 3–5 business days after order confirmation." },
      },
      {
        q: { th: "ค่าส่งเท่าไหร่?", en: "What are the shipping costs?" },
        a: { th: "ค่าส่งขึ้นอยู่กับน้ำหนักและขนาดของสินค้า สามารถสอบถามได้เมื่อแจ้งขนาดที่ต้องการ", en: "Shipping costs depend on weight and size. Contact us with your size requirements for an accurate quote." },
      },
      {
        q: { th: "สินค้าเสียหายระหว่างขนส่งทำอย่างไร?", en: "What if my order is damaged during shipping?" },
        a: { th: "แจ้งเราทาง LINE พร้อมรูปถ่ายภายใน 24 ชั่วโมงหลังได้รับสินค้า เราจัดส่งสินค้าใหม่ให้ทันที", en: "Contact us via LINE with photos within 24 hours of receiving. We will send a replacement immediately." },
      },
    ],
  },
  {
    category: { th: "การดูแลรักษา", en: "Care & Maintenance" },
    items: [
      {
        q: { th: "ดูแลรักษาผ้าใบอย่างไรให้ใช้งานได้นาน?", en: "How do I care for tarpaulin to extend its life?" },
        a: { th: "ทำความสะอาดด้วยน้ำและสบู่อ่อนๆ ปีละ 2–3 ครั้ง หลีกเลี่ยงการใช้สารเคมีรุนแรง เก็บในที่ร่มเมื่อไม่ใช้งานระยะยาว", en: "Clean with water and mild soap 2–3 times per year. Avoid harsh chemicals. Store in shade during extended non-use." },
      },
    ],
  },
];

export default function FAQPage() {
  const { lang } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {lang === "th" ? "คำถามที่พบบ่อย" : "Frequently Asked Questions"}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          {lang === "th"
            ? "ทุกคำถามที่อยากรู้เกี่ยวกับผ้าใบ PVC และการสั่งซื้อกับคัฟเวอร์เทค"
            : "Everything you want to know about PVC tarpaulin and ordering from Covertech."}
        </p>
      </section>

      {/* FAQ sections */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((section) => (
            <div key={section.category.th}>
              <h2 className="text-lg font-bold text-[#FF8C4A] mb-5 pb-2 border-b border-orange-100">
                {section.category[lang]}
              </h2>
              <div className="space-y-4">
                {section.items.map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{faq.q[lang]}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            {lang === "th" ? "ยังมีคำถามอื่นอีกไหม?" : "Still have questions?"}
          </h2>
          <p className="text-gray-500 mb-6">
            {lang === "th"
              ? "ทีมผู้เชี่ยวชาญของเราพร้อมตอบทุกคำถาม ทาง LINE ได้เลย"
              : "Our specialist team is ready to answer any question. Just chat on LINE."}
          </p>
          <LineOACTA lang={lang} variant="button" />
        </div>
      </section>
    </>
  );
}
