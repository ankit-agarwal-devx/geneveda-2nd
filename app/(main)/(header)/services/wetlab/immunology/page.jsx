"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Activity, Target, Zap, 
  Microscope, Beaker, Dna, Syringe,
  Search, ArrowUpRight, CheckCircle2,
  Scan, Fingerprint, Thermometer
} from "lucide-react";

export default function ImmunologyLabPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const scaleUp = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1, ease: "easeOut" }
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      
      {/* --- 01. THE DEFENSE HERO --- */}
<section
      className="relative min-h-[95vh] flex items-center pt-20 pb-10 px-6 lg:px-20 overflow-hidden bg-white"
      style={{
        // LAYER 1: White Gradient Mask
        // LAYER 2: Professional Immunology Background
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,1) 35%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 100%),
          url("https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=2070&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRofGVufDB8fDB8fHwy")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Precision Molecular Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
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
            {/* Sector Badge */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-headerGray">
                Molecular Immunology Unit
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.85] text-headerGray mb-10">
              IMMUNE <br />
              <span className="text-secondary italic">RESPONSE.</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-medium">
              We analyze and optimize immune pathways using <span className="text-black font-bold">monoclonal antibody platforms</span>, 
              cytokine profiling, and precision assay systems—accelerating discovery 
              from bench to clinical application.
            </p>

            {/* Assay Indicators */}
            <div className="flex flex-wrap gap-4 mb-14">
              {[
                { label: "Monoclonal Platforms", icon: <ShieldCheck size={14}/> },
                { label: "Cytokine Profiling", icon: <Activity size={14}/> },
                { label: "Precision Assays", icon: <Microscope size={14}/> }
              ].map((pill, i) => (
                <span key={i} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/5 bg-white shadow-sm text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-secondary transition-colors cursor-default">
                  <span className="text-secondary">{pill.icon}</span>
                  {pill.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* TECHNICAL SIDEBAR (Biotech Format) */}
          {/* <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-4 lg:border-l border-black/5 lg:pl-12 hidden lg:block"
          >
            <div className="space-y-12">
              {[
                { val: "300+", label: "Validated Assays", desc: "Rigorous protocols for adaptive immune tracking." },
                { val: "99.2%", label: "Sequence Accuracy", desc: "High-fidelity mapping of monoclonal structures." },
                { val: "40+", label: "Global Partners", desc: "Tier-1 research and clinical institutions." }
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <p className="text-4xl font-black text-black group-hover:text-secondary transition-colors mb-1">{item.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-blueShade mb-2">{item.label}</p>
                  <p className="text-xs text-slate-900 leading-relaxed max-w-[200px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Kinetic Sequence Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
        {/* <span>Monitor Pathways</span> */}
        <div className="w-[2px] h-12 bg-slate-200 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-4 bg-secondary"
          />
        </div>
      </div>
    </section>



      {/* --- 02. CORE VERTICALS: THE BENTO SYSTEM --- */}
      <section className="py-10 px-6 lg:px-20 bg-zinc-50 rounded-[5rem] mx-4 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Antibody Engineering */}
            <motion.div {...fadeIn} className="md:col-span-8 bg-white rounded-[4rem] p-12 border border-black/5 group relative overflow-hidden shadow-lg">
               <div className="relative z-10">
                  <div className="p-5 bg-black text-secondary w-fit rounded-3xl mb-20 group-hover:rotate-12 transition-transform">
                     <Target size={40} />
                  </div>
                  <h3 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Monoclonal <br /> <span className="text-secondary">Engineering</span></h3>
                  <p className="text-black/50 max-w-sm font-medium mb-10 leading-relaxed">
                    Custom hybridoma development and recombinant antibody production for diagnostic and therapeutic applications.
                  </p>
                  <div className="flex gap-3">
                    {['IgG', 'IgM', 'scFv', 'Fab'].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-zinc-100 text-[10px] font-black uppercase tracking-widest rounded-full">{tag}</span>
                    ))}
                  </div>
               </div>
               <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-100 group-hover:opacity-50 transition-opacity duration-1000">
                  <Image src="https://images.unsplash.com/photo-1606619353143-8e11b4bdf76b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGltbXVub2xvZ3l8ZW58MHx8MHx8fDA%3D?q=80&w=800" fill className="object-cover" alt="Antibody Research" />
               </div>
            </motion.div>

            {/* Cytokine Profiling */}
            <motion.div {...fadeIn} className="md:col-span-4 bg-black rounded-[4rem] p-12 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
               <Image 
                src="https://images.unsplash.com/photo-1707944746585-187b2f09b05a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VsbCUyMGN1bHR1cmV8ZW58MHx8MHx8fDA%3D?q=80&w=800" 
                fill className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" 
                alt="Cell Culture"
               />
               <div className="relative z-10"><Activity size={48} className="text-secondary mb-8" /></div>
               <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase leading-none mb-4">Cytokine <br />Profiling</h3>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Multiplex ELISA & Luminex</p>
               </div>
            </motion.div>

            {/* Tech Capabilities */}
            {[
              { t: "Flow Cytometry", i: <Scan />, d: "16-color cellular immunophenotyping." },
              { t: "Assay Validation", i: <CheckCircle2 />, d: "GLP-compliant potency and binding assays." },
              { t: "ELISPOT", i: <Fingerprint />, d: "Quantifying antigen-specific T-cell responses." }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} className="md:col-span-4 bg-white border border-black/5 rounded-[3.5rem] p-10 hover:border-secondary transition-all group shadow-sm">
                <div className="text-black group-hover:text-secondary mb-8 transition-colors">{item.i}</div>
                <h4 className="font-black uppercase text-lg mb-2">{item.t}</h4>
                <p className="text-black/40 text-[10px] font-black uppercase tracking-widest">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 px-6 lg:px-20 bg-slate-50">

  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="max-w-2xl mb-10">
      <span className="text-[11px] font-black tracking-widest uppercase text-blueShade">
        Research Capabilities
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6">
        From Cellular Mapping to Clinical Translation
      </h2>

      <p className="text-slate-500 leading-relaxed">
        Our integrated wet-lab platform combines immunology, molecular biology,
        and bioinformatics to deliver reproducible insights across discovery,
        validation, and therapeutic development pipelines.
      </p>
    </div>

    {/* Capability Grid */}
    <div className="grid md:grid-cols-3 gap-10 mb-10">

      {[
        {
          title: "Monoclonal Antibody Engineering",
          desc:
            "Hybridoma development, humanization, affinity maturation, and recombinant expression optimized for therapeutic pipelines.",
        },
        {
          title: "Cytokine & Biomarker Profiling",
          desc:
            "High-throughput ELISA, multiplex bead assays, and inflammatory response quantification with clinical-grade precision.",
        },
        {
          title: "Immune Cell Phenotyping",
          desc:
            "Flow cytometry and single-cell analysis for T-cell, B-cell, and NK-cell characterization across disease models.",
        },
      ].map((c, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-2xl border border-black/5 hover:shadow-xl transition"
        >
          <div className="w-10 h-10 rounded-xl bg-secondary/15 mb-6" />
          <h3 className="font-bold text-lg mb-3">{c.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
        </div>
      ))}

    </div>

    {/* Workflow */}
    <div className="grid lg:grid-cols-4 gap-10">

      {[
        ["01", "Sample Processing", "Clinical specimens prepared under sterile green-room standards."],
        ["02", "Molecular Analysis", "Sequencing, assay execution, and immune pathway modeling."],
        ["03", "Data Interpretation", "Bioinformatic pipelines convert raw signals into actionable insight."],
        ["04", "Clinical Reporting", "Validated results delivered for regulatory and R&D integration."],
      ].map(([n, t, d]) => (
        <div key={n}>
          <p className="text-secondary font-black text-xl mb-2">{n}</p>
          <h4 className="font-bold mb-3">{t}</h4>
          <p className="text-sm text-slate-500 leading-relaxed">{d}</p>
        </div>
      ))}

    </div>

  </div>
</section>


      {/* --- 03. DIAGRAMMATIC WORKFLOW --- */}
      <section className="py-32 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 order-2 lg:order-1 w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
    
    {/* First Image */}
    <div className="relative h-[300px] sm:h-[400px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-xl">
      <Image 
        src="https://images.unsplash.com/photo-1707386821526-82da8d540019?q=80&w=600" 
        fill 
        className="object-cover" 
        alt="Pipetting" 
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>

    {/* Second Image: Added md:mt-12 so it only staggers on desktop */}
    <div className="relative h-[300px] sm:h-[400px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-xl md:mt-12">
      <Image 
        src="https://images.unsplash.com/photo-1707079917509-af3177041e14?q=80&w=600" 
        fill 
        className="object-cover" 
        alt="Centrifuge" 
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    
  </div>
</div>
          
          <motion.div {...fadeIn} className="flex-1 order-1 lg:order-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">The <br /><span className="text-secondary italic">Immunology</span> Pipeline.</h2>
            
            <div className="space-y-8 mt-12">
               {[
                 { t: "Antigen Design", d: "Bioinformatic-driven epitope selection for maximum immunogenicity." },
                 { t: "Cell Fusion & Cloning", d: "High-efficiency hybridoma generation using precision fusion protocols." },
                 { t: "Functional Screen", d: "Validation via Western Blot, ELISA, and Flow Cytometry." }
               ].map((step, i) => (
                 <div key={i} className="flex gap-6 border-l-2 border-black/5 pl-8 hover:border-secondary transition-colors group">
                    <div>
                       <h5 className="font-black uppercase text-sm mb-1 group-hover:text-secondary transition-colors">0{i+1}. {step.t}</h5>
                       <p className="text-black/50 text-sm leading-relaxed">{step.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 04. FACILITY SPECS --- */}
      <section className="py-24 px-6 border-y border-black/5 bg-zinc-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { v: "BSL-2+", l: "Safety Level" },
            { v: "10x GENOMICS", l: "Single Cell Analysis" },
            { v: "FACSAria III", l: "Cell Sorting" },
            { v: "Luminex 200", l: "Multiplexing" }
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ y: -10 }}>
              <h5 className="text-2xl font-black text-headerGray mb-2">{stat.v}</h5>
              <p className="text-[10px] font-black uppercase tracking-widest text-secondary">{stat.l}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
    </div>
  );
}