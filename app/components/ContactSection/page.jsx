"use client";

import React, {useState} from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
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
    <section
      className="py-12 bg-zinc-600 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1717343824623-06293a62a70d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hcHxlbnwwfHwwfHx8Mg%3D%3D')",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-20 rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-[0_30px_90px_-35px_rgba(15,23,42,0.35)]"
        >
          <div className="relative bg-[linear-gradient(135deg,#f8fafc_0%,#eef2ff_100%)] p-4 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div>
                <div className="mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl leading-[0.95] tracking-tight text-slate-900 uppercase">
                    Let&apos;s Build
                    <span className="block text-blueShade">Something Great.</span>
                  </h2>
                  <p className="mt-4 text-slate-700 text-sm md:text-base max-w-xl">
                    Tell us what you need and our team will connect with you quickly.
                    Share your requirements and we&apos;ll guide you with the best-fit solution.
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-white/95 p-4 md:p-5 shadow-lg">
                  <form onSubmit={handleSubmit} className="w-full space-y-3">
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 ml-1">
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
                          className="w-full rounded-lg p-3 bg-zinc-50 border border-zinc-500 focus:bg-white focus:border-blueShade transition-all outline-none font-medium text-slate-900"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 ml-1">
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
                          className="w-full rounded-lg p-3 bg-zinc-50 border border-zinc-400 focus:bg-white focus:border-blueShade transition-all outline-none font-medium text-slate-900"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 ml-1">
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
                        className="w-full rounded-lg p-3 bg-zinc-50 border border-zinc-400 focus:bg-white focus:border-blueShade transition-all outline-none font-medium text-slate-900"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 ml-1">
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
                        className="w-full rounded-lg p-3 bg-zinc-50 border border-zinc-500 focus:bg-white focus:border-blueShade outline-none transition-all text-sm font-medium text-slate-900 appearance-none cursor-pointer">
                          <option value="" disabled>
                            Choose a Service
                          </option>
                          <option>Bioinformatics</option>
                          <option>Wet Lab Services</option>
                          <option>Data Analysis</option>
                          <option>Scientific Writing</option>
                          <option>Other</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
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
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 ml-1">
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
                        className="w-full rounded-lg p-3 bg-zinc-50 border border-zinc-400 focus:bg-white focus:border-blueShade transition-all outline-none font-medium text-slate-900 resize-none"
                      />
                    </div>

                    <button
                    type="submit"
          disabled={loading}
                    className="group relative mt-2 w-full overflow-hidden rounded-lg bg-blueShade px-6 py-3 transition-all duration-300 shadow-md hover:shadow-xl">
                      <span className="relative z-10 flex items-center justify-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-white">
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

              <div className="relative h-full min-h-[360px] lg:min-h-[540px]">
                <div className="absolute inset-0 rounded-2xl bg-slate-900/5" />
                <div className="relative h-[62%] w-full rounded-2xl overflow-hidden border border-zinc-300 shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1400"
                    alt="Consultation meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 right-0 w-[88%] h-[42%] rounded-2xl overflow-hidden border border-zinc-300 shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1400"
                    alt="Professional team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
