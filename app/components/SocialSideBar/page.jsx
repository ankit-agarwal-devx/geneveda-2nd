"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaChevronUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { id: 1, label: "Facebook", icon: <FaFacebookF />, href: "#", brandColor: "#1877F2", permanent: true },
  { id: 3, label: "X", icon: <FaXTwitter />, href: "#", brandColor: "#000000", permanent: false },
  { id: 4, label: "Instagram", icon: <FaInstagram />, href: "#", brandColor: "#E4405F", permanent: false },
  { id: 5, label: "LinkedIn", icon: <FaLinkedinIn />, href: "#", brandColor: "#0A66C2", permanent: false },
];

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const permanentLinks = socialLinks.filter(link => link.permanent);
  const hiddenLinks = socialLinks.filter(link => !link.permanent);

  return (
    <div className="fixed bottom-6 right-2 md:right-4 z-[9999]">
      {/* THE MAIN CONTAINER BOX */}
      <div className="bg-white/80 backdrop-blur-lg border border-zinc-200 p-1.5 rounded-[2.5rem] shadow-2xl flex flex-col items-center w-14 gap-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "bg-black text-white" : "bg-zinc-100 text-black hover:bg-zinc-200"
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <FaChevronUp size={16} />
          </motion.div>
        </button>
        {/* --- Hidden Buttons (Slide & Stagger) --- */}
        <div className="flex flex-col gap-1.5">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex flex-col gap-1.5 pb-1 overflow-visible"
              >
                {hiddenLinks.map((social) => (
                  <SocialButton key={social.id} social={social} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- Permanent Buttons --- */}
        <div className="flex flex-col gap-1.5">
          {permanentLinks.map((social) => (
            <SocialButton key={social.id} social={social} />
          ))}
        </div>
      </div>
      <div className="mt-2 relative flex justify-center items-center">
  {/* Animated green background */}
  <div className="absolute w-16 h-16 rounded-full bg-green-500 opacity-30 animate-ping"></div>

  <a
    href="https://wa.me/yournumber"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: "#25D366" }}
    className="group relative flex items-center justify-center w-13 h-13 bg-white rounded-full transition-all duration-200 hover:scale-105 active:scale-90 shadow-sm border border-zinc-100 z-10"
  >
    <FaWhatsapp size={28} />

    <span className="absolute right-[130%] px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-lg opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-xl border border-zinc-800">
      Chat With Us
      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-black rotate-45 border-r border-t border-zinc-800" />
    </span>
  </a>
</div>

    </div>
  );
};

// Smaller, cleaner button component
const SocialButton = ({ social }) => (
  <a
    href={social.href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-11 h-11 bg-white rounded-full transition-all duration-200 hover:scale-105 active:scale-90 shadow-sm border border-zinc-100"
  >
    <span style={{ color: social.brandColor }} className="text-lg">
      {social.icon}
    </span>
    
    {/* Tooltip on the left */}
    <span className="absolute right-[130%] px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-lg opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-xl border border-zinc-800">
      {social.label}
      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-black rotate-45 border-r border-t border-zinc-800" />
    </span>
  </a>
);

export default SocialSidebar;