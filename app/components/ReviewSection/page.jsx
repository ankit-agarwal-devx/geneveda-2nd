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
              <div
                key={`${review.id}-${index}`}
                className="min-w-[340px] max-w-[340px]"
              >
                <div className="group relative p-10 bg-gray-50 rounded-[3rem] border border-transparent hover:border-black hover:bg-white transition-all duration-500 flex flex-col h-full">
                  {/* Quote */}
                  <div className="absolute top-8 right-10 text-slate-200 group-hover:text-secondary/20 transition-colors">
                    <Quote size={48} fill="currentColor" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-secondary fill-secondary"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-600 font-medium leading-relaxed mb-8 flex-grow">
                    &quot;{review.content}&quot;
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-black text-secondary flex items-center justify-center">
                      {review.avatarUrl ? (
                        <Image
                          src={review.avatarUrl}
                          alt={review.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      ) : (
                        <User size={20} />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-black text-sm uppercase tracking-wider">
                        {review.name}
                      </h4>
                      {/* <p className="text-xs text-slate-400 font-bold">
                        {review.role}
                      </p> */}
                    </div>
                  </div>

                  {/* Corner */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-6 h-6 border-b-2 border-r-2 border-secondary"></div>
                  </div>
                </div>
              </div>
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
