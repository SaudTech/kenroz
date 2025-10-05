"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function SiteGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const comingSoonDisabled =
    process.env.NEXT_PUBLIC_DISABLE_COMING_SOON === "true";
  const [allowed, setAllowed] = useState(
    comingSoonDisabled || pathname === "/coming-soon"
  );

  useEffect(() => {
    if (comingSoonDisabled || pathname === "/coming-soon") {
      setAllowed(true);
      return;
    }
    const unlocked = localStorage.getItem("site-unlocked");
    if (unlocked === "true") {
      setAllowed(true);
    } else {
      // router.push("/coming-soon");
      window.location.href = "/coming-soon";
    }
  }, [comingSoonDisabled, pathname, router]);

  if (!allowed) {
    return null;
  }

  return <>{children}</>;
}
