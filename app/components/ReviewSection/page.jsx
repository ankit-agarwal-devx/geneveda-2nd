"use client"

import React from "react";
import { Star, Quote, User } from "lucide-react";
import Image from "next/image";
import "./style.css";

const reviews = [
  {
    id: 1,
    name: "Dr Uzma Rahman",
    role: "Senior Researcher, Biotech Corp",
    content:
      "It was great experience for forming the base of genomics as i wasn't so much aware. Thank you Dr Kumar sir and Dr. Jyoti mam for such wonderful hands on training: Genomics in AMR Research.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Komal Kumari",
    role: "Startup Founder",
    content:
      "The session on “Genomics in AMR Research” was truly insightful and interactive. Even though this subject was completely new to me, the way Dr Kumar explained everything in such a clear and simple manner made it very easy to grasp. I sincerely appreciate the effort and guidance shared throughout the session. Heartfelt thanks to Dr Kumar and Dr Jyoti for organizing such a valuable learning experience.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1622038094167-a2e40e21df17?q=80&w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Mohini B Baile",
    role: "Ph.D. Scholar",
    content:
      "The session was very informative and engaging. Though this is a new area for me, sir's simple language and explanation made it easy to understand. Thank you so much Dr Kumar Sir and Dr Jyoti Mam for conducting this session: Genomics in AMR research.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1646979201225-00e36437d09e?q=80&w=200&h=200&fit=crop",
  },
];

const cardThemes = [
  {
    border: "border-emerald-500",
    quote: "text-emerald-100",
    glow:
      "radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.38), transparent 70%)",
    avatarBorder: "border-emerald-500",
  },
  {
    border: "border-amber-500",
    quote: "text-amber-100",
    glow:
      "radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.35), transparent 70%)",
    avatarBorder: "border-amber-500",
  },
  {
    border: "border-sky-500",
    quote: "text-sky-100",
    glow:
      "radial-gradient(ellipse at 50% 100%, rgba(14,165,233,0.35), transparent 70%)",
    avatarBorder: "border-sky-500",
  },
];

const ReviewSection = () => {
  return (
    <section
      className="py-5 bg-white relative overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, #4BAF4F 0.8px, transparent 0.8px)",
        backgroundSize: "30px 30px",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] block mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl text-headerGray tracking-tighter leading-[0.9]">
              Trusted by the <br />
              <span className="text-secondary italic">
                Scientific Community
              </span>
            </h2>
          <div className="h-0.5 w-100 bg-headerGray hidden md:block mt-2 mb-2"></div>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex gap-8 w-max animate-scroll">
            {[...reviews, ...reviews].map((review, index) => (
              (() => {
                const theme = cardThemes[index % cardThemes.length];
                return (
              <div
                key={`${review.id}-${index}`}
                className="min-w-[380px] max-w-[380px]"
              >
                <div
                  className={`group relative p-10 bg-white rounded-[2.5rem] border-2 ${theme.border} transition-all duration-500 flex flex-col h-full overflow-hidden`}
                >
                  <div
                    className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-20 blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: theme.glow }}
                  />

                  {/* Quote */}
                  <div className={`absolute top-7 right-8 ${theme.quote} transition-colors`}>
                    <Quote size={56} strokeWidth={1.7} />
                  </div>

                  {/* User Header */}
                  <div className="flex items-center gap-4 mb-7">
                    <div className={`relative w-20 h-20 rounded-2xl overflow-hidden bg-black text-secondary flex items-center justify-center border-2 ${theme.avatarBorder}`}>
                      {review.avatarUrl ? (
                        <Image
                          src={review.avatarUrl}
                          alt={review.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <User size={26} />
                      )}
                      <span className="absolute -right-1 -bottom-1 w-6 h-6 rounded-full bg-lime-500 border-[3px] border-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-800 text-[26px] leading-none">
                        {review.name}
                      </h4>
                      <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-slate-600 italic text-[18px] font-medium leading-relaxed mb-10 flex-grow">
                    &quot;{review.content}&quot;
                  </p>

                </div>
              </div>
                );
              })()
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide-left {
          animation: slide-left 45s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ReviewSection;
