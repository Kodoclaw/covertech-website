import Header from "./Header";
import Footer from "./Footer";
import LineOACTA from "./LineOACTA";

export default function LayoutShell({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "th" | "en";
}) {
  return (
    <div className="min-h-screen flex flex-col font-kanit">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
      <LineOACTA lang={lang} variant="sticky" />
    </div>
  );
}
