"use client";

import { LangProvider, useLang } from "@/context/LangContext";
import Header from "./Header";
import Footer from "./Footer";
import LineOACTA from "./LineOACTA";

function Shell({ children }: { children: React.ReactNode }) {
  const { lang, setLang } = useLang();
  return (
    <div className="min-h-screen flex flex-col font-kanit">
      <Header lang={lang} onLangChange={setLang} />
      <main className="flex-1">{children}</main>
      <Footer lang={lang} />
      <LineOACTA lang={lang} variant="sticky" />
    </div>
  );
}

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <Shell>{children}</Shell>
    </LangProvider>
  );
}
