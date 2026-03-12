import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://covertech.company";
  const langs = ["th", "en"];
  const routes = [
    "",
    "/products",
    "/products/phaxbai-kansat-eco",
    "/products/phaxbai-standard",
    "/products/tent-pvc",
    "/products/solarview-mesh",
    "/about",
    "/contact",
    "/faq",
    "/blog",
  ];

  return langs.flatMap((lang) =>
    routes.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
