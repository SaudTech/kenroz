"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CometCard, CometItem } from "@/components/ui/comet-card";

const clients = [
  {
    name: "Emvive",
    location: "Khobar, Saudi Arabia",
    description:
      "Brings ease to the process of ZATCA compliance, ensuring businesses meet regulatory standards effortlessly.",
    logo: "/Emvive.png",
  },
  {
    name: "Arcgen",
    location: "Hyderabad, India",
    description:
      "Soul development team specializing in AI-driven solutions, enhancing business efficiency and innovation.",
    logo: "/Arcgen.png",
  },
];

const testimonials = [
  {
    role: "Emvive",
    content:
      "Kenroz transformed our startup vision into a market-ready platform. Their expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    role: "Arcgen",
    content:
      "The team's technical prowess and ability to deliver on time exceeded our expectations. Highly recommended!",
    rating: 5,
  },
];

const ratingStars = (n: number) =>
  Array.from({ length: n }).map((_, i) => (
    <svg
      key={i}
      className="h-4 w-4 fill-current text-yellow-400"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  ));

export default function CombinedShowcase() {
  // quick lookup: testimonial by client name
  const tByRole = Object.fromEntries(testimonials.map((t) => [t.role, t]));

  return (
    <section
      id="clients"
      className="flex flex-col"
      style={{ height: "calc(100vh - 65px)" }}
    >
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 py-6">
        {/* Unified header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Clients
            </span>{" "}
            & Their Words
          </h2>
          <p className="mt-2 text-sm text-gray-900">
            Partnerships built on delivery, security, and reliability — in their
            own words.
          </p>
        </div>

        {/* Single row of combined cards (horizontal scroll to keep within height) */}
        <div className="flex justify-around gap-6 pb-2">
          {clients.map((client) => {
            const t = tByRole[client.name];
            return (
              <CometCard
                key={client.name}
                className="min-w-[320px] max-w-sm flex-shrink-0"
              >
                <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white">
                  {/* Client block */}
                  <div className="bg-gradient-to-br from-primary to-secondary p-6 flex flex-col items-center">
                    <CometItem depth={0.4}>
                      <div className="relative mb-4 h-24 w-24">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="rounded-xl bg-white p-2 object-contain"
                        />
                      </div>
                    </CometItem>

                    <CometItem depth={1}>
                      <h3 className="text-lg font-semibold text-gray-100">
                        {client.name}
                      </h3>
                    </CometItem>

                    <CometItem depth={1.2}>
                      <p className="mt-1 text-xs text-gray-200 text-center">
                        {client.location}
                      </p>
                    </CometItem>

                    <CometItem depth={0.5}>
                      <p className="mt-3 text-sm text-gray-100/90 text-center leading-relaxed">
                        {client.description}
                      </p>
                    </CometItem>

                    <CometItem depth={0.1}>
                      <Link href={`/clients/${client.name.toLowerCase()}`}>
                        <Button className="mt-4 bg-white text-primary hover:bg-gray-200">
                          Visit
                        </Button>
                      </Link>
                    </CometItem>
                  </div>

                  {/* Testimonial block (paired & cohesive) */}
                  {t && (
                    <div className="p-5 bg-white">
                      <div className="mb-2 flex">{ratingStars(t.rating)}</div>
                      <p className="italic text-gray-700 leading-relaxed">
                        “{t.content}”
                      </p>
                      <p className="mt-3 text-xs font-medium text-primary">
                        {t.role}
                      </p>
                    </div>
                  )}
                </div>
              </CometCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
