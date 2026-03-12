
import Image from "next/image";

export async function generateStaticParams() {
  return [{ lang: "th" }, { lang: "en" }];
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: langRaw } = await params;
  const lang = langRaw as "th" | "en";

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {lang === "th" ? "ติดต่อเรา" : "Contact Us"}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          {lang === "th"
            ? "ทีมผู้เชี่ยวชาญของเราพร้อมช่วยคุณเลือกผ้าใบที่ใช่ สอบถามฟรี ไม่มีข้อผูกมัด"
            : "Our specialist team is ready to help you choose the right tarpaulin. Free consultation, no obligation."}
        </p>
      </section>

      {/* Main Contact */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LINE OA info */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#FF8C4A] text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                LINE OA
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {lang === "th" ? "ช่องทางหลัก: LINE OA" : "Primary Channel: LINE OA"}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {lang === "th"
                  ? "วิธีที่เร็วที่สุดในการรับคำตอบ สอบถามราคา สั่งสินค้า หรือขอคำแนะนำจากผู้เชี่ยวชาญ ตอบกลับภายใน 1 ชั่วโมง (จ.–ส. 9:00–18:00)"
                  : "The fastest way to get answers — ask for prices, place orders, or get expert advice. Reply within 1 hour (Mon–Sat 9:00–18:00)."}
              </p>
              <a
                href="https://lin.ee/RTwFE2S"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF8C4A] hover:bg-[#e87a3a] text-white font-semibold px-6 py-3 rounded-full transition-colors text-lg"
              >
                {lang === "th" ? "แชทบน LINE ได้เลย" : "Chat on LINE Now"}
              </a>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center gap-4">
              <div className="bg-white rounded-2xl p-4 border-2 border-gray-100 shadow-sm">
                <Image
                  src="https://qr-official.line.me/gs/M_121ahpzm_BW.png?oat_content=qr"
                  alt="Covertech LINE OA QR Code"
                  width={200}
                  height={200}
                  unoptimized
                />
              </div>
              <p className="text-sm text-gray-500 text-center">
                {lang === "th" ? "สแกน QR เพื่อเพิ่มเพื่อนบน LINE" : "Scan QR to add us on LINE"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            {
              icon: "⏰",
              th: "เวลาทำการ",
              en: "Business Hours",
              descTh: "จันทร์ – เสาร์\n09:00 – 18:00 น.",
              descEn: "Monday – Saturday\n09:00 – 18:00",
            },
            {
              icon: "🚚",
              th: "ส่งทั่วประเทศ",
              en: "Nationwide Shipping",
              descTh: "ส่งทุกจังหวัดทั่วไทย\nรับ COD ทุกออเดอร์",
              descEn: "Delivery to all provinces\nCOD available on every order",
            },
            {
              icon: "📦",
              th: "ระยะเวลาส่ง",
              en: "Delivery Time",
              descTh: "3–5 วันทำการ\nหลังยืนยันออเดอร์",
              descEn: "3–5 business days\nafter order confirmation",
            },
          ].map((c) => (
            <div key={c.th} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{lang === "th" ? c.th : c.en}</h3>
              <p className="text-sm text-gray-500 whitespace-pre-line">{lang === "th" ? c.descTh : c.descEn}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
