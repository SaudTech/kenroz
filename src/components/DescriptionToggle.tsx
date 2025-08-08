"use client";

import { useState, useRef, useEffect } from "react";

export default function DescriptionToggle({ description }: { description: string }) {
  const longDescription = description.trim();
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
          onClick={() => {
            setExpanded((e) => !e)
          }}
          className="font-medium text-primary inline-flex items-center text-sm"
          aria-label={
            expanded
              ? "Hide more description"
              : "Read more about Cloud & DevOps Solutions"
          }
          aria-expanded={expanded}
          type="button"
        >
          {expanded ? "Hide" : "Read more"}
        </button>
      </div>
    </div>
  );
}
