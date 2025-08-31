import Image from "next/image";
import React, { useEffect, useState } from "react";

const PageDividerTwo = ({ className = "" }) => {
  const [clientScreenWidth, setClientScreenWidth] = useState(0);

  useEffect(() => {
    const update = () => setClientScreenWidth(window.innerWidth);
    update(); // set once on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div className={className}>
      <Image
        src="/bubble-side-divider.svg"
        alt="divider"
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
