"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaGraduationCap,
  FaMicroscope,
  FaAward,
  FaUserTie,
} from "react-icons/fa";
import Link from "next/link";

const LongTrainingPage = () => {
  const [activePhase, setActivePhase] = useState(0);

  const roadmap = [
    {
      phase: "Phase 01",
      title: "Foundational Molecular Biology",
      duration: "4 Weeks",
      image: "/images/foundational-molecular-biology.png",
      description:
        "Deep dive into DNA replication, protein synthesis, and cellular metabolic pathways.",
      skills: ["Genomic Sequencing", "CRISPR-Cas9 Basics", "Metabolic Flux"],
    },
    {
      phase: "Phase 02",
      title: "Advanced Bioinformatics",
      duration: "6 Weeks",
      image: "/images/advanced-bioinformatics.jfif",
      description:
        "Utilizing computational tools for genomic analysis and structural protein modeling.",
      skills: ["Python for Biology", "R-Statistics", "Molecular Docking"],
    },
    {
      phase: "Phase 03",
      title: "Clinical Lab Management",
      duration: "4 Weeks",
      image: "/images/lab-management.jfif",
      description:
        "Preparing for leadership. Regulatory compliance, QMS, and lab resource optimization.",
      skills: ["ISO 15189", "Staff Mentorship", "Operational Budgeting"],
    },
  ];

  const phases = [
    {
      phase: "Phase 01",
      title: "Foundational Theory",
      desc: "Deep dive into molecular biology, genetic principles, and the core methodologies of modern biotechnology.",
      icon: <FaGraduationCap />,
      color: "#4BAF4F", // Secondary Green
    },
    {
      phase: "Phase 02",
      title: "Advanced Lab Operations",
      desc: "Intensive hands-on training in CRISPR-Cas9, NGS library prep, and advanced protein purification techniques.",
      icon: <FaMicroscope />,
      color: "#3b82f6", // Biotech Blue
    },
    {
      phase: "Phase 03",
      title: "Research Leadership",
      desc: "Designing independent experiments, managing bioinformatics pipelines, and leading project workflows.",
      icon: <FaUserTie />,
      color: "#f59e0b", // Research Orange
    },
    {
      phase: "Phase 04",
      title: "Senior Certification",
      desc: "Final defense of your research portfolio and receipt of the GeneVeda Senior Researcher accreditation.",
      icon: <FaAward />,
      color: "#06b6d4", // Med Teal
    },
  ];

  return (
    <div className="min-h-screen bg-white text-headerGray pt-10 pb-2">
      <section
        className="relative h-[75vh] min-h-[550px] flex items-center justify-center overflow-hidden bg-black"
        style={{
          backgroundImage: `
          linear-gradient(
            to right,
            rgba(0,0,0,0.9) 0%,
            rgba(0,0,0,0.7) 50%,
            rgba(0,0,0,0.4) 100%
          ),
          url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop")
        `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Structural Grid Overlay - representing a "Track" */}
        <div className="absolute inset-0 opacity-20 z-0">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(#4BAF4F 1px, transparent 1px), linear-gradient(90deg, #4BAF4F 1px, transparent 1px)",
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                <span className="text-secondary font-bold uppercase text-[9px] tracking-[0.3em]">
                  Professional Career Track
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Certification <br />
                <span className="text-secondary italic">Specialization</span>
              </h1>

              <p className="max-w-md text-slate-300 text-base md:text-lg mb-10 leading-relaxed">
                Designed for career-level mastery. Progress through structured
                phases to earn your{" "}
                <span className="text-white font-bold">
                  GeneVeda Senior Researcher Certification.
                </span>
              </p>
            </motion.div>

            {/* Abstract Track Visual (Right Side) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden lg:flex justify-end"
            >
              <div className="relative p-8 border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl max-w-sm">
                <div className="flex flex-col gap-6">
                  {[
                    { phase: "01", label: "Fundamental Mastery" },
                    { phase: "02", label: "Advanced Lab Ops" },
                    { phase: "03", label: "Senior Research Lead" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <span className="text-secondary font-black text-xl opacity-40 group-hover:opacity-100 transition-opacity">
                        {step.phase}
                      </span>
                      <div className="h-[1px] w-8 bg-white/20" />
                      <span className="text-white text-xs font-bold uppercase tracking-wider">
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Subtle Bottom Fade out to Content */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>
      <div className="container mx-auto p-6">
        {/* HEADER */}
        <header className="mb-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-secondary font-mono tracking-widest text-sm uppercase">
              Certification Track
            </span>
            <h1 className="text-4xl font-bold mt-4 mb-6 uppercase">
              Long-Term <span className="text-secondary">Specialization</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our professional tracks are designed for career-level mastery.
              Progress through structured phases to earn your GeneVeda
              Biosciences Senior Researcher Certification.
            </p>
          </motion.div>
        </header>

        {/* ROADMAP */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT NAV */}
          <div className="lg:col-span-4 space-y-4">
            {roadmap.map((item, i) => (
              <motion.button
                key={i}
                onClick={() => setActivePhase(i)}
                className={`w-full text-left p-6 rounded-2xl border transition-all ${
                  activePhase === i
                    ? "bg-secondary/10 border-secondary shadow-lg"
                    : "bg-gray-50 border-gray-200 hover:border-secondary/40"
                }`}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`font-mono text-xs ${
                      activePhase === i ? "text-secondary" : "text-gray-500"
                    }`}
                  >
                    {item.phase}
                  </span>
                  <span className="text-[10px] text-gray-500">
                    {item.duration}
                  </span>
                </div>
                <h3
                  className={`font-bold ${
                    activePhase === i ? "text-black" : "text-gray-700"
                  }`}
                >
                  {item.title}
                </h3>
              </motion.button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-50 border border-gray-200 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden"
              >
                {/* BIG PHASE NUMBER */}
                <div className="absolute top-0 right-0 p-8 text-secondary/10 font-bold text-9xl select-none">
                  0{activePhase + 1}
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-gray-200 group">
                      <Image
                        src={roadmap[activePhase].image}
                        alt="Phase"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-secondary/10" />
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      {roadmap[activePhase].skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">
                      {roadmap[activePhase].title}
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {roadmap[activePhase].description}
                    </p>
                    {/* <Link href="/contact-us">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-4 bg-secondary text-black font-bold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                      >
                        Enroll in Course Track
                      </motion.button>
                    </Link> */}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            {/* Section Heading */}
            <div className="text-center mb-5">
              <h2 className="text-secondary font-black uppercase text-[10px] tracking-[0.4em] mb-4">
                Structured Path
              </h2>
              <h3 className="text-3xl md:text-5xl font-black text-headerGray tracking-tight">
                The Certification <span className="italic">Journey</span>
              </h3>
              <div className="w-20 h-1 bg-black mx-auto mt-6" />
            </div>

            {/* Phases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x divide-slate-100">
              {phases.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-8 pb-1 group hover:bg-slate-50 transition-colors duration-500"
                >
                  {/* Multicolored Icon Box */}
                  <div
                    className="w-16 h-16 rounded-3xl flex items-center justify-center text-3xl mb-8 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundColor: p.color,
                      color: "#ffffff", // White icons on colored backgrounds for "Phase" emphasis
                    }}
                  >
                    {p.icon}
                  </div>

                  <span className="text-secondary font-bold text-[10px] uppercase tracking-widest mb-2 block">
                    {p.phase}
                  </span>

                  <h4 className="text-xl font-black text-headerGray mb-4 group-hover:text-secondary transition-colors">
                    {p.title}
                  </h4>

                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {p.desc}
                  </p>

                  {/* Decorative Step Indicator */}
                  <div className="mt-8 flex items-center gap-2">
                    <div className="h-[2px] w-full bg-slate-100 relative overflow-hidden">
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileInView={{ x: "0%" }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="absolute inset-0 bg-black/10"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default LongTrainingPage;
