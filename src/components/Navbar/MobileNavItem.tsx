import React from "react";
import Link from "next/link";

interface MobileNavItemProps {
  href?: string;
  text: string;
  onClick?: () => void;
}

function MobileNavItem({
  href,
  text,
  onClick,
}: MobileNavItemProps) {
  return href ? (
    <Link
      href={href}
      className="flex text-card-foreground hover:text-primary hover:bg-background px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] items-center"
      onClick={onClick}
    >
      {text}
    </Link>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left text-card-foreground hover:text-primary hover:bg-background px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center"
    >
      {text}
    </button>
  );
}

export default MobileNavItem;
