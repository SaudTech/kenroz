import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap gap-2">
        {items.map((it, i) => (
          <li key={it.href} className="inline-flex items-center gap-2">
            {i > 0 && <span>/</span>}
            <Link href={it.href} className="hover:underline">
              {it.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
