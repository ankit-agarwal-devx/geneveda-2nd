"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FileText, BookOpen, Search, CheckCircle, 
  PenTool, Quote, Award, ArrowRight,
  ShieldCheck, Languages, Microscope, GraduationCap,
  FlaskConical, FileCheck2
} from "lucide-react";

export default function ThesisConsultancyPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      
      {/* --- 01. EDITORIAL HERO --- */}
      <section
  className="relative  h-[70vh] pt-32 pb-24 px-6 lg:px-20 border-b border-zinc-100 overflow-hidden"
  style={{
    backgroundImage: `
      linear-gradient(
        to bottom right,
        rgba(10,25,40,.55),
        rgba(0,0,0,.45)
      ),
      url("https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2000")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dot grid */}
  <div
    className="absolute inset-0 opacity-25"
    style={{
      backgroundImage:
        "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
      backgroundSize: "30px 30px",
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-end gap-12">

    <div className="flex-1">

      <motion.span
        {...fadeIn}
        className="text-white font-black uppercase tracking-[0.4em] text-[10px] mb-6 block"
      >
        Academic Excellence & Integrity
      </motion.span>

      <motion.h1
        {...fadeIn}
        className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-8 text-white"
      >
        Mastering the <br />
        <span className="text-secondary italic">Scientific</span> Narrative.
      </motion.h1>

      <p className="text-white/80 text-lg font-medium max-w-xl leading-relaxed">
        From Master’s dissertations to Doctoral theses, we deliver editorial rigor
        and technical precision for high-impact academic success.
      </p>

    </div>

  </div>
</section>

      <section className="py-10 px-6 bg-slate-50">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="text-center mb-10">
      <span className="text-blueShade text-xs font-black uppercase tracking-[0.4em]">
        Thesis Support Ecosystem
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-6">
        End-to-End Academic Writing & Research Assistance
      </h2>

      <p className="max-w-3xl mx-auto text-slate-500 leading-relaxed">
        We help postgraduate and doctoral scholars transform complex research into
        publication-ready theses. Our workflow blends scientific rigor, structured
        writing, statistical validation, and compliance with global academic standards.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid md:grid-cols-3 gap-10">

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <BookOpen className="w-8 h-8 text-indigo-500 mb-4" />
        <h3 className="font-bold text-lg mb-3">Thesis Structuring</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Complete framework design including chapter flow, logical argument mapping,
          research objectives, and institutional formatting guidelines.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <FlaskConical className="w-8 h-8 text-emerald-500 mb-4" />
        <h3 className="font-bold text-lg mb-3">Methodology Development</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Experimental planning, protocol drafting, statistical justification,
          and validation aligned with biotechnology and life-science research.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <PenTool className="w-8 h-8 text-rose-500 mb-4" />
        <h3 className="font-bold text-lg mb-3">Scientific Writing</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Technical content creation across Introduction, Results, Discussion, and
          Conclusion — preserving your scientific voice.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <FileCheck2 className="w-8 h-8 text-sky-500 mb-4" />
        <h3 className="font-bold text-lg mb-3">Editing & Plagiarism Control</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Language polishing, journal-grade formatting, citation management,
          and Turnitin-safe originality checks.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <GraduationCap className="w-8 h-8 text-violet-500 mb-4" />
        <h3 className="font-bold text-lg mb-3">Supervisor Review Support</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          Iterative revisions based on guide feedback, committee comments,
          and viva preparation materials.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <ShieldCheck className="w-8 h-8 text-amber-500 mb-4" />
        <h3 className="font-bold text-lg mb-3">Ethical & Confidential</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          NDA-protected workflows, data privacy, and compliance with university
          academic integrity policies.
        </p>
      </div>

    </div>

    {/* Bottom Trust Section */}
    <div className="mt-10 grid md:grid-cols-2 gap-12 items-center">

      <div>
        <h3 className="text-2xl font-extrabold mb-4">
          Designed for Serious Researchers
        </h3>

        <p className="text-slate-500 leading-relaxed mb-6">
          Whether you’re preparing an MSc dissertation or PhD thesis, our
          multidisciplinary team supports your journey from raw data to
          final submission — eliminating uncertainty, delays, and revision fatigue.
        </p>

        <ul className="space-y-3 text-sm text-slate-600">
          <li>• Life-science domain specialists</li>
          <li>• Structured milestone delivery</li>
          <li>• Statistical validation</li>
          <li>• Journal-ready formatting</li>
          <li>• Dedicated academic coordinator</li>
        </ul>
      </div>

      <div className="bg-white p-10 rounded-3xl border shadow-sm">
        <h4 className="font-bold mb-4">Why Scholars Choose Us</h4>

        <p className="text-slate-500 text-sm leading-relaxed mb-4">
          Traditional writing agencies lack scientific depth. We operate as
          an academic extension of your research — combining biotechnology
          expertise with professional editorial execution.
        </p>

        <p className="text-slate-500 text-sm leading-relaxed">
          Our goal is simple: deliver submission-ready theses that reflect
          genuine scholarship and withstand rigorous academic review.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* --- 02. CORE PILLARS (Image + Content Blocks) --- */}
      <section className="py-5 px-6 lg:px-20 space-y-12">
        
        {/* Pillar 1: Thesis Support */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div {...fadeIn} className="flex-1 relative h-[500px] w-full rounded-[4rem] overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200" fill className="object-cover" alt="Thesis Planning" />
          </motion.div>
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-secondary"><GraduationCap /></div>
            <h2 className="text-4xl font-black uppercase tracking-tight">Thesis & Dissertation <br />Consultancy</h2>
            <p className="text-zinc-500 font-medium leading-relaxed">
              We assist scholars in structuring their research into a cohesive academic document. Our support includes abstract framing, literature review synthesis, and methodology validation.
            </p>
            <ul className="space-y-3 pt-4">
              {["Chapter-wise Mentoring", "Structural Formatting", "Reference Management (Mendeley/EndNote)"].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold text-zinc-700">
                  <CheckCircle size={18} className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pillar 2: Manuscript Editing */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <motion.div {...fadeIn} className="flex-1 relative h-[500px] w-full rounded-[4rem] overflow-hidden shadow-2xl">
            <Image src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200" fill className="object-cover" alt="Manuscript Review" />
          </motion.div>
          <div className="flex-1 space-y-6">
            <div className="w-12 h-12 bg-zinc-100 rounded-2xl flex items-center justify-center text-secondary"><FileText /></div>
            <h2 className="text-4xl font-black uppercase tracking-tight">Manuscript Polishing <br />for High-Impact Journals</h2>
            <p className="text-zinc-500 font-medium leading-relaxed">
              Bridge the gap between raw data and publication. We refine your language, logic, and data presentation to meet the standards of Scopus, Web of Science, and PubMed indexed journals.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <p className="font-black text-xs uppercase text-zinc-400 mb-1">Impact</p>
                <p className="text-sm font-bold uppercase">Journal Sync</p>
              </div>
              <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                <p className="font-black text-xs uppercase text-zinc-400 mb-1">Quality</p>
                <p className="text-sm font-bold uppercase">Peer Reviewed</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* --- 03. INTEGRITY SECTION (Greyish Feature) --- */}
      <section className="py-10 px-6 bg-zinc-100">
        <div className="max-w-7xl mx-auto rounded-[5rem] bg-zinc-900 p-6 md:p-10 text-white relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                Zero Tolerance <br /> For <span className="text-secondary">Plagiarism.</span>
              </h2>
              <p className="text-zinc-400 font-medium mb-10 leading-relaxed">
                Academic integrity is our cornerstone. We utilize industry-leading Turnitin protocols to ensure your scientific work is 100% original and ethically sound.
              </p>
              <div className="space-y-4">
                {["Detailed Turnitin Similarity Reports", "Manual Paraphrasing by Subject Experts", "Citation & Bibliography Correction"].map(check => (
                  <div key={check} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                    <ShieldCheck className="text-secondary" /> {check}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-[3rem] overflow-hidden border border-white/10 opacity-50">
               <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800" fill className="object-cover" alt="Plagiarism Check" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Languages size={40} className="text-[#4164A5]" />
            <h4 className="text-xl font-black uppercase">Language <br />Polishing</h4>
            <p className="text-zinc-400 text-sm font-medium">Removing grammatical barriers for non-native English speakers.</p>
          </div>
          <div className="space-y-4">
            <Microscope size={40} className="text-[#4164A5]" />
            <h4 className="text-xl font-black uppercase">Technical <br />Validation</h4>
            <p className="text-zinc-400 text-sm font-medium">Review by PhD subject experts in Biology, Biotech, and Pharma.</p>
          </div>
          <div className="space-y-4">
            <Award size={40} className="text-[#4164A5]" />
            <h4 className="text-xl font-black uppercase">Grant <br />Proposals</h4>
            <p className="text-zinc-400 text-sm font-medium">Writing strategies that effectively secure research funding.</p>
          </div>
        </div>
      </section>

    </div>
  );
}