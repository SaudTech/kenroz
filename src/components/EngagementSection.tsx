import React from "react";
import { ButtonLink } from "./Navbar";

interface EngagementSectionProps {
  title: string;
  description: string;
  button1Url: string;
  button1Text: string;
  button2Url?: string;
  button2Text?: string;
}

const EngagementSection: React.FC<EngagementSectionProps> = ({
  title,
  description,
  button1Url,
  button1Text,
  button2Url,
  button2Text,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="container relative z-10 mx-auto px-4 py-14 md:py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-white/80">{description}</p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <ButtonLink href={button1Url}>{button1Text}</ButtonLink>
            {button2Url && button2Text && (
              <ButtonLink href={button2Url} variant="outline">
                {button2Text}
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
