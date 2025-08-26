import React from "react";

export default function PageLayout({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">{title}</h1>
      {subtitle && <p className="text-muted-foreground mb-8">{subtitle}</p>}
      <div className="space-y-4 text-lg leading-relaxed">
        {children}
      </div>
    </section>
  );
}
