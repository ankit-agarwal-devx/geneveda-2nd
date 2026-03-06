import React from 'react';
import Link from 'next/link';

const AutomationHero = () => {
  return (
    <Link href="/study-abroad" className="block cursor-pointer">
    <section className="relative min-h-[600px] w-full overflow-hidden bg-sky-950 text-white transition-transform duration-300 hover:scale-[1.01]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=2070"
          alt="Students exploring a global city for study abroad"
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-950/10 via-sky-900/25 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Column: Headline */}
          <div className="flex flex-col justify-start">
            <span className="mb-4 inline-block w-fit bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-sky-950">
              Study Abroad
            </span>
            <h1 className="max-w-md text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Your global degree journey starts here
            </h1>
          </div>

          {/* Right Column: Features */}
          <div className="flex flex-col space-y-12 lg:pt-4">
            
            {/* Feature 1 */}
            <div className="group flex gap-4">
              <div className="mt-1 h-5 w-5 flex-shrink-0 border border-amber-300/60 p-1 group-hover:border-amber-300">
                 <div className="h-full w-full bg-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-sky-50">Discover the right universities</h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-100/85">
                  Get personalized shortlists based on your course interests, budget,
                  preferred country, and career goals.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group flex gap-4">
              <div className="mt-1 h-5 w-5 flex-shrink-0 border border-amber-300/60 p-1 group-hover:border-amber-300">
                 <div className="h-full w-full bg-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-sky-50">End-to-end application support</h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-100/85">
                  From SOP guidance and document prep to admission essays, stay on track
                  with expert-led support at every step.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group flex gap-4">
              <div className="mt-1 h-5 w-5 flex-shrink-0 border border-amber-300/60 p-1 group-hover:border-amber-300">
                 <div className="h-full w-full bg-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-sky-50">Visa and pre-departure readiness</h3>
                <p className="mt-2 text-sm leading-relaxed text-sky-100/85">
                  Prepare confidently with visa filing checklists, interview prep, and
                  pre-arrival guidance for housing, travel, and campus life.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </Link>
  );
};

export default AutomationHero;
