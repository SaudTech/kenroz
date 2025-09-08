import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const locations = [
  {
    city: "Hyderabad",
    flag: "/flags/ind.png",
    location: `Western Aqua,
              Hitech City,
              Hyderabad,
              Telangana`,
    phone: "+91-970-473-0500",
  },
  // {
  //   city: "Dammam",
  //   flag: "/flags/sau.png",
  //   location: "Al Khobar Al Shamalia, Al Khobar 34428, Saudi Arabia",
  //   phone: "+966-23-234-2342",
  // },
  // {
  //   city: "Sharjah",
  //   flag: "/flags/uae.png",
  //   location:
  //     "19 48A St - Al Barsha - Al Barsha 2 - Sharjah - United Arab Emirates",
  //   phone: "+971-18-923-2342",
  // },
];

const countryByCity: Record<string, string> = {
  Hyderabad: "India",
  // Dammam: "Saudi Arabia",
  // Sharjah: "United Arab Emirates",
};

function mapHref(addr: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    addr
  )}`;
}

function LocationCard({
  city,
  flag,
  location,
  phone,
}: (typeof locations)[number]) {
  const country = countryByCity[city] ?? "Location";
  const tel = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <div
      className="
        group relative w-full overflow-hidden rounded-xl border border-black/10
        bg-card backdrop-blur-[2px] shadow-xs transition-all duration-200 hover:bg-background group
        hover:-translate-y-0.5 hover:shadow-sm dark:bg-white/5 dark:border-white/10
        focus-within:ring-2 focus-within:ring-primary/40
      "
    >
      {/* Top row: flag on left, phone on right (compact) */}
      <div className="flex items-center justify-between px-3 py-2">
        <div className="relative h-7 w-12 overflow-hidden rounded ring-1 ring-black/10 flex">
          <Image
            src={flag}
            alt={`${country} flag`}
            fill
            sizes="50px"
            className="object-cover"
          />
        </div>

        <a
          href={tel}
          className="inline-flex items-center gap-1 text-xs text-card-foreground group-hover:text-foreground hover:underline"
          aria-label={`Call ${phone}`}
        >
          <Phone className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
          {phone}
        </a>
      </div>

      {/* Address row (single line, super compact) */}
      <div className="px-3 pb-3 text-[13px] leading-snug text-card-foreground group-hover:text-foreground">
        <a
          href={mapHref(location)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-2 hover:underline"
          title={location}
          aria-label={`Open ${city} location in Maps`}
        >
          <MapPin className="mt-[2px] h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
          <address className="whitespace-pre-line">{location}</address>
        </a>
      </div>

      {/* bottom accent */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  );
}

export default function LocationCards() {
  return (
    <div
      className="
        w-full mt-4 grid gap-3
        [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]
      "
    >
      {locations.map((loc) => (
        <LocationCard key={loc.city} {...loc} />
      ))}
    </div>
  );
}
