"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Microscope, Beaker, Zap, ShieldAlert, FileSearch } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "../ContactModal/page";

const AboutUsDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="pt-5 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
       <div className="relative z-10 max-w-7xl mx-auto">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="mb-2"
  >
    {/* Refined Main Title */}
    <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold text-headerGray tracking-tighter leading-[0.85] mb-2">
      WELCOME TO <span className="text-secondary italic">GENEVEDA</span> <span className="text-blueShade italic">BIOSCIENCES.</span>
    </h1>

    {/* Hero Sub-heading with High-Impact Typography */}
    <p className="text-slate-500 max-w-5xl text-base md:text-md leading-relaxed tracking-normal">
      A multidisciplinary biotechnology powerhouse driving research excellence through 
      <span className="text-black font-bold"> BioScience R&D</span>, 
      <span className="text-black font-bold"> Bioinformatics</span>, and 
      <span className="text-black font-bold"> Wet Lab Services</span>. 
      From NGS discovery to global study abroad guidance, we bridge the gap between 
      academic ambition and industrial impact.
    </p>    
  </motion.div>
</div>

        <div className="flex justify-start w-full z-21">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="relative px-6 sm:px-12 py-3 rounded-full font-black uppercase tracking-[0.2em] text-white overflow-hidden transition-all duration-500 group cursor-pointer shadow-[0_10px_40px_-10px_rgba(65,100,165,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(75,175,79,0.4)] w-[70vw] sm:w-auto z-10"
            style={{ backgroundColor: "rgb(65, 100, 165)" }}
          >
            {/* Hover Fill: Secondary Green slides in from the left */}
            <span className="absolute inset-0 w-0 h-full bg-secondary transition-all duration-500 ease-out group-hover:w-full -z-10"></span>

            {/* Glass Shimmer: High-speed light streak on hover */}
            <span
              className="absolute inset-0 w-full h-full -z-10 transition-transform duration-1000 -translate-x-full group-hover:translate-x-full ease-in-out"
              style={{
                background:
                  "linear-gradient(110deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
            ></span>

            {/* Text & Icon */}
            <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center justify-center sm:justify-center gap-2 sm:gap-3 text-sm sm:text-base">
              Enquiry Now
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-2 transition-transform duration-300"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>

        {/* WHO WE ARE SECTION */}
        <div className="flex flex-col lg:flex-row gap-16 mt-2">
          {/* LEFT COLUMN: HEADER + IMAGE + BUTTON */}
          <div className="lg:w-1/3 space-y-12">
            <div className="lg:sticky lg:top-32 h-fit space-y-5">
              <div>
                <h2 className="text-2xl font-black text-headerGray tracking-tighter leading-[0.9] mb-6">
                  Who
                  <span className="text-secondary italic">We Are</span>
                </h2>
                
              </div>

              {/* IMAGE INTEGRATION */}
              <div className="relative w-full h-80 rounded-[2.5rem] group border border-slate-200 shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  className="relative w-full h-full"
                >
                  {/* Rotating accents */}
                  <div className="absolute -inset-6 z-10 border-2 border-dashed border-secondary/40 rounded-[5rem] animate-[spin_15s_linear_infinite]" />
                  <div className="absolute -inset-3 z-10 border border-black/10 rounded-[2.5rem] animate-[spin_25s_linear_infinite_reverse]" />

                  {/* Image */}
                  <div className="relative z-20 w-full h-full overflow-hidden rounded-[2rem] brightness-90 group-hover:brightness-110 shadow-2xl">
                    <Image
                      src="/images/fromClient/boyWithMicroscope.jpeg"
                      alt="Research Excellence"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

              <p className="text-slate-500 text-lg font-medium leading-relaxed">
                At Geneveda BioSciences, we bridge the gap between academic
                theory and industrial application.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE HOVER PANELS */}
          <div className="lg:w-2/3 space-y-4">
            {/* PANEL 1 */}
            <div className="group relative p-10 bg-gray-50/80 backdrop-blur-md rounded-[2rem] border border-transparent hover:border-black hover:bg-white transition-all duration-500 cursor-default">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="text-4xl font-black text-slate-200 group-hover:text-secondary transition-colors duration-500">
                  01
                </div>
                <div>
                  <h3 className="text-xl font-bold text-headerGray mb-2 group-hover:translate-x-2 transition-transform duration-500">
                    Mission-Critical Research
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-xl">
                    From laboratory research to computational analysis, we
                    transform{" "}
                    <span className="text-black font-bold">
                      science into real-world impact
                    </span>{" "}
                    through integrated solutions.
                  </p>
                </div>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-t-2 border-r-2 border-secondary"></div>
              </div>
            </div>

            {/* PANEL 2 */}
            <div className="group relative p-10 bg-gray-50/80 backdrop-blur-md rounded-[2rem] border border-transparent hover:border-black hover:bg-white transition-all duration-500 cursor-default">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="text-4xl font-black text-slate-200 group-hover:text-secondary transition-colors duration-500">
                  02
                </div>
                <div>
                  <h3 className="text-xl font-bold text-headerGray mb-2 group-hover:translate-x-2 transition-transform duration-500">
                    Professional Training
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-xl">
                    Our industry-focused training modules are designed to build{" "}
                    <span className="text-black font-bold">
                      job-ready skills
                    </span>{" "}
                    for the next generation of bioscience professionals.
                  </p>
                </div>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-t-2 border-r-2 border-secondary"></div>
              </div>
            </div>

            {/* PANEL 3 */}
            <div className="group relative p-10 bg-gray-50/80 backdrop-blur-md rounded-[2rem] border border-transparent hover:border-black hover:bg-white transition-all duration-500 cursor-default">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="text-4xl font-black text-slate-200 group-hover:text-secondary transition-colors duration-500">
                  03
                </div>
                <div>
                  <h3 className="text-xl font-bold text-headerGray mb-2 group-hover:translate-x-2 transition-transform duration-500">
                    Global Connectivity
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-xl">
                    We connect local talent with{" "}
                    <span className="text-secondary font-bold">
                      global education
                    </span>{" "}
                    and career opportunities, scaling research impact to an
                    international level.
                  </p>
                </div>
              </div>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-t-2 border-r-2 border-secondary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default AboutUsDetails;
