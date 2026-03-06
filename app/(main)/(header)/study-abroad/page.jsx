"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Plane, ArrowRight, Globe2 } from "lucide-react";
import StudyAbroadDetails from "./details";
import GlobalCountries from "./globalCountries";
import Link from "next/link";
import WhyStudyAbroad from "./whyStudyAbroad";
import SuccessStories from "./successStories";

const StudyAbroadPage = () => {
  const [countryCount, setCountryCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountryCount((prev) => (prev < 45 ? prev + 1 : 45));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const detailsRef = useRef(null);

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-white text-headerGray pt-32 pb-20 overflow-hidden">
      <div 
      className="container mx-auto px-6"
        style={{
              backgroundImage:
                "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
              backgroundSize: "30px 30px",
            }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT CONTENT: BRANDED TEXT --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                Global Research Placements
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.05] tracking-tight">
              Elevate Your <br />
              <span className="text-secondary italic">Scientific</span> Journey
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg">
              GeneVeda Biosciences coordinates advanced laboratory rotations and degree
              placements across{" "}
              <span className="font-bold text-primary underline decoration-secondary decoration-2">
                {countryCount}+
              </span>{" "}
              prestigious institutions worldwide.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {/* 3. Add onClick to the Explore Programs button */}
              <Link
                            href="/contact-us"
                          >
              <button
              className="relative px-10 py-4 rounded-full font-bold uppercase tracking-wider overflow-hidden transition-all duration-500 group cursor-pointer shadow-lg w-full md:w-auto z-10 bg-transparent"
              style={{
                borderColor: "rgb(65, 100, 165)", // Your BlueShade
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              {/* The Sliding Background */}
              <span className="absolute inset-0 w-0 h-full bg-secondary transition-all duration-500 ease-out group-hover:w-full -z-10"></span>

              {/* The Shimmer Effect */}
              <span
                className="absolute inset-0 w-full h-full -z-10 transition-transform duration-700 -translate-x-full group-hover:translate-x-full ease-in-out"
                style={{
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                }}
              ></span>

              {/* FIXED CONTENT AREA */}
              <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors duration-300">
                Explore Programs
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2 text-secondary group-hover:text-black"
                />
              </span>
            </button>
            </Link>
            </div>

            {/* Quick Metrics */}
            {/* <div className="flex gap-12 border-t border-gray-100 pt-10">
              <div>
                <p className="text-3xl font-bold">120+</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">
                  Institutions
                </p>
              </div>
              <div className="w-[1px] bg-gray-100 h-12" />
              <div>
                <p className="text-3xl font-bold">100%</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mt-1">
                  SOP Support
                </p>
              </div>
            </div> */}
          </motion.div>

          {/* --- RIGHT CONTENT: BRANDED 3D GLOBE --- */}
          <div className="relative flex justify-center items-center">
            {/* Secondary Glow Background */}
            <div className="absolute w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* THE SPHERE (White Glassmorphism) */}
              <div className="absolute inset-0 rounded-full border border-gray-200 bg-white/40 backdrop-blur-sm shadow-[0_30px_60px_rgba(0,0,0,0.05),inset_0_-10px_40px_rgba(0,255,150,0.05)] overflow-hidden">
                {/* Tech Grid */}
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
                {/* Polar Lines */}
                <div className="absolute inset-0 border-x border-gray-100/50 rounded-full" />
                <div className="absolute inset-0 border-y border-gray-100/50 rounded-full" />
              </div>

              {/* FLIGHT PATHS & AIRPLANES */}
              <FlightPath tilt="rotateX(60deg) rotateZ(20deg)" delay={0} />
              <FlightPath tilt="rotateX(-40deg) rotateZ(110deg)" delay={2.5} />
              <FlightPath tilt="rotateX(10deg) rotateZ(-60deg)" delay={5} />

              {/* NODES (Secondary Color) */}
              <HubNode top="20%" left="40%" />
              <HubNode top="50%" left="15%" />
              <HubNode top="70%" left="75%" />
            </motion.div>

            {/* Orbiting Decor */}
            <div className="absolute w-[500px] h-[500px] border border-gray-100 rounded-full" />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[550px] h-[550px] border border-dashed border-secondary/20 rounded-full"
            />
          </div>
        </div>
      </div>
      

{/* <section className="my-2 py-2 bg-slate-50">
  <div className="container mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-black text-black tracking-tighter mb-4">
        Our Global <span className="text-secondary">Network</span>
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto">
        We bridge the gap between Indian talent and premier research hubs. Direct partnerships with Ivy League, Russell Group, and TU9 universities.
      </p>
    </div>

    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-700">
      {[
        { name: "Oxford", color: "text-blue-900" },
        { name: "Stanford", color: "text-red-800" },
        { name: "MIT", color: "text-gray-800" },
        { name: "Heidelberg", color: "text-blue-700" },
        { name: "ETH Zurich", color: "text-black" },
        { name: "NUS Singapore", color: "text-orange-600" }
      ].map((uni, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5, scale: 1.1 }}
          className={`text-2xl font-black tracking-tighter ${uni.color} cursor-default`}
        >
          {uni.name}
        </motion.div>
      ))}
    </div>
  </div>
</section> */}

<div
        ref={detailsRef}
        id="details"
        className="scroll-mt-24" // Adds offset so header doesn't cover the title
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <StudyAbroadDetails />
        </motion.div>
      </div>

{/* --- SECTION 2: WHY STUDY ABROAD? (Science Specific Benefits) --- */}
 <div>
        <WhyStudyAbroad />
      </div>

{/* --- SECTION 3: FEATURED PROGRAMS (Cards with Icons) --- */}
<section className="py-10 bg-slate-50/50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-black text-headerGray mb-12 text-center uppercase tracking-tighter">
      Featured <span className="text-secondary">Programs</span>
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { title: "MSc Bioinformatics", loc: "UK & Singapore", color: "from-green-400/20" },
        { title: "MS Molecular Biology", loc: "USA & Canada", color: "from-blue-400/20" },
        { title: "Clinical Research", loc: "Germany & EU", color: "from-orange-400/20" }
      ].map((prog, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative"
        >
          <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${prog.color} to-transparent`} />
          <h3 className="text-xl font-black text-headerGray mb-2">{prog.title}</h3>
          <p className="text-secondary font-bold text-xs mb-6 tracking-widest uppercase">{prog.loc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* --- SECTION 4: WE SUPPORT YOU EVERY STEP (The Lifecycle) --- */}
<section className="py-10 bg-white">
  <div className="container mx-auto px-6">
    <div className="flex flex-col items-center text-center mb-16">
       <div className="w-16 h-1 w-bg-secondary mb-6 rounded-full" />
       <h2 className="text-4xl md:text-5xl font-black text-headerGray tracking-tighter">Support <span className="text-secondary">Every Step</span> of the Way</h2>
       <p className="text-gray-500 max-w-xl mt-4">From your first counseling call to your first day on a foreign campus, we are your permanent support system.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { title: "SOP & LOR Crafting", icon: "📝", desc: "Scientific storytelling that highlights your research potential to admission officers." },
        { title: "Visa Documentation", icon: "🛂", desc: "Precision-led visa filing with a 99.2% success rate for US and EU student visas." },
        { title: "Pre-Departure Brief", icon: "✈️", desc: "Briefings on local culture, lab etiquette, and scientific communities in your host country." },
        { title: "Accommodation Fix", icon: "🏠", desc: "Verified student housing search and roommate matching with fellow Indian researchers." }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-transparent hover:border-slate-200 transition-all text-center group">
          <div className="text-4xl mb-6 group-hover:scale-125 transition-transform">{item.icon}</div>
          <h4 className="text-lg font-black text-headerGray mb-3">{item.title}</h4>
          <p className="text-xs text-gray-500 leading-relaxed font-medium">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
   <div>
        <SuccessStories />
      </div>
</section>
      <div>
        <GlobalCountries />
      </div>
    </div>
  );
};

// COMPONENT: Branded Airplane Path
const FlightPath = ({ tilt, delay }) => (
  <div
    className="absolute inset-0"
    style={{ transform: tilt, transformStyle: "preserve-3d" }}
  >
    <svg className="absolute inset-0 w-full h-full overflow-visible">
      <motion.path
        d="M 50,210 A 155,155 0 0,1 370,210"
        fill="none"
        stroke="url(#secondaryGrad)"
        strokeWidth="1.2"
        strokeDasharray="500"
        initial={{ strokeDashoffset: 500 }}
        animate={{ strokeDashoffset: -500 }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear", delay }}
      />
      <defs>
        <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="80%" stopColor="#00FF96" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#00FF96" />
        </linearGradient>
      </defs>
    </svg>

    <motion.div
      style={{
        position: "absolute",
        offsetPath: "path('M 50,210 A 155,155 0 0,1 370,210')",
        offsetRotate: "auto 90deg",
      }}
      animate={{ offsetDistance: "100%" }}
      transition={{ duration: 9, repeat: Infinity, ease: "linear", delay }}
      className="text-primary"
    >
      <Plane
        size={14}
        fill="currentColor"
        className="-rotate-90 drop-shadow-[0_0_5px_#00FF96]"
      />
    </motion.div>
  </div>
);

const HubNode = ({ top, left }) => (
  <div
    style={{ top, left }}
    className="absolute w-2 h-2 bg-secondary rounded-full shadow-[0_0_12px_#00FF96] z-50 border-2 border-white"
  />
);

export default StudyAbroadPage;
