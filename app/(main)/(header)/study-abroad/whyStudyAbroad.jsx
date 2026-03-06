"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Globe, Briefcase, Users, 
  Sun, Microscope, HeartHandshake, Compass 
} from "lucide-react";

const WhyStudyAbroad = () => {
  const reasons = [
    {
      icon: <GraduationCap size={24} />,
      title: "World-Class Education",
      desc: "Renowned universities deliver top-ranked, innovative learning experiences.",
      color: "#6366F1", // Indigo
      bg: "bg-indigo-50",
    },
    {
      icon: <Globe size={24} />,
      title: "Global Recognition",
      desc: "Degrees respected worldwide boost career and job prospects internationally.",
      color: "#0EA5E9", // Sky Blue
      bg: "bg-sky-50",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Post-Study Work",
      desc: "Visas allow 2-3 years of full-time work after graduation.",
      color: "#EC4899", // Pink/Rose
      bg: "bg-rose-50",
    },
    {
      icon: <Users size={24} />,
      title: "Multicultural Society",
      desc: "A Diverse, inclusive environment fosters global networks and belonging.",
      color: "#8B5CF6", // Violet
      bg: "bg-violet-50",
    },
    {
      icon: <Compass size={24} />,
      title: "Vibrant Lifestyle",
      desc: "High living standards with safe, exciting cities and nature.",
      color: "#F59E0B", // Amber
      bg: "bg-amber-50",
    },
    {
      icon: <Microscope size={24} />,
      title: "Research Opportunities",
      desc: "Strong innovation focus across fields enhances skill development.",
      color: "#10B981", // Emerald
      bg: "bg-emerald-50",
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "Support Services",
      desc: "Comprehensive assistance for international students eases transition.",
      color: "#F43F5E", // Rose Red
      bg: "bg-red-50",
    },
    {
      icon: <Sun size={24} />,
      title: "Favorable Climate",
      desc: "Enjoyable weather supports outdoor activities and well-being.",
      color: "#06B6D4", // Cyan
      bg: "bg-cyan-50",
    },
  ];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-4xl mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-secondary" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-gray-400">
              Future-Proof Your Career
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-headerGray tracking-tighter leading-tight mb-8">
            Why Study <span className="text-secondary italic">Abroad?</span>
          </h2>
          
          <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
            A Globally Recognised Degree is enough to secure your Future in India! 
            With exclusive programs ranging wider than in India and skill development with practical experience, 
            the top-ranked Universities worldwide are welcoming you with open arms.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-transparent transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              {/* Dynamic Icon Container */}
              <div 
                className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-500`}
                style={{ color: item.color }}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-black text-headerGray mb-3 group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-xs leading-relaxed font-bold uppercase tracking-tight mb-4">
                {item.desc}
              </p>

              {/* Decorative Dot matching the color */}
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStudyAbroad;