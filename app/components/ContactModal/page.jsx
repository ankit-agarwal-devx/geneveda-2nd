"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Mailbox, Loader2 } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {

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
            onClose()
          } else {
            toast.error("Submission Failed", { description: result.error });
          }
        } catch (error) {
          toast.error("Network Error", { description: "Please try again later." });
        } finally {
          setLoading(false);
        }
      };

  // --- BACKGROUND SCROLL LOCK ---
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling on the body
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling
      document.body.style.overflow = "unset";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        /* FIXED WRAPPER: Covers entire screen, disables clicks on background elements */
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          
          {/* BACKDROP: The actual "click blocker" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose} // Clicking outside the modal closes it
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md cursor-default"
          />

          {/* MODAL CONTENT */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 15 }}
            className="relative bg-white w-full max-w-lg rounded-[0.5rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] overflow-hidden border border-slate-100"
            style={{
              background: "radial-gradient(circle at top left, rgba(65, 100, 165, 0.08) 0%, #ffffff 25%)",
            }}
          >
            {/* Header Area */}
            <div className="p-2 pb-0 flex flex-col items-center text-center">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-black hover:text-slate-900 hover:rotate-90 transition-all duration-300 z-50"
              >
                <X size={24} />
              </button>

              <div className="w-14 h-14 rounded-2xl blueShade flex items-center justify-center mb-4 shadow-lg shadow-blue-900/20">
                 <Mailbox size={28} className="text-blueShade" />
              </div>

              <h2 className="text-xl font-black text-blueShade tracking-tighter">
                Quick Enquiry
              </h2>
              <p className="text-slate-500 text-sm mt-2 font-medium">
                Submit your requirements and our experts will reach out.
              </p>
            </div>

            {/* Form Area */}
            <form className="p-8 pt-6 space-y-2" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
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
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-800 focus:bg-white focus:border-secondary outline-none transition-all text-sm font-semibold placeholder:text-slate-700" 
                  placeholder="Full Name" 
                />
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
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-800 focus:bg-white focus:border-secondary outline-none transition-all text-sm font-semibold placeholder:text-slate-700" 
                  placeholder="Email Address" 
                />
              </div>

              <div className="grid">
                <input 
                  type="text" 
                   value={formData.contact_number}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                contact_number: e.target.value,
                              })
                            }
                  className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-800 focus:bg-white focus:border-secondary outline-none transition-all text-sm font-semibold placeholder:text-slate-700" 
                  placeholder="Contact Number" 
                />
              </div>

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
                className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-800 focus:bg-white focus:border-secondary outline-none transition-all text-sm font-semibold text-slate-700 appearance-none">
                  <option disabled selected>Select Service</option>
                  <option>Bioinformatics</option>
                  <option>Wet Lab Services</option>
                  <option>Data Analysis</option>
                  <option>Scientific Writing</option>
                  <option>Other</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-800">
                   <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1L5 5L9 1" /></svg>
                </div>
              </div>

              <textarea 
                rows="3" 
                value={formData.description}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                description: e.target.value,
                              })
                            }
                className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-800 focus:bg-white focus:border-secondary outline-none transition-all text-sm font-semibold placeholder:text-slate-700 resize-none" 
                placeholder="How can we assist your research?"
              ></textarea>

              <div className="flex justify-center w-full pt-1">
                <button
                  type="submit"
        disabled={loading}
                  className="relative px-10 rounded-xl py-3 font-bold uppercase tracking-wider overflow-hidden transition-all duration-500 group cursor-pointer shadow-lg w-full md:w-auto z-10 bg-blueShade"
                  style={{
                    borderColor: "rgb(65, 100, 165)",
                    borderWidth: "2px",
                    borderStyle: "solid",
                  }}
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center justify-center gap-3">
                       {loading ? <Loader2 className="animate-spin" size={18} /> : 
                       <>
                    Send Enquiry{" "}
                    <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </>}
                  </span>
                </button>
              </div>
            </form>

            {/* Bottom Footer Decor */}
            <div className="h-1.5 w-full flex">
              <div className="w-1/3 h-full blueShade" />
              <div className="w-1/3 h-full bg-slate-100" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;