"use client"

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { 
  Atom, 
  Dna, 
  Microchip, 
  Network, 
  ArrowRight,
  Database
} from "lucide-react";

const RDPage = () => {
const rdPillars = [
  {
    title: "Molecular Modeling",
    desc: "Proprietary algorithms simulating molecular interactions and protein folding at atomic resolution.",
    icon: <Atom size={28} />,
    color: "#4BAF4F", // Your Secondary Green
    stat: "1.2k+ Sim/hr"
  },
  {
    title: "NGS Pipelines",
    desc: "High-throughput Next-Generation Sequencing workflows for rapid clinical and genomic discovery.",
    icon: <Dna size={28} />,
    color: "#3b82f6", // Biotech Blue
    stat: "99.9% Accuracy"
  },
  {
    title: "Bio-Informatics AI",
    desc: "Machine learning models identifying biomarkers and therapeutic targets from raw multi-omics data.",
    icon: <Microchip size={28} />,
    color: "#f59e0b", // Insight Gold
    stat: "Neural Analysis"
  },
  {
    title: "Network Pharmacology",
    desc: "Mapping complex drug-target-disease networks to understand systemic biological impacts.",
    icon: <Network size={28} />,
    color: "#ef4444", // Research Red
    stat: "Systemic Mapping"
  }
];
  return (
    <div className="bg-white text-headerGray font-sans selection:bg-secondary/30 pt-10 pb-20">
      {/* 1. HERO SECTION: Light & Airy */}
      <section className="relative h-[90vh] flex items-center px-6 md:px-20 overflow-hidden bg-white">
      {/* Visual Context: R&D focus */}
      <div className="absolute right-0 top-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/40 md:via-black/40 to-black/40 z-10" />
        <Image
          fill
          src="https://images.unsplash.com/photo-1581093577421-f561a654a353?w=2070&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc2VhcmNofGVufDB8fDB8fHwy?q=80&w=2070"
          className="w-full h-full object-cover transition-all duration-1000 opacity-90 bg-black/50"
          alt="Bio-Analytics Research"
          priority
        />
      </div>

      <div className="container mx-auto relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-[1px] bg-secondary" />
            <span className="text-white font-black uppercase tracking-[0.4em] text-[10px]">
              Proprietary R&D
            </span>
          </div>

          {/* Heading: Reduced from 8xl to 7xl for better balance */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-headerGray mb-8">
            PRECISION <br />
            <span className="text-secondary italic">INTELLIGENCE.</span>
          </h1>

          {/* Body Text */}
          <p className="text-white/70 text-lg md:text-xl max-w-xl leading-relaxed font-medium mb-12">
            Advancing the human experience through molecular rigorousness. 
            We leverage <span className="text-white font-bold">GeneVeda’s proprietary bio-analytics</span> to 
            decode complex biological datasets and accelerate R&D timelines.
          </p>

          {/* Research Stats or Meta-info */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
            <div>
              <p className="text-2xl font-black text-white">99.8%</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-secondary mt-1">
                Data Precision
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">12+</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-secondary mt-1">
                Active Pipelines
              </p>
            </div>
          </div> */}
        </motion.div>
      </div>

      {/* Subtle Background Accent */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] z-0" />
    </section>

    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Logic */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-black uppercase text-[10px] tracking-[0.4em] mb-4">
              Research Pillars
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-headerGray leading-tight tracking-tighter">
              Decoding Complexity through <br />
              <span className="text-secondary italic">Rigorous Discovery.</span>
            </h3>
          </div>
          <div className="lg:pt-12">
             <div className="h-1 w-24 bg-black mb-4" />
             <p className="text-slate-500 text-sm max-w-xs font-medium leading-relaxed">
               Our R&D infrastructure combines wetlab precision with computational intelligence to solve the industry&apos;s toughest biological puzzles.
             </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rdPillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow Accent */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: pillar.color }}
              />

              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon Box */}
                <div 
                  className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-3xl shadow-inner transition-transform duration-500 group-hover:rotate-[10deg]"
                  style={{ 
                    backgroundColor: `${pillar.color}15`, 
                    color: pillar.color 
                  }}
                >
                  {pillar.icon}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-2xl font-black text-headerGray tracking-tight">
                      {pillar.title}
                    </h4>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-400">
                      {pillar.stat}
                    </span>
                  </div>
                  
                  <p className="text-slate-500 text-base leading-relaxed font-medium mb-6">
                    {pillar.desc}
                  </p>

                  <button className="text-[10px] font-black uppercase tracking-widest text-headerGray flex items-center gap-2 group/btn">
                    Technical Specifications
                    <span className="w-6 h-[1px] bg-black group-hover/btn:w-10 transition-all duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* 2. THE BENTO RESEARCH GRID (Contained) */}
      <section className="py-10 max-w-[1400px] mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-bold tracking-tight">
            Ongoing Initiatives
          </h2>
          <p className="text-gray-400 mt-2">
            Multiple disciplines, one singular standard of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Feature */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-[2rem] bg-gray-50 h-[500px] border border-gray-100">
            <Image
              fill
              src="https://images.unsplash.com/photo-1643780668909-580822430155?q=80&w=2070"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="DNA Research"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent p-10 flex flex-col justify-end">
              <h3 className="text-3xl font-bold text-headerGray">Genomic Repair</h3>
              <p className="text-gray-600 mt-2 max-w-sm">
                Targeted intervention protocols for cellular longevity.
              </p>
            </div>
          </div>

          {/* Side Feature */}
          <div className="md:col-span-5 group relative overflow-hidden rounded-[2rem] bg-secondary h-[500px]">
            <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
            <Image
              fill
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070"
              className="w-full h-full object-cover opacity-60"
              alt="Analysis"
            />
            <div className="absolute inset-0 p-10 text-white flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.3em]">
                Micro-Analytics
              </span>
              <h3 className="text-4xl font-bold leading-tight">
                Biometric <br />
                Synthesis
              </h3>
            </div>
          </div>

          {/* Lower Grid (3 Images) */}
          {[
            {
              title: "Metabolic AI",
              img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2071",
            },
            {
              title: "Neuro-Mapping",
              img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop",
            },
            {
              title: "Bio-Optics",
              img: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="md:col-span-4 group relative overflow-hidden rounded-[2rem] h-[350px] border border-gray-100 shadow-sm"
            >
              <Image
                fill
                src={item.img}
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-90"
                alt={item.title}
              />
              {/* <div className="absolute inset-0 flex items-center justify-center bg-white/0 group-hover:bg-white/80 transition-all duration-300">
                <span className="opacity-0 group-hover:opacity-100 text-black font-black uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-all">
                  View Case Study
                </span>
              </div> */}
              <div className="absolute bottom-6 left-6 text-black group-hover:opacity-0 transition-opacity">
                <p className="font-bold text-lg">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SCIENTIFIC STATS (Blue Touch) */}
      {/* <section
        className="bg-white py-24 border-y border-gray-100"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
          backgroundSize: "30px 30px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { num: "99.9%", label: "Accuracy" },
              { num: "24/7", label: "Monitoring" },
              { num: "ISO-5", label: "Cleanroom" },
              { num: "15k+", label: "Data Points" },
            ].map((stat, i) => (
              <div key={i} className="text-center group relative">
                {i !== 3 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-gray-100" />
                )}

                <span className="block text-5xl md:text-7xl font-black text-black mb-2 group-hover:text-secondary transition-colors duration-500 tracking-tighter">
                  {stat.num}
                </span>

                <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.5em] ml-2">
                  {stat.label}
                </span>

                <div className="mt-4 w-0 h-[2px] bg-secondary mx-auto group-hover:w-12 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* 4. THE MANIFESTO: Deep Content Section */}
      <section className="py-10 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              We don&apos;t just study life; <br />
              <span className="text-secondary">
                we engineer the best version of it.
              </span>
            </h2>
          </div>
          <div className="columns-1 md:columns-2 gap-12 space-y-8 text-gray-500 text-lg leading-relaxed text-justify">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left">
              The GeneVeda Biosciences R&D standard is rooted in the belief that
              &quot;standardized&quot; medicine is a relic of the past. Our
              facility operates as a vertical ecosystem, where discoveries in{" "}
              <strong>Genomics</strong> immediately inform our{" "}
              <strong>Clinical</strong> trials.
            </p>
            <p>
              By utilizing a blue-spectrum AI analysis, we can identify protein
              misfolding years before traditional symptoms manifest. This
              proactive stance is what defines the GeneVeda Biosciences advantage.
            </p>
            <p>
              Our researchers are encouraged to explore &quot;Edge
              Cases&quot;—the rare genetic anomalies that often hold the key to
              universal longevity. It is here, in the margins of science, that
              we find the breakthroughs of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION (Contained Box) */}
      <section className="pt-10 px-6">
        <div className="max-w-7xl mx-auto bg-tertiary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-headerGray text-4xl md:text-6xl font-black mb-8">
              Begin the Research.
            </h2>
            <Link
              href="/contact-us"
            >
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

              <span
                className="absolute inset-0 w-full h-full -z-10 transition-transform duration-700 -translate-x-full group-hover:translate-x-full ease-in-out"
                style={{
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                }}
              ></span>

              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Contact R&D Department
              </span>
            </button>
            </Link>
          </div>
          {/* Visual Flourish: Blue Radial Gradient */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]"></div>
        </div>
      </section>
    </div>
  );
};

export default RDPage;
