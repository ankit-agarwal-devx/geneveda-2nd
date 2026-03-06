"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Beaker,
  FlaskConical,
  Dna,
  Globe,
  ClipboardCheck,
  Activity,
  Download, MoveRight, Bug, Biohazard, ShieldAlert, Binary
} from "lucide-react";

const MicrobiologyPage = () => {
  const services = [
    {
      title: "Pathogen Identification",
      icon: <Beaker />,
      color: "text-blueShade",
      bg: "bg-blueShade/10",
      desc: "Rapid screening for bacterial and viral pathogens.",
    },
    {
      title: "Antimicrobial Testing",
      icon: <Activity />,
      color: "text-secondary",
      bg: "bg-secondary/10",
      desc: "Susceptibility profiles and resistance monitoring.",
    },
    {
      title: "Microbial Genomics",
      icon: <Dna />,
      color: "text-blueShade",
      bg: "bg-blueShade/10",
      desc: "Whole genome sequencing of microbial isolates.",
    },
    {
      title: "Environmental Sampling",
      icon: <Globe />,
      color: "text-secondary",
      bg: "bg-secondary/10",
      desc: "Air, water, and surface microbial monitoring.",
    },
    {
      title: "Culture Isolation",
      icon: <FlaskConical />,
      color: "text-blueShade",
      bg: "bg-blueShade/10",
      desc: "Pure culture isolation and characterization.",
    },
    {
      title: "Bioburden Analysis",
      icon: <ClipboardCheck />,
      color: "text-secondary",
      bg: "bg-secondary/10",
      desc: "Quantitative estimation of viable microorganisms.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-15">
      {/* --- HERO SECTION --- */}
      <section
      className="relative pt-10 pb-12 px-6 lg:px-20 overflow-hidden bg-black"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.8)),
          url("https://images.pexels.com/photos/5069671/pexels-photo-5069671.jpeg?q=80&w=2070")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Microbial Pattern Overlay (Subtle) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #4BAF4F 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Organic Light Bloom */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-secondary/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            {/* Sector Badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-[1px] bg-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-secondary">
                Microbial Systems & Analytics
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-[6.8rem] font-black tracking-tighter leading-[0.8] text-white mb-10">
              MICRO <br />
              <span className="text-secondary italic underline decoration-white/10 underline-offset-8">DYNAMICS.</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-medium">
              Mapping the invisible frontier. From <span className="text-white">strain optimization</span> to 
              metagenomic profiling, we engineer microbial solutions that solve 
              global challenges in healthcare and environmental sustainability.
            </p>

          </motion.div>

          {/* Microbiology Tech Stack (Right Side) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-10 relative overflow-hidden"
          >
            {/* Floating Decorative Icon */}
            <div className="absolute -top-4 -right-4 text-secondary/20 rotate-12">
              <Bug size={120} />
            </div>

            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <Biohazard size={16} className="text-secondary" />
              Lab Capabilities
            </h4>

            <div className="space-y-6">
              {[
                { label: "Bacterial Transformation", val: "High Efficiency", icon: <Binary size={16}/> },
                { label: "Antimicrobial Testing", val: "MIC/MBC Certified", icon: <ShieldAlert size={16}/> },
                { label: "Strain Engineering", val: "CRISPR-Cas9 Enabled", icon: <Bug size={16}/> }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-secondary/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="text-secondary">{item.icon}</div>
                    <span className="text-slate-300 text-xs font-bold uppercase tracking-wider">{item.label}</span>
                  </div>
                  <span className="text-[10px] text-secondary font-black bg-secondary/10 px-2 py-1 rounded-md">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Footer Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-5 pt-5 border-t border-white/10">
          <div>
            <p className="text-3xl font-black text-white">850+</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-1">Isolates Cataloged</p>
          </div>
          <div>
            <p className="text-3xl font-black text-white">BSL-2</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-1">Enhanced Safety</p>
          </div>
          <div>
            <p className="text-3xl font-black text-white">98%</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-1">Purity Verified</p>
          </div>
          <div>
            <p className="text-3xl font-black text-white">24h</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-bold mt-1">Turnaround Time</p>
          </div>
        </div> */}
      </div>
    </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative p-5 rounded-[3rem] border border-slate-100 bg-white transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
              >
                {/* Colorful Icon Container */}
                <div
                  className={`w-20 h-20 mb-8 ${service.bg} ${service.color} flex items-center justify-center rounded-[2rem] transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                >
                  {React.cloneElement(service.icon, {
                    size: 32,
                    strokeWidth: 2,
                  })}
                </div>

                <h3 className="text-xl font-black mb-3 text-headerGray group-hover:text-blueShade transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Animated progress bar indicator */}
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-12 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full w-0 group-hover:w-full transition-all duration-700 ${i % 2 === 0 ? "bg-blueShade" : "bg-secondary"}`}
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    Active
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 px-6 bg-white">
  <div className="container mx-auto max-w-6xl">

    {/* Header */}
    <div className="text-center mb-20">
      <span className="text-secondary text-xs font-bold tracking-widest uppercase">
        Precision Microbiology
      </span>

      <h2 className="text-3xl md:text-4xl text-headerGray font-extrabold mt-4 mb-6">
        Decoding Microbial Systems with Clinical Accuracy
      </h2>

      <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
        GeneVeda Biosciences integrates clinical-grade laboratory environments with
        advanced molecular workflows to analyze, characterize, and engineer
        microbial systems. Our precision microbiology platform enables researchers,
        clinicians, and biotech innovators to translate microbial complexity into
        actionable biological insight.
      </p>
    </div>

    {/* Core Grid */}
    <div className="grid md:grid-cols-3 gap-10">

      <div className="bg-slate-50 p-8 rounded-3xl border">
        <h3 className="font-bold text-headerGray text-lg mb-4">
          Clinical Green-Room Infrastructure
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Our controlled laboratory spaces meet stringent cleanliness and biosafety
          standards, ensuring contamination-free workflows across microbial
          culturing, nucleic acid extraction, and downstream molecular analysis.
          Every experiment is executed within rigorously monitored environments to
          preserve biological integrity.
        </p>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border">
        <h3 className="font-bold text-headerGray text-lg mb-4">
          Molecular Identification & Profiling
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          We deploy PCR, qPCR, and sequencing-based methodologies to accurately
          identify microbial species, quantify abundance, and characterize genetic
          variation. These tools allow deep insight into microbial populations,
          resistance markers, and functional pathways.
        </p>
      </div>

      <div className="bg-slate-50 p-8 rounded-3xl border">
        <h3 className="font-bold text-headerGray text-lg mb-4">
          Functional Microbiology
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Beyond detection, we evaluate microbial behavior through metabolic assays,
          growth kinetics, and phenotypic screening. This functional layer enables
          clients to connect genotype with real-world biological performance.
        </p>
      </div>

    </div>

    {/* Deep Content */}
    <div className="mt-20 grid md:grid-cols-2 gap-14 items-start">

      <div>
        <h3 className="text-2xl text-headerGray font-extrabold mb-6">
          Turning Microbial Complexity into Biological Clarity
        </h3>

        <p className="text-slate-500 leading-relaxed mb-6">
          Microbial ecosystems influence human health, agriculture, biotechnology,
          and environmental sustainability. At GeneVeda, we apply precision
          microbiology to systematically decode these ecosystems — transforming raw
          biological data into structured, interpretable insights.
        </p>

        <p className="text-slate-500 leading-relaxed mb-6">
          Our workflows integrate sample preparation, molecular analysis, and
          computational interpretation to deliver reproducible results at scale.
          Whether supporting diagnostics development, therapeutic discovery, or
          industrial biotechnology, our platform adapts to diverse scientific goals.
        </p>

        <ul className="space-y-3 text-sm text-slate-600">
          <li>• Pathogen detection and strain-level identification</li>
          <li>• Microbial community profiling</li>
          <li>• Antibiotic resistance screening</li>
          <li>• Custom assay development</li>
          <li>• Longitudinal microbial monitoring</li>
        </ul>
      </div>

      <div className="bg-slate-50 p-10 rounded-3xl border">
        <h4 className="font-bold text-headerGray mb-4">
          Designed for Research, Built for Translation
        </h4>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          Our precision microbiology services are engineered to bridge laboratory
          research and applied outcomes. We emphasize reproducibility, regulatory
          alignment, and scalability — enabling seamless progression from discovery
          to deployment.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          By combining clinical-grade infrastructure with molecular expertise,
          GeneVeda empowers teams to move faster, reduce experimental uncertainty,
          and generate high-confidence biological conclusions.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed">
          From early-stage exploration to production-scale validation, we provide
          the scientific backbone needed to advance microbiology-driven innovation.
        </p>
      </div>

    </div>

  </div>
</section>


      {/* --- CAPABILITIES WITH COLORED IMAGE --- */}
      <section className="py-10 container mx-auto px-6">
        <div className="bg-slate-50 p-12 md:p-16 rounded-[4rem] border border-slate-100 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-black text-headerGray mb-8 leading-tight">
              Laboratory <br />
              <span className="text-secondary italic">Capabilities</span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              {[
                "Gram Staining & Microscopy",
                "Automated ID/AST Systems",
                "Bacterial & Fungal Characterization",
                "Endotoxin Testing (LAL)",
                "Sterility Validation",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 text-slate-700 font-bold group cursor-default"
                >
                  <span className="w-10 h-10 rounded-xl bg-white text-blueShade border border-slate-200 flex items-center justify-center text-xs shadow-sm group-hover:bg-secondary group-hover:text-white group-hover:border-secondary transition-all">
                    {idx + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 relative group h-[500px] w-full">
            {/* Removed Grayscale - Image is now fully colored */}
            <Image
              src="/images/microbiology-culture.png"
              alt="Microbial Culture"
              fill
              className="object-cover rounded-[3.5rem] border-8 border-white shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Colorful Glow */}
            <div className="absolute inset-0 -z-10 bg-secondary/20 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="absolute -bottom-6 -right-6 bg-black text-white font-black py-5 px-10 rounded-3xl shadow-2xl text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              ISO 9001:2025 Certified
            </div>
          </div>
        </div>

        {/* --- DOWNLOAD CTA --- */}
        <div className="mt-20 flex justify-center">
          <button
            className="relative px-10 py-4 rounded-full font-bold uppercase tracking-wider overflow-hidden transition-all duration-500 group
             cursor-pointer shadow-lg w-full md:w-auto z-10 bg-transparent"
            style={{
              borderColor: "rgb(65, 100, 165)",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
          >
            <span className="absolute inset-0 w-0 h-full bg-secondary transition-all duration-500 ease-out group-hover:w-full -z-10"></span>
            <span className="relative z-10 group-hover:text-black flex items-center gap-3">
              Download Lab Protocol{" "}
              <Download className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default MicrobiologyPage;
