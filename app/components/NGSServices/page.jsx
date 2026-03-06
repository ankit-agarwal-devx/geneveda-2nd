import React from "react";
import {
  Layers,
  Activity,
  Fingerprint,
  Database,
  Share2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ngsServices = [
  {
    name: "Whole Genome/Exome",
    desc: "Comprehensive WGS & WES for complete genetic blueprints.",
    icon: <Layers className="w-5 h-5" />,
    image:
      "/images/fromClient/genomeExome.jpeg",
  },
  {
    name: "RNA-Seq Analysis",
    desc: "Transcriptomics and differential expression insights.",
    icon: <Activity className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Amplicon (16S/18S)",
    desc: "Microbiome profiling via 16S/18S/ITS sequencing.",
    icon: <Fingerprint className="w-5 h-5" />,
    image:
      "/images/fromClient/amplicon.jpeg",
  },
  {
    name: "Shotgun Metagenomics",
    desc: "High-resolution taxonomic and functional profiling.",
    icon: <Database className="w-5 h-5" />,
    image:
      "/images/fromClient/metagonics.jpeg",
  },
  {
    name: "Variant Analysis",
    desc: "Precise detection of SNPs, Indels, and structural variants.",
    icon: <Share2 className="w-5 h-5" />,
    image:
      "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=800",
  },
];

const NGSServices = () => {
  const iconColorClasses = [
    "text-blue-600 bg-blue-100 group-hover:bg-blue-600",
    "text-emerald-600 bg-emerald-100 group-hover:bg-emerald-600",
    "text-rose-600 bg-rose-100 group-hover:bg-rose-600",
    "text-violet-600 bg-violet-100 group-hover:bg-violet-600",
    "text-amber-600 bg-amber-100 group-hover:bg-amber-600",
  ];

  return (
    <section className="py-12 bg-tertiary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl text-headerGray mb-6">
              Next-Generation{" "}
              <span className="text-secondary italic">Sequencing</span> (NGS)
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed border-l-4 border-secondary pl-6">
              Our NGS division offers end-to-end sequencing and analysis
              services with strict quality control and fast turnaround times.
            </p>
          </div>
          <div className="hidden lg:block">
            {/* Using Black and Secondary for the badge */}
            <div className="bg-white/40 backdrop-blur-md text-black border border-blueShade/30 px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm">
              Precision <span className="text-secondary">Sequencing</span>
            </div>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ngsServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200 hover:border-secondary"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-110"
                />
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-lg transition-all group-hover:text-white ${iconColorClasses[index % iconColorClasses.length]}`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-headerGray">
                    {service.name}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Call to Action Card - Black & Secondary focus */}
          <div className="relative rounded-2xl overflow-hidden bg-white/50 backdrop-blur-md p-10 flex flex-col justify-center min-h-[400px] border-2 border-secondary shadow-xl">
            {/* Decorative Glow - Adjusted to be more visible on light BG */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>

            <h3 className="text-3xl mb-6 text-headerGray relative z-10">
              Ready to start your{" "}
              <span className="text-secondary italic">project?</span>
            </h3>

            <p className="text-slate-700 mb-8 leading-relaxed relative z-10 font-medium">
              From sample preparation to final insights, we ensure accuracy and
              reproducibility.
            </p>

<Link
  href="/contact-us"
>
            <button
              className="relative px-10 py-4 rounded-full font-bold uppercase tracking-wider overflow-hidden transition-all duration-500 group
             cursor-pointer shadow-lg w-full md:w-auto z-10 bg-transparent"
              style={{
                borderColor: "rgb(65, 100, 165)",
                borderWidth: "2px",
                borderStyle: "solid",
              }}
            >
              <span className="absolute inset-0 w-0 h-full bg-secondary transition-all duration-500 ease-out group-hover:w-full -z-10"></span>

              <span
                className="absolute inset-0 w-full h-full -z-10 transition-transform duration-700 -translate-x-full group-hover:translate-x-full ease-in-out"
                style={{
                  background:
                    "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                }}
              ></span>

              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Consult an Expert
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NGSServices;
