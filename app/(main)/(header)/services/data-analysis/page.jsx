"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DataAnalysis = () => {
  const [activeTab, setActiveTab] = useState("genomics");

  const analysisTypes = [
    {
      id: "genomics",
      name: "Genomics",
      image: "/images/fromClient/genomics.jpeg",
      description:
        "Comprehensive analysis of DNA and RNA sequences to uncover genetic variations, gene expression patterns, and regulatory elements. From SNP calling to RNA-Seq differential expression, we provide deep insights into your biological data.",
    },
    {
      id: "proteomics",
      name: "Proteomics",
      image: "/images/fromClient/proteomics.jpeg",
      description:
        "Quantitative and qualitative analysis of proteins to understand their structure, function, and interactions. Mass spectrometry data processing, protein identification, and post-translational modification analysis are our forte.",
    },
    {
      id: "metagenomics",
      name: "Metagenomics",
      // icon: "🦠",
      image: "/images/fromClient/metagenomics.jpeg",
      description:
        "Explore microbial communities without cultivation. Our metagenomics analysis identifies species, quantifies abundance, and predicts functional pathways in diverse environmental and clinical samples.",
    },
    {
      id: "cheminformatics",
      name: "Cheminformatics",
      image: "/images/fromClient/cheminformatics.jpeg",
      description:
        "Leveraging computational methods to analyze chemical information. From virtual screening for drug discovery to ADMET prediction and lead optimization, we accelerate your chemical research.",
    },
  ];

  const statCards = [
    {
      value: "99%",
      label: "Accuracy",
      color: "bg-white",
      textColor: "text-primary",
      icon: "✅",
    },
    {
      value: "3M+",
      label: "Datasets Processed",
      color: "bg-white",
      textColor: "text-primary",
      icon: "📊",
    },
    {
      value: "10+",
      label: "Years Experience",
      color: "bg-white",
      textColor: "text-primary",
      icon: "⭐",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const activeAnalysisType = analysisTypes.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 text-headerGray font-sans pt-20 selection:bg-secondary/20">
      {/* --- HERO SECTION (Lightened) --- */}
      <section
  className="relative h-[70vh] overflow-hidden border-b border-slate-100"
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
    filter: "saturate(0.7) contrast(0.9)",
  }}
>

  {/* Dot grid */}
  <div
    className="absolute inset-0 opacity-20"
    style={{
      backgroundImage:
        "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
      backgroundSize: "30px 30px",
    }}
  />

  {/* Soft glow */}
  <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-secondary/20 blur-[160px]" />
  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blueShade/20 blur-[160px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-15">

    <span className="inline-block px-4 py-0.5 rounded-full bg-white/10 backdrop-blur text-white text-[10px] font-black uppercase tracking-widest mb-6 border border-white/20">
      Bioinformatics & Analytics
    </span>

    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 max-w-3xl">
      Insightful <span className="text-secondary italic">Data Analysis</span>
    </h1>

    <p className="max-w-xl text-white/80 text-base md:text-lg leading-relaxed mb-10">
      Translating biological datasets into meaningful conclusions using
      statistical modeling, visualization pipelines, and domain-specific
      interpretation.
    </p>

    {/* Micro capabilities */}
    <div className="flex flex-wrap gap-6 text-sm text-white/70 font-medium">
      <span>NGS Pipelines</span>
      <span>Statistical Modeling</span>
      <span>Visualization</span>
      <span>Result Interpretation</span>
    </div>

  </div>
</section>

<section className="bg-white py-5 border-b border-slate-100">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section header */}
    <div className="max-w-3xl mb-8">
      <h2 className="text-3xl md:text-4xl font-black text-headerGray mb-4">
        Comprehensive <span className="text-secondary italic">Data Analysis</span> Services
      </h2>

      <p className="text-slate-600 leading-relaxed">
        From raw biological datasets to publication-ready insights — we provide
        end-to-end analytical support tailored for life science researchers.
      </p>
    </div>

    {/* Feature grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Card */}
      <div className="flex gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
          📊
        </div>
        <div>
          <h3 className="font-bold text-headerGray mb-1">Statistical Modeling</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Hypothesis testing, regression models, survival analysis, and
            experimental statistics using R and Python.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-100 flex items-center justify-center">
          🧬
        </div>
        <div>
          <h3 className="font-bold text-headerGray mb-1">Omics Data Processing</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            RNA-seq, proteomics, metabolomics pipelines with quality control,
            normalization, and differential expression.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-rose-100 flex items-center justify-center">
          📈
        </div>
        <div>
          <h3 className="font-bold text-headerGray mb-1">Visualization & Reporting</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Publication-ready figures, heatmaps, volcano plots, PCA, and dashboards.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center">
          🤖
        </div>
        <div>
          <h3 className="font-bold text-headerGray mb-1">Machine Learning</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Classification, clustering, feature selection, and predictive modeling
            for biological datasets.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-sky-100 flex items-center justify-center">
          🧪
        </div>
        <div>
          <h3 className="font-bold text-headerGray mb-1">Experimental Interpretation</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Biological context mapping, pathway enrichment, and literature-driven insights.
          </p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-violet-100 flex items-center justify-center">
          📄
        </div>
        <div>
          <h3 className="font-bold text-headerGray mb-1">Journal-Ready Outputs</h3>
          <p className="text-sm text-slate-500 leading-relaxed">
            Tables, figures, methods descriptions, and reviewer-friendly summaries.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>


      {/* --- KEY STATISTICS (Cards are now White with Green accents) --- */}
      {/* <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {statCards.map((card, index) => (
              <motion.div
                key={index}
                className={`bg-white p-10 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 transform hover:-translate-y-2 transition-all duration-300 group`}
                variants={itemVariants}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div className="text-5xl font-black text-primary mb-2">
                  {card.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-slate-400">
                  {card.label}
                </div>
                <div className="mt-6 h-1 w-12 bg-secondary/20 mx-auto group-hover:w-20 group-hover:bg-secondary transition-all" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}
      

      {/* --- ANALYSIS TYPES SECTION --- */}
      <section className="py-10 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-headerGray mb-4">
              Specialized Analysis Domains
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto rounded-full" />
          </div>

          {/* TABS */}
          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {analysisTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`py-3 px-8 rounded-2xl font-bold text-sm tracking-wide transition-all duration-300
                  ${
                    activeTab === type.id
                      ? "bg-headerGray text-white shadow-xl shadow-primary/20 scale-105"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
              >
                {type.name}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-50 p-10 md:p-16 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center gap-12"
          >
            <div className="md:w-1/3 flex justify-center items-center text-9xl p-12 rounded-[2.5rem] bg-white shadow-inner">
              {activeAnalysisType?.image ? (
                <Image
                  src={activeAnalysisType.image}
                  alt={`${activeAnalysisType.name} visual`}
                  width={260}
                  height={260}
                  className="rounded-2xl object-cover"
                />
              ) : (
                activeAnalysisType?.icon
              )}
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-4xl font-black text-headerGray mb-6">
                {activeAnalysisType?.name}
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {activeAnalysisType?.description}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- WORKFLOW SECTION --- */}
      <section className="py-10 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black text-headerGray text-center mb-8">
            Analysis Workflow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-12 z-0" />

            {[
              "Data Pre-processing",
              "Statistical Modeling",
              "Visualization",
              "Reporting",
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10 p-8 bg-white rounded-3xl shadow-lg border border-slate-100 hover:border-secondary transition-colors group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-2xl bg-headerGray text-white flex items-center justify-center text-xl font-black mb-6 group-hover:bg-secondary transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-xl font-extrabold text-headerGray mb-3">
                  {step}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Rigorous quality control and normalization to ensure data
                  integrity.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalysis;
