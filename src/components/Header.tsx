"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { path: "products", labelTh: "สินค้า", labelEn: "Products" },
  { path: "about", labelTh: "เกี่ยวกับเรา", labelEn: "About" },
  { path: "blog", labelTh: "บทความ", labelEn: "Blog" },
  { path: "faq", labelTh: "คำถามที่พบบ่อย", labelEn: "FAQ" },
  { path: "contact", labelTh: "ติดต่อ", labelEn: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "th";
  const otherLang = lang === "th" ? "en" : "th";
  const toggleHref = pathname.replace(/^\/(th|en)/, `/${otherLang}`);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-[#FF8C4A] flex items-center justify-center">
            <span className="text-white font-bold text-lg leading-none">C</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-gray-900 text-sm">คัฟเวอร์เทค</span>
            <span className="text-gray-400 text-xs">Covertech</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={`/${lang}/${link.path}`}
              className="text-sm text-gray-600 hover:text-[#FF8C4A] transition-colors"
            >
              {lang === "th" ? link.labelTh : link.labelEn}
            </Link>
          ))}
        </nav>

        {/* Right: Lang toggle + CTA */}
        <div className="flex items-center gap-3">
          {/* Language Toggle — pure Link, no state */}
          <Link
            href={toggleHref}
            className="hidden sm:flex items-center gap-1 text-xs text-gray-500 border border-gray-200 rounded-full px-2 py-1 hover:border-[#FF8C4A] hover:text-[#FF8C4A] transition-colors"
          >
            <span className={lang === "th" ? "font-semibold text-[#FF8C4A]" : ""}>TH</span>
            <span className="text-gray-300">|</span>
            <span className={lang === "en" ? "font-semibold text-[#FF8C4A]" : ""}>EN</span>
          </Link>

          {/* LINE CTA */}
          <a
            href="https://lin.ee/RTwFE2S"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#FF8C4A] hover:bg-[#e87a3a] text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            {lang === "th" ? "ปรึกษาฟรี" : "Free Consult"}
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={`/${lang}/${link.path}`}
              className="text-sm text-gray-700 py-1"
              onClick={() => setMenuOpen(false)}
            >
              {lang === "th" ? link.labelTh : link.labelEn}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <Link href={toggleHref} className="text-xs text-gray-500">
              Switch to {lang === "th" ? "English" : "ภาษาไทย"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
