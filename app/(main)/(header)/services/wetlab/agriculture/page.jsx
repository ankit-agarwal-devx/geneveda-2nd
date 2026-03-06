"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sprout,
  Shovel,
  TestTube2,
  Microscope,
  Dna,
  CloudSun,
  Droplet,
  Zap,
  Leaf,
  Thermometer,
  ArrowUpRight,
  Search,
  Box,
  ClipboardCheck,
  FlaskConical,
  Gavel, MoveRight, Wheat, BarChart3, Binary
} from "lucide-react";

export default function AgricultureLabPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      {/* --- 01. THE CULTIVATION HERO --- */}
      <section
      className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 lg:px-20 overflow-hidden bg-white"
      style={{
        // LAYER 1: The Gradient Mask (White to Transparent)
        // LAYER 2: The Agricultural Biotech Image
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,1) 35%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%),
          url("https://images.unsplash.com/photo-1554972741-a0b13a858471?q=80&w=2000")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Precision Agronomy Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #4BAF4F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT AREA */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            {/* Top Label */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-headerGray">
                Agricultural Bio-Engineering
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.85] text-headerGray mb-10">
              CROP <br />
              <span className="text-secondary italic">LOGIC.</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-medium">
              Optimizing the blueprint of nature. We combine <span className="text-black font-bold">genomic engineering</span>, 
              controlled cultivation, and data-driven agronomy to build resilient crops 
              and sustainable food systems.
            </p>

            {/* Feature Pills (Modern Outlined Style) */}
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                { label: "Genomic Editing", icon: <Binary size={14}/> },
                { label: "Soilless Cultivation", icon: <Sprout size={14}/> },
                { label: "Climate Resilience", icon: <Wheat size={14}/> },
                { label: "Yield Optimization", icon: <BarChart3 size={14}/> }
              ].map((pill, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-slate-600">
                  <span className="text-secondary">{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* TECHNICAL SIDEBAR (Biotech Format) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-4 lg:border-l border-black/5 lg:pl-12 hidden lg:block"
          >
            <div className="space-y-12">
              {[
                { title: "Resilience", desc: "40% increase in drought tolerance across wheat strains.", icon: <Wheat size={20}/> },
                { title: "Genomic Data", desc: "Mapping 1,200+ plant genomes for optimized growth.", icon: <Binary size={20}/> },
                { title: "Yield Factor", desc: "2.5x growth efficiency in controlled-environment labs.", icon: <BarChart3 size={20}/> }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="text-secondary mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-headerGray font-black text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Sequence Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
        <span>Monitor Sequence</span>
        <div className="w-[2px] h-12 bg-slate-200 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-4 bg-secondary"
          />
        </div>
      </div>
    </section>

{/* <section className="py-10 border-b">
  <div className="max-w-7xl mx-auto px-6 lg:px-20 grid md:grid-cols-4 gap-10 text-center">

    {[
      ["120+", "Active Farms"],
      ["38%", "Yield Increase"],
      ["15M+", "Plants Optimized"],
      ["12", "Research Labs"],
    ].map(([num, label]) => (
      <div key={label}>
        <h3 className="text-4xl font-bold text-secondary mb-2">{num}</h3>
        <p className="text-slate-500 text-sm">{label}</p>
      </div>
    ))}

  </div>
</section> */}

<section className="py-10 px-6 lg:px-20 bg-slate-50">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold mb-10 max-w-xl">
      Solving agriculture’s hardest challenges.
    </h2>

    <div className="grid md:grid-cols-3 gap-12">

      {[
        ["Climate volatility", "Adaptive crop genomes designed for unpredictable weather patterns."],
        ["Soil degradation", "Hydroponic and aeroponic cultivation systems."],
        ["Food security", "High-yield, low-resource plant engineering."],
      ].map(([title, desc]) => (
        <div key={title}>
          <h3 className="font-semibold mb-3">{title}</h3>
          <p className="text-slate-500">{desc}</p>
        </div>
      ))}

    </div>
  </div>
</section>

<section className="py-10 px-6 lg:px-20">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

    <div>
      <h2 className="text-4xl font-bold mb-8">From genome to harvest.</h2>
      <p className="text-slate-500 mb-10">
        Our platform connects plant genetics, controlled environments,
        and AI-driven growth optimization into one unified pipeline.
      </p>

      <ol className="space-y-6">
        <li><strong>01.</strong> Genomic modeling & seed editing</li>
        <li><strong>02.</strong> Controlled growth environments</li>
        <li><strong>03.</strong> Continuous yield optimization</li>
      </ol>
    </div>

    <div className="rounded-3xl overflow-hidden shadow-xl border">
      <Image
        src="https://images.unsplash.com/photo-1581092334531-0f0b7c0e2b1b?q=80&w=1400"
        fill
        className="object-cover"
        alt=""
      />
    </div>

  </div>
</section>



      {/* --- 02. CORE RESEARCH BENTO --- */}
      <section className="py-32 px-6 lg:px-20 bg-zinc-50 rounded-[5rem] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Genomic Editing */}
            <motion.div
              {...fadeIn}
              className="md:col-span-7 bg-white rounded-[4rem] p-5 border border-black/5 group relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="p-5 bg-secondary/10 w-fit rounded-3xl text-secondary mb-5 group-hover:bg-secondary group-hover:text-white transition-all">
                  <Dna size={40} />
                </div>
                <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                  Genomic <br />
                  Fortification
                </h3>
                <p className="text-black/40 max-w-sm font-medium mb-10 leading-relaxed">
                  CRISPR-based interventions to enhance drought resistance,
                  nutritional density, and pest immunity in staple crops.
                </p>
                <div className="flex gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 border border-black/10 rounded-full">
                    Yield Optimization
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 border border-black/10 rounded-full italic text-secondary">
                    Non-GMO Protocols
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Soil Microbiome */}
            {/* Soil Microbiome with Unsplash Image Background */}
            <motion.div
              {...fadeIn}
              className="md:col-span-5 rounded-[4rem] p-12 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl min-h-[500px]"
            >
              {/* Background Image */}
              <Image
                src="https://images.unsplash.com/photo-1591216720574-ade558cb83ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNyb3BzfGVufDB8fDB8fHww?q=80&w=1200"
                fill
                className="object-cover brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-1000 z-0"
                alt="Soil Microbiome Root Analysis"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10" />

              {/* Content (Z-index 20 to stay above image/overlay) */}
              <div className="relative z-20">
                <div className="p-4 bg-white/10 backdrop-blur-md w-fit rounded-3xl text-secondary mb-20">
                  <Sprout size={48} />
                </div>
              </div>

              <div className="relative z-20">
                <h3 className="text-3xl font-black uppercase leading-none mb-4">
                  Soil <br /> <span className="text-secondary">Microbiome</span>
                </h3>
                <p className="text-white/80 text-xs font-bold uppercase tracking-widest leading-relaxed max-w-[280px]">
                  Metagenomic sequencing of rhizosphere health and nutrient
                  exchange.
                </p>
              </div>

              {/* Floating Leaf Icon */}
              <div className="absolute -right-10 -bottom-10 opacity-20 rotate-12 group-hover:rotate-0 transition-transform duration-700 z-20 pointer-events-none">
                <Leaf size={250} className="text-secondary" />
              </div>
            </motion.div>

            {/* Tech Row */}
            {[
              {
                t: "Hydroponic Logic",
                i: <Droplet />,
                d: "Precision nutrient film technique (NFT) trials.",
              },
              {
                t: "Climate Simulation",
                i: <CloudSun />,
                d: "Abiotic stress testing in controlled growth chambers.",
              },
              {
                t: "Phyto-Chemicals",
                i: <FlaskConical />,
                d: "Extraction and analysis of secondary metabolites.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                className="md:col-span-4 bg-white border border-black/5 rounded-[3.5rem] p-10 hover:border-secondary transition-all group"
              >
                <div className="text-black group-hover:text-secondary mb-8 transition-colors">
                  {item.i}
                </div>
                <h4 className="font-black uppercase text-lg mb-2">{item.t}</h4>
                <p className="text-black/40 text-[10px] font-black uppercase tracking-widest">
                  {item.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 03. PROCESS PIPELINE --- */}
      <section className="py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="order-2 lg:order-1 w-full lg:w-auto">
  <div className="relative aspect-[4/5] lg:h-[600px] rounded-[4rem] overflow-hidden shadow-2xl">
    <Image
      src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800"
      fill
      className="object-cover"
      alt="Seed Analysis"
    />
  </div>
</div>

          <motion.div {...fadeIn} className="flex-1 order-1 lg:order-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">
              The <span className="text-secondary italic">Seed-to-Scale</span>{" "}
              <br />
              Pipeline.
            </h2>
            <div className="space-y-10">
              {[
                {
                  t: "Varietal Selection",
                  d: "High-throughput screening of genetic candidates for specific trait expressions.",
                },
                {
                  t: "Wet-Lab Validation",
                  d: "Bio-chemical analysis of tissue samples and nutrient uptake efficiency.",
                },
                {
                  t: "Pilot Cultivation",
                  d: "Testing in our IoT-enabled 2,000 sq.ft. research greenhouse.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-2xl font-black text-black/10 group-hover:text-secondary transition-colors italic">
                    0{i + 1}
                  </div>
                  <div>
                    <h5 className="font-black uppercase text-sm mb-1">
                      {step.t}
                    </h5>
                    <p className="text-black/50 text-sm leading-relaxed">
                      {step.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 04. ANALYTICAL INVENTORY --- */}
      <section className="py-24 px-6 border-y border-black/5 bg-zinc-50">
       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { v: "CHNS/O", l: "Elemental Analyzers" },
            { v: "Photosynq", l: "Fluorescence Metrics" },
            { v: "NIR", l: "Grain Quality Scan" },
            { v: "LAI-2200C", l: "Canopy Analyzers" },
          ].map((stat, i) => (
            <div key={i}>
              <h5 className="text-4xl font-black text-secondary mb-2">
                {stat.v}
              </h5>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40">
                {stat.l}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
