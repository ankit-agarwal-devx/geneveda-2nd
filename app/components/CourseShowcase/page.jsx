"use client";

import React, { useState } from "react";
import { Clock, Star, ArrowRight, ChevronDown, ChevronUp, Dna, Beaker, Code, Microscope } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const courseData = [
  { 
    id: 1, 
    title: "NGS Masterclass", 
    category: "Bioinformatics", 
    price: "₹14k", 
    duration: "10w", 
    rating: 4.9, 
    color: "border-blue-500", 
    shadow: "shadow-blue-500/20", 
    accent: "text-blue-500",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=400" 
  },
  { 
    id: 2, 
    title: "Drug Docking", 
    category: "Drug Design", 
    price: "₹12k", 
    duration: "6w", 
    rating: 4.8, 
    color: "border-rose-500", 
    shadow: "shadow-rose-500/20", 
    accent: "text-rose-500",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400" 
  },
  { 
    id: 3, 
    title: "Python Bio", 
    category: "Programming", 
    price: "₹8k", 
    duration: "8w", 
    rating: 4.7, 
    color: "border-amber-500", 
    shadow: "shadow-amber-500/20", 
    accent: "text-amber-500",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400" 
  },
  { 
    id: 4, 
    title: "RNA-Seq Pro", 
    category: "Genomics", 
    price: "₹15k", 
    duration: "12w", 
    rating: 4.9, 
    color: "border-indigo-500", 
    shadow: "shadow-indigo-500/20", 
    accent: "text-indigo-500",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400" 
  },
  { 
    id: 5, 
    title: "CRISPR Tech", 
    category: "Gene Edit", 
    price: "₹18k", 
    duration: "5w", 
    rating: 5.0, 
    color: "border-emerald-500", 
    shadow: "shadow-emerald-500/20", 
    accent: "text-emerald-500",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=400" 
  },
  { 
    id: 5, 
    title: "Metagenomics", 
    category: "Microbiome", 
    price: "₹12k", 
    duration: "6w", 
    rating: 4.9, 
    color: "border-blue-500", 
    shadow: "shadow-blue-500/20", 
    accent: "text-blue-500",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=400" 
  },
  { 
    id: 7, 
    title: "Clinical Trials", 
    category: "Pharma", 
    price: "₹5k", 
    duration: "2w", 
    rating: 4.8, 
    color: "border-rose-500", 
    shadow: "shadow-rose-500/20", 
    accent: "text-rose-500",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=400" 
  },
  { 
    id: 3, 
    title: "Biotech Law", 
    category: "Legal", 
    price: "₹10k", 
    duration: "4w", 
    rating: 4.7, 
    color: "border-amber-500", 
    shadow: "shadow-amber-500/20", 
    accent: "text-amber-500",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400" 
  },
];

const CourseCard = ({ course }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -10 }}
    className={`group relative h-[340px] bg-white rounded-[3rem] p-4 border-2 ${course.color} ${course.shadow} shadow-2xl transition-all duration-500 flex flex-col overflow-hidden`}
  >
    {/* Sharp Reticle Corner - Styled to match card accent */}
    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
      <div className={`w-8 h-8 border-t-2 border-r-2 ${course.color} rounded-tr-lg`} />
    </div>

    {/* Image Section */}
    <div className="relative h-40 rounded-[2.2rem] overflow-hidden mb-5">
      <Image 
        src={course.image} 
        alt={course.title} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-black flex items-center gap-2">
           <div className={`w-2 h-2 rounded-full animate-pulse ${course.accent.replace('text', 'bg')}`} />
           {course.category}
        </span>
      </div>
    </div>

    {/* Content Area */}
    <div className="px-2 flex flex-col flex-grow">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">ID: {course.id}</span>
      </div>

      <h3 className="text-md font-black text-black mb-1 leading-tight tracking-tight">
        {course.title}
      </h3>

      <div className="mt-auto py-2 border-t border-slate-50 flex justify-between items-end">
        <div>
          <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Fee</p>
          <p className={`text-xl font-black ${course.accent}`}>{course.price}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1.5 text-black font-black text-xs uppercase tracking-tighter">
             <Clock size={14} className={course.accent} />
             {course.duration}
          </div>
        </div>
      </div>
      <button className="relative w-full mt-auto py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1 bg-black text-white transition-all duration-300 hover:shadow-[0_10px_20px_-5px_rgba(83,200,30,0.4)] border border-transparent hover:border-secondary/50 group/btn overflow-hidden">
        <span className="relative z-10 flex items-center gap-1 group-hover/btn:text-secondary transition-colors duration-300">
          Details <ArrowRight className="w-3.5 h-3.5 transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:rotate-[-45deg]" />
        </span>
        <span className="absolute inset-0 bg-secondary/0 group-hover/btn:bg-secondary/5 transition-all duration-300"></span>
      </button>
    </div>
  </motion.div>
);

const CourseShowcase = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? courseData : courseData.slice(0, 5);

  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-secondary" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              Department of Education
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-black tracking-tighter leading-none">
            ACADEMIC <span className="text-secondary italic">CATALOG.</span>
          </h2>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-12 py-5 border-2 border-black rounded-full text-black text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {showAll ? "Collapse Library" : "View Full Library"}
            </span>
            <div className="absolute inset-0 bg-blueShade translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;