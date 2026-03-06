"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Database,
  Cookie,
  UserCheck,
  Globe2,
  Mail,
  FileText,
  Clock3,
  RefreshCcw,
} from "lucide-react";

const policySections = [
  {
    id: "1",
    title: "Information We Collect",
    icon: <Database size={20} />,
    content: [
      "We collect information you provide directly when you contact us, submit forms, request services, subscribe to updates, or communicate with our support team. This may include your full name, institutional affiliation, phone number, email address, project details, and any files or documents you choose to share.",
      "We also collect operational and technical data automatically when you use our website. This may include your IP address, browser type, device information, referring pages, pages visited, interaction timing, and diagnostic logs used for system stability, performance analysis, and security monitoring.",
      "For research or service discussions, we may receive scientific metadata, non-identifiable datasets, and project scope information. Unless explicitly required and legally permitted, we avoid collecting sensitive personal data and request that users do not upload unnecessary confidential information through public forms.",
    ],
  },
  {
    id: "2",
    title: "How We Use Your Information",
    icon: <UserCheck size={20} />,
    content: [
      "We use collected data to respond to inquiries, provide requested service information, prepare technical proposals, manage project onboarding, deliver reports, and maintain clear communication throughout each engagement lifecycle.",
      "Information is used for operational purposes such as account administration, customer support, analytics, fraud prevention, compliance checks, and quality assurance. We also use data to improve website navigation, optimize content relevance, and refine user experience across devices.",
      "When permitted, we may use contact details for updates about new services, workshops, and educational programs. You can opt out of promotional communication at any time through the unsubscribe instructions included in our messages.",
    ],
  },
  {
    id: "3",
    title: "Legal Basis and Consent",
    icon: <FileText size={20} />,
    content: [
      "Depending on your location and applicable law, our processing is based on one or more legal grounds: your consent, contractual necessity, legitimate business interests, and legal or regulatory obligations.",
      "Where consent is required, it is obtained through clear user actions such as form submission, acceptance prompts, or communication preference selection. You may withdraw consent for future processing at any time without affecting lawful processing already completed.",
      "For institutional collaborations and research projects, additional agreements such as NDAs, data processing clauses, or custom contractual terms may govern specific data handling responsibilities and confidentiality commitments.",
    ],
  },
  {
    id: "4",
    title: "Cookies and Tracking Technologies",
    icon: <Cookie size={20} />,
    content: [
      "We use cookies and related technologies to enable core functionality, remember preferences, measure engagement, and understand website usage patterns. Essential cookies are required for stable operation and cannot be disabled through standard preference toggles.",
      "Analytical cookies help us evaluate page performance, traffic behavior, and content usefulness. Marketing or personalization cookies, if introduced, will be managed through visible consent controls where legally required.",
      "You can manage cookies through your browser settings, including deleting stored cookies or blocking future storage. Disabling certain cookies may impact functionality, page speed optimization, or user convenience features.",
    ],
  },
  {
    id: "5",
    title: "Data Sharing and Disclosure",
    icon: <Globe2 size={20} />,
    content: [
      "We do not sell personal information. We may share limited data with trusted service providers that support hosting, analytics, communication, customer support, and infrastructure security, strictly under confidentiality and processing controls.",
      "Data may be disclosed when required by applicable law, judicial order, governmental request, or to protect legal rights, user safety, and platform integrity. Such disclosures are limited to what is reasonably necessary.",
      "In merger, acquisition, restructuring, or asset transfer scenarios, relevant data may be transferred as part of business continuity, subject to legal safeguards and notice requirements where applicable.",
    ],
  },
  {
    id: "6",
    title: "Data Security Measures",
    icon: <Lock size={20} />,
    content: [
      "We implement reasonable technical and organizational safeguards, including controlled access, transport security, authentication controls, role-based permissions, and ongoing monitoring to reduce risk of unauthorized access, disclosure, alteration, or destruction.",
      "No online system can guarantee absolute security. Users are responsible for safeguarding account credentials, avoiding insecure networks, and sharing data through approved channels. We recommend limiting sensitive data submission to explicitly requested material only.",
      "If a security incident affects personal information, we follow internal response protocols and applicable breach notification obligations, including timely communication where required by law.",
    ],
  },
  {
    id: "7",
    title: "Data Retention",
    icon: <Clock3 size={20} />,
    content: [
      "We retain personal information only for as long as needed to fulfill service delivery, support business operations, satisfy legal obligations, resolve disputes, and enforce agreements.",
      "Retention periods vary by data category, relationship type, and regulatory requirements. When retention is no longer necessary, data is deleted, anonymized, or securely archived according to our internal governance procedures.",
      "Project-specific scientific data handling and retention may be governed by separate contractual terms agreed with institutions, laboratories, or partner organizations.",
    ],
  },
  {
    id: "8",
    title: "Your Privacy Rights",
    icon: <ShieldCheck size={20} />,
    content: [
      "Subject to applicable law, you may have rights to request access, correction, deletion, portability, processing restriction, or objection to specific processing activities. You may also request clarification on how your information is used.",
      "To submit a privacy request, contact us using the details listed below with adequate verification information. We will respond within commercially reasonable timelines and in accordance with legal requirements.",
      "If you believe your rights were not handled appropriately, you may contact a relevant supervisory or legal authority in your jurisdiction.",
    ],
  },
  {
    id: "9",
    title: "Children's Privacy",
    icon: <UserCheck size={20} />,
    content: [
      "Our website and services are not directed to children under the age required by local law for independent consent. We do not knowingly collect personal data from children without authorized parental or guardian consent where required.",
      "If you believe that a child has provided personal information without proper authorization, please contact us promptly so we can review and take appropriate corrective action.",
    ],
  },
  {
    id: "10",
    title: "Policy Updates",
    icon: <RefreshCcw size={20} />,
    content: [
      "We may update this Privacy Policy from time to time to reflect legal, technical, or operational changes. Updated versions will be published on this page with a revised effective date.",
      "Where changes are material, we may provide additional notice through prominent website banners, direct communication, or account notifications as appropriate.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-headerGray min-h-screen selection:bg-secondary/30">
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-secondary font-black uppercase tracking-[0.25em] text-[10px] mb-5">
              Legal and Compliance
            </p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">
              Privacy <span className="text-secondary italic">Policy</span>
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
              This Privacy Policy explains how GeneVeda Biosciences collects,
              uses, stores, and protects information when you use our website,
              contact our team, or engage with our scientific services and
              programs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative h-[420px] rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl"
          >
            <Image
              src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Data privacy and cybersecurity concept"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Confidentiality First",
              desc: "Strict handling standards for project and communication data.",
              icon: <ShieldCheck size={22} />,
            },
            {
              title: "Security Controls",
              desc: "Layered safeguards for access, transport, and storage protection.",
              icon: <Lock size={22} />,
            },
            {
              title: "Transparent Practices",
              desc: "Clear disclosure of collection, usage, and user rights.",
              icon: <FileText size={22} />,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-slate-200 p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-black text-secondary flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {policySections.map((section, index) => (
            <motion.article
              key={section.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.03 }}
              className="bg-white border border-slate-200 rounded-2xl p-7 md:p-10"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-headerGray text-secondary flex items-center justify-center">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-black tracking-tight">
                  {section.id}. {section.title}
                </h2>
              </div>
              <div className="space-y-4">
                {section.content.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-slate-600 leading-relaxed text-sm md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-8 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200">
            <Image
              src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Digital security lock"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200">
            <Image
              src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team discussing data governance"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden border border-slate-200">
            <Image
              src="https://images.pexels.com/photos/5380656/pexels-photo-5380656.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Privacy and compliance paperwork"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

