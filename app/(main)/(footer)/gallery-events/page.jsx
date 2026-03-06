"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

// Sample Image Data - Replace with your actual image paths and descriptions
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2000",
    alt: "Advanced Research Facility",
    category: "Research",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000",
    alt: "Team Collaboration",
    category: "Team",
  },
  {
    src: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2000",
    alt: "DNA Sequencing",
    category: "Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000",
    alt: "Workshop Session",
    category: "Education",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000",
    alt: "Data Analysis",
    category: "Research",
  },
  {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2000",
    alt: "Lab Equipment",
    category: "Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000",
    alt: "Student Engagement",
    category: "Education",
  },
];

// Sample Event Data - Replace with your actual event details
const events = [
  {
    title: "Next-Gen Sequencing Workshop 2.0",
    date: "March 15, 2026",
    location: "Virtual & On-site",
    desc: "An intensive workshop covering advanced NGS techniques and bioinformatics analysis.",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000",
  },
  {
    title: "Global Bioscience Summit 2026",
    date: "April 22-24, 2026",
    location: "London, UK",
    desc: "GeneVeda will be presenting new research on AMR at this prestigious international summit.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000",
  },
  {
    title: "Faculty Development Program: AI in Biology",
    date: "May 10-12, 2026",
    location: "Online",
    desc: "A comprehensive FDP focused on integrating AI and machine learning into biological research.",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000",
  },
];

export default function GalleryEventsPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30 font-sans overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section 
      className="relative pt-32 pb-5 px-6 bg-[#FDFDFD]"
      style={{
        backgroundImage:
          "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
        backgroundSize: "20px 20px",
      }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-5">
          <motion.div
            {...fadeIn}
            className="flex-1 z-10 text-center md:text-left"
          >
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              Our Journey Visualized
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
              Gallery & <br />
              <span className="text-secondary">Events.</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              Explore moments from our labs, collaborative events, and
              educational programs shaping the future of bioscience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative w-full aspect-square max-w-[400px] lg:block" // Hidden on smaller screens
          >
            {/* The Rotating Accent (Consistent) */}
            <div className="absolute -inset-8 border-2 border-dashed border-secondary/30 rounded-[3rem] animate-[spin_20s_linear_infinite]" />
            <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-gray-100 shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2000" // Generic lab work image
                alt="Gallery Hero"
                fill
                className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. GALLERY SECTION */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-5xl font-black uppercase tracking-tighter mb-16 text-center"
          >
            Our <span className="text-secondary">Visual Story</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative group w-full aspect-[4/3] overflow-hidden bg-gray-100 cursor-pointer shadow-lg"
                onClick={() => openLightbox(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-bold uppercase tracking-wide">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. UPCOMING & PAST EVENTS SECTION */}
      <section className="py-10 px-6 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeIn}
            className="text-5xl font-black uppercase tracking-tighter mb-16 text-center"
          >
            Upcoming <span className="text-secondary">Events</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="flex flex-col lg:flex-row bg-white border border-gray-100 hover:border-secondary transition-all duration-500 shadow-md group"
              >
                <div className="relative w-full lg:w-2/5 aspect-video lg:aspect-square overflow-hidden bg-gray-200">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 lg:p-10 flex-1">
                  <p className="text-secondary text-xs font-black uppercase tracking-widest mb-2">
                    {event.date}
                  </p>
                  <h3 className="text-3xl font-black mb-4 leading-tight group-hover:text-secondary transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6">{event.desc}</p>
                  <p className="text-black text-xs font-bold uppercase tracking-widest">
                    <span className="w-2 h-2 bg-black inline-block rounded-full mr-4 group-hover:bg-secondary transition-colors" />
                    {event.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX COMPONENT */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[9999] cursor-zoom-out"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200} // Set a max width for the lightbox image
              height={800} // Set a max height for the lightbox image
              className="object-contain w-full h-full"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.alt}
            </p>
          </div>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl leading-none px-4 py-2 hover:opacity-70 transition-opacity"
          >
            &times;
          </button>
        </motion.div>
      )}
    </div>
  );
}
