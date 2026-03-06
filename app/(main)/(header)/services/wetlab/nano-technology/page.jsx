"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Atom, Box, Zap, ShieldCheck, 
  Microscope, Cpu, Beaker, Scan,
  Focus, ArrowUpRight, Binary, Shrink,
  Target, Layers, Activity,
  Workflow,
} from "lucide-react";;

export default function NanoTechPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white mt-20 text-headerGray min-h-screen selection:bg-secondary/30">
      
      {/* --- 01. THE PRECISION HERO --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="https://images.unsplash.com/photo-1581093450725-0a13a6d122d6?q=80&w=2000"
      fill
      priority
      className="object-cover"
      alt="Nano Fabrication"
    />

    {/* Soft wash */}
    <div className="absolute inset-0 bg-white/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent" />
  </div>

  {/* Subtle dot texture */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(0,0,0,.04) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

    <motion.div {...fadeIn} className="max-w-2xl">

      {/* Badge */}
      <span className="inline-flex items-center gap-2 mb-6 text-[11px] font-black tracking-widest uppercase text-blueShade">
        <span className="w-2 h-2 rounded-full bg-blueShade" />
        Nanoscale Engineering & Fabrication
      </span>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8">
        Atomic
        <br />
        <span className="text-secondary">Force</span>
      </h1>

      {/* Description */}
      <p className="text-slate-900 text-lg leading-relaxed max-w-xl mb-10">
        Engineering at the limits of physics. From precision nano-carriers for
        targeted drug delivery to carbon nanotube synthesis and atomic-scale
        surface modification — we manipulate matter one atom at a time.
      </p>

      {/* Stats */}
      {/* <div className="flex gap-14 mt-14">

        {[
          ["10nm", "Resolution"],
          ["120+", "Nanostructures"],
          ["25+", "Research Labs"],
        ].map(([n, l]) => (
          <div key={l}>
            <p className="text-2xl font-black text-secondary">{n}</p>
            <span className="text-sm text-slate-400">{l}</span>
          </div>
        ))}

      </div> */}

    </motion.div>

  </div>

  {/* Scroll Hint */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blueShade text-xs tracking-widest uppercase">
    Scroll ↓
  </div>

</section>


      {/* --- 02. NANO-DYNAMICS (BENTO GRID) --- */}
      <section className="py-10 px-6 lg:px-20 bg-zinc-50 rounded-[5rem] mx-4 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Targeted Drug Delivery */}
            <motion.div {...fadeIn} className="md:col-span-8 bg-white rounded-[4rem] p-12 border border-black/5 group relative overflow-hidden shadow-lg">
               <div className="relative z-10">
                  <div className="p-5 bg-black text-secondary w-fit rounded-3xl mb-20 group-hover:shadow-[0_0_20px_#53C81E] transition-all">
                     <Target size={40} />
                  </div>
                  <h3 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none text-black">Precision <br /> <span className="text-secondary">Nanocarriers</span></h3>
                  <p className="text-black/50 max-w-sm font-medium mb-10 leading-relaxed">
                    Developing liposomes and polymeric nanoparticles designed for site-specific therapeutic release and enhanced bioavailability.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Lipid NPs', 'Dendrimers', 'Gold Colloids', 'Pegylation'].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-zinc-50 border border-black/5 text-[10px] font-black uppercase tracking-widest rounded-full">{tag}</span>
                    ))}
                  </div>
               </div>
               <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-100 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none">
                  <Image src="https://images.unsplash.com/photo-1582390730982-ed28c021a544?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE5hbm9jYXJyaWVyc3xlbnwwfHwwfHx8MA%3D%3D?q=80&w=800" fill className="object-cover" alt="Molecule Scale" />
               </div>
            </motion.div>

            {/* Characterization Suite */}
            <motion.div {...fadeIn} className="md:col-span-4 bg-black rounded-[4rem] p-12 text-white flex flex-col justify-between group overflow-hidden relative shadow-2xl">
               <div className="relative z-10"><Scan size={48} className="text-secondary mb-8" /></div>
               <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase leading-tight mb-4 text-white">Nano <br />Imaging</h3>
                  <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">AFM & FE-SEM Characterization</p>
               </div>
               <div className="absolute -right-8 -bottom-8 opacity-20 group-hover:scale-125 transition-transform duration-1000">
                  <Binary size={200} className="text-secondary" />
               </div>
            </motion.div>

            {/* Specialized Modules */}
            {[
              { t: "Thin Film Deposition", i: <Layers />, d: "Atomic Layer Deposition (ALD) for semi-conductor research." },
              { t: "Surface Chemistry", i: <Activity />, d: "Functionalization of surfaces for biosensor development." },
              { t: "Carbon Allotropes", i: <Atom />, d: "Graphene and CNT purification and characterization." }
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

    {/* Intro */}
    <div className="max-w-2xl mb-20">
      <span className="text-[11px] font-black tracking-widest uppercase text-blueShade">
        Atomic Engineering Platform
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-6 mb-6">
        Precision <span className="text-secondary"> Manufacturing  at </span> the Molecular Scale
      </h2>

      <p className="text-slate-500 leading-relaxed">
        Our nanoscale infrastructure integrates fabrication, microscopy,
        surface chemistry, and computational modeling to enable controlled
        manipulation of matter for biomedical, energy, and advanced materials
        research.
      </p>
    </div>

    {/* Capability Grid */}
    <div className="grid md:grid-cols-3 gap-10 mb-10">

  {[
    {
      icon: Atom,
      color: "text-secondary",
      title: "Nano-Carrier Engineering",
      desc:
        "Design and fabrication of targeted nano-particles for precision drug delivery and cellular uptake.",
    },
    {
      icon: Microscope,
      color: "text-blueShade",
      title: "Atomic Imaging",
      desc:
        "AFM, SEM, and cryo-EM microscopy for sub-nanometer resolution surface characterization.",
    },
    {
      icon: Layers,
      color: "text-amber-500",
      title: "Thin-Film Deposition",
      desc:
        "ALD and sputtering systems for controlled multilayer material synthesis.",
    },
    {
      icon: Cpu,
      color: "text-violet-500",
      title: "Computational Modeling",
      desc:
        "Molecular dynamics simulations and lattice optimization for predictive design.",
    },
    {
      icon: Workflow,
      color: "text-teal-500",
      title: "Nanofabrication Pipelines",
      desc:
        "Cleanroom lithography, etching, and pattern transfer for scalable device production.",
    },
    {
      icon: ShieldCheck,
      color: "text-slate-600",
      title: "Material Validation",
      desc:
        "Mechanical, electrical, and biocompatibility testing for clinical readiness.",
    },
  ].map(({ icon: Icon, color, title, desc }, i) => (
    <div
      key={i}
      className="bg-white p-8 rounded-2xl border border-black/5 hover:shadow-xl transition"
    >
      <Icon size={28} className={`${color} mb-6`} />

      <h3 className="font-bold text-lg mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  ))}

</div>


    {/* Workflow Timeline */}
    <div className="border-t border-black/10 pt-10">

      <h3 className="text-2xl font-black mb-12">
        End-to-End Nanotechnology Workflow
      </h3>

      <div className="grid lg:grid-cols-4 gap-12">

        {[
          ["01", "Concept Modeling",
            "Simulation-driven material design and structural optimization."],

          ["02", "Atomic Fabrication",
            "Lithography, deposition, and nanoscale pattern engineering."],

          ["03", "Microscopic Validation",
            "Surface analysis, morphology scanning, and defect detection."],

          ["04", "Functional Deployment",
            "Integration into biomedical, energy, or advanced manufacturing systems."],
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


      {/* --- 03. FABRICATION WORKFLOW --- */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
         <div className="flex-1 order-2 lg:order-1 w-full">
    <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl">
      <Image 
        /* Cleaned URL: Removed the double '?' which breaks on many mobile browsers */
        src="https://images.unsplash.com/photo-1676030789476-b42a14ad298d?q=80&w=800" 
        fill 
        className="object-cover" 
        alt="Nano-Research" 
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-secondary/5" />
    </div>
  </div>
          <motion.div {...fadeIn} className="flex-1 order-1 lg:order-2">
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.85]">The <br /><span className="text-secondary italic">Nanofab</span> Pipeline.</h2>
            
            

            <div className="space-y-10 mt-12">
               {[
                 { t: "Molecular Design", d: "Simulating molecular dynamics to predict nanoparticle stability and reactivity." },
                 { t: "Bottom-Up Synthesis", d: "Chemical vapor deposition and self-assembly protocols for structural control." },
                 { t: "Metrology & QA", d: "Validating size distribution and zeta potential via Dynamic Light Scattering." }
               ].map((step, i) => (
                 <div key={i} className="flex gap-6 border-l-4 border-black/5 pl-8 hover:border-secondary transition-all group">
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

      {/* --- 04. FACILITY INSTRUMENTATION --- */}
      <section className="py-10 border-y border-black/5 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
           <h2 className="text-4xl font-black uppercase tracking-tighter mb-2">Facility <span className="text-secondary italic">Standards.</span></h2>
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">Clean-Room Class 100 Certified</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-20 text-center">
          {[
            { l: "High-Res SEM", v: "FEI Quanta" },
            { l: "DLS Analyzer", v: "Malvern Zetasizer" },
            { l: "XPS Suite", v: "Thermo K-Alpha" },
            { l: "Raman Spectro", v: "Horiba LabRAM" }
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