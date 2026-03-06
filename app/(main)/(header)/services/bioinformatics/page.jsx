"use client";
import React, { useState } from "react";
import {
  Cpu,
  Dna,
  Database,
  Microscope,
  ArrowRight,
  Brain,
  ShieldCheck,
} from "lucide-react";

const BioInformatics = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "BioInformatics",
    message: "",
  });

  const services = [
    {
      title: "Genomics & Transcriptomics",
      desc: "De novo assembly, RNA-Seq analysis, and variant calling using high-end pipelines.",
      icon: "🧬",
    },
    {
      title: "Structural Bioinformatics",
      desc: "Molecular docking, protein modeling (AlphaFold2), and MD simulations.",
      icon: "🧪",
    },
    {
      title: "Metagenomics",
      desc: "Microbiome profiling (16S/18S/ITS) and shotgun metagenomic analysis.",
      icon: "🦠",
    },
    {
      title: "Cheminformatics",
      desc: "Virtual screening, QSAR modeling, and lead optimization for drug discovery.",
      icon: "💊",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-20 selection:bg-secondary/30 selection:text-primary">
      {/* --- HERO SECTION (Light Mode Refined) --- */}
      <section
  className="relative h-[70vh] overflow-hidden py-20 lg:py-24 border-b border-slate-100"
  style={{
    backgroundImage: `
      linear-gradient(
        to bottom right,
        rgba(10,25,40,.35),
        rgba(0,0,0,.25)
      ),
      url("/images/fromClient/data-analysis.jpeg")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Subtle dot grid */}
  <div
    className="absolute inset-0 opacity-25"
    style={{
      backgroundImage:
        "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
      backgroundSize: "30px 30px",
    }}
  />

  {/* Soft color glow */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-secondary/20 blur-[160px]" />
  <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blueShade/20 blur-[160px]" />

  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col items-center text-center">

      <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur text-white text-xs font-bold uppercase tracking-widest mb-8 border border-white/20">
        Computational Excellence
      </span>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
        Bio<span className="text-secondary italic">Informatics</span>{" "}
        Solutions
      </h1>

      <p className="max-w-2xl text-white/80 text-lg md:text-xl mb-12 leading-relaxed">
        Transforming complex biological big data into actionable insights.
        From NGS pipelines to molecular docking, we empower your research
        with computational precision.
      </p>

      {/* Scroll hint */}
      <div className="mt-20 animate-bounce text-white/70 text-xs tracking-widest uppercase">
        Scroll ↓
      </div>

    </div>
  </div>
</section>


      {/* --- SERVICES GRID --- */}
      <section className="py-10 container mx-auto px-6">
        <div className="text-center mb-5">
          <h2 className="text-3xl font-bold text-headerGray mb-4">
            Our Computational Expertise
          </h2>
          <div className="h-1.5 w-16 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:shadow-secondary/5 hover:-translate-y-2 transition-all duration-300 border-b-4 hover:border-b-secondary"
            >
              <div className="text-4xl mb-6 p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-secondary/10 transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 px-6 bg-white border-b border-slate-100">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="max-w-3xl mb-5">
      <span className="text-secondary text-xs font-bold uppercase tracking-widest">
        Platform Overview
      </span>

      <h2 className="text-3xl text-headerGray md:text-4xl font-extrabold mt-4 mb-6">
        Turning Biological Complexity Into Computational Clarity
      </h2>

      <p className="text-slate-500 leading-relaxed">
        Our bioinformatics platform integrates sequencing analysis, molecular
        modeling, and AI-driven interpretation into a unified research
        environment. From raw biological signals to validated insights — every
        layer is engineered for scientific accuracy and operational speed.
      </p>
    </div>

    {/* Feature Grid */}
    <div className="grid md:grid-cols-3 gap-12 mb-10">

      <div>
        <Dna className="text-secondary mb-4" size={32} />
        <h3 className="font-bold text-headerGray text-lg mb-3">NGS & Genomic Pipelines</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          End-to-end processing for whole genome, RNA-seq, and targeted panels
          including QC, alignment, variant calling, and annotation.
        </p>
      </div>

      <div>
        <Database className="text-blueShade mb-4" size={32} />
        <h3 className="font-bold text-headerGray text-lg mb-3">Biological Data Architecture</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Structured storage for multi-omics datasets with traceable metadata,
          reproducible workflows, and secure sample lineage tracking.
        </p>
      </div>

      <div>
        <Microscope className="text-emerald-500 mb-4" size={32} />
        <h3 className="font-bold text-headerGray text-lg mb-3">Structural Modeling</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Protein folding, docking simulations, and ligand interaction analysis
          to accelerate therapeutic target validation.
        </p>
      </div>

      <div>
        <Brain className="text-purple-500 mb-4" size={32} />
        <h3 className="font-bold text-headerGray text-lg mb-3">AI-Assisted Interpretation</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Machine learning models extract patterns across expression profiles,
          phenotypes, and molecular networks.
        </p>
      </div>

      <div>
        <Cpu className="text-rose-500 mb-4" size={32} />
        <h3 className="font-bold text-headerGray text-lg mb-3">High Performance Compute</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Scalable cloud and on-prem execution optimized for parallel biological
          workloads and large dataset processing.
        </p>
      </div>

      <div>
        <ShieldCheck className="text-amber-500 mb-4" size={32} />
        <h3 className="font-bold text-headerGray text-lg mb-3">Compliance & Security</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Role-based access, encrypted storage, audit trails, and regulatory-ready
          workflows designed for clinical-grade environments.
        </p>
      </div>

    </div>

    {/* Bottom Value Strip */}
    {/* <div className="grid md:grid-cols-3 gap-10 bg-slate-50 p-12 rounded-3xl border">

      <div>
        <p className="text-3xl font-extrabold text-secondary mb-2">10M+</p>
        <p className="text-sm text-slate-500">
          Genomic variants processed monthly
        </p>
      </div>

      <div>
        <p className="text-3xl font-extrabold text-blueShade mb-2">400+</p>
        <p className="text-sm text-slate-500">
          Active research pipelines
        </p>
      </div>

      <div>
        <p className="text-3xl font-extrabold text-emerald-500 mb-2">99.9%</p>
        <p className="text-sm text-slate-500">
          Platform uptime across compute clusters
        </p>
      </div>

    </div> */}

  </div>
</section>

      {/* --- ANALYSIS SECTION --- */}
      <section className="bg-white py-10 border-y border-slate-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl text-headerGray font-bold text-primary mb-8">
              Publication-Ready Analysis
            </h2>
            <ul className="space-y-6">
              {[
                "Custom R/Python Visualization",
                "Statistical Validation (p-values/FDR)",
                "Standardized Workflow Reports",
                "Pathway Enrichment (KEGG/GO)",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-slate-700 font-semibold"
                >
                  <span className="w-6 h-6 rounded-lg bg-secondary text-white flex items-center justify-center text-[10px]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Code Animation Box - Light Mode "Terminal" */}
          <div className="flex-1 w-full h-80 bg-slate-900 rounded-[2rem] flex items-start justify-start text-secondary font-mono text-sm p-8 overflow-hidden relative shadow-2xl">
            <div className="absolute top-4 left-6 flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-slate-500"># Initializing NGS Pipeline v4.2</p>
              <p className="text-blue-400">Loading fastq files...</p>
              <p className="text-secondary">Aligning to GRCh38.p14...</p>
              <p className="text-white animate-pulse">
                {">"} Running DESeq2...
              </p>
              <div className="pt-4 flex items-center gap-2">
                <div className="h-1 w-32 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-2/3 animate-[progress_2s_ease-in-out_infinite]" />
                </div>
                <span className="text-[10px] text-slate-400">
                  Processing...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BioInformatics;
