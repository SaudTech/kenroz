import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Building2, Phone, Mail, Clock, Signpost } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Office = {
  label: string;
  address: string;
  phone?: string;
  email?: string;
  hours?: string;
  mapHref?: string; // optional Google Maps link
};

type CountryKey = "USA" | "UAE" | "Saudi" | "India";

const COUNTRY_ORDER: CountryKey[] = ["India", "Saudi", "USA", "UAE"];

const OFFICES: Record<CountryKey, Office[]> = {
  India: [
    {
      label: "Hyderabad",
      address: "HITEC City, Madhapur, Hyderabad 500081",
      phone: "+91 22 5555 0101",
      email: "support@kenroz.com",
      hours: "Mon-Fri, 10:00-19:00",
      mapHref: "https://maps.app.goo.gl/bFXrdf5PoijAqA7k7",
    },
  ],
  Saudi: [
    {
      label: "Dammam, Saudi Arabia",
      address: "King Fahd Industrial Port, Dammam 31461",
      phone: "+966 11 555 7890",
      email: "support@kenroz.com",
      hours: "Sun-Thu, 9:00-18:00",
      mapHref: "https://maps.app.goo.gl/856RSqeg1PKtz8Ts5",
    },
  ],
  USA: [
    {
      label: "Chicago, IL",
      address: "200 S Wacker Dr, Chicago, IL 60606",
      phone: "+1 (212) 555-0123",
      email: "support@kenroz.com",
      hours: "Mon-Fri, 9:00-18:00",
      mapHref: "https://maps.app.goo.gl/MoYFKJsArGHspeSK9",
    },
  ],
  UAE: [
    {
      label: "Sharjah",
      address: "Sheikh Zayed Rd, Business Bay, Sharjah",
      phone: "+971 4 555 1234",
      email: "support@kenroz.com",
      hours: "Sun-Thu, 9:00-18:00",
      mapHref: "https://maps.app.goo.gl/tDcysU7CLx82DzkT6",
    },
  ],
};

function CountryTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-4 h-10 flex items-center justify-center text-sm tracking-wide transition-colors
    ${active ? "text-white" : "text-white/70 hover:text-white"}
    focus:outline-none`}
    >
      {children}
      {active && (
        <motion.div
          layoutId="country-underline"
          className="absolute left-0 right-0 -bottom-[2px] h-[2px] bg-white"
          style={{ borderRadius: 0 }}
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 40 }}
        />
      )}
    </button>
  );
}

function LocationSwitcher({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const [country, setCountry] = useState<CountryKey>("India");

  const offices = useMemo(() => OFFICES[country], [country]);

  return (
    <div className="space-y-9 ">
      <h1 className="text-2xl mb-0 pb-0 font-bold text-white">{title}</h1>
      {description && <p className="text-white/90 text-sm">{description}</p>}

      {/* Segmented control */}
      <div className="w-full">
        <div className="flex items-center gap-2 border-b border-white/20 pb-1">
          {COUNTRY_ORDER.map((c) => (
            <>
              <CountryTab
                key={c}
                active={c === country}
                onClick={() => setCountry(c)}
              >
                {c}
              </CountryTab>
              {c !== COUNTRY_ORDER[COUNTRY_ORDER.length - 1] && (
                <div className="flex-shrink-0 w-px bg-white/20 h-6 mx-2" />
              )}
            </>
          ))}
        </div>
      </div>

      {/* Offices grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={country}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="grid grid-cols-1 gap-4"
        >
          {offices.map((info, idx) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03, duration: 0.18 }}
            >
              <Card className="border shadow-lg bg-white  transition-colors duration-200 h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Building2 className="w-4 h-4 text-secondary transition-colors" />
                    {info.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-secondary transition-colors" />

                    <p className="text-sm text-gray-700">
                      {info.address}
                    </p>
                  </div>

                  {info.phone && (
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-secondary  transition-colors" />
                      <a
                        href={`tel:${info.phone.replace(/\s/g, "")}`}
                        className="text-sm text-gray-700 "
                      >
                        {info.phone}
                      </a>
                    </div>
                  )}

                  {info.email && (
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-secondary group-hover:text-white transition-colors" />
                      <a
                        href={`mailto:${info.email}`}
                        className="text-sm text-gray-700 group-hover:text-white/95"
                      >
                        {info.email}
                      </a>
                    </div>
                  )}

                  {info.hours && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-secondary group-hover:text-white transition-colors" />
                      <p className="text-sm text-gray-700 group-hover:text-white/95">
                        {info.hours}
                      </p>
                    </div>
                  )}

                  <div className="pt-1">
                    <Button
                      variant="ghost"
                      className="text-sm px-3 py-1.5 bg-white hover:bg-white/90 text-secondary group-hover:text-secondary rounded-full"
                      asChild
                    >
                      <a
                        href={info.mapHref || "#"}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Signpost />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default LocationSwitcher;
