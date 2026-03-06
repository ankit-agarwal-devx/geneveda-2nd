"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Presentation,
  Video,
  Award,
  ArrowUpRight,
  MonitorPlay,
  BookOpen,
  Zap,
  Layout,
  Building2,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

export default function EventsPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const programs = [
    {
      title: "Seminars",
      desc: "In-depth physical sessions led by industry experts covering the latest trends in life sciences and biotechnology.",
      icon: <Presentation size={24} />,
      img: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNlbWluYXJzfGVufDB8fDB8fHww?q=80&w=800",
    },
    {
      title: "Workshops",
      desc: "Hands-on practical training sessions focused on lab techniques, NGS data analysis, and bioinformatics tools.",
      icon: <Users size={24} />,
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
    },
    {
      title: "Webinars",
      desc: "Accessible global knowledge sharing through interactive digital platforms and virtual classrooms.",
      icon: <Video size={24} />,
      img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=800",
    },
    {
      title: "Faculty Development (FDPs)",
      desc: "Empowering educators with updated research methodologies and advanced scientific teaching technologies.",
      icon: <Award size={24} />,
      img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
    },
    {
      title: "Student Development (SDPs)",
      desc: "Bridge the gap between academics and industry with skill-oriented programs and career path guidance.",
      icon: <BookOpen size={24} />,
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    },
    {
      title: "Industrial Training",
      desc: "Rigorous certification programs designed to produce industry-ready professionals for biotech and pharma sectors.",
      icon: <Zap size={24} />,
      img: "https://images.unsplash.com/photo-1764835711461-117d67799a7d?q=80&w=800",
      scope: ["SOP Compliance", "QC/QA Mastery", "Instrument Ops"],
      stat: "100% Practical",
      focus: "Job Readiness",
    },
    {
      title: "Curriculum Design",
      desc: "Assisting institutions in modernizing their Biotechnology and Bioinformatics syllabi to align with global industry 4.0 standards.",
      icon: <Layout size={24} />,
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
      scope: ["Syllabus Mapping", "Skill Integration", "Lab Manuals"],
      stat: "15+ Depts",
      focus: "Academic Reform",
    },
    {
      title: "Corporate Training",
      desc: "Customized technical upskilling for R&D teams in Pharma and Biotech companies to master high-throughput technologies.",
      icon: <Building2 size={24} />,
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800",
      scope: ["R&D Upskilling", "Tech Transfer", "Pipeline Efficiency"],
      stat: "10+ MNCs",
      focus: "B2B Solutions",
    },
    {
      title: "Research Methodology",
      desc: "Intensive modules on experimental design, statistical validation, and ethical frameworks for PhD scholars and scientists.",
      icon: <FlaskConical size={24} />,
      img: "https://images.unsplash.com/photo-1758876201598-67fd2a5570ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFJlc2VhcmNoJTIwTWV0aG9kb2xvZ3l8ZW58MHx8MHx8fDA%3D?q=80&w=800",
      scope: ["Study Design", "Bio-Statistics", "Ethics & IP"],
      stat: "40+ Batches",
      focus: "Research Integrity",
    },
    {
      title: "Institutional Audits",
      desc: "Comprehensive evaluation of lab infrastructure and safety protocols to ensure compliance with international scientific standards.",
      icon: <ShieldCheck size={24} />,
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
      scope: ["Safety Audits", "Infrastructure Gap", "SOP Review"],
      stat: "Global Standards",
      focus: "Quality Control",
    },
  ];

  return (
    <div className="bg-zinc-50 text-headerGray min-h-screen pb-20">
      {/* --- HERO SECTION --- */}
      <section
        className="pt-32 pb-20 px-6 bg-zinc-100 border-b border-zinc-200 overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
          backgroundSize: "30px 30px",
        }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div {...fadeIn} className="max-w-3xl relative z-10">
            <span className="text-blueShade font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
              Knowledge Dissemination
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              Seminars, Workshops & <br />
              <span className="text-secondary italic">Development.</span>
            </h1>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed">
              GeneVeda Biosciences actively contributes to the scientific
              community through structured programs designed for institutions,
              faculty, and students to stay updated with the latest trends.
            </p>
          </motion.div>

          {/* Right Side: Image with floating effect */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative h-96 lg:h-[500px] w-full group"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNjaWVudGlmaWMlMjBzZW1pbmFyfGVufDB8fDB8fHww?q=80&w=1200"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Scientific Seminar and Workshop"
              />
              {/* Subtle Green Overlay */}
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>

            {/* Decorative Elements behind image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-black/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* --- INTERACTIVE GRID --- */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-[3rem] overflow-hidden border border-zinc-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.img}
                  fill
                  className="object-cover brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700"
                  alt={item.title}
                />
                <div className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur-sm rounded-2xl text-zinc-900">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center justify-between">
                  {item.title}
                  <ArrowUpRight className="text-zinc-300 group-hover:text-secondary transition-colors" />
                </h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- STATISTICS / IMPACT --- */}
      {/* <section className="pt-10 px-6 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { val: "50+", label: "FDPs Conducted" },
            { val: "200+", label: "Workshops" },
            { val: "10k+", label: "Students Trained" },
            { val: "15+", label: "Global Partners" },
          ].map((stat) => (
            <div key={stat.label}>
              <h4 className="text-5xl font-black text-secondary mb-2">
                {stat.val}
              </h4>
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}
