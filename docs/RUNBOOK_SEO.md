# SEO Runbook

This project uses helper utilities in `src/lib/seo` to keep page metadata and
structured data consistent.

## Adding a New Page

1. **Metadata**
   - Import `buildMetadata` from `@/lib/seo/metadata`.
   - Export a `metadata` object from your `page.tsx`:

```ts
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE } from "@/lib/seo/site";

const url = `${SITE.url}/about`;
export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "Learn about our company",
  url,
});
```

2. **JSON‑LD**
   - Use the `JsonLd` component to inject structured data.
   - For services, use `ServiceJsonLd` with breadcrumb and FAQ support.

```tsx
import ServiceJsonLd from "@/app/services/ServiceJsonLd";

<ServiceJsonLd svc={{ slug: "my-service", name: "My Service" }} />
```

3. **Breadcrumbs**
   - Add the shared `<Breadcrumbs />` component near the top of detail pages.

```tsx
import Breadcrumbs from "@/components/Breadcrumbs";

<Breadcrumbs items={[{ href: "/services", label: "Services" }, { href: "/services/my-service", label: "My Service" }]} />
```

4. **SEO Check**
   - Run `pnpm seo:check` to ensure every page defines metadata.

## Updating Sitemap / Robots

Routes are automatically included via `src/app/sitemap.ts`. Add new list
functions in `src/lib/data.ts` if you introduce dynamic content types.

## Dynamic OG Images

Use `/og/[slug]` to generate Open Graph images dynamically:
`https://your-site.com/og/my-page?title=My%20Page`.

