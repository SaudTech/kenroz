import React from "react";
import { cn } from "@/lib/utils";

interface BlobProps {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const Blob = ({ className}: BlobProps) => {
  return (
    <div className={cn("pointer-events-none absolute h-[20rem] w-[20rem] rounded-full bg-primary blur-[13rem]", className)} />
  );
};

export default Blob;
