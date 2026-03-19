"use client";

import { useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/common";
import { useHeroAnimations } from "@/hooks/use-hero-animations";
import { useCanPhysics } from "@/hooks/use-can-physics";
import gsap from "gsap";

// ── Pre-computed floating particle positions (reduced count) ─────
const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  size: 5 + (i % 5) * 3,
  x: (Math.sin(i * 7.3) * 0.5 + 0.5) * 100,
  y: (Math.cos(i * 11.7) * 0.5 + 0.5) * 100,
  dur: 4 + (i % 4) * 1.5,
  delay: i * 0.25,
  opacity: 0.15 + (i % 3) * 0.1,
}));

const POUR_PHRASES = [
  "Better choices made easy",
  "All the flavour, None of the compromise",
  "Cheers",
];

export function HeroCanSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canWrapRef = useRef<HTMLDivElement>(null);
  const canFloatRef = useRef<HTMLDivElement>(null);
  const canImgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const glowARef = useRef<HTMLDivElement>(null);
  const glowBRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const phraseIndexRef = useRef(0);
  const pourTlRef = useRef<gsap.core.Timeline | null>(null);
  const pourElRef = useRef<HTMLDivElement | null>(null);

  const handleCanLand = useCallback(() => {
    const canEl = canWrapRef.current;
    if (!canEl) return;

    // Cleanup previous pour
    pourTlRef.current?.kill();
    pourElRef.current?.remove();

    const canRect = canEl.getBoundingClientRect();
    const pourX = canRect.left + canRect.width / 2;
    const pourY = canRect.top;

    // Pick next phrase
    const phrase = POUR_PHRASES[phraseIndexRef.current % POUR_PHRASES.length];
    phraseIndexRef.current++;

    // Create wrapper for final text layout
    const wrapper = document.createElement("div");
    Object.assign(wrapper.style, {
      position: "fixed",
      left: "50%",
      top: `${Math.max(40, Math.min(pourY - 100, window.innerHeight * 0.5))}px`,
      zIndex: "10000",
      pointerEvents: "none",
      display: "flex",
      whiteSpace: "nowrap",
    });
    gsap.set(wrapper, { xPercent: -50 });

    // Create character spans
    const chars: HTMLSpanElement[] = [];
    for (const ch of phrase) {
      const span = document.createElement("span");
      span.textContent = ch === " " ? "\u00A0" : ch;
      Object.assign(span.style, {
        fontSize: "clamp(18px, 3vw, 32px)",
        fontWeight: "800",
        color: "white",
        textShadow:
          "0 0 20px rgba(117,211,255,0.6), 0 0 40px rgba(147,51,234,0.3)",
        display: "inline-block",
        willChange: "transform, opacity",
      });
      wrapper.appendChild(span);
      chars.push(span);
    }

    document.body.appendChild(wrapper);
    pourElRef.current = wrapper;

    // Measure final (natural) positions
    const finals = chars.map((s) => {
      const r = s.getBoundingClientRect();
      return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    });

    // Set initial: all chars at can mouth, invisible
    chars.forEach((span, i) => {
      gsap.set(span, {
        x: pourX - finals[i].x,
        y: pourY - finals[i].y,
        scale: 0,
        opacity: 0,
      });
    });

    const tl = gsap.timeline();
    pourTlRef.current = tl;

    // Phase 1: Scatter from can mouth (pour effect)
    chars.forEach((span, i) => {
      const angle = -Math.PI * 0.5 + (Math.random() - 0.5) * Math.PI * 1.2;
      const dist = 80 + Math.random() * 180;
      const scatterX = pourX + Math.cos(angle) * dist - finals[i].x;
      const scatterY = pourY + Math.sin(angle) * dist - finals[i].y;

      tl.to(
        span,
        {
          x: scatterX,
          y: scatterY,
          rotation: (Math.random() - 0.5) * 360,
          scale: 0.5 + Math.random() * 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        },
        i * 0.02,
      );
    });

    // Phase 2: Rearrange into readable text at 2s
    tl.to(
      chars,
      {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        stagger: { each: 0.02, from: "center" },
        ease: "back.out(1.4)",
      },
      2,
    );

    // Phase 3: Fade out after 3s display
    tl.to(
      wrapper,
      {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          wrapper.remove();
          if (pourElRef.current === wrapper) pourElRef.current = null;
        },
      },
      "+=3",
    );
  }, []);

  useEffect(() => {
    return () => {
      pourTlRef.current?.kill();
      pourElRef.current?.remove();
    };
  }, []);

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
    onLand: handleCanLand,
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
          src="/homePage.png"
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
              <Button className="rounded-full px-10 py-4 text-base font-bold shadow-[6px_6px_0_0_rgba(117,211,255,0.4)] transition-shadow duration-300 hover:shadow-[0_0_50px_rgba(117,211,255,0.4)]">
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
