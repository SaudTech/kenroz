import React from "react";
import { ButtonLink } from "./Navbar";
import Paragraph from "./typography/Paragraph";

interface EngagementSectionProps {
  title: string;
  description: string;
  button1Url?: string;
  button1Text?: string;
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
    <section className="relative overflow-hidden bg-card text-card-foreground z-[90]">
      <div className="container relative z-10 mx-auto px-4 py-14 md:py-16 text-center">
        <div className="mx-auto max-w-3xl">
          <Paragraph className="text-3xl md:text-4xl text-card-foreground font-bold tracking-tight">
            {title}
          </Paragraph>
          <Paragraph className="mt-3 text-card-foreground/80">{description}</Paragraph>
          <div className="mt-8 flex items-center justify-center gap-4">
            {button1Url && button1Text && (
              <ButtonLink href={button1Url} variant="outline">
                {button1Text}
              </ButtonLink>
            )}
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
