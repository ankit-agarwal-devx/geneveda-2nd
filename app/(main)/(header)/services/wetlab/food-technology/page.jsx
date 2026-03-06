"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FlaskConical, Microscope, Beaker, Leaf, 
  Zap, Dna, ArrowUpRight, Scale, 
  Droplet, Radiation, Activity, Scan, MoveRight, TestTube
} from "lucide-react";

export default function FoodTechRedesign() {
  const fadeIn = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      
      {/* --- 01. THE KINETIC HERO --- */}
      <section
      className="relative min-h-[85vh] flex items-center pt-25 pb-12 px-6 lg:px-20 overflow-hidden bg-white"
      style={{
  backgroundImage: `
    linear-gradient(to right, rgba(255,255,255,1) 30%, rgba(255,255,255,0.7) 100%),
    radial-gradient(circle, #4BAF4F 0.6px, transparent 0.6px),
    url("https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bnV0cml0aW9ufGVufDB8fDB8fHww")
  `,
  backgroundSize: "cover, 32px 32px, cover",
  backgroundPosition: "center, center, center right",
}}
    >
      {/* Precision Biotech Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #4BAF4F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT CONTENT BLOCK */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            {/* Sector Badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-headerGray">
                Food Biotechnology Facility
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.85] text-headerGray mb-10">
              BIO <br />
              <span className="text-secondary italic">NUTRITION.</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-medium">
              Where molecular biology meets culinary engineering. We help researchers 
              and food innovators develop sustainable nutrition through <span className="text-black">precision fermentation</span> and applied biochemistry.
            </p>

            {/* Feature Row */}
            <div className="flex flex-wrap gap-8 mb-14 text-xs font-black uppercase tracking-widest text-slate-500">
              <span className="flex items-center gap-2"><Leaf size={16} className="text-secondary"/> Fermentation</span>
              <span className="flex items-center gap-2"><TestTube size={16} className="text-secondary"/> Protein Analytics</span>
              <span className="flex items-center gap-2"><Microscope size={16} className="text-secondary"/> Pilot Production</span>
            </div>
          </motion.div>

          {/* RIGHT SIDE STATS (The "Biotech" Sidebar) */}
          {/* <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-4 lg:border-l border-black/5 lg:pl-12 hidden lg:block"
          >
            <div className="space-y-12">
              {[
                { val: "50+", label: "Active Projects", desc: "Ongoing sustainable food initiatives." },
                { val: "20+", label: "Lab Instruments", desc: "Next-gen chromatography & HPLC." },
                { val: "10k+", label: "Samples Processed", desc: "Validated nutritional data points." }
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <p className="text-4xl font-black text-black group-hover:text-secondary transition-colors mb-1">{item.val}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{item.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-[180px]">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Subtle Bottom Fade to pure white for the next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
    </section>

<section className="py-10 px-6 lg:px-20 bg-slate-50">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="max-w-3xl mb-10">
      <span className="text-secondary text-xs font-bold tracking-widest uppercase">
        Bio Nutrition Platform
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
        Engineering the Future of Sustainable Food
      </h2>

      <p className="text-slate-500 leading-relaxed">
        Our Bio Nutrition Lab integrates applied biochemistry, microbial
        fermentation, and analytical chemistry to transform raw biological inputs
        into functional nutritional products. We support research teams across the
        entire innovation lifecycle — from early experimentation to pilot-scale
        production.
      </p>
    </div>

    {/* Core Capabilities */}
    <div className="grid md:grid-cols-3 gap-10 mb-10">

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h3 className="font-bold text-lg mb-4">
          Precision Fermentation
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          We develop controlled fermentation pipelines for microbial protein
          production, flavor compound synthesis, and functional ingredient
          development. Our bioreactors enable fine-tuned optimization of growth
          parameters, yield efficiency, and metabolic output.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h3 className="font-bold text-lg mb-4">
          Protein Analytics
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Our protein characterization workflows analyze structure, stability, and
          bioactivity. Through purification and quantitative assays, we help
          validate nutritional value, digestibility, and functional performance
          of novel proteins.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h3 className="font-bold text-lg mb-4">
          Chromatographic Separation
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Using high-resolution chromatography, we isolate peptides, metabolites,
          and flavor molecules from complex biological mixtures, supporting quality
          control, formulation, and regulatory documentation.
        </p>
      </div>

    </div>

    {/* Deep Content */}
    <div className="grid md:grid-cols-2 gap-14 items-start">

      <div>
        <h3 className="text-2xl font-extrabold mb-6">
          From Molecular Discovery to Nutritional Application
        </h3>

        <p className="text-slate-500 leading-relaxed mb-6">
          Food biotechnology requires more than laboratory experimentation — it
          demands reliable translation from bench-scale research to production-ready
          outcomes. Our integrated platform connects microbial engineering with
          biochemical validation to accelerate development of sustainable proteins,
          functional ingredients, and alternative nutrition sources.
        </p>

        <p className="text-slate-500 leading-relaxed mb-6">
          By combining fermentation science with analytical precision, we enable
          teams to optimize nutritional profiles, enhance flavor characteristics,
          and verify product safety before entering manufacturing pipelines.
        </p>

        <ul className="space-y-3 text-sm text-slate-600">
          <li>• Strain development and optimization</li>
          <li>• Nutritional composition analysis</li>
          <li>• Flavor and metabolite profiling</li>
          <li>• Shelf-life and stability testing</li>
          <li>• Pilot-scale validation</li>
        </ul>
      </div>

      <div className="bg-white p-10 rounded-3xl border shadow-sm">
        <h4 className="font-bold mb-4">
          Designed for Startups. Trusted by Scientists.
        </h4>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          Our Bio Nutrition Lab removes infrastructure barriers for early-stage
          founders while delivering the rigor required by established research
          teams. We provide access to modern instrumentation, standardized
          workflows, and expert scientific guidance under one roof.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          Whether you are validating a new protein source or scaling fermentation
          pipelines, GeneVeda delivers reproducible results with startup-speed
          execution.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed">
          This integrated approach shortens development cycles, reduces technical
          risk, and enables confident progression toward commercial nutrition
          products.
        </p>
      </div>

    </div>

  </div>
</section>



      {/* --- 02. CAPABILITY GRID (DARK MODE TRANSITION) --- */}
      <section className="py-32 px-6 lg:px-20 bg-black text-white rounded-[5rem] mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Main Feature */}
            <motion.div {...fadeIn} className="lg:col-span-7 space-y-12">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Molecular <br /> <span className="text-secondary italic">Workflows.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <Dna />, t: "Proteomics", d: "Deep protein profiling for alternative meat development." },
                  { icon: <Droplet />, t: "Rheology", d: "Texture and viscosity analysis for synthetic dairy." },
                  { icon: <Activity />, t: "Metabolomics", d: "Flavor compound mapping and sensory objectification." },
                  { icon: <Scale />, t: "Fortification", d: "Precision nutrient delivery and bioavailability audits." }
                ].map((item, i) => (
                  <div key={i} className="group p-8 border border-white/5 rounded-3xl hover:border-secondary transition-all">
                    <div className="text-secondary mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="font-black uppercase tracking-tight text-lg mb-2">{item.t}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Side Image / Stat */}
            <motion.div {...fadeIn} className="lg:col-span-5 flex flex-col gap-10">
              <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 group">
                <Image 
                  src="https://images.unsplash.com/photo-1722170529553-3d486ba8ffba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TW9sZWN1bGFyJTIwV29ya2Zsb3dzfGVufDB8fDB8fHww?q=80&w=800" 
                  fill className="object-cover opacity-100 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000" 
                  alt="Precision Lab" 
                />
                <div className="absolute bottom-10 left-10">
                   <p className="text-4xl font-black text-secondary">0.01mg</p>
                   <p className="text-xs font-black uppercase tracking-widest text-white/60">Measurement Precision</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 03. THE INFRASTRUCTURE SECTION --- */}
      <section className="py-10 px-2 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-15 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="h-80 rounded-[3rem] overflow-hidden relative shadow-2xl">
                   <Image src="https://images.pexels.com/photos/3912512/pexels-photo-3912512.jpeg?q=80&w=600" fill className="object-cover" alt="Fermentation" />
                </div>
                <div className="h-80 rounded-[3rem] overflow-hidden relative shadow-2xl mt-12">
                   <Image src="https://images.unsplash.com/photo-1605647540924-852290f6b0d5?q=80&w=600" fill className="object-cover" alt="Safety" />
                </div>
             </div>
             <Scan className="absolute -bottom-10 -right-0 text-secondary opacity-40" size={200} />
          </div>

          <motion.div {...fadeIn} className="order-1 lg:order-2">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-10">Wet-Lab <br />Standards.</h2>
            <div className="space-y-10">
               {[
                 { t: "ISO 17025 Compliant", d: "Rigorous laboratory management systems for consistent technical results." },
                 { t: "HACCP Integration", d: "Embedded safety protocols for food prototype testing and human trials." },
                 { t: "GLP Certification", d: "Good Laboratory Practice adherence for international research validity." }
               ].map((spec, i) => (
                 <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-black text-secondary flex items-center justify-center font-black">
                      0{i+1}
                    </div>
                    <div>
                       <h5 className="font-black uppercase text-sm mb-1">{spec.t}</h5>
                       <p className="text-black/50 text-sm leading-relaxed">{spec.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 04. GLOBAL STANDARDS STRIP --- */}
      <section className="py-10 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {['Extraction', 'Synthesis', 'Validation', 'Upscaling'].map((label, i) => (
            <div key={i} className="group">
              <p className="text-4xl font-black uppercase tracking-tighter text-black/10 group-hover:text-secondary transition-colors cursor-default">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}