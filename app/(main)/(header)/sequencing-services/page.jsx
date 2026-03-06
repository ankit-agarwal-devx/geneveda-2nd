"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Whole Genome Sequencing",
    desc: "High-coverage germline and somatic WGS with robust QC pipelines, variant detection, and interpretation-ready reports for translational research.",
    tags: ["WGS", "SNV/INDEL", "CNV"],
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2000",
    imageAlt: "Scientist analyzing genomic data",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: "RNA Sequencing",
    desc: "Bulk and low-input RNA-Seq for transcriptome profiling, differential expression analysis, fusion detection, and pathway enrichment insights.",
    tags: ["RNA-Seq", "Expression", "Fusion"],
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000",
    imageAlt: "Researcher handling molecular biology workflow",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7h16M4 12h16M4 17h10M15 17h5M8 3v4m8-4v4" />
      </svg>
    ),
  },
  {
    title: "Metagenomics Sequencing",
    desc: "Comprehensive microbial community profiling for environmental, gut, and clinical samples with taxonomic and functional annotation outputs.",
    tags: ["16S/ITS", "Shotgun", "Microbiome"],
    image:
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000",
    imageAlt: "Microscope and laboratory instruments",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 4h4M9 8h6m-7 4h8m-9 4h10M6 20h12" />
      </svg>
    ),
  },
  {
    title: "Targeted Panel Sequencing",
    desc: "Custom and pre-designed oncology and inherited disorder panels with deep sequencing, sensitive variant calling, and clinical-grade reporting.",
    tags: ["Amplicon", "Hybrid Capture", "Oncology"],
    image:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2000",
    imageAlt: "Genomics sequencing setup in modern laboratory",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16v12H4zM8 10h8M8 14h5" />
      </svg>
    ),
  },
  {
    title: "Sanger Validation",
    desc: "Capillary electrophoresis-based confirmatory sequencing for critical variants, primer design support, and chromatogram-level verification.",
    tags: ["Sanger", "Validation", "QC"],
    image:
      "https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=2000",
    imageAlt: "Lab specialist preparing DNA validation workflow",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
];

const developmentPrograms = [
  {
    audience: "Educators",
    title: "Faculty Development Program (FDP)",
    desc: "Advanced workshops in NGS workflows, experimental design, and modern genomics lab operations for university faculty.",
    tags: ["NGS Training", "Curriculum Design", "Lab Workflow"],
  },
  {
    audience: "Students",
    title: "Student Development Program (SDP)",
    desc: "Hands-on skill tracks in sequencing analysis, report interpretation, and industry-ready bioinformatics practices.",
    tags: ["Hands-on Labs", "Career Skills", "Bioinformatics"],
  },
  {
    audience: "Researchers",
    title: "Research Methodology Bootcamp",
    desc: "Focused mentoring on hypothesis framing, statistical rigor, and publication-quality genomic data analysis pipelines.",
    tags: ["Study Design", "Statistics", "Publication Support"],
  },
  {
    audience: "Institutions",
    title: "Industry-Academia Genomics Enablement",
    desc: "Collaborative implementation support for sequencing infrastructure, SOP creation, and data governance best practices.",
    tags: ["SOP Setup", "Compliance", "Collaboration"],
  },
];

const developmentOutcomes = [
  { metric: "1200+", label: "Learners Trained" },
  { metric: "85+", label: "Partner Institutions" },
  { metric: "30+", label: "Workshops Per Year" },
  { metric: "95%", label: "Completion Rate" },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-headerGray min-h-screen overflow-x-hidden selection:bg-secondary/30">
      
      {/* 1. HERO SECTION WITH ROTATING ACCENT */}
      <section 
      className="relative pt-24 pb-20 px-6 bg-white overflow-hidden"
      style={{
            backgroundImage:
            "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
          backgroundSize: "30px 30px",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* LEFT CONTENT */}
        <motion.div 
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="flex-1 z-10"
>
  {/* TOP BADGE */}
  <div className="flex items-center gap-4 mb-8">
    <motion.span 
      initial={{ width: 0 }}
      animate={{ width: 40 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="h-[1px] bg-blueShade"
    />
    <span className="text-blueShade font-black uppercase tracking-[0.4em] text-[9px]">
      GeneVeda Biosciences
    </span>
  </div>

  {/* MAIN HEADLINE */}
  <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8 text-headerGray">
    Pioneering <br /> 
    <span className="text-secondary italic">Bioscience.</span>
  </h1>

  {/* PRIMARY DESCRIPTION */}
  <p className="text-slate-500 text-base md:text-lg max-w-md mb-10 leading-relaxed font-medium">
    From advanced sequencing to professional development, we empower 
    the next generation of scientific innovators through 
    <span className="text-black"> rigorous research and data precision.</span>
  </p>

  {/* NEW: QUICK STATS / HIGHLIGHTS */}
  {/* <div className="grid grid-cols-2 gap-6 mb-12 py-6 border-y border-slate-100 max-w-md">
    <div>
      <h4 className="text-black font-black text-xl mb-1">12+</h4>
      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Research Tracks</p>
    </div>
    <div>
      <h4 className="text-black font-black text-xl mb-1">99.8%</h4>
      <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Data Accuracy</p>
    </div>
  </div> */}
  
  {/* NEW: SUBTLE TRUST LINE */}
  <p className="mt-12 text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">
    Trusted by <span className="text-black/60">50+ Global Research Institutions</span>
  </p>
</motion.div>

        {/* RIGHT VISUAL WITH KINETIC ANIMATION */}
        <div className="flex-1 relative w-full aspect-square max-w-[480px]">
          
          {/* Animated Background Pulse Rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0, 0.15, 0],
                scale: [0.8, 1.2 + i * 0.1, 1.4 + i * 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 border-2 border-secondary rounded-[3rem] -z-10"
            />
          ))}

          {/* Floating Image Container */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative w-full h-full"
          >
            {/* Corner Accent Brackets */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-4 border-r-4 border-secondary rounded-tr-3xl z-30" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-4 border-l-4 border-black rounded-bl-3xl z-30" />

            <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] bg-white p-3">
              <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
                <Image 
                  src="https://images.pexels.com/photos/7580649/pexels-photo-7580649.jpeg?q=80&w=2000"
                  alt="Research Excellence"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Data Tag Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute top-10 -right-8 bg-white/90 backdrop-blur shadow-xl p-4 rounded-xl border border-slate-100 z-40 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-tighter text-black">Live Analysis Active</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-10 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Our Expertise</h2>
            <div className="w-24 h-1 bg-secondary mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 border rounded-xl border-gray-100 group hover:border-secondary transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-16 h-16 bg-headerGray text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-black transition-all duration-500 transform group-hover:rotate-12">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FACULTY & STUDENT DEVELOPMENT */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl font-black uppercase tracking-tighter">
              Professional Development
            </h2>
            <div className="w-24 h-1 bg-secondary mt-2"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {developmentPrograms.map((program, i) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <p className="text-secondary font-bold text-xs uppercase mb-2 tracking-widest">
                    {program.audience}
                  </p>
                  <h3 className="text-xl font-black leading-tight mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {program.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-black uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col"
            >
              <div className="relative w-full h-56 rounded-xl overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                  alt="Professional development workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
