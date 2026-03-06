"use client";
import { useState, useEffect } from "react";
import "./style.css";
import DesktopMenu from "../DesktopMenu/page";
import MobileDrawer from "../MobileDrawer/page";
import { MENU } from "../../../menu.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navigators = () => {
  const [open, setOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scroll is more than 50px, change background
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-transparent text-tertiary w-full shadow-md mb-1px">
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-1" : "bg-white py-1"
        }`}
      >
        {/* Changed grid to flex and justify-between */}
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2">
          {/* Logo Section */}
          <Link href={"/"} className="flex-shrink-0 group">
            <div className="flex items-center">
              {/* --- LOGO IMAGE CONTAINER --- */}
              <div className="relative w-16 h-16 md:w-15 md:h-15 overflow-hidden transition-all duration-500 group cursor-pointer">
                <Image
                  src="/images/logo.png"
                  alt="GeneVeda Biosciences Logo"
                  fill
                  className="object-contain transition-transform duration-700"
                  priority
                />
              </div>

              {/* --- BRAND NAME (Optional, can be removed if you want icon-only) --- */}
              <div className="flex flex-col justify-center">
                <span className="text-2xl md:text-2xl font-semibold text-headerGray tracking-tighter leading-none">
                  GENEVEDA
                </span>
                <span className="text-2xl md:text-2xl font-semibold text-black tracking-tighter leading-none">
                  <span className="text-secondary">BIOSCIENCES</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Center/Right Menu Section */}
          <div className="hidden md:flex items-center flex-grow justify-center ml-10">
            <DesktopMenu items={MENU} />
          </div>

          {/* Mobile Toggle or Extra CTA */}
          <div className="flex justify-end items-center">
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl text-primary p-1"
              aria-label="Open menu"
            >
              ☰
            </button>
            {/* Optional: Add a small "Contact" button here to balance the logo */}
          </div>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[110]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[85vw] bg-white text-black z-[120] transform transition-transform duration-300 ease-in-out shadow-2xl ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b">
          <div className="flex flex-row items-center justify-center gap-4 p-3 ml-1">
            {/* LOGO */}
            <div className="relative w-14 h-14 md:w-18 md:h-18 shrink-0">
              <Image
                src="/images/logo.png"
                alt="GeneVeda Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* TEXT COLUMN */}
            <div className="flex flex-col justify-center">
  <span className="text-base sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-headerGray tracking-tighter leading-none">
    GENEVEDA
  </span>
  <span className="text-base sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tighter leading-none">
    <span className="text-secondary">BIOSCIENCES</span>
  </span>
</div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-xl p-5 hover:bg-gray-100 rounded-full font-bold"
          >
            ✕
          </button>
        </div>

        {/* Mobile Navigation Content */}
        <div className="p-6 overflow-y-auto h-[calc(100%-80px)] overscroll-contain">
          <MobileDrawer items={MENU} setDrawerOpen={setOpen} />
        </div>
      </div>
    </header>
  );
};

export default Navigators;
