"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Zap, Activity, Microscope, Beaker, 
  Dna, Thermometer, ShieldCheck, 
  Layers, ChevronRight, ArrowUpRight,
  Maximize2, Database, FlaskConical, Target,
  Atom,
  Leaf,
} from "lucide-react";

export default function CellCulturePage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      
      {/* --- 01. THE VITALITY HERO --- */}
      <section
  className="relative pt-25 pb-36 px-6 lg:px-20 overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(
  to bottom right,
  rgba(10,25,40,.35),
  rgba(0,0,0,.35)
),
      url("https://images.unsplash.com/photo-1486825586573-7131f7991bdd?q=80&w=2000")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* dotted biotech overlay */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(75,175,79,.35) 0.8px, transparent 0.8px)",
      backgroundSize: "28px 28px",
    }}
  />

  <div className="relative max-w-7xl mx-auto">

    <motion.div {...fadeIn} className="max-w-3xl">

      {/* top label */}
      <div className="flex items-center gap-3 mb-10">
        <div className="h-[2px] w-14 bg-white" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
          Mammalian & Plant Tissue Culture
        </span>
      </div>

      <h1 className="text-6xl md:text-[7rem] font-black tracking-tight leading-[0.8] text-white mb-10">
        CELL <br />
        <span className="text-secondary italic">DYNAMICS.</span>
      </h1>

      <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl mb-14">
        Engineering life at cellular scale. Our BSL-2 environments power stem cell
        expansion, tissue engineering, and next-generation 3D bioprinting —
        accelerating regenerative medicine from bench to bedside.
      </p>

      {/* stats row */}
      {/* <div className="grid grid-cols-3 gap-10 mb-16">
        {[
          ["120+", "Validated Cell Lines"],
          ["BSL-2", "Certified Labs"],
          ["3D", "Bioprinting Systems"],
        ].map(([num, label]) => (
          <div key={label}>
            <div className="text-4xl font-black text-secondary">{num}</div>
            <div className="text-xs uppercase tracking-widest text-white/60 mt-2">
              {label}
            </div>
          </div>
        ))}
      </div> */}

    </motion.div>
  </div>

  {/* bottom fade */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
</section>



      {/* --- 02. BIOLOGICAL VERTICALS (BENTO GRID) --- */}
      <section className="py-10 px-6 lg:px-20 bg-zinc-50 rounded-[5rem] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Stem Cell Expansion */}
            <motion.div {...fadeIn} className="md:col-span-8 bg-white rounded-[4rem] p-12 border border-black/5 group relative overflow-hidden shadow-lg">
               <div className="relative z-10">
                  <div className="p-5 bg-secondary text-white w-fit rounded-3xl mb-20 group-hover:bg-black transition-colors">
                     <Layers size={40} />
                  </div>
                  <h3 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none text-headerGray">Stem Cell <br /> <span className="text-secondary">Engineering</span></h3>
                  <p className="text-black/50 max-w-sm font-medium mb-10 leading-relaxed">
                    Directed differentiation and expansion of iPSCs and MSCs under strictly defined, serum-free conditions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {['iPSC', 'Pluripotency', 'Differentiation', 'MSC Expansion'].map((tag) => (
                      <span key={tag} className="px-5 py-2 bg-zinc-50 border border-black/5 text-[10px] font-black uppercase tracking-widest rounded-full">{tag}</span>
                    ))}
                  </div>
               </div>
               <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-70 group-hover:opacity-100 transition-opacity duration-1000">
                  <Image src="https://images.unsplash.com/photo-1766713203219-8ca06e1f4db9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2VsbCUyMG1pY3Jvc2NvcHl8ZW58MHx8MHx8fDA%3D?q=80&w=800" fill className="object-cover" alt="Cell Microscopy" />
               </div>
            </motion.div>

            {/* Cryo-Storage */}
            <motion.div {...fadeIn} className="md:col-span-4 bg-black rounded-[4rem] p-12 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
               <div className="relative z-10"><Thermometer size={48} className="text-secondary mb-8" /></div>
               <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase leading-tight mb-4">Cryogenic <br />Vaults</h3>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">Liquid Nitrogen Storage (-196°C)</p>
               </div>
               <div className="absolute -right-8 -bottom-8 opacity-20 group-hover:rotate-12 transition-transform duration-1000">
                  <Activity size={200} className="text-secondary" />
               </div>
            </motion.div>

            {/* Specialized Modules */}
            {[
              { t: "3D Bioprinting", i: <Target />, d: "Scaffold-based tissue engineering and organoid modeling." },
              { t: "Viral Transduction", i: <Dna />, d: "Stable cell line generation via lentiviral and AAV vectors." },
              { t: "Metabolic Flux", i: <Maximize2 />, d: "Real-time analysis of cellular respiration and glycolysis." }
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

      <section className="relative py-10 px-6 lg:px-20 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="max-w-2xl mb-20">
      <span className="text-[10px] uppercase tracking-[0.4em] font-black text-blueShade">
        Core Capabilities
      </span>

      <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-6 mb-6">
        Integrated <span className="text-secondary">Bio-Engineering</span> Stack
      </h2>

      <p className="text-black/60 text-lg leading-relaxed">
        Our modular research infrastructure connects molecular biology,
        nanotechnology, and applied biochemistry into a single innovation
        pipeline — accelerating discovery from hypothesis to production.
      </p>
    </div>

    {/* Feature Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Card */}
      <div className="p-8 rounded-3xl border border-black/5 shadow-xl hover:shadow-2xl transition">
        <Microscope size={36} className="text-blueShade mb-5" />
        <h3 className="font-black text-xl mb-3">Precision Microbiology</h3>
        <p className="text-black/60 leading-relaxed">
          Advanced microbial profiling using metagenomics, CRISPR screening,
          and automated culturing to identify, optimize, and deploy
          high-performance strains.
        </p>
      </div>

      <div className="p-8 rounded-3xl border border-black/5 shadow-xl hover:shadow-2xl transition">
        <Dna size={36} className="text-secondary mb-5" />
        <h3 className="font-black text-xl mb-3">Genomic Engineering</h3>
        <p className="text-black/60 leading-relaxed">
          Full-stack genome editing workflows including gene synthesis,
          pathway refactoring, and phenotype validation for agricultural
          and medical applications.
        </p>
      </div>

      <div className="p-8 rounded-3xl border border-black/5 shadow-xl hover:shadow-2xl transition">
        <FlaskConical size={36} className="text-emerald-500 mb-5" />
        <h3 className="font-black text-xl mb-3">Applied Biochemistry</h3>
        <p className="text-black/60 leading-relaxed">
          High-resolution chromatography, protein folding analysis, and
          enzyme kinetics enabling drug discovery and metabolic optimization.
        </p>
      </div>

      <div className="p-8 rounded-3xl border border-black/5 shadow-xl hover:shadow-2xl transition">
        <Atom size={36} className="text-purple-500 mb-5" />
        <h3 className="font-black text-xl mb-3">Nano Fabrication</h3>
        <p className="text-black/60 leading-relaxed">
          Atomic-scale material engineering for targeted delivery systems,
          biosensors, and carbon-based structural composites.
        </p>
      </div>

      <div className="p-8 rounded-3xl border border-black/5 shadow-xl hover:shadow-2xl transition">
        <Leaf size={36} className="text-green-500 mb-5" />
        <h3 className="font-black text-xl mb-3">Sustainable Bio Systems</h3>
        <p className="text-black/60 leading-relaxed">
          Carbon-neutral bioprocessing, microbial remediation, and circular
          agriculture frameworks built for planetary scale.
        </p>
      </div>

      <div className="p-8 rounded-3xl border border-black/5 shadow-xl hover:shadow-2xl transition">
        <Activity size={36} className="text-rose-500 mb-5" />
        <h3 className="font-black text-xl mb-3">Clinical Translation</h3>
        <p className="text-black/60 leading-relaxed">
          From in-vitro validation to GMP manufacturing, we bridge research
          and real-world deployment through regulatory-ready pipelines.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* --- 03. ASEPTIC PIPELINE --- */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 order-2 lg:order-1 w-full">
  <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl">
    <Image 
      /* Cleaned URL: Removed the double '?' and optimized for mobile/desktop */
      src="https://images.unsplash.com/photo-1714844437234-8debef441744?q=80&w=1200" 
      fill 
      className="object-cover" 
      alt="Biosafety Cabinet" 
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={true} // Add this if this section is near the top of the page
    />
    <div className="absolute inset-0 bg-secondary/5" />
  </div>
</div>
          
          <motion.div {...fadeIn} className="flex-1 order-1 lg:order-2">
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">The <br /><span className="text-secondary italic">Culture</span> Pipeline.</h2>
            
            

            <div className="space-y-10 mt-12">
               {[
                 { t: "Aseptic Inoculation", d: "Strict Class 100 laminar flow handling to ensure culture purity and zero contamination." },
                 { t: "Growth Kinetic Audit", d: "Automated cell counting and viability assessment via Trypan Blue exclusion." },
                 { t: "Quality Validation", d: "Mycoplasma testing and STR profiling to ensure cell line authenticity." }
               ].map((step, i) => (
                 <div key={i} className="flex gap-6 border-l-4 border-black/5 pl-8 hover:border-secondary transition-all group">
                    <div className="font-black text-secondary/30 group-hover:text-secondary text-2xl transition-colors italic">0{i+1}</div>
                    <div>
                       <h5 className="font-black uppercase text-sm mb-1">{step.t}</h5>
                       <p className="text-black/50 text-sm leading-relaxed">{step.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 04. FACILITY INSTRUMENTATION --- */}
      <section className="py-10 border-y border-black/5 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
           <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">Facility <span className="text-secondary italic">Specs.</span></h2>
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">ISO Class 5 Environment</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-20 text-center">
          {[
            { l: "CO2 Incubators", v: "Thermo Heracell" },
            { l: "Live-Cell Imaging", v: "IncuCyte S3" },
            { l: "Flow Cytometer", v: "BD Accuri C6" },
            { l: "Centrifugation", v: "Beckman Coulter" }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="p-8 bg-zinc-50 rounded-[3rem] border border-black/5">
              <p className="text-secondary font-black text-2xl mb-1">{item.v}</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40">{item.l}</p>
            </motion.div>
          ))}
        </div>
      </section>
    
      
    </div>
  );
}