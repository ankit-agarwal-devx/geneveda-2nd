"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, BookOpen, CheckCircle2, FileText, 
  Globe, LayoutList, Mail, Microscope, 
  MoveRight, PenTool, TrendingUp, Zap, Quote,
  Rocket,
  BarChart3,
} from "lucide-react";

export default function PublicationPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const imageAnimate = {
    initial: { scale: 0.95, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 1 }
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      
      {/* --- HERO SECTION: THE PUBLICATION GATEWAY --- */}
      <section className="relative  h-[70vh] flex items-center px-6 lg:px-20 overflow-hidden border-b border-black/5">

  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600"
      fill
      sizes="100vw"
      priority
      className="object-cover"
      alt="Scientific Publication"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Dot Pattern */}
  <div
    className="absolute inset-0 opacity-15 pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
      backgroundSize: "30px 30px",
    }}
  />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto w-full">

    <motion.div {...fadeIn} className="max-w-xl">

      <span className="text-secondary text-[10px] font-black tracking-[0.35em] uppercase block mb-4">
        Global Research Dissemination
      </span>

      <h1 className="text-4xl md:text-5xl font-black text-white mb-5">
        Publish With <span className="text-secondary">Impact</span>
      </h1>

      <p className="text-white/70 text-base md:text-lg mb-8">
        From manuscript editing to journal submission, we help transform your
        research into peer-reviewed publications with global reach.
      </p>

    </motion.div>

  </div>

</section>

<section className="py-10 px-6 lg:px-20 bg-white border-b border-zinc-100">
  <div className="max-w-7xl mx-auto">

    {/* Section Header */}
    <div className="max-w-3xl mb-8">
      <span className="text-blueShade text-[10px] font-black tracking-[0.35em] uppercase">
        Thesis & Publication Services
      </span>

      <h2 className="text-3xl md:text-4xl font-black mt-4 mb-5">
        From Research Draft to{" "}
        <span className="text-secondary italic">Journal Acceptance</span>
      </h2>

      <p className="text-zinc-500 leading-relaxed">
        GeneVeda supports Masters, PhD scholars, and life-science professionals
        through every stage of academic writing — combining scientific accuracy,
        editorial excellence, and submission strategy.
      </p>
    </div>

    {/* Main Grid */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* Card */}
      <div className="p-8 rounded-3xl border shadow-sm hover:shadow-lg transition">
        <BookOpen className="text-blue-500 mb-4" size={32} />
        <h3 className="font-bold mb-2">Thesis Structuring</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Logical chapter flow, methodology framing, results interpretation,
          and discussion refinement for MSc & PhD theses.
        </p>
      </div>

      <div className="p-8 rounded-3xl border shadow-sm hover:shadow-lg transition">
        <Microscope className="text-emerald-500 mb-4" size={32} />
        <h3 className="font-bold mb-2">Scientific Editing</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Technical language polishing, figure legends, reference validation,
          and domain-specific terminology correction.
        </p>
      </div>

      <div className="p-8 rounded-3xl border shadow-sm hover:shadow-lg transition">
        <FileText className="text-purple-500 mb-4" size={32} />
        <h3 className="font-bold mb-2">Manuscript Preparation</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Journal-formatted manuscripts including abstracts, keywords,
          graphical summaries, and supplementary data.
        </p>
      </div>

    </div>

    {/* Bottom Content */}
    <div className="mt-10 grid md:grid-cols-2 gap-14 items-center">

      {/* Left */}
      <div>
        <h3 className="text-2xl font-black mb-5">
          Designed for Scholars. Powered by Scientists.
        </h3>

        <p className="text-zinc-500 mb-6 leading-relaxed">
          We don’t just edit grammar. Our team includes biotechnology graduates
          and molecular researchers who understand experimental workflows,
          statistical reporting, and journal expectations.
        </p>

        <ul className="space-y-4 text-sm">

          <li className="flex gap-3 items-start">
            <CheckCircle2 className="text-green-500 mt-0.5" size={18} />
            SCI / Scopus / PubMed targeting
          </li>

          <li className="flex gap-3 items-start">
            <Rocket className="text-orange-500 mt-0.5" size={18} />
            Fast-track revision cycles
          </li>

          <li className="flex gap-3 items-start">
            <BarChart3 className="text-blue-500 mt-0.5" size={18} />
            Reviewer response drafting
          </li>

          <li className="flex gap-3 items-start">
            <CheckCircle2 className="text-purple-500 mt-0.5" size={18} />
            Plagiarism & compliance checks
          </li>

        </ul>
      </div>

      {/* Right */}
      <div className="bg-zinc-50 rounded-3xl p-10 border">

        <h4 className="font-bold mb-4">What Makes GeneVeda Different</h4>

        <p className="text-zinc-500 text-sm leading-relaxed mb-4">
          Traditional editors fix language. We refine scientific narrative.
          From experimental logic to statistical clarity, we ensure your
          research communicates impact.
        </p>

        <p className="text-zinc-500 text-sm leading-relaxed">
          Our publication workflows align with Elsevier, Springer, Wiley,
          Nature, and Taylor & Francis standards — increasing acceptance
          probability while reducing revision cycles.
        </p>

      </div>

    </div>

  </div>
</section>




      {/* --- SECTION: THE PUBLICATION LIFECYCLE --- */}
      <section className="py-10 px-6 lg:px-20 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-7 leading-none">
            Your Research, <br /> <span className="text-secondary italic">Accelerated.</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                icon: <PenTool size={40} className="text-secondary" />, 
                title: "Manuscript Polishing", 
                desc: "Refining language, structure, and technical accuracy for peer review." 
              },
              { 
                icon: <LayoutList size={40} className="text-secondary" />, 
                title: "Journal Alignment", 
                desc: "Strategic selection of target journals and formatting to specific guidelines." 
              },
              { 
                icon: <TrendingUp size={40} className="text-secondary" />, 
                title: "Impact Maximization", 
                desc: "Optimizing abstracts and keywords for higher visibility and citation." 
              },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                {...fadeIn} 
                className="bg-zinc-900 p-10 rounded-[3rem] border border-white/5 hover:border-secondary transition-colors duration-500 group"
              >
                <div className="mb-8 group-hover:scale-105 transition-transform">{step.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-4 leading-tight">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION: JOURNAL TARGETING & METRICS --- */}
      <section className="py-10 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...imageAnimate} className="relative h-[600px] rounded-[4rem] overflow-hidden group shadow-xl">
            <Image 
              src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww?q=80&w=1200" 
              fill className="object-cover opacity-100 group-hover:opacity-80 transition-opacity duration-1000" 
              alt="Journal Metrics Analysis" 
            />
            <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-all" />
          </motion.div>

          <motion.div {...fadeIn}>
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Data-Driven <br />Journal <span className="text-secondary">Placement.</span></h2>
            <p className="text-black/60 font-medium mb-10">
              We leverage proprietary algorithms and expert insights to identify journals with the highest likelihood of accepting your manuscript.
            </p>
            <ul className="space-y-4">
              {['Scopus & Web of Science Indexing', 'Impact Factor Optimization', 'Rapid Review Prioritization', 'Pre-submission Peer Review'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-black/80">
                  <CheckCircle2 size={16} className="text-secondary" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION: AUTHOR TESTIMONIALS --- */}
      <section className="py-10 px-6 lg:px-20 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 leading-none">Voices of <span className="text-secondary">Published Success.</span></h2>
          <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Real Scientists. Real Impact.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            { 
              quote: "GeneVeda's precision editing was instrumental. My paper was accepted by 'Nature Communications' within weeks!", 
              author: "Dr. Anya Sharma", 
              role: "Genomics Researcher" 
            },
            { 
              quote: "Navigating journal submissions felt impossible. GeneVeda made it seamless, leading to publication in 'Cell Reports'.", 
              author: "Prof. Ben Carter", 
              role: "Biochemistry Lead" 
            }
          ].map((testimonial, i) => (
            <motion.div 
              key={i} 
              {...fadeIn} 
              className="bg-zinc-900 p-10 rounded-[3rem] border border-white/5 hover:border-secondary transition-colors duration-500 group relative"
            >
              <Quote className="absolute -top-6 -left-6 text-secondary/30 group-hover:text-secondary transition-colors" size={60} fill="currentColor" />
              <p className="text-xl italic leading-relaxed mb-8 relative z-10">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-secondary font-black text-xs">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-black uppercase text-xs">{testimonial.author}</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION: BEHIND THE SCIENCE (Images) --- */}
      <section className="py-10 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div {...imageAnimate} className="relative h-96 rounded-[3rem] overflow-hidden shadow-lg">
            <Image src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVibGljYXRpb25zfGVufDB8fDB8fHww?q=80&w=800" fill className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-700" alt="Lab Research" />
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all" />
          </motion.div>
          <motion.div {...imageAnimate} className="relative h-96 rounded-[3rem] overflow-hidden shadow-lg lg:col-span-1">
            <Image src="https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg?q=80&w=800" fill className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-700" alt="Data Analysis" />
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all" />
          </motion.div>
          <motion.div {...imageAnimate} className="relative h-96 rounded-[3rem] overflow-hidden shadow-lg md:col-span-2 lg:col-span-1">
            <Image src="https://images.pexels.com/photos/32063096/pexels-photo-32063096.jpeg?q=80&w=800" fill className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-700" alt="Microscope Work" />
            <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all" />
          </motion.div>
        </div>
      </section>

    </div>
  );
}