/* eslint-disable @next/next/no-img-element */
import DescriptionToggle from "@/components/DescriptionToggle";
import FlipCard from "@/components/FlipCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Activity } from "lucide-react";
export const metadata = { title: "Microsoft Dynamics 365" };

let d = `
Microsoft Dynamics 365 offers a unified solution to manage every facet of your business, from sales and customer service to finance and operations. Our team specializes in customizing and implementing Dynamics 365 to fit your unique business processes and goals. Whether you're looking to improve customer engagement or optimize internal operations, we ensure a smooth, scalable transformation.

We understand that every organization operates differently, which is why we take a tailored approach, analyzing your workflow, integrating existing systems, and configuring modules to support your business strategy. Our experts guide you from planning through deployment, ensuring you're maximizing the capabilities of the Dynamics platform.

With powerful analytics, AI-driven insights, and seamless cloud integration, Dynamics 365 empowers businesses to make informed decisions in real time. We also offer ongoing support, training, and upgrades so your team can continue to thrive as your business evolves.
`;

export default function MicrosoftDynamic365Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero with image on right */}
      <section className="container mx-auto px-4 py-16 relative">
        <div className="border-[40px] blur-3xl border-red-400 opacity-50 border-solid w-[60vw] h-[60vh] aspect-square absolute top-2/4 transform -translate-y-2/4 left-[-200px] rounded-full"></div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 max-w-[60%] w-[60%]">
            <h1 className="text-6xl font-extrabold mb-2">
              Microsoft Dynamics 365
            </h1>
            <p className="text-base leading-relaxed mb-3">
              A tool to help you manage your <span>business processes</span>.
            </p>
            <div className="text-base leading-relaxed mb-3">
              <DescriptionToggle description={d} />
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 max-w-[40%] w-[40%]">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/Microsoft Dynamic 365.webp"
                alt="Microsoft Dynamics 365"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl font-bold mb-2">Services</h2>
          <p className="text-lg text-gray-700">
            Kenroz provides a host of services for all your business needs, some
            of them are listed here.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="text-center">
            <FlipCard
              icon={<Activity />}
              title="Consultation"
              description="We offer expert consultation to help you understand how Dynamics 365 can be tailored to your business needs."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
