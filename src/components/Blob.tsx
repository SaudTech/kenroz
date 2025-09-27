import { cn } from "@/lib/utils";

type BlobProps = {
  align?: "left" | "right";
  className?: string;
};

export function Blob({ className }: BlobProps) {
  
  const randomNumber = Math.floor(
    Math.random() * (Math.ceil(1) - Math.floor(0) + 1) + Math.ceil(1)
  );

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -inset-x-16 -inset-y-16 -z-10 opacity-60 blur-3xl",
        className
      )}
    >
      {randomNumber == 1 ? (
        <svg
          viewBox="0 0 300 300"
          className="w-[1000px] h-[1000px] breathing"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="var(--primary)"
            fillOpacity="0.55"
            d="M40.5,-69C51.9,-63.5,60.3,-51.6,69.1,-39C78,-26.5,87.2,-13.2,85.9,-0.8C84.5,11.7,72.7,23.4,61.2,31.4C49.7,39.3,38.7,43.6,28.5,47.1C18.4,50.6,9.2,53.4,-0.6,54.3C-10.3,55.3,-20.6,54.4,-32.1,51.7C-43.5,48.9,-56,44.3,-66.2,35.3C-76.4,26.4,-84.2,13.2,-80.8,1.9C-77.5,-9.4,-63.1,-18.7,-55.6,-32.3C-48.1,-45.9,-47.6,-63.7,-39.5,-71.1C-31.4,-78.5,-15.7,-75.5,-0.6,-74.5C14.5,-73.5,29,-74.4,40.5,-69Z"
            transform="translate(100 100)"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 300 300"
          className="w-[1000px] h-[1000px] breathing"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="var(--primary)"
            fillOpacity="0.55"
            d="M39.2,-65.5C51.4,-61,62.1,-51.5,71.9,-39.8C81.7,-28,90.7,-14,90.7,0C90.6,14,81.6,27.9,72.1,40.2C62.5,52.5,52.6,63.1,40.5,65.4C28.4,67.8,14.2,61.8,1.7,58.8C-10.8,55.9,-21.6,56,-35.1,54.5C-48.7,53,-65,50,-68.6,40.7C-72.2,31.3,-63,15.7,-60.3,1.6C-57.5,-12.5,-61.2,-24.9,-56.5,-32.5C-51.9,-40,-38.9,-42.5,-28.1,-47.8C-17.3,-53.1,-8.7,-61.2,2.4,-65.4C13.6,-69.7,27.1,-70.1,39.2,-65.5Z"
            transform="translate(100 100)"
          />
        </svg>
      )}
    </div>
  );
}
