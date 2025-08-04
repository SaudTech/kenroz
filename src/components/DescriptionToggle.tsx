"use client";

import { useState, useRef, useEffect } from "react";

export default function DescriptionToggle({
  description,
}: {
  description?: string;
}) {
  const longDescription = description
    ? description.trim()
    : `
  Embrace the power of the cloud combined with modern DevOps practices to accelerate your business transformation. Our Cloud and DevOps Solutions help you migrate, build, and manage scalable, secure cloud infrastructure while streamlining development through automation and continuous integration. Whether you’re moving legacy systems to the cloud or deploying new applications, we ensure reliability and performance.
  
  We specialize in implementing DevOps methodologies that automate your software delivery lifecycle, enabling faster releases, improved quality, and reduced downtime. From infrastructure as code and container orchestration to monitoring and incident management, our team builds a seamless pipeline that supports your business agility and innovation goals.
  
  By integrating cloud platforms like Microsoft Azure, AWS, or Google Cloud with DevOps best practices, we help you reduce operational costs, enhance collaboration between development and operations teams, and maintain robust security and compliance. Partner with us to future-proof your IT environment and accelerate growth with confidence.
  `.trim();
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string>("0px");

  // update maxHeight when expanded changes to allow transition
  useEffect(() => {
    if (expanded && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight + 8}px`);
    } else {
      // approximate 3 lines by computing line-height * 3 if available, fallback to a fixed value
      if (contentRef.current) {
        const style = window.getComputedStyle(contentRef.current);
        const lineHeight = parseFloat(style.lineHeight) || 1.5 * 16; // fallback 24px
        setMaxHeight(`${lineHeight * 3 + 4}px`); // a bit of padding
      } else {
        setMaxHeight("4.5rem");
      }
    }
  }, [expanded]);

  return (
    <div className="relative">
      <div
        ref={(el) => {
          contentRef.current = el;
        }}
        className="text-gray-700 text-base leading-relaxed whitespace-pre-line overflow-hidden transition-[max-height] duration-300 ease"
        aria-expanded={expanded}
        style={{
          maxHeight: expanded ? maxHeight : maxHeight,
        }}
      >
        <pre
          style={{ whiteSpace: "pre-wrap", margin: 0, fontFamily: "inherit" }}
        >
          {longDescription}
        </pre>
      </div>

      <div className="mt-2">
        <button
          onClick={() => setExpanded((e) => !e)}
          className="text-blue-600 font-medium inline-flex items-center text-sm"
          aria-label={
            expanded
              ? "Hide more description"
              : "Read more about Cloud & DevOps Solutions"
          }
          aria-expanded={expanded}
          type="button"
        >
          {expanded ? "Hide more" : "Read more"}
        </button>
      </div>
    </div>
  );
}
