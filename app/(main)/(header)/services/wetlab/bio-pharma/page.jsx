"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Dna, Pill, Activity, ShieldCheck, 
  Microscope, FlaskConical, Zap, 
  Target, BarChart4, ArrowUpRight, 
  Cpu, Beaker, Layers, Thermometer
} from "lucide-react";

export default function BioPharmaPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      
      {/* --- 01. THE PHARMA HERO --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2000"
      fill
      priority
      className="object-cover"
      alt="Pharmaceutical Research"
    />

    <div className="absolute inset-0 bg-white/70" />
    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent" />
  </div>

  {/* Dot texture */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(0,0,0,.05) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />

  <div className="relative z-10 max-w-7xl mt-20 mx-auto px-6 lg:px-20">

    <motion.div {...fadeIn} className="max-w-2xl">

      <span className="inline-flex items-center gap-2 mb-3 text-[11px] font-black tracking-widest uppercase text-blueShade">
        <span className="w-2 h-2 rounded-full bg-blueShade" />
        Pharmaceutical Synthesis & Analytics
      </span>

      <h1 className="text-5xl md:text-7xl text-secondary font-black tracking-tight leading-tight mb-8">
        Drug <span className="text-blueShade">Development</span>
        <br />
        <span className="text-headerGray">Re-Engineered</span>
      </h1>

      <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-10">
        Accelerating the journey from molecule to market through integrated
        lead optimization, ADME profiling, and GMP-grade bioprocessing —
        all under one advanced research platform.
      </p>

      {/* Stats */}
      {/* <div className="flex gap-14 mt-14">

        {[
          ["250+", "Compounds"],
          ["99%", "Assay Accuracy"],
          ["35+", "Partners"],
        ].map(([n, l]) => (
          <div key={l}>
            <p className="text-2xl font-black text-secondary">{n}</p>
            <span className="text-sm text-slate-400">{l}</span>
          </div>
        ))}

      </div> */}

    </motion.div>

  </div>

</section>


      {/* --- 02. DISCOVERY VERTICALS (BENTO) --- */}
      <section className="py-10 px-6 lg:px-20 bg-zinc-50 rounded-[5rem] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Small Molecule Synthesis */}
            <motion.div {...fadeIn} className="md:col-span-8 bg-white rounded-[4rem] p-12 border border-black/5 group relative overflow-hidden shadow-lg">
               <div className="relative z-10">
                  <div className="p-5 bg-black text-secondary w-fit rounded-3xl mb-20 group-hover:scale-110 transition-transform">
                     <Pill size={40} />
                  </div>
                  <h3 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Medicinal <br /> <span className="text-secondary">Chemistry</span></h3>
                  <p className="text-black/50 max-w-sm font-medium mb-10 leading-relaxed">
                    High-throughput screening and synthesis of small molecule libraries with specialized focus on oncology and neuro-therapeutics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Lead Optimization', 'SAR Analysis', 'Chiral Synthesis', 'Scale-Up'].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-zinc-50 border border-black/5 text-[10px] font-black uppercase tracking-widest rounded-full">{tag}</span>
                    ))}
                  </div>
               </div>
               <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-100 brightness-90 group-hover:brightness-110 group-hover:opacity-10 transition-all duration-1000">
                  <Image src="https://images.unsplash.com/photo-1748278739348-d9886621530f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1lZGljaW5hbCUyMENoZW1pc3RyeXxlbnwwfHwwfHx8MA%3D%3D?q=80&w=800" fill className="object-cover" alt="Chemistry Lab" />
               </div>
            </motion.div>

            {/* ADME / Toxicology */}
            <motion.div {...fadeIn} className="md:col-span-4 bg-secondary rounded-[4rem] p-12 text-white flex flex-col justify-between group overflow-hidden relative shadow-xl">
               <div className="relative z-10"><Activity size={48} className="mb-8" /></div>
               <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase leading-[0.85] mb-4">ADME-Tox <br />Profiling</h3>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-widest">Metabolic Stability & Safety</p>
               </div>
               <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                  <BarChart4 size={200} />
               </div>
            </motion.div>

            {/* Tech Capabilities */}
            {[
              { t: "Bio-Informatics", i: <Cpu />, d: "AI-driven drug-target interaction modeling." },
              { t: "Stability Testing", i: <Thermometer />, d: "ICH-compliant storage and degradation studies." },
              { t: "GMP Formulation", i: <Layers />, d: "Phase I clinical trial material preparation." }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} className="md:col-span-4 bg-white border border-black/5 rounded-[3.5rem] p-10 hover:border-secondary transition-all group shadow-sm">
                <div className="text-black group-hover:text-secondary mb-8 transition-colors">{item.i}</div>
                <h4 className="font-black uppercase text-lg mb-2">{item.t}</h4>
                <p className="text-black/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 px-6 lg:px-20 bg-slate-50">

  <div className="max-w-7xl mx-auto">

    {/* Section intro */}
    <div className="max-w-2xl mb-20">
      <span className="text-[11px] font-black tracking-widest uppercase text-blueShade">
        Integrated Drug Platform
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6">
        From <span className="text-secondary"> Target Identification </span> to Clinical <span className="text-secondary">Readiness</span>
      </h2>

      <p className="text-slate-500 leading-relaxed">
        GeneVeda’s pharmaceutical infrastructure combines computational chemistry,
        wet-lab validation, and GMP bioprocessing to streamline the entire drug
        development lifecycle — enabling faster transitions from discovery to
        clinical manufacturing.
      </p>
    </div>

    {/* Capabilities */}
    <div className="grid md:grid-cols-3 gap-10 mb-10">

      {[
        {
          title: "Lead Discovery & Optimization",
          desc:
            "Structure-based screening, SAR modeling, and compound refinement using AI-assisted docking and medicinal chemistry workflows.",
        },
        {
          title: "ADME & Toxicology Profiling",
          desc:
            "In vitro and in vivo pharmacokinetics, metabolic stability, permeability assays, and early toxicity prediction.",
        },
        {
          title: "Bioprocess Development",
          desc:
            "Upstream cell line engineering, downstream purification, formulation science, and GMP-scale production readiness.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-2xl border border-black/5 hover:shadow-xl transition"
        >
          <div className="w-10 h-10 rounded-xl bg-secondary/15 mb-6" />
          <h3 className="font-bold text-lg mb-3">{item.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

    {/* Pipeline */}
    <div className="border-t border-black/10 pt-10">

      <h3 className="text-2xl font-black mb-12">
        End-to-End Development Pipeline
      </h3>

      <div className="grid lg:grid-cols-4 gap-12">

        {[
          ["01", "Target Discovery",
            "Disease pathway mapping, biomarker identification, and molecular target validation."],

          ["02", "Lead Engineering",
            "Compound synthesis, affinity optimization, and structure–activity modeling."],

          ["03", "Preclinical Testing",
            "PK/PD studies, toxicity screening, and formulation development."],

          ["04", "Clinical Manufacturing",
            "GMP production, quality analytics, regulatory documentation, and tech transfer."],
        ].map(([n, t, d]) => (
          <div key={n}>
            <p className="text-secondary font-black text-xl mb-2">{n}</p>
            <h4 className="font-bold mb-3">{t}</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              {d}
            </p>
          </div>
        ))}

      </div>

    </div>

  </div>
</section>


      {/* --- 03. DRUG DEVELOPMENT WORKFLOW --- */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 w-full">
   <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl group">
      <Image 
        src="https://images.unsplash.com/photo-1727968377196-7ff608cfc7d0?q=80&w=800" 
        fill 
        className="object-cover transition-transform duration-1000 group-hover:scale-105" 
        alt="Drug Development" 
        sizes="(max-width: 768px) 100vw, 50vw"
        priority // Add this if it's high up on the page
      />
      <div className="absolute inset-0 bg-secondary/5" />
   </div>
</div>
          
          <motion.div {...fadeIn} className="flex-1">
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.8]">The <br /><span className="text-secondary italic">Pharma</span> Lifecycle.</h2>
            
            

            <div className="space-y-10 mt-12">
               {[
                 { t: "Target Identification", d: "Using transcriptomics and proteomics to define therapeutic biological markers." },
                 { t: "Lead Generation", d: "Validation of high-affinity binding molecules through SPR and ITC analysis." },
                 { t: "Pre-Clinical Validation", d: "In-vitro efficacy testing in complex human primary cell models." }
               ].map((step, i) => (
                 <div key={i} className="flex gap-6 border-l-4 border-zinc-100 pl-8 hover:border-secondary transition-all group">
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

      {/* --- 04. ANALYTICAL SUITE --- */}
      <section className="py-24 border-y border-black/5 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
           <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">Technical <span className="text-secondary italic">Standard.</span></h2>
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">State-of-the-Art Analytical Hardware</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-20">
          {[
            { l: "NMR Spectroscopy", v: "600 MHz Bruker" },
            { l: "Mass Spectrometry", v: "Sciex Quad 6500+" },
            { l: "X-Ray Crystallography", v: "Rigaku Oxford" },
            { l: "Dissolution Testing", v: "Agilent 708-DS" }
          ].map((item, i) => (
            <div key={i} className="p-8 border border-black/5 rounded-[3rem] text-center hover:bg-zinc-50 transition-colors">
              <p className="text-secondary font-black text-2xl mb-2">{item.v}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40">{item.l}</p>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}