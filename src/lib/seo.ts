export const seo = (title: string, description: string) => ({
  meta: [
    { title: `${title} | Crave & Crust` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Crave & Crust` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
