import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import topGreen from "@/../public/PageDivider/top_green.svg"
// import bottomGreen from "@/../public/PageDivider/bottom_green.svg"
// import topRed from "@/../public/PageDivider/top_red.svg"
// import bottomRed from "@/../public/PageDivider/bottom_red.svg"
// import topPurple from "@/../public/PageDivider/top_purple.svg"
// import bottomPurple from "@/../public/PageDivider/bottom_purple.svg"
const PageDividerTwo = ({ className = "" }) => {
  const [clientScreenWidth, setClientScreenWidth] = useState(0);

  useEffect(() => {
    const update = () => setClientScreenWidth(window.innerWidth);
    update(); // set once on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div className={cn("-mt-[10rem] z-[-10]", className)}>
      <Image
        src="/curve-divider.svg"
        alt="top-curve"
        className="w-full h-auto rotate-180"
        width={clientScreenWidth}
        height={100}
      />
      <Image
        src="/intersecting-wave-layers2.svg"
        alt="divider"
        className="w-full h-auto"
        width={clientScreenWidth}
        height={100}
      />
    </div>
  );
};

export default PageDividerTwo;
