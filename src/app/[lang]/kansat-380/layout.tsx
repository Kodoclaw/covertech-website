import Footer from "@/components/Footer";

export default async function Kansat380Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = lang === "en" ? "en" : "th";

  return (
    <div className="min-h-screen flex flex-col font-kanit">
      <main className="flex-1">{children}</main>
      <Footer lang={validLang} />
    </div>
  );
}
