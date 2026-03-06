"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Dna,
  TestTube2,
  Scissors,
  Microscope,
  ArrowRight,
  ShieldCheck,
  Waves,
  FlaskConical,
  CheckCircle2,
  Zap,
  Layers,
  MoveRight,
  Shield,
  Beaker,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BiotechService = () => {
  const features = [
    { name: "Molecular Cloning", icon: <Dna className="text-blueShade" /> },
    {
      name: "Recombinant Expression",
      icon: <TestTube2 className="text-secondary" />,
    },
    {
      name: "CRISPR/Cas9 Editing",
      icon: <Scissors className="text-blueShade" />,
    },
    { name: "Real-time qPCR", icon: <Microscope className="text-secondary" /> },
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* --- HERO SECTION --- */}
      <section
        className="relative pt-10 pb-32 px-6 lg:px-20 overflow-hidden bg-black"
        style={{
          backgroundImage: `
          linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(10,25,40,0.7)),
          url("https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2000")
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Precision Grid Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #4BAF4F 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Atmospheric Glow */}
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-secondary/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              {/* Top Badge */}
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-secondary" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-secondary">
                  Advanced Molecular Systems
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.85] text-white mb-10">
                SYNTHETIC <br />
                <span className="text-secondary italic">INTELLIGENCE.</span>
              </h1>

              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12 font-medium">
                Bridging the gap between biological hardware and digital
                precision. Our platforms integrate{" "}
                <span className="text-white">CRISPR-driven engineering</span>{" "}
                with real-time molecular analytics to redefine the limits of
                synthetic biology.
              </p>
            </motion.div>

            {/* Side Feature Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-4 lg:border-l border-white/10 lg:pl-12 pb-4"
            >
              <div className="space-y-10">
                {[
                  {
                    icon: <Shield size={20} />,
                    title: "ISO-7 Certified",
                    desc: "Clinically sterile environments for sensitive protocols.",
                  },
                  {
                    icon: <Zap size={20} />,
                    title: "Rapid Iteration",
                    desc: "Accelerating discovery cycles by 40% through automation.",
                  },
                  {
                    icon: <Beaker size={20} />,
                    title: "Multi-Omics",
                    desc: "Integrated analysis across genomic and proteomic scales.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-secondary mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Dynamic Stats Row */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-5 border-t border-white/10">
            {[
              ["99.9%", "Sequence Fidelity"],
              ["450+", "Active Bio-Assets"],
              ["24/7", "Autonomous Monitoring"],
              ["GLP", "Compliant Standards"],
            ].map(([val, label]) => (
              <div key={label} className="group cursor-default">
                <div className="text-3xl font-black text-white group-hover:text-secondary transition-colors duration-300">
                  {val}
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </section>

      <section className="py-10 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-secondary text-xs font-bold tracking-widest uppercase">
              Our Capabilities
            </span>

            <h2 className="text-3xl text-headerGray md:text-4xl font-extrabold mt-4 mb-6">
              Accelerating Discovery Through Integrated Wetlab Services
            </h2>

            <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
              We provide end-to-end laboratory infrastructure, scientific
              expertise, and scalable workflows designed to support biotech
              startups, academic researchers, and life science enterprises at
              every stage of innovation.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-10 mb-24">
            <div className="bg-white p-8 rounded-3xl shadow-sm border hover:shadow-xl transition">
              <Dna size={34} className="text-secondary mb-4" />
              <h3 className="font-bold text-headerGray text-lg mb-3">Genomic Engineering</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                From CRISPR design to clone validation, we deliver precise
                genome editing pipelines with automation-backed QC for
                functional genomics and cell line development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border hover:shadow-xl transition">
              <FlaskConical size={34} className="text-blueShade mb-4" />
              <h3 className="font-bold text-headerGray text-lg mb-3">Protein Expression</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Expression platforms across bacterial, insect, and mammalian
                systems supporting purification, analytics, and structural
                biology workflows.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border hover:shadow-xl transition">
              <Microscope size={34} className="text-emerald-500 mb-4" />
              <h3 className="font-bold text-headerGray text-lg mb-3">Cell Culture & Assays</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Controlled environments for adherent and suspension cultures
                paired with custom assay development and reproducible biological
                insights.
              </p>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-2xl text-headerGray font-extrabold mb-4">
                Built for Startups. Trusted by Scientists.
              </h3>

              <p className="text-slate-500 leading-relaxed mb-8">
                Whether validating early hypotheses or scaling therapeutic
                pipelines, our flexible wetlab model removes infrastructure
                barriers. Teams gain immediate access to instrumentation, expert
                support, and standardized protocols — without capital-heavy lab
                investments.
              </p>

              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-secondary" />
                  Fully equipped shared and private lab spaces
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-blueShade" />
                  On-demand scientific consultation
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Regulatory-compliant workflows
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-purple-500" />
                  Secure sample management
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-rose-500" />
                  Scalable project execution
                </li>
              </ul>
            </div>

            {/* Value Box */}
            <div className="bg-white p-10 rounded-3xl border shadow-sm">
              <Zap size={28} className="text-secondary mb-4" />

              <h4 className="font-bold text-headerGray mb-4">Why Teams Choose Us</h4>

              <p className="text-slate-500 text-sm leading-relaxed mb-5">
                We combine modern laboratory infrastructure with startup-speed
                execution. Our platform eliminates operational friction so
                researchers can focus entirely on innovation.
              </p>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                By integrating wetlab services, scientific expertise, and
                collaborative environments, we help transform ideas into
                validated biological outcomes faster than traditional lab
                setups.
              </p>

              <div className="flex items-center gap-3 text-sm font-medium text-black">
                <Layers size={18} className="text-blueShade" />
                Modular labs. Predictable costs. Faster results.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROTOCOLS SECTION --- */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-10">
            <h2 className="text-4xl font-black text-headerGray mb-4">
              Standard Operating Protocols
            </h2>
            <div className="h-1.5 w-16 bg-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Validation", desc: "Sample integrity check." },
              { title: "Extraction", desc: "High-purity isolation." },
              { title: "Analysis", desc: "Precision measurement." },
              { title: "Reporting", desc: "ISO-compliant data." },
            ].map((step, idx) => (
              <div
                key={idx}
                className="group p-10 bg-white rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blueShade/5 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-slate-50 text-blueShade rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-300 border border-slate-100">
                  <span className="text-xl font-black">0{idx + 1}</span>
                </div>
                <h4 className="font-black text-headerGray mb-3 uppercase tracking-tighter">
                  Phase: {step.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {step.desc} Rigorous compliance for every biological sample.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PIPELINE DIAGRAM SECTION --- */}
      {/* <section className="py-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto rounded-[4rem] border border-slate-100 bg-slate-50 p-12 shadow-inner relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-secondary">
            <Waves size={200} />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-black text-headerGray mb-10 text-center">
              Our <span className="text-secondary">CRISPR</span> Workflow
              Pipeline
            </h3>

            <div className="bg-white rounded-[3rem] p-2 border border-gray-100 shadow-2xl overflow-hidden group">
              <div className="h-40 md:h-80 w-full bg-white flex items-center justify-center relative overflow-hidden rounded-[2.5rem]">
                <Image
  src="/images/crisprPipeline1.png"
  alt="CRISPR Technology Pipeline"
  fill
  className="object-contain md:object-cover transition-transform duration-700 group-hover:scale-110"
  priority
/>

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl border border-slate-200 shadow-sm">
                <ShieldCheck className="text-secondary" size={20} />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Proprietary <span className="text-blueShade">End-to-End</span>{" "}
                  Workflow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default BiotechService;
