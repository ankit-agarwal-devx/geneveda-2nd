"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Mail,
  Newspaper,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    // Updated background to Zinc-900 (Deep Greyish Dark)
    <footer className="text-white w-full overflow-hidden">
      <div className="w-full leading-none">
        <svg
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          className="block w-full h-14 md:h-20 text-zinc-900"
          aria-hidden="true"
        >
          <path
            d="M0,96 C120,20 300,20 420,96 C540,150 720,150 840,96 C960,42 1140,42 1260,96 C1335,130 1395,122 1440,102 L1440,160 L0,160 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="bg-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        viewport={{ once: true }}
        className="mx-auto w-full max-w-screen-xl px-6 py-4 lg:py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-5">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <Link href={"/"} className="flex-shrink-0 group">
              <div className="flex items-center">
                <div className="relative w-18 h-18 md:w-20 md:h-20 bg-white rounded-full overflow-hidden shadow-lg border border-slate-100 transition-all duration-500 group cursor-pointer">
                  <Image
                    src="/images/logo.png"
                    alt="GeneVeda Biosciences Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                </div>

                {/* --- BRAND NAME (Optional, can be removed if you want icon-only) --- */}
                <div className="flex flex-col justify-center">
                  <span className="text-3xl md:text-2xl font-semibold text-white tracking-tighter leading-none">
                    GENEVEDA
                  </span>
                  <span className="text-3xl md:text-2xl font-semibold text-black tracking-tighter leading-none">
                    <span className="text-secondary">BIOSCIENCES</span>
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px] font-medium">
              Advancing genomic research through specialized{" "}
              <span className="text-orange-400 opacity-80">
                computational training
              </span>{" "}
              and sequencing excellence.
            </p>

            <div className="space-y-3 pt-2">
    <div className="flex items-start gap-3 text-zinc-400">
      <MapPin size={18} className="text-orange-400 mt-0.5 flex-shrink-0" />
      <span className="text-sm font-medium">New Hyde Park, NY 11040</span>
    </div>
    <div className="flex items-center gap-3 text-zinc-400">
      <Phone size={18} className="text-orange-400 flex-shrink-0" />
      <a href="tel:+919008880022" className="text-sm font-medium hover:text-white transition-colors">
        (+91) 900-888-0022
      </a>
    </div>
    <div className="flex items-center gap-3 text-zinc-400">
      <Mail size={18} className="text-orange-400 flex-shrink-0" />
      <a href="mailto:support@geneveda.com" className="text-sm font-medium hover:text-white transition-colors lowercase">
        support@geneveda.com
      </a>
    </div>
  </div>

            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-2xl bg-zinc-800 text-zinc-400 hover:bg-orange-400 hover:text-black transition-all duration-500 border border-zinc-700"
                >
                  <Icon size={20} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Resources & Blog */}
          <div>
            <h2 className="mb-7 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">
              Knowledge Hub
            </h2>
            <ul className="space-y-4">
              <li>
                <a
                  href="/blogs"
                  className="group flex items-center gap-2 text-zinc-300 hover:text-orange-400 text-sm font-semibold transition-colors"
                >
                  <Newspaper
                    size={16}
                    className="text-zinc-500 group-hover:text-orange-400"
                  />
                  <span>Latest Blog Posts</span>
                  <span className="bg-orange-400/20 text-orange-400 text-[8px] px-1.5 py-0.5 rounded-md">
                    NEW
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h2 className="mb-7 text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">
              Company
            </h2>
            <ul className="text-zinc-400 space-y-4 text-sm font-medium">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Gallery/Events", href: "/gallery-events" },
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-and-conditions" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href || "/"}
                    className="hover:text-white transition-colors"
                  >
                    {item?.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter (Dark Glass Style) */}
          <div className="p-6 rounded-3xl bg-zinc-800/50 border border-zinc-700">
            <h2 className="mb-4 text-sm font-bold text-white tracking-tight">
              Join our Newsletter
            </h2>
            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:ring-2 focus:ring-orange-400/20 focus:border-orange-400 transition-all"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-orange-400 text-black rounded-lg hover:scale-105 transition-all">
                <ArrowRight size={16} strokeWidth={3} />
              </button>
            </div>
            <p className="text-[10px] text-zinc-500 leading-tight">
              Get the latest updates in Bioinformatics and Genomics.
            </p>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-4 border-t border-zinc-800 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-[11px] font-bold text-white uppercase tracking-widest">
            Copyright ©2026
            <span className="text-orange-400"> GeneVeda Biosciences</span>. 
            <span className="block sm:inline"> All rights reserved.</span>
          </p>
          <p className="text-[11px] font-bold text-white uppercase tracking-widest">
            Designed and developed by{" "}
            <a
              href="https://www.bharatai.store/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 transition-colors duration-200 underline underline-offset-4 decoration-zinc-700"
            >
              Bharat AI Software
            </a>
          </p>
        </div>
      </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
