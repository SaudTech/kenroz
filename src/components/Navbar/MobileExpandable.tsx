import { ChevronDown, Link } from "lucide-react";
import { NavLink } from "../Navbar";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

function MobileExpandable({
  item,
  isOpen,
  onToggle,
  onLeafClick,
}: {
  item: NavLink;
  isOpen: boolean;
  onToggle: () => void;
  onLeafClick: (leaf: NavLink) => void;
}) {
  return (
    <div className="rounded-lg">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left font-bold text-md text-card-foreground hover:text-primary hover:bg-background px-4 py-3 text-base rounded-lg transition-all duration-200 min-h-[44px] flex items-center justify-between"
        aria-expanded={isOpen}
        aria-controls={`mobile-sub-${item.label}`}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul    
            id={`mobile-sub-${item.label}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="pl-2 pr-2"
          >
            {item.links?.map((child) => (
              <li key={child.label} className="mt-1">
                {child.href ? (
                  <Link
                    href={child.href}
                    onClick={() => onLeafClick(child)}
                    className="block text-foreground hover:text-primary hover:bg-black px-4 py-2.5 text-base rounded-lg"
                  >
                    {child.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => onLeafClick(child)}
                    className="w-full text-left text-foreground hover:text-primary hover:bg-black px-4 py-2.5 text-base rounded-lg"
                  >
                    {child.label}
                  </button>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileExpandable;