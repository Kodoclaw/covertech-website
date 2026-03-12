import Link from "next/link";

interface FooterProps {
  lang: "th" | "en";
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#FF8C4A] flex items-center justify-center">
                <span className="text-white font-bold text-base leading-none">C</span>
              </div>
              <span className="text-white font-bold">คัฟเวอร์เทค</span>
            </div>
            <p className="text-sm leading-relaxed">
              {lang === "th"
                ? "ผู้เชี่ยวชาญผ้าใบ PVC ครบวงจร ผลิตเองในไทย กว่า 15 ปี"
                : "Thailand's tarpaulin specialist. Made in-house for 15+ years."}
            </p>
            <div className="flex gap-3 mt-4 text-xs">
              <span className="bg-gray-800 px-2 py-1 rounded">ผลิตเองในไทย</span>
              <span className="bg-gray-800 px-2 py-1 rounded">COD</span>
              <span className="bg-gray-800 px-2 py-1 rounded">รับประกัน 100%</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">
              {lang === "th" ? "เมนู" : "Menu"}
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-[#FF8C4A] transition-colors">{lang === "th" ? "สินค้า" : "Products"}</Link></li>
              <li><Link href="/about" className="hover:text-[#FF8C4A] transition-colors">{lang === "th" ? "เกี่ยวกับเรา" : "About"}</Link></li>
              <li><Link href="/blog" className="hover:text-[#FF8C4A] transition-colors">{lang === "th" ? "บทความ" : "Blog"}</Link></li>
              <li><Link href="/faq" className="hover:text-[#FF8C4A] transition-colors">{lang === "th" ? "คำถามที่พบบ่อย" : "FAQ"}</Link></li>
              <li><Link href="/contact" className="hover:text-[#FF8C4A] transition-colors">{lang === "th" ? "ติดต่อ" : "Contact"}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">
              {lang === "th" ? "ติดต่อเรา" : "Contact"}
            </h3>
            <p className="text-sm mb-4">
              {lang === "th"
                ? "พูดคุยกับผู้เชี่ยวชาญผ้าใบของเรา ฟรี ไม่มีข้อผูกมัด"
                : "Chat with our tarpaulin experts — free, no obligation."}
            </p>
            <a
              href="https://lin.ee/RTwFE2S"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF8C4A] hover:bg-[#e87a3a] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              {lang === "th" ? "ปรึกษาผ้าใบฟรี" : "Free Consultation"}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-center">
          © {new Date().getFullYear()} Covertech (คัฟเวอร์เทค) · {lang === "th" ? "สงวนลิขสิทธิ์" : "All rights reserved"}
        </div>
      </div>
    </footer>
  );
}
