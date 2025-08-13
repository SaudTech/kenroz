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
      "Brings ease to the process of Zatca compliance, ensuring businesses meet regulatory standards effortlessly.",
    logo: "/Emvive.png",
  },
  {
    name: "Arcgen",
    location: "Hyderbad, India",
    description:
      "Soul development team specializing in AI-driven solutions, enhancing business efficiency and innovation.",
    logo: "/Arcgen.png",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-16 bg-gradient-to-br from-white to-tertiary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Trusted{" "}
            <span className="bg-gradient-to-r from-[#df2a33] to-[#9B2730] bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
        </div>

        <div className="flex justify-around itmes-center">
          {clients.map((client, idx) => (
            <CometCard key={idx} className="max-w-[400px]">
              <div className="flex flex-col items-center h-[400px] bg-gradient-to-br from-primary to-secondary rounded-2xl p-6">
                <CometItem depth={0.4}>
                  <div className="w-32 h-32 relative mb-4">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain rounded-xl bg-white p-2"
                    />
                  </div>
                </CometItem>
                <CometItem depth={1}>
                  <h3 className="text-xl text-gray-200 font-semibold">{client.name}</h3>
                </CometItem>
                <CometItem depth={1.3}>
                  <p className="text-sm text-gray-200 mb-2">
                    {client.location}
                  </p>
                </CometItem>
                <CometItem depth={0.5}>
                  <p className="text-center text-sm text-gray-300 leading-relaxed">
                    {client.description}
                  </p>
                </CometItem>
                <CometItem depth={0.1}>
                  <Button className="mt-4 bg-white text-primary hover:bg-gray-200 transition-colors">
                    <Link href={`/clients/${client.name.toLowerCase()}`}>
                      Visit
                    </Link>
                  </Button>
                </CometItem>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
}
