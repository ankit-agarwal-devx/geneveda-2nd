"use client";
import React, { useEffect, useState } from "react";

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });

      // Create 2-3 tiny glitter particles per move for density
      const newParticles = Array.from({ length: 2 }).map(() => ({
        id: Math.random(),
        x: clientX,
        y: clientY,
        // Randomize spread direction and distance
        tx: (Math.random() - 0.5) * 100, 
        ty: (Math.random() - 0.5) * 100,
        size: Math.random() * 3 + 1, // Tiny glitter size
        duration: Math.random() * 0.5 + 0.5, // 0.5s to 1s
      }));

      setParticles((prev) => [...prev.slice(-30), ...newParticles]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Central Gradient Glow (The "Emitter" Core) */}
      <div
        className="absolute w-8 h-8 rounded-full bg-secondary mix-blend-screen"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          background: "radial-gradient(circle, rgba(254, 250, 224, 1) 0%, rgba(75, 175, 79, 0.4) 40%, transparent 80%)",
          filter: "drop-shadow(0 0 10px rgb(75, 175, 79))",
        }}
      />

      {/* Glitter Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-tertiary shadow-[0_0_5px_#fff]"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            "--tx": `${p.tx}px`,
            "--ty": `${p.ty}px`,
            animation: `glitter ${p.duration}s forwards ease-out`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes glitter {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CursorTracker;