"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  AlertTriangle,
  Scale,
  Ban,
  ClipboardCheck,
  CreditCard,
  Gavel,
  RefreshCcw,
  Mail,
  Phone,
} from "lucide-react";

const termsSections = [
  {
    id: "1",
    title: "Acceptance of Terms",
    icon: <ClipboardCheck size={20} />,
    body: [
      "By accessing or using the GeneVeda Biosciences website, consulting services, training programs, reports, communications, or related digital resources, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.",
      "If you do not agree with any part of these terms, you should discontinue use of our website and services. Continued use after policy or terms updates constitutes acceptance of the revised version.",
      "These terms apply to all visitors, clients, institutions, collaborators, trainees, and any individuals interacting with our digital platforms or service channels.",
    ],
  },
  {
    id: "2",
    title: "Scope of Services",
    icon: <FileText size={20} />,
    body: [
      "GeneVeda Biosciences provides scientific and technical services including, but not limited to, sequencing support, data analysis, bioinformatics workflows, scientific writing support, workshops, and professional development programs.",
      "Service descriptions presented on our website are informational and may be updated periodically. Specific deliverables, timelines, technical assumptions, and pricing are governed by project proposals, statements of work, or written agreements.",
      "Any scientific interpretation provided by us is dependent on data quality, project scope, and available evidence at the time of analysis.",
    ],
  },
  {
    id: "3",
    title: "User Responsibilities",
    icon: <Shield size={20} />,
    body: [
      "Users must provide accurate and complete information required for project discussion, onboarding, and communication. You are responsible for ensuring that submitted data and files are lawful, authorized, and relevant to the requested service.",
      "You agree not to misuse the platform, attempt unauthorized access, upload malicious content, violate applicable regulations, or interfere with service infrastructure.",
      "You are responsible for maintaining confidentiality of any credentials, accounts, or access links associated with your use of our services.",
    ],
  },
  {
    id: "4",
    title: "Scientific and Educational Disclaimer",
    icon: <AlertTriangle size={20} />,
    body: [
      "Our content, analyses, and reports are intended for research, education, and professional support purposes unless explicitly stated otherwise in a formal regulated setting.",
      "Our services do not replace independent expert judgment, institutional review obligations, medical diagnosis, legal advice, or regulatory approval pathways.",
      "You are solely responsible for how outputs are interpreted, cited, or implemented in downstream decisions, publications, or operational workflows.",
    ],
  },
  {
    id: "5",
    title: "Fees, Billing, and Payment Terms",
    icon: <CreditCard size={20} />,
    body: [
      "Pricing is communicated through proposals, quotations, or contracts. Payment milestones, mode of payment, taxes, and due dates are defined per engagement and must be honored as agreed.",
      "Delays in payment may result in paused work, delayed delivery, or additional late fees where contractually specified.",
      "Unless otherwise agreed in writing, fees paid for completed work, consumed resources, or initiated milestones are non-refundable.",
    ],
  },
  {
    id: "6",
    title: "Intellectual Property",
    icon: <Scale size={20} />,
    body: [
      "All website text, design, structure, branding elements, internal templates, and proprietary methods remain the intellectual property of GeneVeda Biosciences unless otherwise stated.",
      "Client-specific deliverables may carry usage rights as defined in project agreements. Reproduction, redistribution, resale, or derivative use beyond agreed scope requires prior written permission.",
      "Third-party tools, datasets, APIs, or references remain subject to their own licensing and terms.",
    ],
  },
  {
    id: "7",
    title: "Confidentiality and Data Handling",
    icon: <Shield size={20} />,
    body: [
      "We apply commercially reasonable safeguards to protect project-related information and communications. Additional confidentiality terms may be established through NDAs or contractual clauses.",
      "You agree not to disclose confidential material exchanged during projects except where legally required or expressly permitted in writing.",
      "Data retention, archival, and deletion practices may vary by project type, legal requirement, and mutually agreed scope.",
    ],
  },
  {
    id: "8",
    title: "Prohibited Use",
    icon: <Ban size={20} />,
    body: [
      "You may not use our website or services for unlawful activities, unauthorized surveillance, harmful biological misuse, fraudulent conduct, or infringement of third-party rights.",
      "Any attempt to reverse engineer restricted systems, abuse platform vulnerabilities, or impersonate another person or organization is strictly prohibited.",
      "We reserve the right to suspend access, reject service requests, or report misuse to relevant authorities as required by law.",
    ],
  },
  {
    id: "9",
    title: "Limitation of Liability",
    icon: <Gavel size={20} />,
    body: [
      "To the maximum extent permitted by law, GeneVeda Biosciences is not liable for indirect, incidental, consequential, or special damages arising from use or inability to use the website, services, reports, or recommendations.",
      "We do not guarantee uninterrupted operation, error-free results, or universal suitability for every scientific use case, especially where external dependencies or user-provided data limitations exist.",
      "Our aggregate liability, where legally enforceable, is limited to the amount paid for the relevant service engagement giving rise to the claim.",
    ],
  },
  {
    id: "10",
    title: "Termination and Suspension",
    icon: <AlertTriangle size={20} />,
    body: [
      "We may suspend or terminate access to our website or services for breach of these terms, non-payment, misuse, legal non-compliance, or security concerns.",
      "Upon termination, obligations related to confidentiality, accrued payment dues, and intellectual property restrictions will continue as applicable.",
      "Either party may terminate project engagement under contract-defined conditions, notice requirements, and settlement terms.",
    ],
  },
  {
    id: "11",
    title: "Governing Law and Dispute Resolution",
    icon: <Scale size={20} />,
    body: [
      "These Terms and Conditions are governed by applicable laws of the relevant jurisdiction defined in project agreements or applicable local legal framework.",
      "Any dispute should first be addressed through good-faith discussion. If unresolved, disputes may proceed through arbitration, mediation, or competent courts, as applicable.",
      "Users agree to cooperate in procedural steps required for fair and timely dispute resolution.",
    ],
  },
  {
    id: "12",
    title: "Updates to These Terms",
    icon: <RefreshCcw size={20} />,
    body: [
      "We may revise these Terms and Conditions to reflect legal, technical, or operational changes. Updated versions will be published on this page with an effective date.",
      "Material updates may also be communicated through website notice banners, communication channels, or account updates where appropriate.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  const sectionIconColors = [
    "text-sky-600",
    "text-emerald-600",
    "text-violet-600",
    "text-amber-600",
    "text-rose-600",
    "text-cyan-600",
  ];

  return (
    <div className="min-h-screen bg-white text-headerGray selection:bg-secondary/30">
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-6">
              <FileText size={14} className="text-secondary" />
              <span className="text-[10px] uppercase tracking-widest font-black text-slate-700">
                Legal Framework
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">
              Terms &{" "}
              <span className="text-secondary italic">
                Conditions
              </span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
              These Terms and Conditions define the rules, rights, and
              responsibilities that govern your use of GeneVeda Biosciences
              website, services, and communications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative h-[420px] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl"
          >
            <Image
              src="https://images.pexels.com/photos/31786661/pexels-photo-31786661.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Indian professionals in office discussion"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Clear Obligations",
              desc: "Understand user duties, legal limits, and fair usage rules.",
              icon: <ClipboardCheck size={22} />,
              iconColor: "text-sky-600",
            },
            {
              title: "Risk Protection",
              desc: "Defined limitations and safeguards for both parties.",
              icon: <Shield size={22} />,
              iconColor: "text-emerald-600",
            },
            {
              title: "Legal Transparency",
              desc: "Plain-language terms with versioned updates and contacts.",
              icon: <Scale size={22} />,
              iconColor: "text-violet-600",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-4 ${item.iconColor}`}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-2">{item.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200">
            <Image
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Legal agreement discussion"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200">
            <Image
              src="https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Compliance and policy reading"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200">
            <Image
              src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Business contract signing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {termsSections.map((section, idx) => (
            <motion.article
              key={section.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 md:p-10 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center ${
                    sectionIconColors[idx % sectionIconColors.length]
                  }`}
                >
                  {section.icon}
                </div>
                <h2 className="text-2xl font-black tracking-tight">
                  {section.id}. {section.title}
                </h2>
              </div>
              <div className="space-y-4">
                {section.body.map((item) => (
                  <p
                    key={item.slice(0, 45)}
                    className="text-slate-600 text-sm md:text-base leading-relaxed"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
