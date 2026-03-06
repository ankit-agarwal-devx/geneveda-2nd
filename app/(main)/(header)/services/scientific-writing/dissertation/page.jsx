"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FileText, ArrowUpRight, ShieldCheck, Languages, 
  Microscope, GraduationCap, PenTool, 
  LineChart, CheckCircle2, Quote, Zap, MoveRight,
  Database, Search, Library, FileSearch,
  BookMarked,
  BarChart,
} from "lucide-react";

export default function ExpandedDissertationPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      
      {/* --- HERO SECTION --- */}
    <section
  className="relative h-[70vh] overflow-hidden py-20 lg:py-24 border-b border-black/5"
  style={{
    backgroundImage: `
      linear-gradient(
        to bottom right,
        rgba(10,25,40,.35),
        rgba(0,0,0,.25)
      ),
      url("https://images.unsplash.com/photo-1570929057588-6952f7dd2305?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzc2VydGF0aW9ufGVufDB8fDB8fHww?q=80&w=2000")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* Dot grid */}
  <div
    className="absolute inset-0 opacity-20"
    style={{
      backgroundImage:
        "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
      backgroundSize: "30px 30px",
    }}
  />

  {/* Soft glows */}
  <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-secondary/20 blur-[140px]" />
  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blueShade/20 blur-[140px]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">

    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur text-blueShade text-[10px] font-black uppercase tracking-widest mb-6 border border-white/20">
      Dissertation Support Program
    </span>

    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-blueShade mb-6 max-w-3xl">
      Elite <span className="text-secondary italic">Scholarly</span> Writing
    </h1>

    <p className="text-black/80 font-semibold text-base md:text-lg max-w-xl leading-relaxed mb-10">
      From proposal to final submission — we transform complex research into
      structured, committee-ready dissertations for Biotechnology and Life
      Sciences scholars.
    </p>

    {/* Micro content */}
    <div className="flex flex-wrap gap-3 text-sm text-white/70 font-semibold">
      <span>SCI Formatting</span>
      <span>Supervisor Revisions</span>
      <span>Plagiarism Safe</span>
      <span>Technical Editing</span>
    </div>

  </div>
</section>


<section className="py-10 px-6 lg:px-20 bg-white border-b border-zinc-100">
  <div className="max-w-7xl mx-auto">

    {/* Intro */}
    <div className="max-w-3xl mb-10">
      <span className="text-blueShade text-[10px] font-black tracking-[0.35em] uppercase">
        Dissertation Development Program
      </span>

      <h2 className="text-3xl md:text-4xl font-black mt-4 mb-6">
        Structured Academic Support for{" "}
        <span className="text-secondary italic">Master’s & PhD Dissertations</span>
      </h2>

      <p className="text-zinc-500 leading-relaxed">
        Your dissertation represents years of research. We help transform that
        effort into a technically sound, clearly articulated, committee-ready
        document — combining scientific precision with academic storytelling.
      </p>
    </div>

    {/* Core Services */}
    <div className="grid md:grid-cols-3 gap-10 mb-10">

      <div className="p-8 rounded-3xl border shadow-sm">
        <GraduationCap className="text-indigo-500 mb-4" size={32} />
        <h3 className="font-bold mb-3">Concept to Chapter Framework</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Assistance with proposal design, research questions, hypothesis
          framing, chapter outlines, and logical academic flow.
        </p>
      </div>

      <div className="p-8 rounded-3xl border shadow-sm">
        <Microscope className="text-emerald-500 mb-4" size={32} />
        <h3 className="font-bold mb-3">Methodology & Results Writing</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Clear documentation of experimental workflows, protocols, statistical
          analysis, figures, and biological interpretation.
        </p>
      </div>

      <div className="p-8 rounded-3xl border shadow-sm">
        <PenTool className="text-orange-500 mb-4" size={32} />
        <h3 className="font-bold mb-3">Scientific Editing & Formatting</h3>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Technical language refinement, grammar correction, reference
          formatting, and institutional style compliance.
        </p>
      </div>

    </div>

    {/* Bottom Split */}
    <div className="grid md:grid-cols-2 gap-16 items-start">

      {/* Left */}
      <div>
        <h3 className="text-2xl font-black mb-6">
          Built for Serious Researchers
        </h3>

        <p className="text-zinc-500 mb-8 leading-relaxed">
          Our dissertation workflow is designed specifically for Biotechnology,
          Life Sciences, and Biomedical scholars. We understand experimental
          design, data interpretation, and reviewer expectations — not just
          language.
        </p>

        <ul className="space-y-4 text-sm">

          <li className="flex gap-3 items-start">
            <BookMarked className="text-blue-500 mt-0.5" size={18} />
            Chapter-by-chapter guided development
          </li>

          <li className="flex gap-3 items-start">
            <BarChart className="text-purple-500 mt-0.5" size={18} />
            Statistical reporting & result visualization
          </li>

          <li className="flex gap-3 items-start">
            <ShieldCheck className="text-green-500 mt-0.5" size={18} />
            Plagiarism screening & academic integrity checks
          </li>

          <li className="flex gap-3 items-start">
            <GraduationCap className="text-orange-500 mt-0.5" size={18} />
            Viva-ready presentation guidance
          </li>

        </ul>
      </div>

      {/* Right */}
      <div className="bg-zinc-50 rounded-3xl p-10 border">

        <h4 className="font-bold mb-4">Our Dissertation Workflow</h4>

        <ol className="space-y-4 text-sm text-zinc-600">

          <li>
            <strong>01.</strong> Research assessment & goal mapping
          </li>

          <li>
            <strong>02.</strong> Chapter structuring & content planning
          </li>

          <li>
            <strong>03.</strong> Technical writing + scientific editing
          </li>

          <li>
            <strong>04.</strong> Supervisor feedback integration
          </li>

          <li>
            <strong>05.</strong> Final formatting & submission readiness
          </li>

        </ol>

        <p className="text-zinc-500 text-sm leading-relaxed mt-6">
          Each stage is handled collaboratively with multiple revision cycles
          to ensure your dissertation meets institutional standards while
          clearly communicating your scientific contribution.
        </p>

      </div>

    </div>

  </div>
</section>



      {/* --- SECTION: THE STRUCTURAL BLUEPRINT --- */}
      <section className="py-10 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 mb-10">
             <div className="flex-1">
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">The Anatomy of a <br /><span className="text-secondary">Perfect Thesis.</span></h2>
                <p className="text-black/50 font-medium mb-10">Our editors don&apos;t just fix grammar; we reconstruct the logic of your research to ensure it survives the most rigorous defense.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[
                     { t: "Abstract Refinement", d: "Summarizing complex findings for immediate impact." },
                     { t: "Methodology Validation", d: "Ensuring technical reproducibility and clarity." },
                     { t: "Discussion Synthesis", d: "Connecting results to global scientific trends." },
                     { t: "Citation Accuracy", d: "Zero-error bibliography management (APA/MLA/Chicago)." }
                   ].map((item, i) => (
                      <div key={i} className="p-6 border border-black/5 rounded-3xl hover:border-secondary transition-colors">
                         <CheckCircle2 className="text-secondary mb-4" size={20} />
                         <h4 className="font-black uppercase text-xs mb-2">{item.t}</h4>
                         <p className="text-black/40 text-[11px] leading-relaxed">{item.d}</p>
                      </div>
                   ))}
                </div>
             </div>
             <div className="flex-1 relative h-[600px] rounded-[4rem] overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200" fill className="object-cover" alt="Dissertation Planning" />
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: PLAGIARISM & INTEGRITY AUDIT --- */}
      <section className="py-10 px-6 lg:px-20 bg-black text-white rounded-[5rem] mx-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-5">
          <div className="flex-1 relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="relative w-[33vw] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10">
  <Image
    src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800"
    fill
    className="object-cover"
    alt="Data Audit"
     sizes="33vw"
  />
</div>

<div className="relative aspect-[4/5] mt-12 rounded-3xl overflow-hidden border border-white/10">
  <Image
    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
    fill
    className="object-cover"
    alt="Similarity Report"
  />
</div>

             </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
             <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none">Zero Similarity. <br /><span className="text-secondary">Full Integrity.</span></h2>
             <p className="text-white/40 mb-12 max-w-md">We utilize industry-grade Turnitin and iThenticate algorithms alongside human paraphrasing to ensure your work is 100% original.</p>
             <div className="space-y-6">
                {[
                  { icon: <FileSearch />, t: "Similarity Index Reduction", d: "Manual paraphrasing of high-match segments." },
                  { icon: <Library />, t: "Source Attribution", d: "Correcting improper citations and missing references." },
                  { icon: <ShieldCheck />, t: "AI Detection Pass", d: "Refining text to ensure human-centric scientific flow." }
                ].map((audit, i) => (
                  <div key={i} className="flex gap-6 items-start">
                     <div className="text-secondary mt-1">{audit.icon}</div>
                     <div>
                        <h4 className="font-black uppercase text-sm mb-1">{audit.t}</h4>
                        <p className="text-white/30 text-xs leading-relaxed">{audit.d}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: JOURNAL INDEXING REACH --- */}
      <section className="py-10 px-6 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-8">
           <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Optimized for <span className="text-secondary">Global Impact.</span></h2>
           <p className="text-black/40 font-bold uppercase tracking-widest text-[10px]">Indexed & Submission Ready For:</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
           {['NATURE', 'CELL', 'THE LANCET', 'PUBMED', 'SCOPUS', 'WEB OF SCIENCE', 'SPRINGER', 'ELSEVIER'].map(journal => (
              <div key={journal} className="py-10 border border-black/5 rounded-[2rem] flex items-center justify-center font-black tracking-[0.3em] text-xs hover:bg-black hover:text-white transition-all">
                 {journal}
              </div>
           ))}
        </div>
      </section>

      {/* --- SECTION: THE EXPERT PANEL --- */}
      <section className="py-10 px-6 lg:px-20 bg-zinc-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
           <div className="flex-1">
              <div className="p-10 bg-white border border-black/5 rounded-[4rem] relative shadow-2xl">
                 <Quote className="absolute -top-6 -left-6 text-secondary" size={60} fill="currentColor" />
                 <p className="text-2xl font-black italic leading-tight mb-8">
                    &quot;The transition from a raw dissertation to a published manuscript was seamless. GeneVeda&apos;s technical team understands the biological nuances that generic editors miss.&quot;
                 </p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-black text-xs">SJ</div>
                    <div>
                       <p className="font-black uppercase text-xs">Dr. Sarah Jenkins</p>
                       <p className="text-[10px] font-bold text-secondary uppercase">Post-Doc, Genomics</p>
                    </div>
                 </div>
              </div>
           </div>
           <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">Edited by <br /><span className="text-secondary">Scientists</span>, <br />Not Grammarians.</h2>
              <p className="text-black/50 font-medium">Every manuscript is handled by a subject matter expert with a PhD in your specific field of research.</p>
              <ul className="space-y-4">
                 {["Microbiology & Virology", "Bioinformatics & NGS", "Clinical Research", "Molecular Biology"].map(field => (
                    <li key={field} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
                       <div className="w-2 h-2 rounded-full bg-secondary" /> {field}
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </section>

    </div>
  );
}