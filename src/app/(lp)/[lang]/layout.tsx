import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [{ lang: "th" }, { lang: "en" }];
}

export default async function LpLangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!["th", "en"].includes(lang)) notFound();

  return (
    <div className="min-h-screen flex flex-col font-kanit">
      <main className="flex-1">{children}</main>
    </div>
  );
}
