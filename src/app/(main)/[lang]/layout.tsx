import { notFound } from "next/navigation";
import LayoutShell from "@/components/LayoutShell";

export async function generateStaticParams() {
  return [{ lang: "th" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: langRaw } = await params;
  if (!["th", "en"].includes(langRaw)) notFound();
  const lang = langRaw as "th" | "en";
  return <LayoutShell lang={lang}>{children}</LayoutShell>;
}
