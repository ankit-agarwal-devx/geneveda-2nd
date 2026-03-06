"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight, Beaker } from "lucide-react";
import Image from "next/image";

const GlobalCountries = () => {
  const countries = [
    {
      name: "Germany",
      image: "/images/germany-research.jpg",
      stats: "15+ Partner Labs",
      focus: "Automotive & Biotech",
      size: "md:col-span-2",
      id: "DE"
    },
    {
      name: "USA",
      image: "/images/usa-research.jpg",
      stats: "30+ Hubs",
      focus: "Clinical Innovation",
      size: "md:col-span-1",
      id: "US"
    },
    {
      name: "United Kingdom",
      image: "/images/uk.png",
      stats: "12+ Institutes",
      focus: "Genetics & Data",
      size: "md:col-span-1",
      id: "UK"
    },
    {
      name: "Japan",
      image: "/images/japan-research.jpg",
      stats: "10+ Tech Centers",
      focus: "Robotics & MedTech",
      size: "md:col-span-2",
      id: "JP"
    }
  ];

  return (
    <section className="bg-white py-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">
              Network Expansion 2026
            </span>
            <h2 className="text-5xl font-bold text-headerGray mb-6">
              Global <span className="text-secondary italic">Geographies</span>
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We have established strategic research corridors in nations leading the 
              next scientific revolution. Select a region to view specific placement availability.
            </p>
          </div>
        </div>

        {/* --- COUNTRY BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {countries.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative h-[400px] rounded-[2rem] overflow-hidden bg-primary ${country.size}`}
            >
              {/* Image Layer with Zoom */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                {/* Replace with <Image src={country.image} fill /> */}
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image
                  src={country.image}
                  alt={`${country.name} research hub`}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={i < 2} // Priority loading for first few images
                />
              </div>
              </div>

              {/* Technical Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Secondary Color Flare */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] group-hover:bg-secondary/40 transition-all duration-700" />

              {/* Content Layer */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-md group-hover:border-secondary transition-colors">
                    <span className="text-xs font-bold">{country.id}</span>
                  </div>
                  <motion.div 
                    whileHover={{ rotate: 45 }}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0"
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Beaker size={16} className="text-secondary" />
                    <span className="text-secondary font-mono text-[10px] uppercase tracking-widest">
                      {country.focus}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">
                    {country.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium">
                    {country.stats}
                  </p>
                </div>
              </div>

              {/* Scanner Line Animation on Hover */}
              <motion.div 
                initial={{ top: "-100%" }}
                whileHover={{ top: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-secondary/30 z-20 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalCountries;