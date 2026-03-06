"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const SuccessStories = () => {
  const students = [
    {
      name: "Aditi Sharma",
      uni: "Oxford University, UK",
      field: "MSc Bioinformatics",
      color: "border-violet-400",
      shadow: "shadow-violet-100",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200",
      text: "GeneVeda helped me navigate the complex application process for Oxford. Their guidance on my research statement was pivotal in securing my seat. I am now working on CRISPR technology in one of the world's leading labs. The transition was seamless thanks to their pre-departure support. Truly a life-changing experience for my scientific career."
    },
    {
      name: "Rohan Mehta",
      uni: "Johns Hopkins, USA",
      field: "PhD Molecular Biology",
      color: "border-cyan-400",
      shadow: "shadow-cyan-100",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      text: "Securing a fully funded PhD in the USA seemed impossible until I met the GeneVeda team. They identified the perfect labs matching my interest in oncology. My visa process was handled with extreme precision and zero stress. The scholarship support they provided covered my entire tuition and living expenses. I highly recommend them to every serious researcher."
    },
    {
      name: "Sneha Kapoor",
      uni: "Heidelberg, Germany",
      field: "MSc Biotechnology",
      color: "border-emerald-400",
      shadow: "shadow-emerald-100",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
      text: "Germany's research landscape is vast, and GeneVeda helped me find the perfect niche. Their expertise in European documentation and credit systems was invaluable. I'm now conducting hands-on experiments with high-throughput sequencing tools. The multicultural environment here has broadened my global perspective immensely. They were with me at every single step."
    },
    {
      name: "Vikram Singh",
      uni: "NUS, Singapore",
      field: "Clinical Research",
      color: "border-amber-400",
      shadow: "shadow-amber-100",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
      text: "The clinical research program at NUS is highly competitive, but GeneVeda's profile evaluation gave me the edge. They highlighted my previous internship experience in a way that impressed the committee. Now I am part of a global team working on tropical disease vaccines. The networking opportunities here in Singapore are absolutely world-class. I am grateful for their constant mentorship."
    },
    {
      name: "Ananya Iyer",
      uni: "University of Toronto, Canada",
      field: "Masters in Genetics",
      color: "border-rose-400",
      shadow: "shadow-rose-100",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=200&h=200",
      text: "From selecting the right province to finalising my student housing, GeneVeda was my backbone. Their SOP workshop helped me articulate my passion for genetics into a winning essay. I secured a merit scholarship that significantly reduced my financial burden. Canada has been welcoming, and the lab facilities here are beyond my expectations. This journey wouldn't have been possible without them."
    }
  ];

  // Duplicate for infinite effect
  const scrollList = [...students, ...students];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-headerGray tracking-tight mb-4">
              Students Who <span className="text-secondary italic">Made It</span>
            </h2>
            <p className="text-slate-400 font-medium">
              Real stories from our global research community.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="flex relative hover:[&>div]:pause-animation">
        <motion.div
          className="flex gap-6 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 100,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {scrollList.map((student, idx) => (
            <div
              key={idx}
              className={`w-[420px] shrink-0 p-8 rounded-[3rem] bg-white border-2 ${student.color} ${student.shadow} shadow-xl flex flex-col justify-between h-[340px] relative transition-all duration-500 hover:scale-[1.02] group`}
            >
              <Quote className="absolute top-8 right-8 text-slate-100 group-hover:text-secondary/20 transition-colors" size={60} />

              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img 
                      src={student.image} 
                      alt={student.name}
                      className={`w-14 h-14 rounded-2xl object-cover border-2 ${student.color} shadow-lg`}
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                      <div className={`w-3 h-3 rounded-full bg-secondary`} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-headerGray text-lg leading-tight">{student.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mt-1">
                      {student.uni}
                    </p>
                  </div>
                </div>
                
                <p className="text-slate-600 text-[13px] leading-[1.7] line-clamp-5 font-medium italic">
                  &quot;{student.text}&quot;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                   <div className={`w-2 h-2 rounded-full animate-pulse bg-secondary`} />
                   <span className="text-[10px] font-black uppercase tracking-widest text-black">
                     {student.field}
                   </span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        .pause-animation {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;