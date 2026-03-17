"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/common";
import { useHeroAnimations } from "@/hooks/use-hero-animations";
import { useCanPhysics } from "@/hooks/use-can-physics";

// ── Pre-computed floating particle positions (reduced count) ─────
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  size: 5 + (i % 5) * 3,
  x: (Math.sin(i * 7.3) * 0.5 + 0.5) * 100,
  y: (Math.cos(i * 11.7) * 0.5 + 0.5) * 100,
  dur: 4 + (i % 4) * 1.5,
  delay: i * 0.25,
  opacity: 0.15 + (i % 3) * 0.1,
}));

export function HeroCanSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canWrapRef = useRef<HTMLDivElement>(null);
  const canFloatRef = useRef<HTMLDivElement>(null);
  const canImgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const glowARef = useRef<HTMLDivElement>(null);
  const glowBRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useHeroAnimations({
    section: sectionRef,
    canWrap: canWrapRef,
    canFloat: canFloatRef,
    canImg: canImgRef,
    text: textRef,
    glowA: glowARef,
    glowB: glowBRef,
    watermark: watermarkRef,
  });

  useCanPhysics({
    canWrap: canWrapRef,
    canFloat: canFloatRef,
    canImg: canImgRef,
  });

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-sero-dark"
    >
      {/* ── Gradient orbs (reduced blur on mobile) ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={glowARef}
          className="absolute top-1/3 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[80px] lg:h-[550px] lg:w-[550px] lg:blur-[140px]"
        />
        <div
          ref={glowBRef}
          className="absolute right-1/4 bottom-1/4 h-[250px] w-[250px] rounded-full bg-primary/10 blur-[60px] lg:h-[400px] lg:w-[400px] lg:blur-[110px]"
        />
      </div>

      {/* ── Logo watermark for depth ── */}
      <div
        ref={watermarkRef}
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-[0.04]"
      >
        <Image
          src="/logo.avif"
          alt=""
          width={800}
          height={200}
          className="w-[60vw] max-w-[900px]"
          aria-hidden
        />
      </div>

      {/* ── Floating particles ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="hero-dot absolute rounded-full bg-primary/60"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: p.opacity,
              animation: `hero-float ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-6 px-6 pt-24 pb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:pt-0 lg:pb-0">
        {/* Text */}
        <div ref={textRef} className="text-center lg:text-left">
          <h1 className="text-5xl font-black leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="hero-line block">Zero Sugar.</span>
            <span className="hero-line block text-primary">Full Flavour.</span>
          </h1>
          <p className="hero-sub mx-auto mt-5 max-w-md text-base text-white/40 md:text-lg lg:mx-0">
            All the flavour. None of the sugar.
          </p>
          <div className="hero-cta mt-8 flex justify-center lg:justify-start">
            <Link href="/collections/sodas">
              <Button className="rounded-full px-10 py-4 text-base font-bold shadow-[0_0_30px_rgba(117,211,255,0.2)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(117,211,255,0.4)]">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Can with 3D parallax */}
        <div ref={canWrapRef} className="relative">
          <div ref={canFloatRef} style={{ perspective: "1200px" }}>
            <div ref={canImgRef}>
              {/* Purple glow behind can */}
              <div className="absolute top-1/2 left-1/2 -z-10 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/20 blur-[60px] lg:h-[350px] lg:w-[350px] lg:blur-[90px]" />
              <div className="relative h-[380px] w-[240px] sm:h-[450px] sm:w-[300px] lg:h-[500px] lg:w-[400px]">
                <Image
                  src="/purple_sero_clean.png"
                  alt="Sero Soda Can"
                  fill
                  className="object-contain w-fit h-fit drop-shadow-[0_20px_50px_rgba(147,51,234,0.3)] lg:drop-shadow-[0_35px_80px_rgba(147,51,234,0.3)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
