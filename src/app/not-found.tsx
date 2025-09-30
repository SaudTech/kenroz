import { ButtonLink } from "@/components/Navbar";
import Paragraph from "@/components/typography/Paragraph";

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-88px)] bg-background text-foreground">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-primary/40 via-secondary/10 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="mb-4 inline-flex items-center rounded-full bg-background/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-foreground backdrop-blur">
          404 Error
        </span>
        <Paragraph className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          We couldn&apos;t find the page you were looking for.
        </Paragraph>
        <Paragraph className="mt-6 max-w-2xl text-pretty text-base  text-foreground/80 sm:text-lg">
          The page may have been moved, deleted, or perhaps the link you
          followed is incorrect. Let&apos;s get you back to building something
          amazing with Kenroz.
        </Paragraph>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <ButtonLink href="/">Go back home</ButtonLink>
          <ButtonLink href="/contact-us" variant="secondary" className="text-foreground">Talk to our team</ButtonLink>
        </div>
      </div>
    </div>
  );
}
