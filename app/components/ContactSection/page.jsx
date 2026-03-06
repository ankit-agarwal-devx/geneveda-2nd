"use client";

import React, {useState} from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2 } from "lucide-react";
import Image from "next/image";

const ContactSection = () => {
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

  return (
    <section className="py-10 bg-white relative">
      <div className="container mx-auto px-6">
        {/* --- MASTER CARD --- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-20 bg-white rounded-[1rem] shadow-[0_50px_100px_-20px_rgba(65,100,165,0.1)] overflow-hidden"
        >
          <div className="relative min-h-screen w-full flex items-center justify-center p-4 lg:p-8 overflow-hidden">
            {/* BACKGROUND IMAGE */}
            <Image
              src="https://images.unsplash.com/photo-1584972191378-d70853fc47fc?w=1200&auto=format&fit=crop&q=80"
              alt="Google Maps Background"
              fill
              className="object-cover"
              priority
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* CENTERED FORM CONTAINER */}
            <div className="relative z-10 w-full rounded-xl max-w-2xl bg-white p-2 md:p-4 shadow-2xl flex flex-col lg:flex-row gap-0 overflow-hidden">
              <div className="w-full bg-white relative flex flex-col">
                {/* TOP HEADER */}
                <div className="flex flex-col md:flex-row items-center justify-between pb-2">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl text-headerGray tracking-tighter uppercase">
                      Send Us A <span className="text-blueShade">Message</span>
                    </h3>
                    <p className="text-slate-600 font-medium mt-1">
                      We typically respond within 2 hours.
                    </p>
                  </div>
                </div>

                {/* THE FORM */}
                <form onSubmit={handleSubmit} className="w-full space-y-2">
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <label className="text-[12px] font-black uppercase tracking-widest text-black ml-1">
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
                        className="w-full p-3 bg-slate-50 border border-slate-600 focus:bg-white focus:border-secondary transition-all outline-none font-semibold text-black"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[12px] font-black uppercase tracking-widest text-black ml-1">
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
                        className="w-full p-3 bg-slate-50 border border-slate-600 focus:bg-white focus:border-secondary transition-all outline-none font-semibold text-black"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[12px] font-black uppercase tracking-widest text-black ml-1">
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
                      className="w-full p-3 bg-slate-50 border border-slate-600 focus:bg-white focus:border-secondary transition-all outline-none font-semibold text-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[12px] font-black uppercase tracking-widest text-black ml-1">
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
                      className="w-full p-3 bg-slate-50 border border-slate-600 focus:bg-white focus:border-secondary outline-none transition-all text-sm font-semibold text-black appearance-none cursor-pointer">
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
                    <label className="text-[12px] font-black uppercase tracking-widest text-black ml-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                description: e.target.value,
                              })
                            }
                      placeholder="How can we help?"
                      className="w-full p-3 bg-slate-50 border border-slate-600 focus:bg-white focus:border-secondary transition-all outline-none font-semibold text-black resize-none"
                    />
                  </div>

                  <button
                  type="submit"
        disabled={loading}
                  className="group relative w-full overflow-hidden bg-blueShade px-6 py-3 transition-all duration-300 shadow-lg">
                    <span className="relative z-10 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.2em] text-white group-hover:text-black">
                      {loading ? <Loader2 className="animate-spin" size={18} /> :
                      <>
                      Send Message <Send size={18} />
                      </>
                      }
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
