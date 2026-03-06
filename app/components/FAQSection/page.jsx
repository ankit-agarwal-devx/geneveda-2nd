"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of bioinformatics data can you analyze?",
      answer:
        "We specialize in a wide range of datasets including NGS (WGS, RNA-Seq), proteomics (LC-MS/MS), and structural data for molecular docking and dynamics simulations.",
    },
    {
      question: "Do you provide certified lab reports for Wet Lab services?",
      answer:
        "Yes, all our Wet Lab services—from microbiology to food technology—follow strict quality assurance and GLP-based studies, providing publication-ready reports.",
    },
    {
      question: "Are the courses self-paced or instructor-led?",
      answer:
        "Our specialized courses, such as the NGS Masterclass, are hybrid models featuring pre-recorded expert sessions combined with live interactive doubt-clearing workshops.",
    },
    {
      question: "Can I get support for publishing my research paper?",
      answer:
        "Absolutely. Our Scientific Writing team provides end-to-end support, including journal selection, manuscript formatting, plagiarism checking, and responding to reviewer comments.",
    },
    {
      question: "How do I start a custom R&D project with GeneVeda?",
      answer:
        "You can reach out via our contact form or email. We begin with a technical consultation to understand your project scope, followed by a detailed roadmap and timeline.",
    },
  ];

  return (
    <section className="py-3 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column: Title & CTA */}
          <div className="lg:w-1/3">
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] block mb-4">
              Information
            </span>
            <h2 className="text-4xl text-headerGray tracking-tighter leading-[0.9] mb-8">
              Frequently <br />
              <span className="text-secondary italic">Asked Questions</span>
            </h2>
            <p className="text-slate-500 font-medium mb-10">
              Can&apos;t find the answer you&apos;re looking for? Reach out to our support
              team for personalized assistance.
            </p>
            <div className="w-16 h-16 rounded-3xl bg-secondary/15 border border-secondary/25 flex items-center justify-center text-secondary">
              <HelpCircle size={32} />
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group/item rounded-[2rem] transition-all duration-500 overflow-hidden ${
                  openIndex === index
                    ? "border-black bg-white shadow-xl"
                    : "border-slate-100 bg-gray-50 border-secondary/40 bg-gradient-to-r from-secondary/5 to-orange-400/5 hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="group/faq w-full px-8 py-2 flex items-center justify-between text-left transition-transform duration-300 group-hover/item:-translate-y-0.5"
                >
                  <span
                    className={`text-lg font-medium transition-all duration-300 ${
                      openIndex === index
                        ? "text-secondary"
                        : "text-black group-hover/faq:text-secondary group-hover/faq:translate-x-1"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 ml-4 p-2 rounded-full transition-all duration-500 ${
                      openIndex === index
                        ? "bg-secondary text-black rotate-180"
                        : "bg-white text-black group-hover/faq:bg-secondary/10 group-hover/faq:text-secondary group-hover/faq:scale-110"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed">
                    <div className="pt-4 border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
