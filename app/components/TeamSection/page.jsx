import React from "react";
import { Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

const TeamSection = () => {
    const teamMembers = [
  {
    id: 1,
    name: "Dr. Samarth Jain",
    role: "Founder & Chief Scientist",
    specialty: "Computational Genomics",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=facearea&facepad=3&faceindex=1",
  },
  {
    id: 2,
    name: "Dr. Ananya Rao",
    role: "Head of Wet Lab",
    specialty: "Molecular Microbiology",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&fit=facearea&facepad=3",
  },
  {
    id: 3,
    name: "Vikram Seth",
    role: "Lead Bioinformatician",
    specialty: "Data Visualization & AI",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400&fit=facearea&facepad=3",
  },
  {
    id: 4,
    name: "Sarah Thompson",
    role: "Head of Scientific Writing",
    specialty: "Publication Strategy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&fit=facearea&facepad=3",
  },
];
  return (
    <section 
    className="py-10 bg-white relative"
          style={{
        backgroundImage:
          "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] block mb-4">
            Our Faculty
          </span>
          <h2 className="text-4xl font-black text-headerGray tracking-tighter leading-[0.9]">
            Meet the <br />
            <span className="text-secondary italic">Visionaries</span>
          </h2>
          <div className="w-60 h-2 bg-headerGray mt-6"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative">
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 border-2 border-transparent group-hover:border-black transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 brightness-90 group-hover:brightness-110 transition-all duration-700 ease-in-out"
                />
                
              </div>

              {/* Info Area */}
              <div className="mt-6 px-2 text-center">
                <h4 className="text-xl font-black text-black uppercase tracking-tight group-hover:text-secondary transition-colors">
                  {member.name}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">
                  {member.role}
                </p>
                <div className="inline-block mt-3 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-500 group-hover:bg-black group-hover:text-white transition-all">
                  {member.specialty}
                </div>
              </div>
              
              {/* Subtle accent line */}
              <div className="mt-6 w-0 h-1 bg-blueShade mx-auto group-hover:w-1/2 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;