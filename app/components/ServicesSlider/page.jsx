import React from "react";
import {
  Dna,
  Database,
  Microscope,
  GraduationCap,
  Globe,
  Binary,
  TestTube2,
} from "lucide-react";
import "./style.css";

const services = [
  {
    name: "R&D Services",
    icon: <Microscope className="w-8 h-8" />,
    color: "#4BAF4F",
  }, // Green
  {
    name: "Bioinformatics",
    icon: <Binary className="w-8 h-8" />,
    color: "#3B82F6",
  }, // Blue
  {
    name: "NGS Sequencing",
    icon: <Dna className="w-8 h-8" />,
    color: "#F59E0B",
  }, // Gold/Amber
  {
    name: "Data Analysis",
    icon: <Database className="w-8 h-8" />,
    color: "#06B6D4",
  }, // Cyan
  {
    name: "Technical Training",
    icon: <TestTube2 className="w-8 h-8" />,
    color: "#EF4444",
  }, // Red/Coral
  {
    name: "Study Abroad",
    icon: <Globe className="w-8 h-8" />,
    color: "#10B981",
  }, // Emerald
  {
    name: "Skill Upskilling",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "#6366F1",
  }, // Indigo
];

const ServiceSlider = () => {
  // Double the array to ensure seamless looping
  const duplicatedServices = [...services, ...services];

  return (
    <div 
    className="bg-white py-10 overflow-hidden border-y border-gray-100"
     style={{
        backgroundImage:
          "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div className="container mx-auto px-6 mb-8 text-center">
        <h2 className="text-4xl text-headerGray italic">
          Our Core Specializations
        </h2>
      </div>

      <div className="relative flex">
        <div className="animate-scroll flex gap-12 items-center">
          {duplicatedServices.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-8 py-4 bg-zinc-50 rounded-xl border border-zinc-100 min-w-[250px] group hover:border-tertiary transition-colors"
            >
              <div
                style={{ color: service.color }}
                className="group-hover:scale-110 transition-transform"
              >
                {service.icon}
              </div>
              <span className="text-lg text-black whitespace-nowrap">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
