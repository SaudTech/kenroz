import JsonLd from "@/lib/seo/jsonld";

export default function ServiceJsonLd({ svc }: { svc: any }) {
  const items = [
    { name: "Services", url: "/services" },
    { name: svc.name, url: `/services/${svc.slug}` },
  ];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: it.name,
            item: `${process.env.NEXT_PUBLIC_SITE_URL}${it.url}`,
          })),
        }}
      />
      {svc.faq?.length ? (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: svc.faq.map((q: any) => ({
              "@type": "Question",
              name: q.q,
              acceptedAnswer: { "@type": "Answer", text: q.a },
            })),
          }}
        />
      ) : null}
    </>
  );
}
