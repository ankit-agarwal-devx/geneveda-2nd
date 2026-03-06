"use client";
import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
  Beaker,
  Microscope,
  Users,
  Send,
  Loader2,
  ChevronDown,
} from "lucide-react";

const HighImpactHeader = () => {
  return (
    <div className="bg-white">
      {/* --- PART 1: FULL WIDTH CINEMATIC IMAGE --- */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="https://www.bausch.com/siteassets/1.6.0-contact-us-gettyimages-1181558147.jpg?q=80&w=2000&auto=format&fit=crop"
            fill
            priority
            className="object-cover"
            alt="High-fidelity Lab Research"
          />
          {/* Subtle Overlay to maintain light theme transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </motion.div>
      </section>
    </div>
  );
};

export default function ContactPage() {
const [loading, setLoading] = useState(false);
const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_number: "",
    service: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Enquiry Sent", {
          description: "We will get back to you shortly.",
        });
        
        setFormData({ name: "", email: "", contact_number: "", service: "", description: "" });
      } else {
        toast.error("Submission Failed", { description: result.error });
      }
    } catch (error) {
      toast.error("Network Error", { description: "Please try again later." });
    } finally {
      setLoading(false);
    }
  };
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 },
  };

  const teamMembers = [
    {
      name: "Dr. Aristhita Sen",
      role: "Lead Genomic Researcher",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmVtYWxlfGVufDB8fDB8fHww?q=80&w=400",
      bio: "Specializing in CRISPR-Cas9 crop fortification with over 12 years of wet-lab experience.",
    },
    {
      name: "Mark J. Sterling",
      role: "Head of Bio-Pharma Operations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400",
      bio: "Overseeing pharmaceutical synthesis and automated high-throughput screening pipelines.",
    },
    {
      name: "Sarah L. Chen",
      role: "Chief Immunologist",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400",
      bio: "Pioneer in monoclonal antibody engineering and adaptive immune response mapping.",
    },
  ];

  return (
    <div className="bg-white pt-20 text-headerGray min-h-screen selection:bg-secondary/30 font-sans">
      {/* --- 01. HERO SECTION --- */}
      <span>
        <HighImpactHeader />
      </span>
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          {/* --- MASTER CARD WRAPPER --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative -mt-32 md:-mt-55 z-20 py-5 bg-white rounded-[4rem] border-0.5 border-slate-400 shadow-[0_50px_100px_-20px_rgba(65,100,165,0.12)] overflow-hidden"
          >
            <section className="py-0 bg-white relative">
              {/* Subtle radial dot pattern to match your branding */}
              <div
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #4BAF4F 0.6px, #ffffff 0.6px)",
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  {/* Left Side: Contact Details */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block text-center">
                      Find Our Office
                    </span>
                    <h2 className="text-5xl font-black text-headerGray tracking-tighter mb-6 text-center">
                      Contact with <br />{" "}
                      <span className="text-secondary italic">the team</span>
                    </h2>
                    <p className="text-slate-500 font-medium mb-12 max-w-md text-center mx-auto">
                      Have questions about global research opportunities? Our
                      experts are here to help you navigate your international
                      scientific career.
                    </p>

                    <div className="max-w-2xl mx-auto mb-16 space-y-4">
                      {[
                        {
                          q: "How quickly do you respond to inquiries?",
                          a: "Our team typically reviews all research applications and inquiries within 24-48 business hours.",
                        },
                        {
                          q: "Do you offer remote consultations?",
                          a: "Yes, we provide virtual sessions via Zoom or Teams for international candidates across all time zones.",
                        },
                        {
                          q: "What documents should I have ready?",
                          a: "Please have your latest CV, research proposal, and valid academic credentials prepared for our initial review.",
                        },
                      ].map((faq, i) => (
                        <details
                          key={i}
                          className="group border-b border-slate-100 pb-4 cursor-pointer"
                        >
                          <summary className="flex items-center justify-between list-none font-bold text-headerGray text-sm hover:text-secondary transition-colors">
                            <span>{faq.q}</span>
                            <span className="transition-transform group-open:rotate-180">
                              <ChevronDown size={16} />
                            </span>
                          </summary>
                          <p className="text-slate-500 text-sm mt-3 leading-relaxed font-medium">
                            {faq.a}
                          </p>
                        </details>
                      ))}
                    </div>
                    <div className="w-full h-[200px] rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562065360946!2d77.22732107632427!3d28.61291197567491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2dab9eb4d0b%3A0x7117971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-2 md:p-4 rounded-[3.5rem] bg-white shadow-[0_30px_100px_-15px_rgba(83,200,30,0.15)]"
                  >
                    {/* The Inner Card */}
                    <div className="bg-white rounded-[3.4rem] p-2 md:p-6 relative overflow-hidden">
                      {/* Subtle Background Glow inside the form */}
                      <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute inset-0 bg-secondary/5 blur-[80px] -z-10 rounded-full scale-90" />

                      <form
                        onSubmit={handleSubmit}
                        className="relative z-10 space-y-5"
                      >
                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black ml-2">
                              Full Name
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              placeholder="John Doe"
                              className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-700 focus:bg-white focus:ring-1 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-black font-medium"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-black ml-2">
                              Email Address
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              placeholder="john@example.com"
                              className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-700 focus:bg-white focus:ring-1 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-black font-medium"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-black ml-2">
                            Contact Number
                          </label>
                          <input
                            type="text"
                            value={formData.contact_number}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                contact_number: e.target.value,
                              })
                            }
                            placeholder="+91 00000 00000"
                            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-700 focus:bg-white focus:ring-1 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-black font-medium"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-black ml-2">
                            Select Service
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={formData.service}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  service: e.target.value,
                                })
                              }
                              className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-700 focus:bg-white focus:ring-1 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-black font-medium appearance-none cursor-pointer"
                            >
                              <option disabled selected>
                                Choose a Service
                              </option>
                              <option>Bioinformatics</option>
                              <option>Wet Lab Services</option>
                              <option>Data Analysis</option>
                              <option>Scientific Writing</option>
                              <option>Other</option>
                            </select>
                            {/* Custom Arrow Icon */}
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                              <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M1 1L5 5L9 1" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-black ml-2">
                            Message
                          </label>
                          <textarea
                            placeholder="How can we help you?"
                            rows={3}
                            value={formData.description}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                description: e.target.value,
                              })
                            }
                            className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-700 focus:bg-white focus:ring-1 focus:ring-secondary/10 focus:border-secondary transition-all outline-none text-black font-medium resize-none"
                          ></textarea>
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="group relative w-full overflow-hidden rounded-2xl bg-black px-8 py-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(75,175,79,0.4)]"
                        >
                          {/* Animated Background for Button */}
                          {/* <div className="absolute inset-0 w-0 bg-secondary transition-all duration-500 ease-out group-hover:w-full" /> */}

                          <span className="relative z-10 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-white transition-colors duration-300">
                            {loading ? (
                              <Loader2 className="animate-spin" size={18} />
                            ) : (
                              <>
                                Send Message{" "}
                                <Send
                                  size={18}
                                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                                />
                              </>
                            )}
                          </span>
                        </button>
                      </form>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </section>

      {/* --- 03. TEAM SECTION --- */}
      <section className="py-10 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none mb-6">
              THE <span className="text-secondary italic">SCIENTIFIC</span>{" "}
              <br /> COUNCIL.
            </h2>
            <p className="text-black/40 font-black uppercase tracking-widest text-xs">
              Direct access to domain experts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[450px] rounded-[3.5rem] overflow-hidden mb-8 border border-black/5 shadow-lg">
                  <Image
                    src={member.image}
                    fill
                    className="object-cover brightness-90 group-hover:brightness-110 transition-all duration-700"
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                    <p className="text-white/70 text-sm font-medium leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex gap-4 mt-6">
                      <Linkedin className="text-secondary cursor-pointer hover:scale-125 transition-transform" />
                      <Twitter className="text-white cursor-pointer hover:scale-125 transition-transform" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter group-hover:text-secondary transition-colors">
                  {member.name}
                </h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mt-1">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 04. SOCIAL FOOTER ACCENT --- */}
      <section className="py-10 border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12">
          {[
            {
              name: "LinkedIn",
              color: "text-[#0077B5]",
              shadow: "hover:drop-shadow-[0_0_8px_rgba(0,119,181,0.4)]",
            },
            {
              name: "Twitter",
              color: "text-[#1DA1F2]",
              shadow: "hover:drop-shadow-[0_0_8px_rgba(29,161,242,0.4)]",
            },
            {
              name: "Instagram",
              color: "text-[#E4405F]",
              shadow: "hover:drop-shadow-[0_0_8px_rgba(228,64,95,0.4)]",
            },
            {
              name: "Facebook",
              color: "text-[#1877F2]",
              shadow: "hover:drop-shadow-[0_0_8px_rgba(24,119,242,0.4)]",
            },
            {
              name: "WhatsApp",
              color: "text-[#25D366]",
              shadow: "hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.4)]",
            },
          ].map((social) => (
            <button
              key={social.name}
              className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-300 ease-in-out ${social.color} ${social.shadow} hover:scale-110`}
            >
              {social.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
