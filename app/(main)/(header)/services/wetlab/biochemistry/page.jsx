"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  Target,
  Search,
  BarChart3,
  Microscope,
  ShieldCheck,
  MoveRight, Fingerprint, Activity, Beaker, Hexagon, FlaskConical, Microchip, Layers
} from "lucide-react";
import Link from "next/link";

const BiochemistryPage = () => {
  const techniques = [
    {
      title: "Enzyme Kinetics",
      desc: "Analysis of reaction rates and inhibition constants.",
      icon: <Zap />,
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      title: "Protein Purification",
      desc: "High-resolution isolation using HPLC and FPLC.",
      icon: <Target />,
      color: "text-blueShade",
      bg: "bg-blueShade/10",
    },
    {
      title: "Mass Spectrometry",
      desc: "Molecular weight determination and structural analysis.",
      icon: <Search />,
      color: "text-secondary",
      bg: "bg-secondary/10",
    },
    {
      title: "SDS-PAGE & Western Blot",
      desc: "Protein separation and specific antibody detection.",
      icon: <BarChart3 />,
      color: "text-blueShade",
      bg: "bg-blueShade/10",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-headerGray pt-15">
      {/* --- HERO SECTION --- */}
      <section
      className="relative min-h-[85vh] flex items-center pt-20 pb-20 px-6 lg:px-20 overflow-hidden bg-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,1) 35%, rgba(255,255,255,0.6) 100%), url("/images/biochemistry.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Precision Structural Grid - Using secondary green dots */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, #4BAF4F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Atmospheric Secondary Glow */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-secondary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          
          {/* Main Content Area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            {/* Top Badge */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-headerGray">
                Molecular Metabolism & Kinetics
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.85] text-headerGray mb-10">
              MOLECULAR <br />
              <span className="text-secondary italic">CATALYSIS.</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-medium">
              Mapping the chemistry of life. We leverage <span className="text-black">enzymatic kinetics</span> and 
              metabolic flux analysis to accelerate the transition from 
              fundamental research to clinical application.
            </p>
          </motion.div>

          {/* Right Side: Sidebar Features (The "Biotech Format" Sidebar) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-4 lg:border-l border-black/5 lg:pl-12 pb-4"
          >
            <div className="space-y-10">
              {[
                { icon: <Hexagon size={20} />, title: "Protein Folding", desc: "Atomic resolution simulations for complex proteins." },
                { icon: <Zap size={20} />, title: "Enzyme Kinetics", desc: "Real-time flux analysis using Michaelis-Menten protocols." },
                { icon: <Beaker size={20} />, title: "HPLC Systems", desc: "High-precision purification and yield verification." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="text-secondary mt-1 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h4 className="text-headerGray font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Stats Row */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-black/5">
          {[
            ["1.5M", "Compound Library"],
            ["99.5%", "Yield Efficiency"],
            ["GLP", "Certified Systems"],
            ["ISO-9", "Quality Standards"]
          ].map(([val, label]) => (
            <div key={label} className="group cursor-default">
              <div className="text-3xl font-black text-black group-hover:text-secondary transition-colors duration-300">
                {val}
              </div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold mt-1">
                {label}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Subtle Bottom Fade to pure white */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
    </section>

      {/* --- BIOCHEMICAL TECHNIQUES GRID --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-headerGray mb-4">
              Core Methodologies
            </h2>
            <div className="h-1.5 w-16 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techniques.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] transition-all group"
              >
                {/* Colorful Icons */}
                <div
                  className={`w-16 h-16 mb-8 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-md`}
                >
                  {React.cloneElement(item.icon, { size: 28, strokeWidth: 2 })}
                </div>

                <h3 className="text-xl font-black mb-4 text-headerGray group-hover:text-blueShade transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-3 px-6 bg-slate-50">
  <div className="container mx-auto max-w-6xl">

    {/* Header */}
    <div className="text-center mb-20">
      <span className="text-secondary text-xs font-bold tracking-widest uppercase">
        Applied Biochemistry
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
        Understanding Molecular Function Through Precision Chemistry
      </h2>

      <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
        GeneVeda Biosciences applies advanced biochemical methodologies to study the
        chemical mechanisms that govern living systems. Our laboratory specializes
        in protein dynamics, biomolecular interactions, and high-resolution
        chromatography to generate actionable insight at the molecular level.
      </p>
    </div>

    {/* Core Services */}
    <div className="grid md:grid-cols-3 gap-10">

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h3 className="font-bold text-lg mb-4">
          Protein Structure & Dynamics
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          We characterize protein folding, stability, and conformational changes
          using kinetic assays and binding studies. These analyses reveal how
          proteins respond to environmental conditions, ligands, and mutations —
          critical for therapeutic development and enzyme engineering.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h3 className="font-bold text-lg mb-4">
          Biomolecular Interaction Analysis
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Our platforms quantify protein–protein and protein–small molecule
          interactions to assess affinity, specificity, and reaction kinetics.
          This enables rational design of drug candidates and functional biomolecules.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h3 className="font-bold text-lg mb-4">
          High-Precision Chromatography
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Using HPLC and advanced separation techniques, we purify and analyze
          complex biological mixtures with high sensitivity. Our chromatography
          workflows support quality control, compound isolation, and molecular
          characterization across diverse sample types.
        </p>
      </div>

    </div>

    {/* Deep Content */}
    <div className="mt-20 grid md:grid-cols-2 gap-14 items-start">

      <div>
        <h3 className="text-2xl font-extrabold mb-6">
          Translating Biochemical Reactions into Biological Insight
        </h3>

        <p className="text-slate-500 leading-relaxed mb-6">
          At the core of every biological system lies a network of chemical
          reactions. Our applied biochemistry platform investigates these reactions
          in controlled laboratory environments, enabling precise measurement of
          enzymatic activity, substrate conversion, and molecular stability.
        </p>

        <p className="text-slate-500 leading-relaxed mb-6">
          By integrating protein analytics with chromatographic separation, we
          provide end-to-end biochemical characterization — from raw samples to
          purified compounds and quantitative performance metrics.
        </p>

        <ul className="space-y-3 text-sm text-slate-600">
          <li>• Enzyme kinetics and activity profiling</li>
          <li>• Protein purification and characterization</li>
          <li>• Small-molecule separation and analysis</li>
          <li>• Stability and degradation studies</li>
          <li>• Custom biochemical assay development</li>
        </ul>
      </div>

      <div className="bg-white p-10 rounded-3xl border shadow-sm">
        <h4 className="font-bold mb-4">
          Engineered for Discovery and Development
        </h4>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          Our applied biochemistry workflows are designed to support both early
          research and downstream product development. We emphasize reproducibility,
          analytical rigor, and scalable protocols to ensure consistent outcomes
          across experimental stages.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          From characterizing lead compounds to validating protein therapeutics,
          GeneVeda provides the biochemical foundation required for confident
          decision-making.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed">
          By combining molecular expertise with modern analytical infrastructure,
          we help transform biochemical data into validated biological progress.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* --- DIAGRAM SECTION --- */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-slate-50 p-4 md:p-8 rounded-[4rem] border border-slate-100 text-center relative overflow-hidden">
          {/* Subtle Bluish Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#4164a5 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <h2 className="text-3xl font-black mb-12 text-headerGray relative z-10">
            Enzyme-Substrate{" "}
            <span className="text-secondary italic">Interaction</span> Model
          </h2>

          <div className="max-w-4xl mx-auto p-1 rounded-[3rem] bg-white border border-slate-200 shadow-xl relative z-10 group">
            <div className="relative h-[380px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden bg-slate-50">
              <Image
                src="/images/virus.png"
                alt="Molecular Model"
                fill
                className="object-cover p-1 transition-transform duration-700"
              />
            </div>

            {/* Floating Info Badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 shadow-2xl">
              <ShieldCheck className="text-secondary w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                Molecular Stability Verified
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiochemistryPage;
