"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function SiteGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(pathname === "/coming-soon");

  useEffect(() => {
    if (pathname === "/coming-soon") {
      return;
    }
    const unlocked = localStorage.getItem("site-unlocked");
    if (unlocked === "true") {
      setAllowed(true);
    } else {
      // router.push("/coming-soon");
      window.location.href = "/coming-soon";
    }
  }, [pathname, router]);

  if (!allowed) {
    return null;
  }

  return <>{children}</>;
}
