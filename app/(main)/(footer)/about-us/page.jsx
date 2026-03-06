"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Dna,
  Microscope,
  FlaskConical,
  GraduationCap,
  Globe,
  ShieldCheck,
  FileText,
  Rocket,
  Beaker,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      {/* --- SECTION 1: HERO & INTRODUCTION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div {...fadeIn} className="flex-1">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
              Why Choose <br />
              <span className="text-secondary italic">
                GeneVeda Biosciences?
              </span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-secondary pl-6">
              At GeneVeda Biosciences, we combine science, technology, and
              education to deliver integrated solutions that empower research,
              innovation, and global career development in the life sciences.
              Our multidisciplinary approach makes us a trusted partner for
              students, researchers, academic institutions, startups, and
              biotechnology industries.
            </p>
          </motion.div>
          <div className="flex-1 relative w-full h-[400px] rounded-[3rem] overflow-hidden shadow-xl border border-slate-100">
            <Image
              src="https://images.pexels.com/photos/3912481/pexels-photo-3912481.jpeg?q=80&w=1200"
              fill
              className="object-cover"
              alt="Biotechnology Innovation"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SCIENTIFIC EXPERTISE & R&D --- */}
      <section className="py-10 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 1. Multidisciplinary Expertise */}
          <motion.div
            {...fadeIn}
            className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-200 hover:border-black transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <Microscope className="text-secondary" size={32} />
              <h2 className="text-xl font-black uppercase">
                01. Multidisciplinary Expertise
              </h2>
            </div>
            <p className="text-gray-500 mb-6 text-sm">
              Providing end-to-end solutions from experimental design to
              computational analysis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Academic Research",
                "Industrial R&D",
                "Startup Initiatives",
                "Clinical Studies",
                "Skill Development",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-700"
                >
                  <CheckCircle2 size={14} className="text-secondary" /> {item}
                </div>
              ))}
            </div>
            <div className="relative h-48 mt-8 rounded-2xl overflow-hidden brightness-90 group-hover:brightness-110 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1758691736508-a85d1f7d5a77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fFNraWxsJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDI%3D?q=80&w=800"
                fill
                className="object-cover"
                alt="Research"
              />
            </div>
          </motion.div>

          {/* 2. R&D Focus */}
          <motion.div
            {...fadeIn}
            className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-200 hover:border-black transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <FlaskConical className="text-secondary" size={32} />
              <h2 className="text-2xl font-black uppercase">
                02. Strong R&D Focus
              </h2>
            </div>
            <p className="text-gray-500 mb-6 text-sm">
              Supporting innovation at every stage of discovery with
              research-driven outcomes.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Designing workflows",
                "Optimizing protocols",
                "Validating technologies",
                "Proof-of-concept",
              ].map((t) => (
                <li
                  key={t}
                  className="text-xs font-bold text-slate-600 flex items-center gap-2"
                >
                  {" "}
                  <ArrowRight size={12} className="text-secondary" /> {t}
                </li>
              ))}
            </ul>
            <div className="relative h-48 rounded-2xl overflow-hidden brightness-90 group-hover:brightness-110 transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1587955415524-bb264e518428?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmVzZWFyY2glMjBhbmQlMjBkZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D?q=80&w=800"
                fill
                className="object-cover"
                alt="R&D Lab"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: BIOINFORMATICS & NGS (IMAGE HEAVY) --- */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                {...fadeIn}
                className="p-8 bg-gray-50 rounded-[3rem] border border-slate-100"
              >
                <h3 className="text-xl font-black uppercase mb-4">
                  03. Bioinformatics
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Genomics, Proteomics, Metagenomics, Structural Bio, Machine
                  Learning.
                </p>
              </motion.div>
              <div className="relative h-80 rounded-[3rem] overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1575467252250-c0e889b69d2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fEJpb2luZm9ybWF0aWNzfGVufDB8fDB8fHww?q=80&w=800"
                  fill
                  className="object-cover"
                  alt="Data Analytics"
                />
              </div>
            </div>

            <motion.div
              {...fadeIn}
              className="lg:col-span-2 bg-black text-white p-12 rounded-[4rem] relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-black uppercase text-secondary mb-6">
                  04. End-to-End NGS Services
                </h3>
                <div className="flex flex-col gap-10 max-w-md">
                  {/* Solutions Row */}
                  <div className="group">
                    <p className="font-black text-white group-hover:text-secondary transition-colors mb-3 uppercase tracking-[0.3em] text-[10px]">
                      Solutions
                    </p>
                    <div className="h-px w-full bg-white/10 mb-4 group-hover:bg-secondary/30 transition-colors" />
                    <p className="text-white leading-relaxed text-sm font-medium">
                      WGS, WES, RNA-Seq, Amplicon, <br />
                      Shotgun Metagenomics, <br />
                      Variant Detection.
                    </p>
                  </div>

                  {/* Promise Row */}
                  <div className="group">
                    <p className="font-black text-white group-hover:text-secondary transition-colors mb-3 uppercase tracking-[0.3em] text-[10px]">
                      Our Promise
                    </p>
                    <div className="h-px w-full bg-white/10 mb-4 group-hover:bg-secondary/30 transition-colors" />
                    <p className="text-white leading-relaxed text-sm font-medium">
                      High precision, Fast turnaround, <br />
                      Controlled workflows, <br />
                      Clear reports.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 md:opacity-100 group-hover:opacity-40 transition-opacity">
                <Image
                  src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=800"
                  fill
                  className="object-cover"
                  alt="NGS"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: WET LAB & WRITING (IMAGE BOXES) --- */}
      <section className="py-10 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white p-12 rounded-[4rem] shadow-sm flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-black uppercase mb-6">
                05. Wet Lab
              </h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-4">
                Disciplines
              </p>
              <p className="text-xs text-slate-600 font-medium leading-loose">
                Biotech, Microbiology, Biochemistry, Food Tech, Environmental
                Science, Agriculture, Immunology, Biopharma, Nanotech, Cell
                Culture.
              </p>
            </div>
            <div className="flex-1 relative h-64 md:h-full min-h-[250px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/8442366/pexels-photo-8442366.jpeg?q=80&w=800"
                fill
                className="object-cover"
                alt="Wet Lab"
              />
            </div>
          </div>

          <div className="lg:col-span-5 bg-black text-white p-12 rounded-[4rem] flex flex-col justify-center">
            <h3 className="text-2xl font-black uppercase text-secondary mb-6">
              06. Scientific Writing
            </h3>
            <p className="text-sm text-slate-400 mb-6 font-medium">
              Thesis, Journals, Language Polishing, Plagiarism checks via
              Turnitin. We ensure publication-ready structure.
            </p>
            <div className="flex gap-4">
              <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center text-secondary">
                <CheckCircle2 size={20} />
              </div>
              <div className="h-10 w-10 bg-white/10 rounded-lg flex items-center justify-center text-secondary">
                <CheckCircle2 size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: TRAINING & STUDY ABROAD --- */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 bg-gray-50 p-12 rounded-[4rem] border border-slate-100">
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap className="text-black" size={40} />
              <h3 className="text-3xl font-black uppercase">
                07. Industry-Focused Training
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h5 className="font-black text-secondary uppercase text-xs">
                  Short-Term Modules
                </h5>
                <p className="text-xs font-bold text-slate-600">
                  Lab skills, Bioinformatics tools, NGS Data, Coding for
                  Biology, Hands-on project exposure.
                </p>
              </div>
              <div className="space-y-4">
                <h5 className="font-black text-secondary uppercase text-xs">
                  Long-Term Programs
                </h5>
                <p className="text-xs font-bold text-slate-600">
                  Molecular Biology, Applied Life Sciences, Computational
                  Biology, Mentoring, Career Certification.
                </p>
              </div>
            </div>
            <div className="mt-8 relative h-48 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200"
                fill
                className="object-cover"
                alt="Training"
              />
            </div>
          </div>

          <div className="lg:w-1/3 bg-secondary p-12 rounded-[4rem] text-headerGray flex flex-col justify-between group cursor-default">
            <div>
              <Globe
                className="mb-6 group-hover:rotate-12 transition-transform"
                size={48}
              />
              <h3 className="text-3xl font-black uppercase leading-tight mb-4">
                08. Global Study Abroad
              </h3>
              <p className="text-sm font-bold opacity-70">
                Guidance for international education in Biotech, Bio-med, and
                interdisciplinary fields.
              </p>
            </div>
            <ul className="text-[10px] font-black uppercase space-y-2 mt-8">
              <li>• Profile Evaluation</li>
              <li>• University Selection</li>
              <li>• SOP & LOR Preparation</li>
              <li>• Scholarship Guidance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: QUALITY, CUSTOM & PROMISE (THE WRAP UP) --- */}
      <section className="py-10 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {[
              {
                id: "09",
                title: "Workshops",
                icon: <ArrowRight />,
                desc: "Seminars, Webinars, FDPs and SDPs for institutions.",
              },
              {
                id: "10",
                title: "Ethics",
                icon: <ShieldCheck />,
                desc: "Ethical research and data confidentiality policies.",
              },
              {
                id: "11",
                title: "Customized",
                icon: <ArrowRight />,
                desc: "Tailored reports and flexible project designs.",
              },
              {
                id: "12",
                title: "Commitment",
                icon: <ArrowRight />,
                desc: "Creating pathways for future-ready bioscience careers.",
              },
            ].map((box) => (
              <div
                key={box.id}
                className="p-8 bg-white border-b-4 border-black hover:border-secondary transition-all"
              >
                <span className="text-secondary font-black block mb-4">
                  {box.id}
                </span>
                <h5 className="font-black uppercase mb-2">{box.title}</h5>
                <p className="text-xs text-slate-500 font-medium">{box.desc}</p>
              </div>
            ))}
          </div>

          {/* --- 🌍 OUR PROMISE SECTION (UPDATED) --- */}
          <section className="py-10 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <motion.div
                {...fadeIn}
                className="relative p-12 md:p-24 rounded-[5rem] border-4 border-black group transition-all duration-700 hover:shadow-[0_0_50px_rgba(0,0,0,0.1)]"
              >
                {/* Decorative Background Element */}
                <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Rocket size={200} strokeWidth={1} />
                </div>

                <div className="relative z-10 text-center">
                  <span className="inline-block px-6 py-2 bg-secondary text-black font-black uppercase tracking-[0.3em] text-[10px] rounded-full mb-8">
                    The GeneVeda Commitment
                  </span>

                  <h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12">
                    🌍 Our <br />
                    <span className="text-secondary italic">Promise.</span>
                  </h2>

                  <div className="max-w-3xl mx-auto mb-16">
                    <p className="text-xl md:text-2xl font-bold text-black leading-snug">
                      GeneVeda Biosciences stands as a trusted partner in
                      research, innovation, and global excellence. We are
                      committed to advancing bioscience through{" "}
                      <span className="underline decoration-secondary decoration-4 underline-offset-8">
                        integrity and impact.
                      </span>
                    </p>
                  </div>

                  {/* The 6 Pillars of the Promise */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                      { label: "Research", icon: <Beaker size={20} /> },
                      { label: "Innovation", icon: <Zap size={20} /> },
                      { label: "Training", icon: <GraduationCap size={20} /> },
                      { label: "Sequencing", icon: <Dna size={20} /> },
                      {
                        label: "Scientific Comm.",
                        icon: <FileText size={20} />,
                      },
                      { label: "Global Education", icon: <Globe size={20} /> },
                    ].map((item, idx) => (
                      <motion.div
                        key={item.label}
                        whileHover={{ y: -5 }}
                        className="flex flex-col items-center gap-3 p-6 rounded-3xl bg-gray-50 border border-slate-100 group/item hover:bg-black hover:text-white transition-all duration-300"
                      >
                        <div className="text-secondary group-hover/item:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-center">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-secondary">
                        <ShieldCheck size={24} />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          Quality Assured
                        </p>
                        <p className="text-sm font-bold">
                          Standard Operating Procedures (SOPs)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
