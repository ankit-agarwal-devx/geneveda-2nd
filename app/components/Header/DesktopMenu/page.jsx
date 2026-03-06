"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Activity,
  Atom,
  BarChart3,
  BookMarked,
  BookOpenText,
  BriefcaseBusiness,
  Bug,
  Cpu,
  Dna,
  FileText,
  FlaskConical,
  FlaskRound,
  GraduationCap,
  House,
  Leaf,
  Microscope,
  PenTool,
  Pill,
  Plane,
  Presentation,
  ScrollText,
  ShieldCheck,
  Sprout,
  UtensilsCrossed,
} from "lucide-react";

const ICON_MAP = {
  Activity,
  Atom,
  BarChart3,
  BookMarked,
  BookOpenText,
  BriefcaseBusiness,
  Bug,
  Cpu,
  Dna,
  FileText,
  FlaskConical,
  FlaskRound,
  GraduationCap,
  House,
  Leaf,
  Microscope,
  PenTool,
  Pill,
  Plane,
  Presentation,
  ScrollText,
  ShieldCheck,
  Sprout,
  UtensilsCrossed,
};

const DesktopMenu = ({ items = [], depth = 0 }) => {
  const [activeIdx, setActiveIdx] = useState(null);
  const pathname = usePathname();

  const isChildActive = (children) => {
    if (!children) return false;
    return children.some(
      (child) =>
        pathname === child.href ||
        (child.children && isChildActive(child.children)),
    );
  };

  const listClass =
    depth === 0
      ? "flex space-x-1 cursor-pointer"
      : "bg-white text-primary shadow-2xl py-2 min-w-[220px] border border-gray-100 rounded-xl mt-2"; // Modernized dropdown

  return (
    <ul className={listClass}>
      {(items || []).map((item, index) => {
        const Icon = ICON_MAP[item.icon];
        const showChildren = activeIdx === index && item.children;
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href)) ||
          isChildActive(item.children);

        return (
          <li
            key={index}
            className="relative"
            onMouseEnter={() => setActiveIdx(index)}
            onMouseLeave={() => setActiveIdx(null)}
          >
            {!item.children || item.children.length === 0 ? (
              <Link
                href={item.href || "/"}
                className="block group/link relative"
              >
                <div
                  className={`
                    px-3 py-1 cursor-pointer text-[10px] flex justify-between items-center whitespace-nowrap transition-all duration-300 uppercase
                    ${
                      depth === 0
                        ? `${
                            isActive
                              ? "text-blueShade"
                              : "text-primary hover:text-amber-400"
                          } text-[10px] tracking-[0.08em]`
                        : "text-sm tracking-wider hover:bg-amber-400/5 hover:text-amber-400 px-6 py-2"
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    {Icon && (
                      <Icon
                        size={15}
                        strokeWidth={2.1}
                        style={{ color: item.color || "#64748B" }}
                      />
                    )}
                    <span>{item.label}</span>
                  </span>
                </div>
                {depth === 0 && (
                  <span
                    className={`absolute bottom-0 left-4 h-[2px] transition-all duration-300 ${
                      isActive
                        ? "bg-blueShade w-[calc(100%-32px)]"
                        : "bg-amber-400 w-0 group-hover/link:w-[calc(100%-32px)]"
                    }`}
                  />
                )}
              </Link>
            ) : (
              <div
                className={`
    px-3 py-1 cursor-default flex justify-between items-center whitespace-nowrap
    transition-all duration-300 uppercase text-[10px]
    ${
      depth === 0
        ? `${
            isActive
              ? "text-blueShade"
              : "text-primary hover:text-amber-400"
          } text-[10px] tracking-[0.08em]`
        : "text-[10px] tracking-wider hover:bg-amber-400/5 hover:text-amber-400 px-6 py-3"
    }
  `}
              >
                <span className="flex items-center gap-2">
                  {Icon && (
                    <Icon
                      size={15}
                      strokeWidth={2.1}
                      style={{ color: item.color || "#64748B" }}
                    />
                  )}
                  <span>{item.label}</span>
                </span>
                <span
                  className={`ml-2 text-[10px] transition-transform duration-300 ${activeIdx === index ? "rotate-180" : ""}`}
                >
                  {depth === 0 ? "▼" : "▶"}
                </span>
                {depth === 0 && (
                  <span
                    className={`absolute bottom-0 left-4 h-[2px] bg-blueShade transition-all duration-300 ${isActive ? "w-[calc(100%-32px)]" : "w-0"}`}
                  />
                )}
              </div>
            )}

            {/* Render sub-menu only if state matches this index */}
            <div
              className={`absolute z-50 transition-all duration-300 ease-out 
                ${showChildren ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 pointer-events-none"}
                ${depth === 0 ? "top-full left-0" : "left-full top-0 ml-0.5"}`}
            >
              <DesktopMenu
                items={activeIdx === index ? item.children : []}
                depth={depth + 1}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopMenu;
