"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMicroscope, FaDna, FaFlask, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "Genomic Sequencing",
    desc: "Comprehensive analysis of DNA sequences to identify variants and mutations.",
    icon: <FaDna />,
    color: "#4BAF4F", // Your Secondary Green
  },
  {
    title: "Protein Analysis",
    desc: "Advanced characterization of protein structure, function, and interactions.",
    icon: <FaFlask />,
    color: "#3b82f6", // Biotech Blue
  },
  {
    title: "Bioinformatics",
    desc: "Computational tools to process and interpret massive biological datasets.",
    icon: <FaChartLine />,
    color: "#f59e0b", // Insight Gold
  },
  {
    title: "Wetlab Protocols",
    desc: "Hands-on training for CRISPR, PCR, and cell culture techniques.",
    icon: <FaMicroscope />,
    color: "#10b981", // Emerald
  },
];
import Image from "next/image";

const ShortModulesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Modules");

  const categories = [
    "All Modules",
    "Safety",
    "Instrumentation",
    "Wetlab SOPs",
    "Data Management",
  ];

  const modules = [
    {
      title: "Lab Safety & Ethics",
      src: "/images/labSafetyAndEthics.png",
      duration: "15 mins",
      category: "Safety",
      outcomes: ["Hazardous Waste Disposal", "Emergency Protocols"],
    },
    {
      title: "Sample Labeling",
      src: "/images/sample-labelling.png",
      duration: "5 mins",
      category: "Data Management",
      outcomes: ["LIMS Entry Standards", "Cryo-label Durability"],
    },
    {
      title: "Microscope Calibration",
      src: "/images/microscope-calibration.png",
      duration: "20 mins",
      category: "Instrumentation",
      outcomes: ["Optical Alignment", "Objective Maintenance"],
    },
    {
      title: "Pipetting Techniques",
      src: "/images/techniques.png",
      duration: "10 mins",
      category: "Wetlab SOPs",
      outcomes: ["Volume Calibration", "Cross-contamination Prevention"],
    },
  ];

  const filteredModules =
    activeCategory === "All Modules"
      ? modules
      : modules.filter((m) => m.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-headerGray pt-10 pb-20 selection:bg-secondary/20">
      {/* --- HEADER --- */}
      <section
        className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0,0,0,0.8) 0%,
            rgba(0,0,0,0.4) 50%,
            rgba(0,0,0,0.9) 100%
          ),
          url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop")
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* The Dot Grid from your original style, using Secondary Green */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4BAF4F 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Atmospheric Glows - Green only, no violet */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-secondary/10 blur-[120px] rounded-full" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-6 py-2 rounded-full bg-secondary/10 backdrop-blur-md text-secondary text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-secondary/20"
            >
              Professional Education
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter"
            >
              Short <span className="text-secondary italic">Modules</span>{" "}
              <br />
              Training
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-slate-300 text-base md:text-lg mb-10 leading-relaxed font-medium"
            >
              Master specific biotech protocols and computational tools through
              intensive, high-impact sessions designed for the modern
              researcher.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            ></motion.div>

            {/* Animated Scroll Hint */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-[-60px] flex flex-col items-center gap-2"
            >
              <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.3em]">
                Scroll
              </span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

       <header className="m-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="border-l-4 border-black pl-6"
            >
              <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter text-black">
                <span className="text-secondary">Modules</span>
              </h1>
              <p className="text-slate-500 max-w-xl leading-relaxed font-medium">
                Rapid-access micro-learning units designed for immediate
                application in professional laboratory environments.
              </p>
            </motion.div>
          </div>

          {/* --- CATEGORY CHIPS --- */}
          <motion.div className="flex flex-wrap gap-3 mt-12">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all border-2 ${
                  activeCategory === cat
                    ? "bg-headerGray text-white border-black shadow-lg shadow-black/10"
                    : "bg-white text-slate-500 border-slate-200 hover:border-secondary hover:text-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </header>

        {/* --- MODULE GRID --- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredModules.map((module) => (
              <motion.div
                key={module.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden transition-all duration-500 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/10"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={module.src}
                    alt={module.title}
                    fill
                    className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-700"
                  />

                  {/* Overlay for Outcomes on Hover */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/90 backdrop-blur-sm">
                    <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-4 underline underline-offset-4">
                      Learning Outcomes
                    </p>
                    <ul className="text-sm text-white/80 space-y-3">
                      {module.outcomes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-secondary/10 text-secondary text-[10px] font-black px-4 py-1.5 rounded-lg uppercase tracking-wider">
                      {module.category}
                    </span>
                    <span className="text-slate-400 text-xs font-bold font-mono">
                      {module.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-2 text-headerGray group-hover:text-secondary transition-colors leading-tight">
                    {module.title}
                  </h3>
                </div>

                {/* Secondary Accent Bar */}
                <div className="absolute bottom-0 left-0 h-2 w-0 bg-secondary group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-xl">
              <h2 className="text-headerGray text-xs font-black uppercase tracking-[0.3em] mb-4">
                Our Expertise
              </h2>
              <p className="text-3xl md:text-4xl font-black text-headerGray leading-tight">
                Specialized Training for <br />
                <span className="text-secondary">Modern Scientists</span>
              </p>
            </div>
            <p className="max-w-xs text-slate-500 text-sm leading-relaxed">
              We provide the tools and knowledge to bridge the gap between
              theoretical biology and laboratory execution.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 group"
              >
                {/* Multicolored Icon Container */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 text-2xl transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundColor: `${item.color}15`, // 15% opacity background
                    color: item.color,
                  }}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-black text-headerGray mb-4 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {item.desc}
                </p>

                {/* <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-black group-hover:text-secondary transition-colors"
                >
                  Explore Module
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortModulesPage;
