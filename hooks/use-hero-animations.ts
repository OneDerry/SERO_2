"use client";

import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface HeroRefs {
  section: RefObject<HTMLElement | null>;
  canWrap: RefObject<HTMLDivElement | null>;
  canFloat: RefObject<HTMLDivElement | null>;
  canImg: RefObject<HTMLDivElement | null>;
  text: RefObject<HTMLDivElement | null>;
  glowA: RefObject<HTMLDivElement | null>;
  glowB: RefObject<HTMLDivElement | null>;
  watermark: RefObject<HTMLDivElement | null>;
}

export function useHeroAnimations(refs: HeroRefs) {
  useGSAP(
    () => {
      /* ── Entrance timeline ─────────────────────────────────── */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(watermarkRef(), { opacity: 0, scale: 0.85, duration: 1.2 });

      tl.from(
        canWrapRef(),
        {
          y: 80,
          opacity: 0,
          scale: 0.85,
          rotation: -8,
          duration: 1.2,
          ease: "back.out(1.4)",
        },
        "-=0.9",
      );

      tl.from(
        ".hero-line",
        { y: 40, opacity: 0, stagger: 0.1, duration: 0.6 },
        "-=0.7",
      );

      tl.from(".hero-sub", { y: 15, opacity: 0, duration: 0.45 }, "-=0.25");

      tl.from(
        ".hero-cta",
        { y: 15, opacity: 0, scale: 0.95, duration: 0.45 },
        "-=0.2",
      );

      tl.from(
        ".hero-dot",
        {
          opacity: 0,
          scale: 0,
          stagger: { each: 0.04, from: "random" },
          duration: 0.35,
        },
        "-=0.5",
      );

      /* ── Floating bob (always active) ──────────────────────── */
      gsap.to(canFloatRef(), {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ── Desktop-only: mouse parallax ──────────────────────── */
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (hover: hover)", () => {
        const canX = gsap.quickTo(canWrapRef()!, "x", {
          duration: 0.6,
          ease: "power2",
        });

        const handleMouse = (e: MouseEvent) => {
          const nx = (e.clientX / window.innerWidth - 0.5) * 2;
          const ny = (e.clientY / window.innerHeight - 0.5) * 2;

          canX(nx * 30);

          gsap.to(canImgRef(), {
            rotateY: nx * 12,
            rotateX: ny * -7,
            duration: 0.4,
            overwrite: "auto",
          });

          gsap.to(textRef(), {
            x: nx * -10,
            y: ny * -6,
            duration: 0.8,
            overwrite: "auto",
          });

          gsap.to(glowARef(), {
            x: nx * 50,
            y: ny * 35,
            duration: 1.4,
            overwrite: "auto",
          });

          gsap.to(glowBRef(), {
            x: nx * -30,
            y: ny * -25,
            duration: 1.8,
            overwrite: "auto",
          });

          gsap.to(watermarkRef(), {
            x: nx * 15,
            y: ny * 10,
            duration: 1.2,
            overwrite: "auto",
          });
        };

        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
      });

      // Helper accessors for cleaner code
      function canWrapRef() {
        return refs.canWrap.current;
      }
      function canFloatRef() {
        return refs.canFloat.current;
      }
      function canImgRef() {
        return refs.canImg.current;
      }
      function textRef() {
        return refs.text.current;
      }
      function glowARef() {
        return refs.glowA.current;
      }
      function glowBRef() {
        return refs.glowB.current;
      }
      function watermarkRef() {
        return refs.watermark.current;
      }
    },
    { scope: refs.section },
  );
}
