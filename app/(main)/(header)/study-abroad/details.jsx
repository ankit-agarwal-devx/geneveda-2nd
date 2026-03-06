"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, FileText, Landmark, Beaker, Globe, Zap, HeartPulse } from "lucide-react";

const StudyAbroadDetails = () => {
  const steps = [
    {
      icon: <FileText size={28} />,
      title: "Profile Evaluation",
      desc: "Deep analysis of your research papers and academic history.",
      tag: "Research",
      accent: "#8B5CF6", // DNA Violet (New)
      lightBg: "bg-violet-50",
      hoverBg: "group-hover:bg-violet-600",
      glow: "group-hover:shadow-violet-200",
    },
    {
      icon: <Globe size={28} />,
      title: "University Selection",
      desc: "Matching you with global labs in the US, UK, and Europe.",
      tag: "Global",
      accent: "#06B6D4", // Oxygen Cyan (New)
      lightBg: "bg-cyan-50",
      hoverBg: "group-hover:bg-cyan-500",
      glow: "group-hover:shadow-cyan-200",
    },
    {
      icon: <Zap size={28} />,
      title: "Visa & Compliance",
      desc: "High-speed processing for international student permits.",
      tag: "Priority",
      accent: "#F59E0B", // Energy Amber (New)
      lightBg: "bg-amber-50",
      hoverBg: "group-hover:bg-amber-500",
      glow: "group-hover:shadow-amber-200",
    },
    {
      icon: <HeartPulse size={28} />,
      title: "Student Support",
      desc: "On-ground assistance and health insurance coverage.",
      tag: "Wellness",
      accent: "#EF4444", // Vitality Red (New)
      lightBg: "bg-red-50",
      hoverBg: "group-hover:bg-red-500",
      glow: "group-hover:shadow-red-200",
    },
  ];

  return (
    <section className="bg-white py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-headerGray tracking-tight mb-4">
            A Palette of <span className="text-secondary">Opportunities</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-xl mx-auto">
            Beyond the basics, we cover every specialized vertical of your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`group p-10 bg-white border border-slate-100 rounded-[3rem] transition-all duration-500 hover:shadow-2xl ${step.glow}`}
            >
              {/* Floating Step Number */}
              <div 
                className="text-4xl font-black opacity-5 absolute top-8 right-10 transition-opacity group-hover:opacity-20"
                style={{ color: step.accent }}
              >
                0{idx + 1}
              </div>

              {/* Multicolor Circle Icon */}
              <div className={`w-20 h-20 rounded-3xl ${step.lightBg} flex items-center justify-center mb-10 transition-all duration-500 group-hover:rotate-[10deg] ${step.hoverBg}`}>
                <div 
                  className="transition-colors duration-500 group-hover:text-white"
                  style={{ color: step.accent }}
                >
                  {step.icon}
                </div>
              </div>

              <span 
                className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 transition-all"
                style={{ backgroundColor: `${step.accent}15`, color: step.accent }}
              >
                {step.tag}
              </span>

              <h3 className="text-xl font-black text-headerGray mb-4">
                {step.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadDetails;