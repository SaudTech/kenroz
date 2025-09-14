import type { Metadata } from "next";
import { SITE } from "./site";

export function buildMetadata({
  title,
  description,
  url,
  images,
  type = "website",
}: {
  title?: string;
  description?: string;
  url?: string;
  images?: string[];
  type?: "website" | "article" | "product";
}): Metadata {
  const fullTitle = title ? `${title}` : SITE.defaultTitle;
  const desc = description ?? SITE.defaultDescription;
  const canonical = url ?? SITE.url;
  const ogImages = (images?.length ? images : [SITE.defaultOgImage]).map((u) => ({
    url: u,
  }));

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(SITE.url),
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: canonical,
      type,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: ogImages.map((i) => i.url),
      site: SITE.twitterHandle,
    },
  };
}
