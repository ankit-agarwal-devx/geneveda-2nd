"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Wind, Droplets, Leaf, ShieldCheck, 
  Microscope, Globe, ArrowUpRight, Biohazard,
  Zap, TestTube, Factory, Recycle, Activity,
  ChevronRight, Beaker, ClipboardCheck, MoveRight, Sprout} from "lucide-react";

export default function EnvironmentalScienceLight() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      
      {/* --- 01. THE CLINICAL HERO --- */}
      <section
      className="relative min-h-[90vh] flex items-center pt-32 pb-24 px-6 lg:px-20 overflow-hidden bg-white"
      style={{
        // LAYER 1: The White-to-Transparent Mask
        // LAYER 2: The Environmental Background Image
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.8) 35%, rgba(255,255,255,0.5) 60%, rgba(255,255,255,0.2) 100%),
          url("https://images.unsplash.com/photo-1445346753792-6c667d917349?w=2000&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVudmlyb25tZW50fGVufDB8fDB8fHww")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Structural Dot Grid - Identifying as a tech-driven solution */}
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #4BAF4F 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* MAIN CONTENT AREA */}
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
                Sustainability Infrastructure
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.85] text-headerGray mb-10">
              ECO <br />
              <span className="text-secondary italic">SYSTEMS.</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-medium">
              Biological solutions for industrial impact. We engineer <span className="text-black font-bold">microbes, fermentation pipelines</span>, and remediation protocols to neutralize pollutants and restore environmental balance at scale.
            </p>

            {/* Capability Pills (Floating Style) */}
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                { label: "Microbial Remediation", icon: <Sprout size={14}/> },
                { label: "Waste Treatment", icon: <Droplets size={14}/> },
                { label: "Carbon Reduction", icon: <Wind size={14}/> }
              ].map((pill, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/5 bg-white shadow-sm text-[10px] font-black uppercase tracking-widest text-slate-600">
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
                { title: "Neutralization", desc: "98% pollutant reduction in industrial runoff tests.", icon: <ShieldCheck size={20}/> },
                { title: "Strain Catalog", desc: "450+ engineered microbes for specific pollutants.", icon: <Sprout size={20}/> },
                { title: "Scale Efficiency", desc: "Pilot-to-Industrial fermentation protocols ready.", icon: <Droplets size={20}/> }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="text-secondary mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-black font-black text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">
        <span>Active Monitor</span>
        <div className="w-[2px] h-12 bg-slate-200 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-4 bg-secondary"
          />
        </div>
      </div>
    </section>


      {/* --- 02. CORE SECTORS (BENTO) --- */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Sector: Bioremediation */}
            <motion.div {...fadeIn} className="md:col-span-8 bg-zinc-50 rounded-[4rem] p-12 group hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-black/5 relative overflow-hidden">
              <div className="relative z-10">
                <div className="p-5 bg-white shadow-sm w-fit rounded-3xl text-secondary mb-20 group-hover:scale-110 transition-transform">
                  <Recycle size={40} />
                </div>
                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Microbial <br />Bioremediation</h3>
                <p className="text-black/40 max-w-sm font-medium mb-10 leading-relaxed">
                  Advanced strain selection for the degradation of persistent organic pollutants (POPs) in industrial effluent.
                </p>
                <div className="flex gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white border border-black/5 px-4 py-2 rounded-full">Heavy Metals</span>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white border border-black/5 px-4 py-2 rounded-full text-secondary italic">Hydrocarbons</span>
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-10%] w-1/2 h-full opacity-5 group-hover:opacity-10 transition-opacity">
                <Biohazard size={400} />
              </div>
            </motion.div>

            {/* Sector: Water Tox */}
            <motion.div {...fadeIn} className="md:col-span-4 bg-secondary rounded-[4rem] p-12 text-white flex flex-col justify-between group cursor-pointer relative overflow-hidden">
              <div className="relative z-10 p-5 bg-white/20 w-fit rounded-3xl backdrop-blur-md">
                <Droplets size={40} />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black uppercase leading-[0.9] mb-4">Aquatic <br />Analysis</h3>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest">ISO 14001 Standards</p>
              </div>
              {/* Animated Wave BG */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent animate-pulse" />
              </div>
            </motion.div>

            {/* micro-services */}
            {[
              { t: "Emission Control", i: <Wind />, d: "Gas-phase biofiltration systems." },
              { t: "Waste Valorization", i: <Leaf />, d: "Converting biomass into bio-energy." },
              { t: "Toxicity Screening", i: <ShieldCheck />, d: "Acute and chronic toxicity assays." }
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} className="md:col-span-4 bg-white border border-black/5 rounded-[3.5rem] p-10 hover:border-secondary transition-all group">
                <div className="text-black group-hover:text-secondary mb-8 transition-colors">
                  {item.i}
                </div>
                <h4 className="font-black uppercase text-lg mb-2">{item.t}</h4>
                <p className="text-black/40 text-[10px] font-black uppercase tracking-widest leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 lg:px-20 bg-slate-50">
  <div className="max-w-7xl mx-auto">

    {/* Section Intro */}
    <div className="max-w-3xl mb-20">
      <span className="text-secondary text-xs font-bold tracking-widest uppercase">
        Environmental Biotechnology
      </span>

      <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
        Engineering Biological Systems for Environmental Recovery
      </h2>

      <p className="text-slate-500 leading-relaxed">
        Our Eco Systems platform applies microbial engineering, biochemical
        validation, and process optimization to address industrial pollution at
        its source. We help organizations replace chemical remediation with
        living biological solutions that restore ecosystems while reducing
        operational cost and carbon footprint.
      </p>
    </div>

    {/* Core Capabilities */}
    <div className="grid md:grid-cols-3 gap-10 mb-20">

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h3 className="font-bold text-lg mb-4">
          Microbial Remediation
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          We design and deploy specialized microbial consortia capable of
          degrading hydrocarbons, heavy metals, and organic pollutants. These
          organisms are optimized for stability, activity, and scalability
          across diverse industrial environments.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h3 className="font-bold text-lg mb-4">
          Wastewater Treatment
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Our biological treatment pipelines reduce chemical oxygen demand,
          remove toxic compounds, and improve effluent quality. We integrate
          fermentation and bioreactor systems to achieve consistent performance
          in high-load wastewater streams.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h3 className="font-bold text-lg mb-4">
          Carbon Reduction Strategies
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Through metabolic engineering and bioconversion pathways, we enable
          carbon capture and utilization workflows that transform emissions into
          valuable biological outputs.
        </p>
      </div>

    </div>

    {/* Deep Content */}
    <div className="grid md:grid-cols-2 gap-14 items-start">

      <div>
        <h3 className="text-2xl font-extrabold mb-6">
          Transforming Industrial Waste into Biological Opportunity
        </h3>

        <p className="text-slate-500 leading-relaxed mb-6">
          Traditional environmental remediation relies heavily on chemical
          treatment and mechanical filtration — approaches that are often costly,
          energy-intensive, and environmentally disruptive. Our Eco Systems
          platform replaces these methods with adaptive biological processes that
          evolve alongside operational demands.
        </p>

        <p className="text-slate-500 leading-relaxed mb-6">
          By combining microbial engineering with real-time analytical monitoring,
          we create closed-loop remediation systems that continuously optimize
          performance while minimizing resource consumption.
        </p>

        <ul className="space-y-3 text-sm text-slate-600">
          <li>• Industrial effluent detoxification</li>
          <li>• Soil and groundwater bioremediation</li>
          <li>• Organic waste bioconversion</li>
          <li>• Heavy metal sequestration</li>
          <li>• Continuous environmental monitoring</li>
        </ul>
      </div>

      <div className="bg-white p-10 rounded-3xl border shadow-sm">
        <h4 className="font-bold mb-4">
          Designed for Scale. Built for Impact.
        </h4>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          Our environmental biotechnology solutions are engineered to move from
          pilot deployment to full industrial scale without compromising
          biological integrity or regulatory compliance.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          We collaborate closely with operational teams to integrate biological
          remediation directly into existing infrastructure, enabling rapid
          adoption with minimal disruption.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed">
          The result is a sustainable remediation framework that delivers measurable
          environmental outcomes while supporting long-term operational resilience.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* --- 03. TECHNICAL COMPLIANCE --- */}
      <section className="py-10 px-6 lg:px-20 bg-zinc-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="hidden lg:block flex-1 order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="h-96 rounded-[3rem] overflow-hidden shadow-2xl relative group">
                   <Image src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=800" fill className="object-cover transition-all duration-700" alt="Testing" />
                </div>
                <div className="h-96 rounded-[3rem] overflow-hidden shadow-2xl relative mt-16 group">
                   <Image src="https://images.unsplash.com/photo-1703339010429-bd882a751900?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGVudmlyb25tZW50YWwlMjBzY2llbmNlfGVufDB8fDB8fHww?q=80&w=800" fill className="object-cover transition-all duration-700" alt="Microscope" />
                </div>
             </div>
          </div>
          
          <motion.div {...fadeIn} className="flex-1 order-1 lg:order-2">
            <h2 className="text-6xl font-black uppercase tracking-tighter mb-12">Certified <br /><span className="text-secondary italic">Integrity.</span></h2>
            <div className="space-y-8">
               {[
                 { icon: <Globe size={20} />, t: "EPA & Global Compliance", d: "Validated methods for international environmental regulations." },
                 { icon: <ClipboardCheck size={20} />, t: "Impact Audits", d: "Field-to-lab chain of custody for all samples." },
                 { icon: <Activity size={20} />, t: "Real-time Metrics", d: "IoT integration for persistent environmental monitoring." }
               ].map((spec, i) => (
                 <div key={i} className="flex gap-6 items-start group">
                    <div className="p-3 bg-white border border-black/5 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-black transition-colors">
                      {spec.icon}
                    </div>
                    <div>
                       <h5 className="font-black uppercase text-sm mb-1">{spec.t}</h5>
                       <p className="text-black/50 text-sm leading-relaxed max-w-sm">{spec.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 04. EQUIPMENT MARQUEE --- */}
      <section className="py-10 border-b border-black/5 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-blueShade text-center">Standard Inventory</h4>
        </div>
        <div className="flex gap-12 justify-center flex-wrap opacity-20 brightness-90 group-hover:brightness-110">
          {['TOC-Analyzer', 'HPLC-SYSTEM', 'PCR-DETECTION', 'AAS-SPECTROMETER', 'COD-REACTOR'].map((item) => (
            <span key={item} className="text-3xl font-black uppercase tracking-tighter">{item}</span>
          ))}
        </div>
      </section>
      
    </div>
  );
}