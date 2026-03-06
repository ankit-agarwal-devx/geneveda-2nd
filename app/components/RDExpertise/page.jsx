import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image component for external service images

import {
  Dna,
  Beaker,
  PenTool,
  BarChart3,
  Binary,
  Microscope,
  FlaskConical,
  ShieldAlert,
  GraduationCap,
  SearchCode,
  Globe,
  Leaf,
  Zap,
  Pill,
  Activity,
  MicroscopeIcon,
  Atom,
  Workflow,
  BookText,
  Database,
  Code,
  FlaskConicalOutline,
  Bug,
  Wheat,
  Scale,
  BrainCircuit,
  Lightbulb,
  UserRoundCog,
  Settings,
} from "lucide-react";

const serviceCategories = [
  {
    id: "bioinformatics",
    title: "Bioinformatics Services",
    href: "/services/bioinformatics",
    icon: <Binary className="w-8 h-8" />,
    summary:
      "GeneVeda Biosciences offers advanced bioinformatics and computational biology solutions to convert complex biological datasets into meaningful, accurate, and actionable scientific insights, supporting academic research, pharmaceutical development, diagnostics, and applied life sciences.",
    imageUrl:
      "https://images.pexels.com/photos/25626515/pexels-photo-25626515.jpeg?auto=compress&cs=tinysrgb&w=2000", // Free Pexels image with Indian professionals in office setting
    color: "#EAB308", // Secondary Yellow
    subServices: [
      // { name: "Sequence Analysis", desc: "DNA, RNA, protein alignment, BLAST searches, gene prediction, and mutation detection.", icon: <Dna />, slug: "sequence-analysis" },
      // { name: "Genomics & Transcriptomics", desc: "WGS data analysis, RNA-Seq, differential gene expression, and functional enrichment (GO, KEGG).", icon: <SearchCode />, slug: "sequence-analysis" },
      // { name: "Proteomics & Metabolomics", desc: "Protein ID, structural prediction, protein–protein interactions, and biomarker discovery.", icon: <Microscope />, slug: "sequence-analysis" },
      // { name: "Structural Bioinformatics & Drug Discovery", desc: "3D protein modeling, molecular docking, virtual screening, and ADMET studies.", icon: <Pill />, slug: "sequence-analysis" },
      // { name: "Phylogenetics & Evolutionary Analysis", desc: "Phylogenetic tree construction, comparative genomics, and population genetics.", icon: <Workflow />, slug: "sequence-analysis" },
      // { name: "Custom Bioinformatics Projects", desc: "Automated pipelines, advanced data visualization, statistical modeling, and database management.", icon: <Settings />, slug: "sequence-analysis" },
    ],
  },
  {
    id: "analysis",
    title: "Data Analysis Services",
    href: "/services/data-analysis",
    icon: <BarChart3 className="w-8 h-8" />,
    summary:
      "GeneVeda Biosciences offers accurate, reliable, and publication-ready data analysis using advanced statistical and bioinformatics tools, transforming raw data into meaningful scientific reports and actionable insights.",
    imageUrl:
      "https://images.pexels.com/photos/7948058/pexels-photo-7948058.jpeg?auto=compress&cs=tinysrgb&w=2000", // Free Pexels image for Data Analysis
    color: "#000000", // Black
    subServices: [
      // { name: "Statistical Analysis", desc: "Using SPSS, R, Python, GraphPad Prism for biological and clinical data.", icon: <BarChart3 /> },
      // { name: "Omics Data Interpretation", desc: "Genomics, transcriptomics, proteomics, and metabolomics data validation and interpretation.", icon: <BrainCircuit /> },
      // { name: "Machine Learning & Predictive Modeling", desc: "Advanced AI for biological datasets, experimental result validation, and interpretation.", icon: <Lightbulb /> },
      // { name: "Data Visualization & Reporting", desc: "Charts, plots, heatmaps, network graphs, and custom scientific report generation.", icon: <Database /> },
    ],
  },
  {
    id: "wet-lab",
    title: "Wet Lab Services",
    icon: <FlaskConical className="w-8 h-8" />,
    summary:
      "GeneVeda Biosciences provides comprehensive wet laboratory research services across multiple life science disciplines with strict quality assurance, ethical research practices, and standardized protocols, transforming scientific concepts into tangible results.",
    imageUrl:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGFifGVufDB8fDB8fHww?q=80&w=2070&auto=format&fit=crop", // Unsplash image for Wet Lab
    color: "#000000", // Black
    subServices: [
      {
        name: "Biotechnology & Cloning",
        desc: "DNA/RNA extraction, PCR, RT-PCR, recombinant DNA tech, and gene expression studies.",
        icon: <Beaker />,
        color: "text-blue-600", // Lab Blue
        href: "/services/wetlab/biotech",
      },
      {
        name: "Microbiology & AMR",
        desc: "Isolation, culturing, ID of microorganisms, antibiotic sensitivity, and AMR studies.",
        icon: <Bug />,
        color: "text-emerald-600", // Bacterial Green
        href: "/services/wetlab/microbiology",
      },
      {
        name: "Biochemistry & Assays",
        desc: "Quantitative estimations, enzyme kinetics, chromatographic techniques, and metabolic pathway analysis.",
        icon: <Atom />,
        color: "text-purple-600", // Molecular Purple
        href: "/services/wetlab/biochemistry",
      },
      {
        name: "Food Technology",
        desc: "Food quality, nutritional analysis, shelf-life, safety, product formulation, and preservation.",
        icon: <Scale />,
        color: "text-orange-500", // Nutrition Orange
        href: "/services/wetlab/food-technology",
      },
      {
        name: "Environmental Science",
        desc: "Water/soil/air quality, pollution monitoring, bioremediation, and EIA studies.",
        icon: <Leaf />,
        color: "text-teal-600", // Nature Teal
        href: "/services/wetlab/environmental-science",
      },
      {
        name: "Agriculture",
        desc: "Soil fertility, plant tissue culture, crop disease diagnosis, and biofertilizer development.",
        icon: <Wheat />,
        color: "text-amber-600", // Harvest Gold
        href: "/services/wetlab/agriculture",
      },
      {
        name: "Immunology",
        desc: "ELISA, antigen–antibody interactions, vaccine research, flow cytometry, and cytokine analysis.",
        icon: <ShieldAlert />,
        color: "text-red-600", // Antibody Red
        href: "/services/wetlab/immunology",
      },
      {
        name: "Biopharma",
        desc: "Drug formulation, stability testing, quality control, bioavailability, and clinical research support.",
        icon: <Pill />,
        color: "text-rose-500", // Pharma Rose
        href: "/services/wetlab/bio-pharma",
      },
      {
        name: "Nanotechnology",
        desc: "Nanoparticle synthesis, characterization (SEM, TEM), nano drug delivery, and biosensors.",
        icon: <MicroscopeIcon />,
        color: "text-indigo-600", // High-tech Indigo
        href: "/services/wetlab/nano-technology",
      },
      {
        name: "Cell Culture",
        desc: "Mammalian, microbial, plant, and stem cell culture, cytotoxicity assays, and drug screening.",
        icon: <Activity />,
        href: "/services/wetlab/cell-culture",
        color: "text-cyan-600", // Vitality Cyan
      },
    ],
  },
  {
    id: "writing",
    title: "Scientific Writing Services",
    icon: <PenTool className="w-8 h-8" />,
    summary:
      "GeneVeda Biosciences provides professional scientific documentation and publication support to researchers, students, and academic institutions worldwide, ensuring clarity, accuracy, and adherence to academic standards.",
    imageUrl:
      "/images/scientificWriting1.png",
    color: "#EAB308", // Secondary Yellow
    subServices: [
      {
        name: "Thesis Writing",
        desc: "Research topic selection, proposal, literature review, methodology, data interpretation, and formatting.",
        icon: <GraduationCap />,
        color: "text-blue-700", // Academic Blue
        href: "/services/scientific-writing/thesis",
      },
      {
        name: "Dissertation Writing",
        desc: "Complete drafting, research framework, statistical analysis, visualization, referencing, and proofreading.",
        icon: <BookText />,
        color: "text-teal-600", // Research Purple
        href: "/services/scientific-writing/dissertation",
      },
      {
        name: "Publication Support",
        desc: "Research/review article writing, journal selection, manuscript formatting, plagiarism reduction, and submission assistance.",
        icon: <PenTool />,
        color: "text-indigo-600", // Publication Indigo
        href: "/services/scientific-writing/publication",
      },
    ],
  },
];

const RDExpertise = () => {
  return (
    <section className="py-5 bg-white relative overflow-hidden">
      {/* Background Dot Pattern with Masking to prevent horizontal lines */}
      <div
        className="absolute inset-0 z-0 opacity-[0.1]"
        style={{
          backgroundImage: "radial-gradient(#4BAF4F 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-5">
          <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Capabilities
          </span>
          <h2 className="text-4xl font-black text-headerGray tracking-tighter mb-3">
            Our Core <span className="text-secondary">Services</span>
          </h2>
          <div className="w-40 h-1 bg-black"></div>
          <p className="mt-4 text-slate-500 max-w-3xl text-xl font-medium leading-relaxed">
            GeneVeda Biosciences provides a multidisciplinary approach to
            biotechnology, empowering researchers and industries with integrated
            solutions.
          </p>
        </div>

        {/* Categories Grid - Each card now represents a main service with image & sub-services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {" "}
          {/* Increased gap for visual breathing room */}
          {serviceCategories.map((category, index) => (
            <div
              key={category.id}
              className="group relative p-8 rounded-[3rem] transition-all duration-500
                         bg-gray-50 border border-transparent hover:border-black hover:bg-white
                         hover:shadow-2xl flex flex-col items-start text-left overflow-hidden"
            >
              {/* Category Image */}
              <div className="relative w-full h-48 rounded-[2rem] overflow-hidden mb-6 border border-slate-200">
                <Image
                  src={category.imageUrl}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105  brightness-90 group-hover:brightness-110transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {category.href ? (
                <Link href={category.href} className="group block">
                  <div className="flex items-center gap-6 mb-4 cursor-pointer">
                    <div className="p-3 rounded-xl bg-black text-secondary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-lg shadow-secondary/10">
                      {category.icon}
                    </div>
                    <h3 className="text-3xl font-black text-black leading-none group-hover:text-secondary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-6 mb-4">
                  <div className="p-3 rounded-xl bg-black text-secondary">
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-black text-headerGray leading-none">
                    {category.title}
                  </h3>
                </div>
              )}

              <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                {category.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 w-full mb-10">
                {category.subServices.map((subService, i) => (
                  <Link
                    key={i}
                    href={`${subService.href}`}
                    className="group/sub flex items-start gap-2 text-slate-500 text-sm font-bold hover:text-black transition-all duration-300"
                  >
                    <span
                      className={`shrink-0 pt-1 transition-colors ${subService.color || "text-secondary"}`}
                    >
                      {React.cloneElement(subService.icon, {
                        size: 16,
                        strokeWidth: 2,
                      })}
                    </span>

                    <div>
                      <span className="block">{subService.name}</span>
                      <p className="font-normal text-slate-400 text-xs leading-snug">
                        {subService.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

 <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-b-2 border-r-2 border-secondary"></div>
              </div>
              {/* Bottom Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/10 blur-[50px] group-hover:bg-secondary/20 transition-all rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RDExpertise;
