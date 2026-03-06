import React from 'react';
import { Monitor, GraduationCap, Users, Heart } from 'lucide-react';

const stats = [
  { label: "Online Courses", value: "100+", icon: <Monitor />, themeColor: "var(--color-secondary)" },
  { label: "Student Enrolled", value: "600+", icon: <GraduationCap />, themeColor: "var(--color-secondary)" },
  { label: "Expert Teachers", value: "50+", icon: <Users />, themeColor: "var(--color-secondary)" },
  { label: "Positive Feedback", value: "99.9%", icon: <Heart />, themeColor: "var(--color-secondary)" },
];

const StatSection = () => {
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative group p-4">
              
              {/* Layer 1: The Colorful Organic Blob (matches the image style) */}
              <div 
                className="absolute inset-0 opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-full"
                style={{ backgroundColor: `rgb(${stat.themeColor})`, transform: 'scale(1.2) rotate(10deg)' }}
              ></div>

              {/* Layer 2: The Main White Card */}
              <div className="relative bg-white p-10 rounded-[2.5rem] transition-all duration-500 
                border border-slate-100
                shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] 
                group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
                group-hover:-translate-y-3
                flex flex-col items-center text-center overflow-hidden"
              >
                {/* Layer 3: Subtle Colorful Corner Accent */}
                <div 
                  className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-10 rounded-full"
                  style={{ backgroundColor: `rgb(${stat.themeColor})` }}
                ></div>

                {/* Layer 4: Icon with custom colored background */}
                <div 
                  className="w-16 h-16 mb-8 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg]"
                  style={{ backgroundColor: `rgba(${stat.themeColor}, 0.1)`, color: `rgb(${stat.themeColor})` }}
                >
                  {React.cloneElement(stat.icon, { size: 28, strokeWidth: 2 })}
                </div>

                {/* Layer 5: Typography */}
                <h3 className="text-5xl font-black text-black mb-2 tracking-tighter">
                  {stat.value}
                </h3>
                
                <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">
                  {stat.label}
                </p>

                {/* Hover Line Accent */}
                <div 
                  className="mt-6 w-0 h-1.5 rounded-full transition-all duration-500 group-hover:w-12"
                  style={{ backgroundColor: `rgb(${stat.themeColor})` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;