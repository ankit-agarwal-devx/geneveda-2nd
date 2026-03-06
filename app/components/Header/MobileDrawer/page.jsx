"use client";

import Link from "next/link";
import { useState } from "react";

const MobileDrawerItem = ({ item, depth, setDrawerOpen }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  // Root level styles (depth 0) vs Nested level styles
  const isRoot = depth === 0;

  // Style for the container: Only root items get the border and rounded corners
const containerStyle = isRoot
    ? `border border-zinc-200 rounded-xl mb-3 bg-white overflow-hidden shadow-sm 
       transition-all duration-200 active:scale-[0.97] active:shadow-inner`
    : "w-full";

  return (
    <div className={containerStyle}>
      {hasChildren ? (
        <>
          <button
            onClick={() => setOpen(!open)}
            className={`w-full flex justify-between items-center px-5 py-4 transition-all duration-300 ${
              open ? "bg-white border-b border-zinc-100" : "hover:bg-zinc-50"
            }`}
          >
            {/* Text pinned to the left */}
            <span className="text-sm font-bold uppercase tracking-[0.15em] text-headerGray text-left">
              {item.label}
            </span>

            {/* Icon pinned to the right */}
            <span
              className={`text-[10px] text-secondary transition-transform duration-500 flex-shrink-0 ml-4 ${
                open ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`grid transition-all duration-700 ease-in-out ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {/* Line color using your Denim Blue */}
              <div className="ml-6 border-l-2 border-secondary pl-4 py-3 mb-2">
                <MobileDrawer items={item.children} depth={depth + 1} setDrawerOpen={setDrawerOpen} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Link
          href={item.href || "#"}
          onClick={() => setDrawerOpen && setDrawerOpen(false)}
          className={`
            block w-full px-4 py-4 transition-all duration-300 font-bold uppercase tracking-wider
            ${
              isRoot
                ? "text-sm text-black hover:bg-zinc-50"
                : "text-sm text-black hover:text-[#4164A5] hover:bg-[#4164A5]/5"
            }
          `}
        >
          {item.label}
        </Link>
      )}
    </div>
  );
};

const MobileDrawer = ({ items = [], depth = 0, setDrawerOpen  }) => {
  return (
    <div
      className={`flex flex-col ${depth === 0 ? "space-y-1" : "space-y-1"}`}
    >
      {items.map((item, index) => (
        <MobileDrawerItem key={index} item={item} depth={depth} setDrawerOpen={setDrawerOpen}  />
      ))}
    </div>
  );
};

export default MobileDrawer;
