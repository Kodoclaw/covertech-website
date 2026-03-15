import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-kanit",
  display: "swap",
});

export const metadata: Metadata = {
  verification: {
    google: "lYYm-WZgKWEFrqawyxIla021JJtHOFUsta5z_tq7NtQ",
  },
  title: "คัฟเวอร์เทค | ผู้เชี่ยวชาญผ้าใบ PVC ครบวงจร",
  description:
    "ผู้เชี่ยวชาญผ้าใบ PVC ครบวงจร ผลิตเองในไทย กว่า 15 ปี รับสั่งตัดขนาด บริการหลังการขาย รับประกัน 100%",
  keywords: "ผ้าใบ PVC, ผ้าใบกันฝน, ผ้าใบกันแดด, ผ้าใบกันสาด, คัฟเวอร์เทค, Covertech",
  openGraph: {
    title: "คัฟเวอร์เทค | ผู้เชี่ยวชาญผ้าใบ PVC ครบวงจร",
    description: "ผลิตเองในไทย กว่า 15 ปี รับสั่งตัดขนาด รับประกัน 100%",
    url: "https://covertech.company",
    siteName: "Covertech",
    locale: "th_TH",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Covertech",
  alternateName: "คัฟเวอร์เทค",
  description: "ผู้เชี่ยวชาญผ้าใบ PVC ครบวงจร ผลิตเองในไทย กว่า 15 ปี",
  url: "https://covertech.company",
  logo: "https://covertech.company/logo.png",
  foundingDate: "2010",
  areaServed: "TH",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://lin.ee/RTwFE2S",
    availableLanguage: ["Thai", "English"],
  },
  sameAs: ["https://lin.ee/RTwFE2S"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={kanit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
